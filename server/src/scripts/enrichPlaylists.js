const fs = require('fs');
const path = require('path');
const { PLAYLISTS } = require('../data/playlists.js');

async function run() {
  const result = {};

  for (const [moodKey, moodData] of Object.entries(PLAYLISTS)) {
    console.log('Fetching mood:', moodKey);
    result[moodKey] = {
      tagline: moodData.tagline,
      palette: moodData.palette,
      tracks: []
    };

    for (const track of moodData.tracks) {
      const q = encodeURIComponent(`${track.title} ${track.artist}`);
      let hit = null;
      try {
        const res = await fetch(`https://itunes.apple.com/search?term=${q}&entity=song&limit=1`);
        const text = await res.text();
        const trimmed = text.trim();
        if (trimmed.startsWith('{')) {
          const data = JSON.parse(trimmed);
          if (data.results && data.results.length > 0) {
            hit = data.results[0];
          }
        }
      } catch (e) {
        console.error('Fetch error for', track.title, e.message);
      }

      const coverUrl = hit && hit.artworkUrl100
        ? hit.artworkUrl100.replace('100x100bb', '600x600bb')
        : (track.coverUrl || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80');

      const previewUrl = hit ? hit.previewUrl : (track.previewUrl || null);
      const directSongUrl = hit && hit.trackViewUrl ? hit.trackViewUrl : null;

      result[moodKey].tracks.push({
        id: track.id,
        title: track.title,
        artist: track.artist,
        duration: track.duration,
        coverUrl,
        previewUrl,
        directSongUrl,
      });

      // Polite pause
      await new Promise(r => setTimeout(r, 200));
    }
  }

  const jsContent = `/**
 * NIMBUS Curated Weather Mood Playlists
 * 8 real, well-known songs per mood+day/night variant with evocative mood taglines.
 * Includes official high-resolution album cover artwork (600x600) and playable 30s audio previews.
 */

const PLAYLISTS = ${JSON.stringify(result, null, 2)};

/**
 * Helper to build outbound search links that point directly to the song/tracks
 */
function enrichTrackWithLinks(track) {
  const query = encodeURIComponent(\`\${track.title} \${track.artist}\`);
  return {
    ...track,
    // /tracks ensures Spotify opens the exact tracks list, not user playlists
    spotifyUrl: \`https://open.spotify.com/search/\${query}/tracks\`,
    // Direct song video search
    youtubeUrl: \`https://www.youtube.com/results?search_query=\${query}+official+audio\`,
    appleMusicUrl: track.directSongUrl || \`https://music.apple.com/us/search?term=\${query}\`,
  };
}

/**
 * Retrieve curated playlist for a specific mood
 */
function getPlaylistForMood(rawMood, isDay = 1) {
  let key = rawMood;
  if (key === 'clear') {
    key = isDay ? 'clear-day' : 'clear-night';
  } else if (!PLAYLISTS[key]) {
    key = 'clear-day';
  }

  const playlist = PLAYLISTS[key] || PLAYLISTS['clear-day'];
  return {
    mood: key,
    tagline: playlist.tagline,
    palette: playlist.palette,
    tracks: playlist.tracks.map(enrichTrackWithLinks),
  };
}

module.exports = {
  PLAYLISTS,
  getPlaylistForMood,
  enrichTrackWithLinks,
};
`;

  const targetPath = path.join(__dirname, '../data/playlists.js');
  fs.writeFileSync(targetPath, jsContent);
  console.log('Successfully written enriched playlists with cover art and direct song links to', targetPath);
}

run().catch(console.error);
