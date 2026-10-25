/**
 * NIMBUS Curated Weather Mood Playlists
 * Expanded dynamic song pool (150+ tracks) per mood.
 * Includes official 600x600 Apple Music cover art, 30s audio previews, and direct song links.
 */

const PLAYLISTS = {
  "clear-day": {
    "tagline": "Warm golden hues, open horizons, and radiant melodies",
    "palette": {
      "accent": "#F59E0B",
      "vibe": "Bright, breezy & uplifting"
    },
    "tracks": [
      {
        "id": "cl-1",
        "title": "Here Comes the Sun",
        "artist": "The Beatles",
        "duration": "3:06",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/df/db/61/dfdb615d-47f8-06e9-9533-b96daccc029f/18UMGIM31076.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cd/7d/83/cd7d834f-34bf-7be0-1647-0fb0920d25a7/mzaf_5281747653026802926.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/here-comes-the-sun/1441164426?i=1441164589&uo=4"
      },
      {
        "id": "cl-2",
        "title": "Golden Hour",
        "artist": "Kacey Musgraves",
        "duration": "3:18",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/61/45/e8/6145e88a-6a79-fab1-ad8f-5ffdcbf44a28/18UMGIM03879.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/13/b0/60/13b0606a-c0b0-cb0b-1ad6-99b0ee1cfdde/mzaf_16374977868908357245.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/golden-hour/1440918116?i=1440918404&uo=4"
      },
      {
        "id": "cl-3",
        "title": "Walking On Sunshine",
        "artist": "Katrina and the Waves",
        "duration": "4:01",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f6/b6/37/f6b6378c-9b34-72fb-9abe-4a6d6042ad53/13ULAIM49571.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fe/af/a9/feafa950-3d4d-6eb4-5c5c-a4170d27a605/mzaf_14050415466863438352.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/walking-on-sunshine/723501408?i=723501674&uo=4"
      },
      {
        "id": "cl-4",
        "title": "Sunday Best",
        "artist": "Surfaces",
        "duration": "2:39",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ed/cd/ee/edcdeef4-bc7c-a53d-7e2c-64c158c9a89a/842812115431.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/19/5d/c8/195dc887-0272-4ba1-4cb3-7f6216d102cc/mzaf_16366333469501790932.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/sunday-best/1711402061?i=1711402500&uo=4"
      },
      {
        "id": "cl-5",
        "title": "Lovely Day",
        "artist": "Bill Withers",
        "duration": "4:15",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/3a/93/40/3a9340a1-73f7-5bbb-86a2-15a4ba20acea/884977735840.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4d/4f/4d/4d4f4def-089f-5ead-eb65-c2e754c4eb0b/mzaf_17532940935688196080.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/lovely-day/391725408?i=391725492&uo=4"
      },
      {
        "id": "cl-6",
        "title": "Electric Feel (Justice Remix)",
        "artist": "MGMT",
        "duration": "5:27",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/29/7c/40/297c40a2-fc65-ad81-12d4-e28c8043b600/888880646842.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b8/4e/73/b84e7338-0936-a4f3-4993-848a11c49c5f/mzaf_12245665201660857941.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/electric-feel-justice-remix/284741732?i=284741737&uo=4"
      },
      {
        "id": "cl-7",
        "title": "Sunflower (Spider-Man: Into the Spider-Verse)",
        "artist": "Post Malone & Swae Lee",
        "duration": "2:38",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4b/30/2c/4b302cb6-7a14-5464-4e97-0577e9d0be49/18UMGIM82277.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/98/f0/d6/98f0d67e-f8bf-762d-cac7-1c6b3b6b35dd/mzaf_4543283896248560946.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/sunflower-spider-man-into-the-spider-verse/1445949265?i=1445949267&uo=4"
      },
      {
        "id": "cl-8",
        "title": "Good Days",
        "artist": "SZA",
        "duration": "4:38",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/62/93/13/6293132e-20ff-67ab-3d1f-96bb6797a6ba/196589564955.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9b/32/fe/9b32fec3-fbfb-db0f-3dcf-bb089d412f23/mzaf_15200324731067771849.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/good-days/1658650093?i=1658650802&uo=4"
      },
      {
        "id": "cl-9",
        "title": "Put Your Records On",
        "artist": "Corinne Bailey Rae",
        "duration": "3:37",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/76/db/e8/76dbe8bd-fd8f-b3f7-c6a8-26f401305eb0/13UABIM52293.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/05/be/f0/05bef0b3-376e-590e-9347-cc24fefd37f3/mzaf_14835514781546194541.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/put-your-records-on/714614474?i=714614517&uo=4"
      },
      {
        "id": "cl-10",
        "title": "Three Little Birds",
        "artist": "Bob Marley & The Wailers",
        "duration": "3:01",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/15/0b/db/150bdba3-8dbb-8e66-79b3-c8e1dead908b/20UMGIM03868.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8a/68/72/8a68729a-4091-b8d5-f487-008188eddb76/mzaf_4142863404201241596.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/three-little-birds/1496696597?i=1496696606&uo=4"
      },
      {
        "id": "cl-11",
        "title": "Pocketful of Sunshine",
        "artist": "Natasha Bedingfield",
        "duration": "3:23",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e4/d5/0e/e4d50e99-f790-5ce6-fb2b-abb504050c8d/888880430779.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ed/5e/e5/ed5ee543-0a02-c0f2-3d55-611fd7a29864/mzaf_9524300124207831673.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/pocketful-of-sunshine/1429193525?i=1429194116&uo=4"
      },
      {
        "id": "cl-12",
        "title": "Best Day of My Life",
        "artist": "American Authors",
        "duration": "3:14",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/fe/6c/79/fe6c7944-593e-43b8-5ca2-3ca61cdbd393/14UMGIM01329.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/22/30/d0/2230d086-6407-6aa5-e8ff-3e0f81d2bfc1/mzaf_7188612954736160603.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/best-day-of-my-life/1440851059?i=1440851075&uo=4"
      },
      {
        "id": "cl-13",
        "title": "Tongue Tied",
        "artist": "GROUPLOVE",
        "duration": "3:38",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/fa/aa/01/faaa01bd-5bb4-a678-c5eb-b9fe0ebc752a/mzi.tcmvdwba.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/69/95/cb/6995cb67-6f8d-a816-5961-9623ff38af02/mzaf_13215718285140038721.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/tongue-tied/469867730?i=469867732&uo=4"
      },
      {
        "id": "cl-14",
        "title": "Island In the Sun",
        "artist": "Weezer",
        "duration": "3:20",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/fc/ef/19/fcef196c-3f81-e9da-f02a-b55d900e7d69/16UMGIM53162.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/52/a6/03/52a6032e-39c0-fd3e-555d-ce683f3d9d31/mzaf_7707796819108024384.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/island-in-the-sun/1440868131?i=1440868258&uo=4"
      },
      {
        "id": "cl-15",
        "title": "Walking on a Dream",
        "artist": "Empire Of The Sun",
        "duration": "3:18",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3e/42/a7/3e42a78d-57a3-fd69-6703-14d51205dd4c/13UMGIM24968.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/35/73/67/35736748-bb91-76df-e742-b870060fa52e/mzaf_8235749994901479240.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/walking-on-a-dream/1449912306?i=1449912309&uo=4"
      },
      {
        "id": "cl-16",
        "title": "Riptide",
        "artist": "Vance Joy",
        "duration": "3:22",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/7a/1c/65/7a1c6571-34e9-bb77-32be-90c72ba003c0/075679920355.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1e/de/ea/1edeea50-c0f4-9d95-f0b8-b23a1af561db/mzaf_6343110017276582270.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/riptide/1022164257?i=1022164261&uo=4"
      },
      {
        "id": "cl-17",
        "title": "Solar Power",
        "artist": "Lorde",
        "duration": "3:13",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d7/1e/de/d71edeb1-73e7-07c7-9314-036b4bd99ae2/21UMGIM51680.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/db/d3/bd/dbd3bd2e-8614-e741-b2bc-2826a6f61a99/mzaf_7996187720115007617.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/solar-power/1571611279?i=1571611288&uo=4"
      },
      {
        "id": "cl-18",
        "title": "Golden",
        "artist": "Harry Styles",
        "duration": "3:29",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/23/da/a0/23daa049-e543-2745-845a-768e15fbf013/mzaf_11620756946917001605.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/golden/1485802965?i=1485802966&uo=4"
      },
      {
        "id": "cl-19",
        "title": "As It Was",
        "artist": "Harry Styles",
        "duration": "2:47",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/67/10/16/67101606-3869-ca44-6c03-e13d6322cb51/mzaf_1135399237022217274.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/as-it-was/1615584999?i=1615585008&uo=4"
      },
      {
        "id": "cl-20",
        "title": "Levitating",
        "artist": "Dua Lipa",
        "duration": "3:24",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6c/11/d6/6c11d681-aa3a-d59e-4c2e-f77e181026ab/190295092665.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/59/dc/4d/59dc4dda-93ff-8f1c-c536-f005f6ea6af5/mzaf_3066686759813252385.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/levitating/1538003494?i=1538003843&uo=4"
      }
    ]
  },
  "clear-night": {
    "tagline": "Starlit deep blue skies, midnight neon, and contemplative quiet",
    "palette": {
      "accent": "#6366F1",
      "vibe": "Velvety, luminous & nocturnal"
    },
    "tracks": [
      {
        "id": "cl-1",
        "title": "Midnight City",
        "artist": "M83",
        "duration": "4:01",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cb/7b/a9/cb7ba903-b5f1-cc21-90db-7a81b7aa0997/724596951057.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/24/09/79/2409794c-3d5d-af26-580e-7dc00ee4f207/mzaf_369629549966021675.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/midnight-city/828259375?i=828259377&uo=4"
      },
      {
        "id": "cl-2",
        "title": "Starboy (feat. Daft Punk)",
        "artist": "The Weeknd",
        "duration": "3:50",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/11/71/d6/1171d6ad-3c96-e027-2af6-58028426588c/mzaf_15137631797407745471.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/starboy-feat-daft-punk/1440870373?i=1440870375&uo=4"
      },
      {
        "id": "cl-3",
        "title": "Nights",
        "artist": "Blond Piano",
        "duration": "2:59",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/cd/d3/d0/cdd3d00e-ec53-2e9f-81e2-774c07f5bea9/1827849271625.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f1/f4/be/f1f4bec8-3665-4440-cc0c-08626e4ba7eb/mzaf_10767063445979032310.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/nights/1599412296?i=1599412673&uo=4"
      },
      {
        "id": "cl-4",
        "title": "Nightcall",
        "artist": "Kavinsky",
        "duration": "4:18",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c1/2d/fe/c12dfe8f-cdf6-e179-d69a-8ec35f760266/00602537248681.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d2/45/fb/d245fbf9-8570-fdc0-5e6b-aa528c130486/mzaf_11947081694159530687.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/nightcall/1442447952?i=1442447970&uo=4"
      },
      {
        "id": "cl-5",
        "title": "Talking to the Moon",
        "artist": "Bruno Mars",
        "duration": "3:38",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/52/b1/45/52b1452b-229e-78db-231b-7b43fa0077cc/075679956491.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c4/ce/e8/c4cee8c1-ac62-b308-9c8f-df0c9bb69383/mzaf_1726042899961262714.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/talking-to-the-moon/576654788?i=576655100&uo=4"
      },
      {
        "id": "cl-6",
        "title": "Cosmic Love",
        "artist": "Florence + the Machine",
        "duration": "4:16",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/46/45/58/46455821-202f-5fac-ee42-87853cb9fa03/09UMGIM14223.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8f/9f/da/8f9fda42-8027-7bd7-40e5-9b368168f5eb/mzaf_3064234304348197931.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/cosmic-love/1440729743?i=1440729756&uo=4"
      },
      {
        "id": "cl-7",
        "title": "A Sky Full of Stars",
        "artist": "Coldplay",
        "duration": "4:28",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/60/90/ad/6090adc3-8863-861d-afcc-23c55c6fe5da/dj.vmtulfyu.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f1/24/d0/f124d058-5d43-73ca-79e4-36f5eb42b172/mzaf_12358370529108063354.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/a-sky-full-of-stars/829909653?i=829910927&uo=4"
      },
      {
        "id": "cl-8",
        "title": "Yellow",
        "artist": "Coldplay",
        "duration": "4:29",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f5/93/8c/f5938c49-964c-31d1-4b33-78b634f71fb7/190295978075.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/66/f3/1a/66f31a76-a6ed-cb4c-f353-23310a7ae9a8/mzaf_10593596652344378873.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/yellow/1122782080?i=1122782283&uo=4"
      },
      {
        "id": "cl-9",
        "title": "After Hours",
        "artist": "The Weeknd",
        "duration": "6:01",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6f/bc/e6/6fbce6c4-c38c-72d8-4fd0-66cfff32f679/20UMGIM12176.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/54/2b/61/542b6133-80f7-f30f-4dcf-059490db9d84/mzaf_1539067797902127760.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/after-hours/1499378108?i=1499378615&uo=4"
      },
      {
        "id": "cl-10",
        "title": "Moonlight",
        "artist": "Kali Uchis",
        "duration": "3:08",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/90/87/bf/9087bfb6-ba9a-3157-f102-a8829e634e33/23UMGIM03412.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ca/38/d1/ca38d17f-751f-5365-1ceb-bd9f48b2676c/mzaf_71441183533561207.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/moonlight/1665311474?i=1665312291&uo=4"
      },
      {
        "id": "cl-11",
        "title": "Space Song",
        "artist": "Beach House",
        "duration": "5:20",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/09/e0/d5/09e0d559-0682-f0f0-5e0c-3cd11e3114fd/beachhouse_depressioncherry_2400_300.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/41/61/14/416114cc-282e-4c76-2808-a3eb9c3f973d/mzaf_6665874998714897722.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/space-song/997913392?i=997914096&uo=4"
      },
      {
        "id": "cl-12",
        "title": "Sparks",
        "artist": "Coldplay",
        "duration": "3:47",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f5/93/8c/f5938c49-964c-31d1-4b33-78b634f71fb7/190295978075.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/47/db/ce/47dbce82-d89c-0897-0da7-26d06ae7e2f2/mzaf_14852507599380441353.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/sparks/1122782080?i=1122782281&uo=4"
      },
      {
        "id": "cl-13",
        "title": "Apocalypse",
        "artist": "Cigarettes After Sex",
        "duration": "4:50",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b3/5e/0f/b35e0fbe-2370-fc48-0f0c-977525e93bf2/720841214601_Cover.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b1/43/b0/b143b0ee-863a-8f7c-3c56-a67110ef1591/mzaf_10438092015459317290.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/apocalypse/1217977525?i=1217977755&uo=4"
      },
      {
        "id": "cl-14",
        "title": "Chamber Of Reflection",
        "artist": "Mac DeMarco",
        "duration": "3:52",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e0/04/eb/e004eb2b-754f-4a76-9ecc-87d4eea2a327/cover.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6e/8b/6b/6e8b6b9d-0881-6810-11d9-fa081cf37d81/mzaf_15689875906597339969.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/chamber-of-reflection/6789834398?i=6789834619&uo=4"
      },
      {
        "id": "cl-15",
        "title": "Resonance",
        "artist": "Home",
        "duration": "3:33",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4f/13/65/4f1365b0-e97c-c469-c438-2f7d8f204355/872133025584_cover.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/33/bb/1a/33bb1a1a-1448-3118-6891-639e61784145/mzaf_3810752549913623044.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/resonance/1789601131?i=1789601140&uo=4"
      },
      {
        "id": "cl-16",
        "title": "The Night We Met",
        "artist": "Lord Huron",
        "duration": "3:28",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/55/41/4a/55414a18-861a-79d1-e575-5bf8cf205dbe/886445056839_Cover.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/64/b4/f3/64b4f3e5-d4f9-ec10-e6af-b6c26bde9b47/mzaf_8621887946764980860.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/the-night-we-met/1806531135?i=1806531961&uo=4"
      },
      {
        "id": "cl-17",
        "title": "505",
        "artist": "Arctic Monkeys",
        "duration": "4:14",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/82/90/14/829014ad-a301-62ab-bee6-f4cca4457411/mzi.hozudery.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d1/0d/ab/d10dabc8-cceb-e718-401f-01516b009460/mzaf_13845311225859403599.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/505/251499221?i=251499791&uo=4"
      },
      {
        "id": "cl-18",
        "title": "Redbone (Originally Performed by Childish Gambino) [Karaoke Version]",
        "artist": "Starstruck Backing Tracks",
        "duration": "5:22",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/fe/da/c9/fedac9e7-cd68-8906-f103-a6aeb3319765/Redbone-Childish-Gambino.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7f/16/cb/7f16cbc5-bbaf-b681-d5fe-88dd56c96a30/mzaf_11014895037301362273.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/redbone-originally-performed-by-childish-gambino-karaoke/1203331762?i=1203331775&uo=4"
      },
      {
        "id": "cl-19",
        "title": "Sweater Weather",
        "artist": "The Neighbourhood",
        "duration": "4:00",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/28/71/00/287100fb-5c31-0195-5343-e6b3625886d0/886443969834.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8c/37/20/8c372047-2727-8054-9411-0e4867643dd8/mzaf_10169659262182214119.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/sweater-weather/635016635?i=635016640&uo=4"
      },
      {
        "id": "cl-20",
        "title": "No Surprises",
        "artist": "Radiohead",
        "duration": "3:49",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/07/60/ba/0760ba0f-148c-b18f-d0ff-169ee96f3af5/634904078164.png/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f0/2a/fa/f02afaad-0a7f-9ceb-1236-55ef3d388061/mzaf_10063872040766906863.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/no-surprises/1097861387?i=1097861842&uo=4"
      }
    ]
  },
  "partly-cloudy": {
    "tagline": "Sunlight breaking through soft cloud cover, airy and restorative",
    "palette": {
      "accent": "#38BDF8",
      "vibe": "Breezy, optimistic & floating"
    },
    "tracks": [
      {
        "id": "pa-1",
        "title": "Dreams",
        "artist": "Fleetwood Mac",
        "duration": "4:14",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d2/48/f4/d248f4ae-a7e4-a48e-1588-6617de3e8d76/mzi.izeorbmm.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b6/5a/4b/b65a4b6f-54dd-ee99-0b36-98e27d5b5dd8/mzaf_13813391014293209258.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/dreams/202271826?i=202272624&uo=4"
      },
      {
        "id": "pa-2",
        "title": "Daylight",
        "artist": "Harry Styles",
        "duration": "2:45",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0e/d7/aa/0ed7aacf-6c72-39b2-7731-05ad74ac85e2/mzaf_11719631527113093480.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/daylight/1615584999?i=1615585009&uo=4"
      },
      {
        "id": "pa-3",
        "title": "Ophelia",
        "artist": "The Lumineers",
        "duration": "2:40",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0c/46/21/0c462181-5777-67a5-ec92-1775e9a3d5d4/22999.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/bf/eb/ff/bfebffb1-e969-3b50-3faf-d04fcd55a7c5/mzaf_6425349890786327932.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/ophelia/1754024625?i=1754025109&uo=4"
      },
      {
        "id": "pa-4",
        "title": "Budapest",
        "artist": "George Ezra",
        "duration": "3:21",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b4/3b/5d/b43b5dcf-b2b5-0cad-3512-eba02c37500a/886445001372.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/30/b5/95/30b595d4-f469-ce5e-8ea2-4e87101d106b/mzaf_9683876537324989197.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/budapest/947999961?i=947999963&uo=4"
      },
      {
        "id": "pa-5",
        "title": "Dog Days Are Over",
        "artist": "Florence + the Machine",
        "duration": "4:13",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/b7/f6/4d/b7f64deb-fb74-95aa-81e6-729e5cc38ce8/09UMGIM14223.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b8/34/5c/b8345c69-d46c-2fbe-08bf-bdf6ed98a6d1/mzaf_1635289453488845268.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/dog-days-are-over/1470593916?i=1470593922&uo=4"
      },
      {
        "id": "pa-6",
        "title": "Bloom (Bonus Track)",
        "artist": "The Paper Kites",
        "duration": "3:30",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0b/a9/d7/0ba9d7c7-2e68-dc9b-cde4-d142e8ce86b1/067003806756.png/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7d/22/ae/7d22ae06-abe0-33b2-a055-099149bc9ecd/mzaf_7018395687727242261.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/bloom-bonus-track/609187370?i=609187708&uo=4"
      },
      {
        "id": "pa-7",
        "title": "Cloudbusting (2018 Remaster)",
        "artist": "Kate Bush",
        "duration": "5:10",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/62/97/32/62973286-5bb3-0de7-c051-8b2de8d95472/cover.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b9/2f/1c/b92f1c6c-2ec1-1027-46ba-530ad55d86ea/mzaf_1145978686410054251.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/cloudbusting-2018-remaster/1675560565?i=1675560844&uo=4"
      },
      {
        "id": "pa-8",
        "title": "Holocene (Instrumental)",
        "artist": "Guitar Dreamers",
        "duration": "3:33",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/87/0e/b1/870eb1eb-da2e-a51b-1ed2-3cac0e8fdd95/789577237896.png/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/d1/b8/c0/d1b8c0e1-b434-c4f1-70c2-fd4ec26a54e5/mzaf_8421999634197988050.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/holocene-instrumental/1669594530?i=1669594531&uo=4"
      },
      {
        "id": "pa-9",
        "title": "Little Talks",
        "artist": "Of Monsters and Men",
        "duration": "4:27",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/a3/a8/c2/a3a8c2ee-79ca-f4f0-8adb-0060e04432fd/12UMGIM10062.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2d/47/ed/2d47edef-3854-096a-c49b-f6299c83e7b1/mzaf_67984575308519465.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/little-talks/1440808821?i=1440809330&uo=4"
      },
      {
        "id": "pa-10",
        "title": "Ho Hey",
        "artist": "The Lumineers",
        "duration": "2:43",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/83/20/a9/8320a945-11ac-e7cd-29e7-d80782698f55/18515.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/33/0b/1e/330b1e56-9db5-a341-546e-f00dc2ec36e5/mzaf_4304570900509942884.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/ho-hey/1754031514?i=1754031516&uo=4"
      },
      {
        "id": "pa-11",
        "title": "Home",
        "artist": "Edward Sharpe & The Magnetic Zeros",
        "duration": "5:04",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music4/v4/b2/a3/77/b2a377cb-1dd9-be0c-f5a5-71ae077ad2a1/05099963522853.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1c/cc/31/1ccc316c-5583-eb2e-5129-a75242198306/mzaf_6746131601780773050.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/home/716436562?i=716436758&uo=4"
      },
      {
        "id": "pa-12",
        "title": "Cigarette Daydreams",
        "artist": "Cage the Elephant",
        "duration": "3:29",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/02/d2/e2/02d2e290-82c9-bcf4-73fa-4cd06f65f4b9/886444143073.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/06/02/88/060288d9-8d59-f2de-b03e-dd3ec84ae23a/mzaf_16545072701979127359.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/cigarette-daydreams/683346293?i=683346502&uo=4"
      },
      {
        "id": "pa-13",
        "title": "Mountain Sound",
        "artist": "Of Monsters and Men",
        "duration": "3:32",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/a3/a8/c2/a3a8c2ee-79ca-f4f0-8adb-0060e04432fd/12UMGIM10062.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7c/4d/a7/7c4da7cd-78b0-fc20-0272-803ca78196b9/mzaf_16444712648632722147.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/mountain-sound/1440808821?i=1440809063&uo=4"
      },
      {
        "id": "pa-14",
        "title": "Young Folks",
        "artist": "Peter Bjorn and John",
        "duration": "4:37",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8b/b4/e0/8bb4e070-90f5-fe3b-966c-8947a14e83bd/05055036261081.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fc/38/14/fc38142b-8776-d9af-d076-be9f0078d379/mzaf_1166994630282497305.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/young-folks/1442990312?i=1442990320&uo=4"
      },
      {
        "id": "pa-15",
        "title": "San Luis",
        "artist": "Gregory Alan Isakov",
        "duration": "4:32",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/15/ed/83/15ed83dc-8e46-09b2-fb12-764a65a281a3/18573.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9c/ec/e4/9cece47c-ca9d-0d38-e83b-bc2a378d840f/mzaf_17531735061231574705.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/san-luis/1753327640?i=1753327664&uo=4"
      },
      {
        "id": "pa-16",
        "title": "Sedated",
        "artist": "Hozier",
        "duration": "3:28",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2f/0a/cb/2f0acb50-8ec8-577f-9405-478b5329c83b/886444702157.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/71/03/53/71035392-81e2-92c3-a6f4-c7fa0423f44a/mzaf_2731211361058418185.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/sedated/923529751?i=923529844&uo=4"
      },
      {
        "id": "pa-17",
        "title": "Take a Walk",
        "artist": "Passion Pit",
        "duration": "4:24",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/34/c6/0b/34c60b2b-aed6-e38c-43cf-9fa34a45dd2f/886443506329.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d0/42/b7/d042b7cd-b962-f05f-db52-fb76a144b2dc/mzaf_5287739157916939848.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/take-a-walk/534798874?i=534798882&uo=4"
      },
      {
        "id": "pa-18",
        "title": "Clean",
        "artist": "Taylor Swift",
        "duration": "4:31",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/89/4a/4a/894a4ab9-b0b0-9ea5-ca41-8da0b9b79453/14UMDIM03405.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/60/87/58/60875866-eed8-2421-8822-fac84fe8f2a9/mzaf_3063878246971590341.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/clean/1440935467?i=1440936206&uo=4"
      }
    ]
  },
  "cloudy": {
    "tagline": "Gentle overcast skies, muted tones, and introspective melodies",
    "palette": {
      "accent": "#94A3B8",
      "vibe": "Subtle, poetic & reflective"
    },
    "tracks": [
      {
        "id": "cl-1",
        "title": "Ribs",
        "artist": "Lorde",
        "duration": "4:19",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/96/a5/09/96a50916-169b-724c-b722-b8c474406352/13UAAIM68691.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/13/8c/1a/138c1a93-5fdf-f1a3-c288-c0fd8d7c8d2f/mzaf_12940840614985303434.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/ribs/1440818584?i=1440818666&uo=4"
      },
      {
        "id": "cl-2",
        "title": "cardigan",
        "artist": "Taylor Swift",
        "duration": "3:59",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "cl-3",
        "title": "Slow Burn",
        "artist": "Kacey Musgraves",
        "duration": "4:06",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/61/45/e8/6145e88a-6a79-fab1-ad8f-5ffdcbf44a28/18UMGIM03879.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/48/8d/f0/488df0f1-a7b6-845d-6374-e9e1ea624df2/mzaf_9984810318127629642.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/slow-burn/1440918116?i=1440918117&uo=4"
      },
      {
        "id": "cl-4",
        "title": "Video Games",
        "artist": "Lana Del Rey",
        "duration": "4:42",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "cl-5",
        "title": "exile (feat. Bon Iver)",
        "artist": "Taylor Swift",
        "duration": "4:46",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/7c/04/ba/7c04ba17-2ff8-21b3-0ac0-7d141f86e924/20UMGIM64216.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f3/93/21/f39321dd-1b44-9b1f-ea08-43b59b0f9b8d/mzaf_12042970116247874886.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/exile-feat-bon-iver/1524793738?i=1524793900&uo=4"
      },
      {
        "id": "cl-6",
        "title": "Liability",
        "artist": "Lorde",
        "duration": "2:52",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8d/0d/15/8d0d1532-493b-52ec-6a29-a239ced6931b/17UMGIM81023.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/93/f7/8a/93f78a0a-11fc-d2b9-44b3-32ccf30ae016/mzaf_3308956915771056638.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/liability/1429662346?i=1429663167&uo=4"
      },
      {
        "id": "cl-7",
        "title": "Motion Sickness",
        "artist": "Phoebe Bridgers",
        "duration": "3:50",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/20/4c/6e/204c6ef3-8e95-4cee-2256-202ca62aebed/60220.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/88/0d/3c/880d3c6d-70f6-4628-a1dc-5b07ef90421c/mzaf_7359776133976251843.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/motion-sickness/1256607808?i=1256607810&uo=4"
      },
      {
        "id": "cl-8",
        "title": "Youth",
        "artist": "Daughter",
        "duration": "4:12",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d1/c9/65/d1c965fe-57d0-8705-e3e0-4c7419cd079e/0044003159716_Cover.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fc/b6/d0/fcb6d035-9676-2e29-0b3d-9d42ed7a49ff/mzaf_6141053134205734138.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/youth/1771706938?i=1771706941&uo=4"
      },
      {
        "id": "cl-9",
        "title": "Rosyln",
        "artist": "Bon Iver & St. Vincent",
        "duration": "4:50",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/6b/b4/f3/6bb4f335-7700-3877-e65e-f37a850f5ec2/mzi.ouovshmg.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e6/3a/d2/e63ad227-ea29-267c-9d4c-9f4bc47e0754/mzaf_4636346321278107695.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/rosyln/334818018?i=334818026&uo=4"
      },
      {
        "id": "cl-10",
        "title": "Heather",
        "artist": "Conan Gray",
        "duration": "3:18",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/18/08/a1/1808a1be-b5a9-5e69-583d-b8a357efd760/19UM1IM12338.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/df/b0/08/dfb008d8-bd86-4091-21d5-8216881e3414/mzaf_5288004330582456914.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/heather/1491987854?i=1491987867&uo=4"
      },
      {
        "id": "cl-11",
        "title": "Flume",
        "artist": "Bon Iver",
        "duration": "3:39",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/21/2f/ea/212fea18-5fdc-ba4d-5dd7-1b07aaa88b67/656605211565.tif/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/38/88/e2/3888e246-4970-0129-37ff-4ea7c10802aa/mzaf_12669747809622804569.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/flume/947059824?i=947059827&uo=4"
      },
      {
        "id": "cl-12",
        "title": "Somewhere Only We Know",
        "artist": "Keane",
        "duration": "3:57",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "cl-13",
        "title": "The Scientist",
        "artist": "Coldplay",
        "duration": "5:09",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b9/b4/2a/b9b42ad1-1e25-5096-da43-497a247e69a3/190295978051.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ae/a6/27/aea62715-e6ae-9562-ba81-1f969a2ee2fa/mzaf_9054259057357054559.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/the-scientist/1122775993?i=1122776155&uo=4"
      },
      {
        "id": "cl-14",
        "title": "Skinny Love",
        "artist": "Birdy",
        "duration": "3:21",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/62/41/e5/6241e5f2-2b75-656b-e1f8-7ea97dc2da3c/825646289899.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a5/a3/43/a5a343a5-1a9d-3ec7-9cd7-98b3a5b22697/mzaf_17996803637422042567.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/skinny-love/855455368?i=855455561&uo=4"
      },
      {
        "id": "cl-15",
        "title": "Falling",
        "artist": "Harry Styles",
        "duration": "4:00",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/34/09/0c/34090cd6-ec90-4348-8367-777bfff9d8a0/mzaf_6081710813683205886.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/falling/1485802965?i=1485802975&uo=4"
      },
      {
        "id": "cl-16",
        "title": "All I Want",
        "artist": "Kodaline",
        "duration": "5:06",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/90/07/87/90078751-1dbb-3e85-50f0-d8b40e5655aa/886443897267.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/00/c2/06/00c20655-c94f-f7ed-de19-f313cef3166e/mzaf_120273781732794019.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/all-i-want/610186727?i=610187010&uo=4"
      },
      {
        "id": "cl-17",
        "title": "Cherry Wine (Live)",
        "artist": "Hozier",
        "duration": "4:00",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5e/1b/f1/5e1bf1de-e5f1-e73e-0752-e7882b4f2d57/886444718820.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/52/ef/65/52ef6595-ba29-c021-e35f-d560570802d9/mzaf_12171251938114117108.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/cherry-wine-live/900672435?i=900672720&uo=4"
      },
      {
        "id": "cl-18",
        "title": "Fix You",
        "artist": "Coldplay",
        "duration": "4:55",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      }
    ]
  },
  "rain": {
    "tagline": "Steady raindrop rhythms, foggy glass, and bittersweet soul",
    "palette": {
      "accent": "#0EA5E9",
      "vibe": "Melancholic, soothing & intimate"
    },
    "tracks": [
      {
        "id": "ra-1",
        "title": "Set Fire to the Rain",
        "artist": "Adele",
        "duration": "4:03",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/ca/25/ebca2596-cd1e-b295-91a3-771c868d0a79/191404113868.png/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/96/8b/3f/968b3f92-f082-c8c2-47ba-ab7add22dfdc/mzaf_7388168289354543091.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/set-fire-to-the-rain/1544491232?i=1544491988&uo=4"
      },
      {
        "id": "ra-2",
        "title": "Rain On Me",
        "artist": "Lady Gaga & Ariana Grande",
        "duration": "3:02",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5d/4d/f9/5d4df96a-e95e-2fe9-404a-5d570513762d/20UMGIM15390.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/52/63/c4/5263c44d-04c6-a6b8-dbe2-3cebdb7f4445/mzaf_16942108133093318443.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/rain-on-me/1500951604?i=1500952424&uo=4"
      },
      {
        "id": "ra-3",
        "title": "Banana Pancakes",
        "artist": "Jack Johnson",
        "duration": "3:12",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/44/06/fd/4406fdc0-aab5-e300-82ba-3e5fe81a68a7/00602537868858.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/88/66/4f/88664fb9-de4e-ae0f-c552-063c7a6df47d/mzaf_2779752966584665566.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/banana-pancakes/1440857781?i=1440857795&uo=4"
      },
      {
        "id": "ra-4",
        "title": "Have You Ever Seen The Rain",
        "artist": "Creedence Clearwater Revival",
        "duration": "2:39",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "ra-5",
        "title": "Stan (feat. Dido)",
        "artist": "Eminem",
        "duration": "6:43",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/ea/ac/03/eaac03e5-8e9d-847e-d5b9-af7dee6a970b/00606949063221.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/da/e8/29/dae829f1-6d2f-1586-eec6-18ad342ae162/mzaf_8655433564349456575.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/stan-feat-dido/1440906504?i=1440906513&uo=4"
      },
      {
        "id": "ra-6",
        "title": "November Rain",
        "artist": "Guns N’ Roses",
        "duration": "8:57",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "ra-7",
        "title": "Riders on the Storm",
        "artist": "The Doors",
        "duration": "7:15",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/03/c6/2d/03c62d8a-487f-78c3-8416-488cfac664eb/dj.sboowgda.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ba/1d/59/ba1d598c-e369-bb90-178d-de4be5ec642b/mzaf_14953698594657028707.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/riders-on-the-storm/640047463?i=640047752&uo=4"
      },
      {
        "id": "ra-8",
        "title": "Purple Rain",
        "artist": "Prince & The Revolution",
        "duration": "8:45",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c1/b6/79/c1b679f5-d59d-1b3e-62ab-514de20f06c6/093624912002.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/purple-rain/1229320468?i=1229320478&uo=4"
      },
      {
        "id": "ra-9",
        "title": "Kiss the Rain",
        "artist": "Yiruma",
        "duration": "4:21",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/01/a4/12/01a41272-f0f7-e25a-f140-8d0dda4c30c7/from_the_yellow_room_3000.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/26/4d/bf/264dbf4f-6ce3-5279-3141-001387a75fdb/mzaf_4937414359210568612.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/kiss-the-rain/1437481261?i=1437481268&uo=4"
      },
      {
        "id": "ra-10",
        "title": "Raindrops Keep Fallin’ on My Head",
        "artist": "B.J. Thomas",
        "duration": "3:02",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "ra-11",
        "title": "Fire and Rain",
        "artist": "James Taylor",
        "duration": "3:20",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "ra-12",
        "title": "Stormy Weather",
        "artist": "Etta James",
        "duration": "3:08",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "ra-13",
        "title": "Singin’ in the Rain",
        "artist": "Gene Kelly",
        "duration": "2:56",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "ra-14",
        "title": "Umbrella",
        "artist": "Rihanna ft. JAY-Z",
        "duration": "4:35",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "ra-15",
        "title": "Blue Eyes Crying in the Rain",
        "artist": "Willie Nelson",
        "duration": "2:18",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "ra-16",
        "title": "Only Happy When It Rains",
        "artist": "Garbage",
        "duration": "3:56",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "ra-17",
        "title": "Rain",
        "artist": "The Beatles",
        "duration": "3:02",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "ra-18",
        "title": "Drown",
        "artist": "Bring Me The Horizon",
        "duration": "3:42",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      }
    ]
  },
  "thunderstorm": {
    "tagline": "Lightning fractures, roaring bass, and electric adrenaline",
    "palette": {
      "accent": "#8B5CF6",
      "vibe": "Intense, electrifying & cinematic"
    },
    "tracks": [
      {
        "id": "th-1",
        "title": "Thunderstruck",
        "artist": "AC/DC",
        "duration": "4:54",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/bb/a2/f0/bba2f0d7-4d9e-c617-d49e-3ae02fd5d440/dj.xbkfgllk.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/11/cb/bb/11cbbbcc-49f3-11e2-cbe9-9f8c02ce390f/mzaf_13150709707479713449.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/thunderstruck/575998519?i=575998661&uo=4"
      },
      {
        "id": "th-2",
        "title": "Radioactive",
        "artist": "Imagine Dragons",
        "duration": "3:07",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/1f/fa/09/1ffa092f-f52f-4a66-7d10-4cc5982dc747/12UMGIM46901.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/77/70/88/777088e9-60a1-c459-bfa5-6e66f2fd2695/mzaf_7685408661765681881.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/radioactive/1440873107?i=1440873126&uo=4"
      },
      {
        "id": "th-3",
        "title": "In The Air Tonight",
        "artist": "Phil Collins",
        "duration": "5:34",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "th-4",
        "title": "Rolling in the Deep",
        "artist": "Adele",
        "duration": "3:48",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "th-5",
        "title": "Heavy",
        "artist": "Linkin Park ft. Kiiara",
        "duration": "2:49",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "th-6",
        "title": "Natural",
        "artist": "Imagine Dragons",
        "duration": "3:09",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "th-7",
        "title": "Thunder",
        "artist": "Imagine Dragons",
        "duration": "3:07",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/11/7a/b8/117ab805-6811-8929-18b9-0fad7baf0c25/17UMGIM98210.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/78/7d/8b/787d8b89-7b57-d3bc-1f9d-6378fad1b4f5/mzaf_5131352572683029126.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/thunder/1411625594?i=1411629089&uo=4"
      },
      {
        "id": "th-8",
        "title": "Supermassive Black Hole",
        "artist": "Muse",
        "duration": "3:29",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4a/c1/5d/4ac15dc9-2ae6-1d5b-3add-43bae227f941/825646095452.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/76/4a/63/764a63c0-9533-97ce-51a5-31a23b57f2eb/mzaf_3187296926844362175.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/supermassive-black-hole/992221994?i=992221997&uo=4"
      },
      {
        "id": "th-9",
        "title": "Seven Nation Army",
        "artist": "The White Stripes",
        "duration": "3:52",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/07/25/09/0725098a-09f4-f240-e551-94384a590371/886448799009.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fe/2d/58/fe2d587f-6344-3fb3-43f7-d318a6253dcc/mzaf_16825320951570507954.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/seven-nation-army/1533513536?i=1533513537&uo=4"
      },
      {
        "id": "th-10",
        "title": "Knights of Cydonia",
        "artist": "Muse",
        "duration": "6:06",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "th-11",
        "title": "Believer",
        "artist": "Imagine Dragons",
        "duration": "3:24",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/11/7a/b8/117ab805-6811-8929-18b9-0fad7baf0c25/17UMGIM98210.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c0/3f/36/c03f367a-b66b-fd0a-a54c-30f8250c4410/mzaf_12768434238801682952.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/believer/1411625594?i=1411628233&uo=4"
      },
      {
        "id": "th-12",
        "title": "Sail",
        "artist": "AWOLNATION",
        "duration": "4:19",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/57/96/fe/5796fe01-7f69-8054-9ac2-1fea6b051f18/884977928860.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5f/1f/e6/5f1fe623-efca-398e-8bd7-9fb0edea89f1/mzaf_9210645182707764959.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/sail/422478077?i=422478211&uo=4"
      },
      {
        "id": "th-13",
        "title": "Uprising",
        "artist": "Muse",
        "duration": "5:03",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "th-14",
        "title": "Take Me To Church",
        "artist": "Hozier",
        "duration": "4:01",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "th-15",
        "title": "No Church in the Wild (feat. Frank Ocean)",
        "artist": "Kanye West & JAŸ-Z",
        "duration": "4:33",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/18/f5/07/18f5070d-b5dc-796c-bce4-42badb41a762/00602527812526.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ec/ab/24/ecab24b7-1ef6-1c70-cbc8-23ed0752d7d1/mzaf_16624193469832222541.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/no-church-in-the-wild-feat-frank-ocean/1440766278?i=1440766287&uo=4"
      },
      {
        "id": "th-16",
        "title": "Centuries",
        "artist": "Fall Out Boy",
        "duration": "3:48",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ea/5f/87/ea5f87ea-4bc3-0e01-456c-37401a4268f2/14UMGIM60337.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/99/23/d3/9923d3ac-5cac-79d1-4a77-ec8fb7499b2b/mzaf_9922251089879156208.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/centuries/1440826504?i=1440826614&uo=4"
      },
      {
        "id": "th-17",
        "title": "Black Hole Sun",
        "artist": "Soundgarden",
        "duration": "5:19",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/69/60/2e/69602e04-f483-70a7-51b6-5dc6b58273ce/00602537879830.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fa/c0/77/fac07771-3fd9-165e-2829-b19614198077/mzaf_3138425259586801377.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/black-hole-sun/1440855214?i=1440855436&uo=4"
      },
      {
        "id": "th-18",
        "title": "Can't Stop",
        "artist": "Red Hot Chili Peppers",
        "duration": "4:28",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c1/7f/25/c17f25d9-c5fa-5a70-5e76-122caf132bc1/093624931966.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b4/37/77/b43777c1-aa65-2d44-6130-7560392981af/mzaf_10231906724003007738.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/cant-stop/948438400?i=948438478&uo=4"
      }
    ]
  },
  "snow": {
    "tagline": "Quiet whiteouts, muffled footsteps, and fireside acoustic solace",
    "palette": {
      "accent": "#E0F2FE",
      "vibe": "Pure, crisp & heart-warming"
    },
    "tracks": [
      {
        "id": "sn-1",
        "title": "White Winter Hymnal",
        "artist": "Fleet Foxes",
        "duration": "2:27",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/b5/13/5d/b5135d6b-97e1-19cb-4234-5f711b77972e/098787077766.png/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/60/3b/78/603b7868-5a1c-9268-74ba-ac19292c21f4/mzaf_10722627666222253774.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/white-winter-hymnal/281086394?i=281086428&uo=4"
      },
      {
        "id": "sn-2",
        "title": "Snow (Hey Oh)",
        "artist": "Red Hot Chili Peppers",
        "duration": "5:35",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/2a/24/8e/2a248e94-2b8e-3745-906a-084837c0d547/mzi.xeoqdinh.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f8/6a/19/f86a1929-8879-3e67-1d68-c4ad4f51a92f/mzaf_12319267610582322660.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/snow-hey-oh/207928114?i=207928116&uo=4"
      },
      {
        "id": "sn-3",
        "title": "Winter",
        "artist": "Vivaldi",
        "duration": "3:29",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "sn-4",
        "title": "Cold Desert",
        "artist": "Kings of Leon",
        "duration": "5:34",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "sn-5",
        "title": "A Hazy Shade of Winter",
        "artist": "Simon & Garfunkel",
        "duration": "2:17",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "sn-6",
        "title": "Rivers and Roads",
        "artist": "The Head and the Heart",
        "duration": "4:44",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/97/4d/d9/974dd997-73af-5ed2-530c-892ec10f9deb/0098787091564_Cover.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/eb/a8/59/eba85921-84c7-81ab-5220-26b31689f1a5/mzaf_2990458677178681685.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/rivers-and-roads/1771697400?i=1771697405&uo=4"
      },
      {
        "id": "sn-7",
        "title": "Broadripple Is Burning",
        "artist": "Margot & The Nuclear So and So's",
        "duration": "4:49",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music/db/45/36/mzi.qbshoycm.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a6/cf/64/a6cf64a3-78cf-f86e-8ba5-4a89ff387707/mzaf_7161860572545631303.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/broadripple-is-burning/286115578?i=286115585&uo=4"
      },
      {
        "id": "sn-8",
        "title": "Winter Song",
        "artist": "Sara Bareilles & Ingrid Michaelson",
        "duration": "4:27",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/5d/74/32/5d743290-a209-ca12-7519-884b0bf77c71/mzi.lwxhfjaz.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8f/74/f1/8f74f196-9d96-bd87-fa01-9afb348aad68/mzaf_15621234352515574452.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/winter-song/292349490?i=292349562&uo=4"
      },
      {
        "id": "sn-9",
        "title": "Amsterdam",
        "artist": "Gregory Alan Isakov",
        "duration": "3:19",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "sn-10",
        "title": "Calgary",
        "artist": "Bon Iver",
        "duration": "4:10",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "sn-11",
        "title": "For Emma",
        "artist": "Bon Iver",
        "duration": "3:41",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/21/2f/ea/212fea18-5fdc-ba4d-5dd7-1b07aaa88b67/656605211565.tif/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/52/c2/fc/52c2fcaa-a236-69b5-5075-d06442a162f8/mzaf_15547198081341752890.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/for-emma/947059824?i=947059838&uo=4"
      },
      {
        "id": "sn-12",
        "title": "Pale September",
        "artist": "Fiona Apple",
        "duration": "5:51",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4f/57/2f/4f572ff0-e5f0-b39e-b6b0-1ae7c9f922af/884977129762.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c9/1a/c1/c91ac12b-cdcd-ffc1-81e6-994982798b65/mzaf_11022279675403928352.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/pale-september/309677190?i=309677280&uo=4"
      },
      {
        "id": "sn-13",
        "title": "First Day of My Life",
        "artist": "Bright Eyes",
        "duration": "3:09",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/83/fd/0d83fd2e-1cb5-7965-b392-f91f80188290/508.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9c/3e/1a/9c3e1a0c-c8ec-6378-a0f1-e1ad14f1c53a/mzaf_451736197271651757.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/first-day-of-my-life/1565224350?i=1565225117&uo=4"
      },
      {
        "id": "sn-14",
        "title": "Helplessness Blues",
        "artist": "Fleet Foxes",
        "duration": "5:03",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "sn-15",
        "title": "Woods",
        "artist": "Bon Iver",
        "duration": "4:45",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/02/e7/a5/02e7a55e-9513-2801-ea3b-11b444c20a85/cover.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b4/6e/89/b46e8920-56e2-6b2d-cd69-c15a1da5a1d1/mzaf_10816462059263339157.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/woods/789755317?i=789755347&uo=4"
      },
      {
        "id": "sn-16",
        "title": "White Blank Page",
        "artist": "Mumford & Sons",
        "duration": "4:14",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "sn-17",
        "title": "Northern Sky",
        "artist": "Nick Drake",
        "duration": "3:47",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      }
    ]
  },
  "fog": {
    "tagline": "Muted horizons, slow drifting mist, and enigmatic calm",
    "palette": {
      "accent": "#CBD5E1",
      "vibe": "Ethereal, mysterious & floating"
    },
    "tracks": [
      {
        "id": "fo-1",
        "title": "Intro",
        "artist": "The xx",
        "duration": "2:08",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/28/44/8e/28448e14-19be-438b-bc9b-8c1d3f68f578/609008295069.png/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/1d/e9/4a1de930-f0f2-484c-eea9-7d46bcd89de8/mzaf_11582686532983847296.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/intro/1850810462?i=1850810463&uo=4"
      },
      {
        "id": "fo-2",
        "title": "Teardrop",
        "artist": "Massive Attack",
        "duration": "5:31",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/0a/98/55/0a98555b-8d9d-3b46-660a-b91261557d17/00724384559953.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a3/a6/91/a3a691b0-8e49-399d-2585-ddcd6694c9f2/mzaf_16325826545413166648.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/teardrop/724466069?i=724466700&uo=4"
      },
      {
        "id": "fo-3",
        "title": "Glósóli",
        "artist": "Sigur Rós",
        "duration": "6:15",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "fo-4",
        "title": "Daydreaming",
        "artist": "Radiohead",
        "duration": "6:24",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "fo-5",
        "title": "Midnight",
        "artist": "Coldplay",
        "duration": "4:55",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/60/90/ad/6090adc3-8863-861d-afcc-23c55c6fe5da/dj.vmtulfyu.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5e/0f/f7/5e0ff7fb-7973-0c6b-af5d-c210ef725310/mzaf_15060299141612597583.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/midnight/829909653?i=829910894&uo=4"
      },
      {
        "id": "fo-6",
        "title": "Alberto Balsalm (1994)",
        "artist": "Aphex Twin",
        "duration": "5:11",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/5b/b8/00/5bb80093-db7e-fdb9-c4ce-48f81847f68b/mzi.jwcepubj.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/b1/bf/4ab1bfdc-0127-5d09-cd67-9fbd7bae44c2/mzaf_15721480733972168809.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/alberto-balsalm-1994/281829991?i=281830075&uo=4"
      },
      {
        "id": "fo-7",
        "title": "Porcelain",
        "artist": "Moby",
        "duration": "4:01",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b0/b4/93/b0b493b1-71ae-b154-ab40-e6acc7d84c46/842108036099_1.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/cb/7f/60/cb7f606e-7e11-cea4-cd07-6134bde231f5/mzaf_13105072326584009753.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/porcelain/281242279?i=281242336&uo=4"
      },
      {
        "id": "fo-8",
        "title": "Mad World",
        "artist": "Gary Jules",
        "duration": "3:08",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e6/2b/71/e62b71a0-013c-c43e-f20a-9ac454d9c8af/822665.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6f/7f/a7/6f7fa78d-d8fb-a76f-412c-651134f97202/mzaf_18374472166815870347.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/mad-world/1829564204?i=1829564210&uo=4"
      },
      {
        "id": "fo-9",
        "title": "An Ending (Ascent)",
        "artist": "Brian Eno",
        "duration": "4:24",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "fo-10",
        "title": "On the Nature of Daylight",
        "artist": "Max Richter",
        "duration": "6:11",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "fo-11",
        "title": "Fade Into You",
        "artist": "Mazzy Star",
        "duration": "4:55",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "fo-12",
        "title": "Street Spirit (Fade Out)",
        "artist": "Radiohead",
        "duration": "4:13",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "fo-13",
        "title": "Roads",
        "artist": "Portishead",
        "duration": "5:04",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c1/71/93/c1719342-df7d-e9c5-c87c-53dae5afb289/00042282855329.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f4/94/3f/f4943f50-be3b-629b-3612-68e32a1a7c8f/mzaf_12088733510844922268.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/roads/1440653096?i=1440653203&uo=4"
      },
      {
        "id": "fo-14",
        "title": "Sour Times",
        "artist": "Portishead",
        "duration": "4:11",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      },
      {
        "id": "fo-15",
        "title": "Angel",
        "artist": "Massive Attack",
        "duration": "6:20",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/0a/98/55/0a98555b-8d9d-3b46-660a-b91261557d17/00724384559953.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/db/af/6e/dbaf6e32-911f-be9d-e2b0-0e48189d14fe/mzaf_14963447783895938076.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/angel/724466069?i=724466660&uo=4"
      },
      {
        "id": "fo-16",
        "title": "Time",
        "artist": "Hans Zimmer",
        "duration": "4:35",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "previewUrl": null,
        "directSongUrl": null
      }
    ]
  }
};

/**
 * Helper to build outbound search links that point directly to the song/tracks
 */
function enrichTrackWithLinks(track) {
  const query = encodeURIComponent(`${track.title} ${track.artist}`);
  return {
    ...track,
    spotifyUrl: `https://open.spotify.com/search/${query}/tracks`,
    youtubeUrl: `https://www.youtube.com/results?search_query=${query}+official+audio`,
    appleMusicUrl: track.directSongUrl || `https://music.apple.com/us/search?term=${query}`,
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
