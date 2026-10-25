/**
 * NIMBUS Curated Weather Mood Playlists
 * 8 real, well-known songs per mood+day/night variant with evocative mood taglines.
 * Zero external Spotify/YouTube API keys required: links use standard search query URLs.
 */

const PLAYLISTS = {
  'clear-day': {
    tagline: 'Golden sunlight, open roads, and easy rhythms',
    palette: {
      accent: '#FF9A3C',
      vibe: 'Sun-drenched, radiant & energizing',
    },
    tracks: [
      { id: 'cd-1', title: 'Here Comes the Sun', artist: 'The Beatles', duration: '3:05' },
      { id: 'cd-2', title: 'Golden', artist: 'Harry Styles', duration: '3:28' },
      { id: 'cd-3', title: 'Walking on Sunshine', artist: 'Katrina and the Waves', duration: '3:59' },
      { id: 'cd-4', title: 'Sunflower', artist: 'Post Malone & Swae Lee', duration: '2:38' },
      { id: 'cd-5', title: 'Sunday Best', artist: 'Surfaces', duration: '2:38' },
      { id: 'cd-6', title: 'Put Your Records On', artist: 'Corinne Bailey Rae', duration: '3:35' },
      { id: 'cd-7', title: 'Lovely Day', artist: 'Bill Withers', duration: '4:15' },
      { id: 'cd-8', title: 'Daylight', artist: 'Taylor Swift', duration: '4:53' },
    ],
  },

  'clear-night': {
    tagline: 'Starlit stillness, cosmic reverie, and calm night air',
    palette: {
      accent: '#6366F1',
      vibe: 'Cosmic, nocturnal & introspective',
    },
    tracks: [
      { id: 'cn-1', title: 'Midnight City', artist: 'M83', duration: '4:03' },
      { id: 'cn-2', title: 'Starboy', artist: 'The Weeknd ft. Daft Punk', duration: '3:50' },
      { id: 'cn-3', title: 'Counting Stars', artist: 'OneRepublic', duration: '4:17' },
      { id: 'cn-4', title: 'A Sky Full of Stars', artist: 'Coldplay', duration: '4:27' },
      { id: 'cn-5', title: 'Nightcall', artist: 'Kavinsky', duration: '4:19' },
      { id: 'cn-6', title: 'Space Song', artist: 'Beach House', duration: '5:20' },
      { id: 'cn-7', title: 'Moonlight', artist: 'Ali Gatie', duration: '3:48' },
      { id: 'cn-8', title: 'Wait', artist: 'M83', duration: '5:43' },
    ],
  },

  'partly-cloudy': {
    tagline: 'Drifting skies, fleeting shadows, and mellow daydreaming',
    palette: {
      accent: '#38BDF8',
      vibe: 'Breezy, contemplative & floating',
    },
    tracks: [
      { id: 'pc-1', title: 'Electric Feel', artist: 'MGMT', duration: '3:49' },
      { id: 'pc-2', title: 'Tongue Tied', artist: 'GROUPLOVE', duration: '3:38' },
      { id: 'pc-3', title: 'Float On', artist: 'Modest Mouse', duration: '3:28' },
      { id: 'pc-4', title: 'Little Talks', artist: 'Of Monsters and Men', duration: '4:26' },
      { id: 'pc-5', title: 'Dreams', artist: 'Fleetwood Mac', duration: '4:14' },
      { id: 'pc-6', title: 'Breezeblocks', artist: 'alt-J', duration: '3:47' },
      { id: 'pc-7', title: 'Safe and Sound', artist: 'Capital Cities', duration: '3:13' },
      { id: 'pc-8', title: 'Riptide', artist: 'Vance Joy', duration: '3:24' },
    ],
  },

  cloudy: {
    tagline: 'Velvet grey horizons, cozy isolation, and quiet thoughts',
    palette: {
      accent: '#94A3B8',
      vibe: 'Atmospheric, grounded & reflective',
    },
    tracks: [
      { id: 'cl-1', title: 'Holocene', artist: 'Bon Iver', duration: '5:36' },
      { id: 'cl-2', title: 'Skinny Love', artist: 'Birdy', duration: '3:23' },
      { id: 'cl-3', title: 'Sweater Weather', artist: 'The Neighbourhood', duration: '4:00' },
      { id: 'cl-4', title: 'Youth', artist: 'Daughter', duration: '4:44' },
      { id: 'cl-5', title: 'Flume', artist: 'Bon Iver', duration: '3:39' },
      { id: 'cl-6', title: 'Chamber of Reflection', artist: 'Mac DeMarco', duration: '3:51' },
      { id: 'cl-7', title: 'Between the Bars', artist: 'Elliott Smith', duration: '2:21' },
      { id: 'cl-8', title: 'White Winter Hymnal', artist: 'Fleet Foxes', duration: '2:27' },
    ],
  },

  rain: {
    tagline: 'Windows fogged, thoughts slow',
    palette: {
      accent: '#38BDF8',
      vibe: 'Gentle downpour, warm tea & melancholic bliss',
    },
    tracks: [
      { id: 'rn-1', title: 'Set Fire to the Rain', artist: 'Adele', duration: '4:02' },
      { id: 'rn-2', title: 'Riders on the Storm', artist: 'The Doors', duration: '7:14' },
      { id: 'rn-3', title: 'Rain On Me', artist: 'Lady Gaga & Ariana Grande', duration: '3:02' },
      { id: 'rn-4', title: 'Banana Pancakes', artist: 'Jack Johnson', duration: '3:12' },
      { id: 'rn-5', title: 'Stan', artist: 'Eminem ft. Dido', duration: '6:44' },
      { id: 'rn-6', title: 'Blue in Green', artist: 'Miles Davis', duration: '5:37' },
      { id: 'rn-7', title: 'Coffee', artist: 'beabadoobee', duration: '2:06' },
      { id: 'rn-8', title: 'I Love a Rainy Night', artist: 'Eddie Rabbitt', duration: '3:10' },
    ],
  },

  thunderstorm: {
    tagline: 'Electric skies, rumbling horizons, and untamed currents',
    palette: {
      accent: '#A855F7',
      vibe: 'Charged, cinematic & high voltage',
    },
    tracks: [
      { id: 'ts-1', title: 'Thunderstruck', artist: 'AC/DC', duration: '4:52' },
      { id: 'ts-2', title: 'Radioactive', artist: 'Imagine Dragons', duration: '3:06' },
      { id: 'ts-3', title: 'Sail', artist: 'AWOLNATION', duration: '4:19' },
      { id: 'ts-4', title: 'Supermassive Black Hole', artist: 'Muse', duration: '3:29' },
      { id: 'ts-5', title: 'Thunder', artist: 'Imagine Dragons', duration: '3:07' },
      { id: 'ts-6', title: 'Seven Nation Army', artist: 'The White Stripes', duration: '3:51' },
      { id: 'ts-7', title: 'Believer', artist: 'Imagine Dragons', duration: '3:24' },
      { id: 'ts-8', title: 'In the Air Tonight', artist: 'Phil Collins', duration: '5:34' },
    ],
  },

  snow: {
    tagline: 'Quiet snowfall, frosted glass, and muffled footsteps',
    palette: {
      accent: '#67E8F9',
      vibe: 'Pristine, crystalline & serene chill',
    },
    tracks: [
      { id: 'sn-1', title: 'Snow (Hey Oh)', artist: 'Red Hot Chili Peppers', duration: '5:34' },
      { id: 'sn-2', title: 'Winter', artist: 'Tori Amos', duration: '5:41' },
      { id: 'sn-3', title: 'Hazy Shade of Winter', artist: 'Simon & Garfunkel', duration: '2:17' },
      { id: 'sn-4', title: 'Roslyn', artist: 'Bon Iver & St. Vincent', duration: '4:49' },
      { id: 'sn-5', title: 'Cold Little Heart', artist: 'Michael Kiwanuka', duration: '9:57' },
      { id: 'sn-6', title: 'Rivers and Roads', artist: 'The Head and the Heart', duration: '4:44' },
      { id: 'sn-7', title: 'Broadripple is Burning', artist: 'Margot & the Nuclear So and So’s', duration: '5:18' },
      { id: 'sn-8', title: 'Winter Song', artist: 'Sara Bareilles & Ingrid Michaelson', duration: '4:27' },
    ],
  },

  fog: {
    tagline: 'Muted horizons, slow drifting mist, and enigmatic calm',
    palette: {
      accent: '#CBD5E1',
      vibe: 'Ethereal, mysterious & floating',
    },
    tracks: [
      { id: 'fg-1', title: 'Intro', artist: 'The xx', duration: '2:07' },
      { id: 'fg-2', title: 'Teardrop', artist: 'Massive Attack', duration: '5:29' },
      { id: 'fg-3', title: 'Breathe Me', artist: 'Sia', duration: '4:34' },
      { id: 'fg-4', title: 'Mystery of Love', artist: 'Sufjan Stevens', duration: '4:08' },
      { id: 'fg-5', title: 'Cigarettes After Sex', artist: 'Apocalypse', duration: '4:50' },
      { id: 'fg-6', title: 'Motion Picture Soundtrack', artist: 'Radiohead', duration: '3:20' },
      { id: 'fg-7', title: 'Porcelain', artist: 'Moby', duration: '4:01' },
      { id: 'fg-8', title: 'Mad World', artist: 'Gary Jules', duration: '3:07' },
    ],
  },
};

/**
 * Helper to build outbound search links without API keys
 */
function enrichTrackWithLinks(track) {
  const query = encodeURIComponent(`${track.title} ${track.artist}`);
  return {
    ...track,
    spotifyUrl: `https://open.spotify.com/search/${query}`,
    youtubeUrl: `https://www.youtube.com/results?search_query=${query}`,
  };
}

/**
 * Retrieve curated playlist for a specific mood
 * @param {string} rawMood
 * @param {number|boolean} isDay
 * @returns {object}
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
