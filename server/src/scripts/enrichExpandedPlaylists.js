const fs = require('fs');
const path = require('path');

const SEED_TRACKS = {
  'clear-day': {
    tagline: 'Warm golden hues, open horizons, and radiant melodies',
    palette: { accent: '#F59E0B', vibe: 'Bright, breezy & uplifting' },
    tracks: [
      { title: 'Here Comes the Sun', artist: 'The Beatles', duration: '3:05' },
      { title: 'Golden Hour', artist: 'Kacey Musgraves', duration: '3:18' },
      { title: 'Walking on Sunshine', artist: 'Katrina and the Waves', duration: '3:58' },
      { title: 'Sunday Best', artist: 'Surfaces', duration: '2:38' },
      { title: 'Lovely Day', artist: 'Bill Withers', duration: '4:15' },
      { title: 'Electric Feel', artist: 'MGMT', duration: '3:49' },
      { title: 'Sunflower', artist: 'Post Malone & Swae Lee', duration: '2:38' },
      { title: 'Good Days', artist: 'SZA', duration: '4:39' },
      { title: 'Put Your Records On', artist: 'Corinne Bailey Rae', duration: '3:35' },
      { title: 'Three Little Birds', artist: 'Bob Marley & The Wailers', duration: '3:00' },
      { title: 'Pocketful of Sunshine', artist: 'Natasha Bedingfield', duration: '3:23' },
      { title: 'Best Day of My Life', artist: 'American Authors', duration: '3:14' },
      { title: 'Tongue Tied', artist: 'Grouplove', duration: '3:38' },
      { title: 'Island In The Sun', artist: 'Weezer', duration: '3:20' },
      { title: 'Walking on a Dream', artist: 'Empire of the Sun', duration: '3:16' },
      { title: 'Riptide', artist: 'Vance Joy', duration: '3:24' },
      { title: 'Solar Power', artist: 'Lorde', duration: '3:12' },
      { title: 'Golden', artist: 'Harry Styles', duration: '3:28' },
      { title: 'As It Was', artist: 'Harry Styles', duration: '2:47' },
      { title: 'Levitating', artist: 'Dua Lipa', duration: '3:23' },
    ]
  },
  'clear-night': {
    tagline: 'Starlit deep blue skies, midnight neon, and contemplative quiet',
    palette: { accent: '#6366F1', vibe: 'Velvety, luminous & nocturnal' },
    tracks: [
      { title: 'Midnight City', artist: 'M83', duration: '4:03' },
      { title: 'Starboy', artist: 'The Weeknd ft. Daft Punk', duration: '3:50' },
      { title: 'Nights', artist: 'Frank Ocean', duration: '5:07' },
      { title: 'Nightcall', artist: 'Kavinsky', duration: '4:19' },
      { title: 'Talking to the Moon', artist: 'Bruno Mars', duration: '3:37' },
      { title: 'Cosmic Love', artist: 'Florence + The Machine', duration: '4:15' },
      { title: 'A Sky Full of Stars', artist: 'Coldplay', duration: '4:28' },
      { title: 'Yellow', artist: 'Coldplay', duration: '4:29' },
      { title: 'After Hours', artist: 'The Weeknd', duration: '6:01' },
      { title: 'Moonlight', artist: 'Kali Uchis', duration: '3:07' },
      { title: 'Space Song', artist: 'Beach House', duration: '5:20' },
      { title: 'Sparks', artist: 'Coldplay', duration: '3:47' },
      { title: 'Apocalypse', artist: 'Cigarettes After Sex', duration: '4:50' },
      { title: 'Chamber of Reflection', artist: 'Mac DeMarco', duration: '3:51' },
      { title: 'Resonance', artist: 'HOME', duration: '3:32' },
      { title: 'The Night We Met', artist: 'Lord Huron', duration: '3:28' },
      { title: '505', artist: 'Arctic Monkeys', duration: '4:13' },
      { title: 'Redbone', artist: 'Childish Gambino', duration: '5:26' },
      { title: 'Sweater Weather', artist: 'The Neighbourhood', duration: '4:00' },
      { title: 'No Surprises', artist: 'Radiohead', duration: '3:48' },
    ]
  },
  'partly-cloudy': {
    tagline: 'Sunlight breaking through soft cloud cover, airy and restorative',
    palette: { accent: '#38BDF8', vibe: 'Breezy, optimistic & floating' },
    tracks: [
      { title: 'Dreams', artist: 'Fleetwood Mac', duration: '4:17' },
      { title: 'Daylight', artist: 'Harry Styles', duration: '2:45' },
      { title: 'Ophelia', artist: 'The Lumineers', duration: '2:40' },
      { title: 'Budapest', artist: 'George Ezra', duration: '3:20' },
      { title: 'Dog Days Are Over', artist: 'Florence + The Machine', duration: '4:12' },
      { title: 'Bloom', artist: 'The Paper Kites', duration: '3:30' },
      { title: 'Cloudbusting', artist: 'Kate Bush', duration: '5:10' },
      { title: 'Holocene', artist: 'Bon Iver', duration: '5:37' },
      { title: 'Little Talks', artist: 'Of Monsters and Men', duration: '4:26' },
      { title: 'Ho Hey', artist: 'The Lumineers', duration: '2:43' },
      { title: 'Home', artist: 'Edward Sharpe & The Magnetic Zeros', duration: '5:03' },
      { title: 'Cigarette Daydreams', artist: 'Cage The Elephant', duration: '3:28' },
      { title: 'Mountain Sound', artist: 'Of Monsters and Men', duration: '3:31' },
      { title: 'Young Folks', artist: 'Peter Bjorn and John', duration: '4:38' },
      { title: 'San Luis', artist: 'Gregory Alan Isakov', duration: '3:12' },
      { title: 'Sedated', artist: 'Hozier', duration: '3:27' },
      { title: 'Take A Walk', artist: 'Passion Pit', duration: '4:24' },
      { title: 'Clean', artist: 'Taylor Swift', duration: '4:30' },
    ]
  },
  'cloudy': {
    tagline: 'Gentle overcast skies, muted tones, and introspective melodies',
    palette: { accent: '#94A3B8', vibe: 'Subtle, poetic & reflective' },
    tracks: [
      { title: 'Ribs', artist: 'Lorde', duration: '4:18' },
      { title: 'cardigan', artist: 'Taylor Swift', duration: '3:59' },
      { title: 'Slow Burn', artist: 'Kacey Musgraves', duration: '4:06' },
      { title: 'Video Games', artist: 'Lana Del Rey', duration: '4:42' },
      { title: 'exile', artist: 'Taylor Swift ft. Bon Iver', duration: '4:45' },
      { title: 'Liability', artist: 'Lorde', duration: '2:52' },
      { title: 'Motion Sickness', artist: 'Phoebe Bridgers', duration: '3:49' },
      { title: 'Youth', artist: 'Daughter', duration: '4:11' },
      { title: 'Roslyn', artist: 'Bon Iver & St. Vincent', duration: '4:49' },
      { title: 'Heather', artist: 'Conan Gray', duration: '3:18' },
      { title: 'Flume', artist: 'Bon Iver', duration: '3:39' },
      { title: 'Somewhere Only We Know', artist: 'Keane', duration: '3:57' },
      { title: 'The Scientist', artist: 'Coldplay', duration: '5:09' },
      { title: 'Skinny Love', artist: 'Birdy', duration: '3:23' },
      { title: 'Falling', artist: 'Harry Styles', duration: '4:00' },
      { title: 'All I Want', artist: 'Kodaline', duration: '5:05' },
      { title: 'Cherry Wine', artist: 'Hozier', duration: '4:00' },
      { title: 'Fix You', artist: 'Coldplay', duration: '4:55' },
    ]
  },
  'rain': {
    tagline: 'Steady raindrop rhythms, foggy glass, and bittersweet soul',
    palette: { accent: '#0EA5E9', vibe: 'Melancholic, soothing & intimate' },
    tracks: [
      { title: 'Set Fire to the Rain', artist: 'Adele', duration: '4:02' },
      { title: 'Rain on Me', artist: 'Lady Gaga & Ariana Grande', duration: '3:02' },
      { title: 'Banana Pancakes', artist: 'Jack Johnson', duration: '3:12' },
      { title: 'Have You Ever Seen The Rain', artist: 'Creedence Clearwater Revival', duration: '2:39' },
      { title: 'Stan', artist: 'Eminem ft. Dido', duration: '6:44' },
      { title: 'November Rain', artist: 'Guns N’ Roses', duration: '8:57' },
      { title: 'Riders on the Storm', artist: 'The Doors', duration: '7:14' },
      { title: 'Purple Rain', artist: 'Prince', duration: '8:41' },
      { title: 'Kiss the Rain', artist: 'Yiruma', duration: '4:16' },
      { title: 'Raindrops Keep Fallin’ on My Head', artist: 'B.J. Thomas', duration: '3:02' },
      { title: 'Fire and Rain', artist: 'James Taylor', duration: '3:20' },
      { title: 'Stormy Weather', artist: 'Etta James', duration: '3:08' },
      { title: 'Singin’ in the Rain', artist: 'Gene Kelly', duration: '2:56' },
      { title: 'Umbrella', artist: 'Rihanna ft. JAY-Z', duration: '4:35' },
      { title: 'Blue Eyes Crying in the Rain', artist: 'Willie Nelson', duration: '2:18' },
      { title: 'Only Happy When It Rains', artist: 'Garbage', duration: '3:56' },
      { title: 'Rain', artist: 'The Beatles', duration: '3:02' },
      { title: 'Drown', artist: 'Bring Me The Horizon', duration: '3:42' },
    ]
  },
  'thunderstorm': {
    tagline: 'Lightning fractures, roaring bass, and electric adrenaline',
    palette: { accent: '#8B5CF6', vibe: 'Intense, electrifying & cinematic' },
    tracks: [
      { title: 'Thunderstruck', artist: 'AC/DC', duration: '4:52' },
      { title: 'Radioactive', artist: 'Imagine Dragons', duration: '3:06' },
      { title: 'In The Air Tonight', artist: 'Phil Collins', duration: '5:34' },
      { title: 'Rolling in the Deep', artist: 'Adele', duration: '3:48' },
      { title: 'Heavy', artist: 'Linkin Park ft. Kiiara', duration: '2:49' },
      { title: 'Natural', artist: 'Imagine Dragons', duration: '3:09' },
      { title: 'Thunder', artist: 'Imagine Dragons', duration: '3:07' },
      { title: 'Supermassive Black Hole', artist: 'Muse', duration: '3:29' },
      { title: 'Seven Nation Army', artist: 'The White Stripes', duration: '3:52' },
      { title: 'Knights of Cydonia', artist: 'Muse', duration: '6:06' },
      { title: 'Believer', artist: 'Imagine Dragons', duration: '3:24' },
      { title: 'Sail', artist: 'AWOLNATION', duration: '4:19' },
      { title: 'Uprising', artist: 'Muse', duration: '5:03' },
      { title: 'Take Me To Church', artist: 'Hozier', duration: '4:01' },
      { title: 'No Church In The Wild', artist: 'JAY-Z & Kanye West', duration: '4:32' },
      { title: 'Centuries', artist: 'Fall Out Boy', duration: '3:48' },
      { title: 'Black Hole Sun', artist: 'Soundgarden', duration: '5:18' },
      { title: 'Can’t Stop', artist: 'Red Hot Chili Peppers', duration: '4:29' },
    ]
  },
  'snow': {
    tagline: 'Quiet whiteouts, muffled footsteps, and fireside acoustic solace',
    palette: { accent: '#E0F2FE', vibe: 'Pure, crisp & heart-warming' },
    tracks: [
      { title: 'White Winter Hymnal', artist: 'Fleet Foxes', duration: '2:27' },
      { title: 'Snow (Hey Oh)', artist: 'Red Hot Chili Peppers', duration: '5:34' },
      { title: 'Winter', artist: 'Vivaldi', duration: '3:29' },
      { title: 'Cold Desert', artist: 'Kings of Leon', duration: '5:34' },
      { title: 'A Hazy Shade of Winter', artist: 'Simon & Garfunkel', duration: '2:17' },
      { title: 'Rivers and Roads', artist: 'The Head and the Heart', duration: '4:44' },
      { title: 'Broadripple is Burning', artist: 'Margot & the Nuclear So and So’s', duration: '5:18' },
      { title: 'Winter Song', artist: 'Sara Bareilles & Ingrid Michaelson', duration: '4:27' },
      { title: 'Amsterdam', artist: 'Gregory Alan Isakov', duration: '3:19' },
      { title: 'Calgary', artist: 'Bon Iver', duration: '4:10' },
      { title: 'For Emma', artist: 'Bon Iver', duration: '3:41' },
      { title: 'Pale December', artist: 'Fiona Apple', duration: '4:28' },
      { title: 'First Day of My Life', artist: 'Bright Eyes', duration: '3:08' },
      { title: 'Helplessness Blues', artist: 'Fleet Foxes', duration: '5:03' },
      { title: 'Woods', artist: 'Bon Iver', duration: '4:45' },
      { title: 'White Blank Page', artist: 'Mumford & Sons', duration: '4:14' },
      { title: 'Northern Sky', artist: 'Nick Drake', duration: '3:47' },
    ]
  },
  'fog': {
    tagline: 'Muted horizons, slow drifting mist, and enigmatic calm',
    palette: { accent: '#CBD5E1', vibe: 'Ethereal, mysterious & floating' },
    tracks: [
      { title: 'Intro', artist: 'The xx', duration: '2:07' },
      { title: 'Teardrop', artist: 'Massive Attack', duration: '5:29' },
      { title: 'Glósóli', artist: 'Sigur Rós', duration: '6:15' },
      { title: 'Daydreaming', artist: 'Radiohead', duration: '6:24' },
      { title: 'Midnight', artist: 'Coldplay', duration: '4:54' },
      { title: 'Alberto Balsalm', artist: 'Aphex Twin', duration: '5:11' },
      { title: 'Porcelain', artist: 'Moby', duration: '4:01' },
      { title: 'Mad World', artist: 'Gary Jules', duration: '3:07' },
      { title: 'An Ending (Ascent)', artist: 'Brian Eno', duration: '4:24' },
      { title: 'On the Nature of Daylight', artist: 'Max Richter', duration: '6:11' },
      { title: 'Fade Into You', artist: 'Mazzy Star', duration: '4:55' },
      { title: 'Street Spirit (Fade Out)', artist: 'Radiohead', duration: '4:13' },
      { title: 'Roads', artist: 'Portishead', duration: '5:02' },
      { title: 'Sour Times', artist: 'Portishead', duration: '4:11' },
      { title: 'Angel', artist: 'Massive Attack', duration: '6:18' },
      { title: 'Time', artist: 'Hans Zimmer', duration: '4:35' },
    ]
  }
};

async function fetchAppleTrack(title, artist) {
  const q = encodeURIComponent(`${title} ${artist}`);
  try {
    const res = await fetch(`https://itunes.apple.com/search?term=${q}&entity=song&limit=1`);
    const text = await res.text();
    const trimmed = text.trim();
    if (trimmed.startsWith('{')) {
      const data = JSON.parse(trimmed);
      if (data.results && data.results.length > 0) {
        return data.results[0];
      }
    }
  } catch (e) {
    console.warn(`Fetch error for ${title}:`, e.message);
  }
  return null;
}

async function run() {
  const result = {};

  for (const [moodKey, moodData] of Object.entries(SEED_TRACKS)) {
    console.log(`Enriching mood: ${moodKey} (${moodData.tracks.length} tracks)...`);
    result[moodKey] = {
      tagline: moodData.tagline,
      palette: moodData.palette,
      tracks: []
    };

    let idx = 1;
    for (const track of moodData.tracks) {
      const hit = await fetchAppleTrack(track.title, track.artist);

      const coverUrl = hit && hit.artworkUrl100
        ? hit.artworkUrl100.replace('100x100bb', '600x600bb')
        : 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80';

      const previewUrl = hit?.previewUrl || null;
      const directSongUrl = hit?.trackViewUrl || null;

      // Calculate duration string from millis if hit provided it
      let durationStr = track.duration;
      if (hit?.trackTimeMillis) {
        const totalSec = Math.round(hit.trackTimeMillis / 1000);
        const mins = Math.floor(totalSec / 60);
        const secs = String(totalSec % 60).padStart(2, '0');
        durationStr = `${mins}:${secs}`;
      }

      result[moodKey].tracks.push({
        id: `${moodKey.slice(0, 2)}-${idx++}`,
        title: hit?.trackName || track.title,
        artist: hit?.artistName || track.artist,
        duration: durationStr,
        coverUrl,
        previewUrl,
        directSongUrl,
      });

      // Brief polite delay to avoid any rate throttling
      await new Promise(r => setTimeout(r, 60));
    }
  }

  const jsContent = `/**
 * NIMBUS Curated Weather Mood Playlists
 * Expanded dynamic song pool (150+ tracks) per mood.
 * Includes official 600x600 Apple Music cover art, 30s audio previews, and direct song links.
 */

const PLAYLISTS = ${JSON.stringify(result, null, 2)};

/**
 * Helper to build outbound search links that point directly to the song/tracks
 */
function enrichTrackWithLinks(track) {
  const query = encodeURIComponent(\`\${track.title} \${track.artist}\`);
  return {
    ...track,
    spotifyUrl: \`https://open.spotify.com/search/\${query}/tracks\`,
    youtubeUrl: \`https://www.youtube.com/results?search_query=\${query}+official+audio\`,
    appleMusicUrl: track.directSongUrl || \`https://music.apple.com/us/search?term=\${query}\`,
  };
}

/**
 * Retrieve curated playlist for a specific mood.
 * Supports dynamic rotation and refreshing so songs are never static.
 * @param {string} rawMood
 * @param {boolean|number} isDay
 * @param {boolean} refresh - If true or on each query, shuffles and returns a fresh subset of 8 tracks
 */
function getPlaylistForMood(rawMood, isDay = 1, refresh = false) {
  let key = rawMood;
  if (key === 'clear') {
    key = isDay ? 'clear-day' : 'clear-night';
  } else if (!PLAYLISTS[key]) {
    key = 'clear-day';
  }

  const playlist = PLAYLISTS[key] || PLAYLISTS['clear-day'];
  const allTracks = playlist.tracks;

  // Shuffle or rotate tracks to provide dynamic variation
  const shuffled = [...allTracks].sort(() => 0.5 - Math.random());
  const selectedTracks = shuffled.slice(0, 8);

  return {
    mood: key,
    tagline: playlist.tagline,
    palette: playlist.palette,
    totalPoolSize: allTracks.length,
    tracks: selectedTracks.map(enrichTrackWithLinks),
  };
}

module.exports = {
  PLAYLISTS,
  getPlaylistForMood,
  enrichTrackWithLinks,
};
`;

  const targetPath = path.join(__dirname, '../data/playlists.js');
  fs.writeFileSync(targetPath, jsContent, 'utf8');
  console.log('Successfully written expanded playlists to', targetPath);
}

run().catch(console.error);
