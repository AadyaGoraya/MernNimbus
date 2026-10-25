/**
 * NIMBUS Curated Weather Mood Playlists
 * 8 real, well-known songs per mood+day/night variant with evocative mood taglines.
 * Includes official high-resolution album cover artwork (600x600) and playable 30s audio previews.
 */

const PLAYLISTS = {
  "clear-day": {
    "tagline": "Golden sunlight, open roads, and easy rhythms",
    "palette": {
      "accent": "#FF9A3C",
      "vibe": "Sun-drenched, radiant & energizing"
    },
    "tracks": [
      {
        "id": "cd-1",
        "title": "Here Comes the Sun",
        "artist": "The Beatles",
        "duration": "3:05",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/df/db/61/dfdb615d-47f8-06e9-9533-b96daccc029f/18UMGIM31076.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cd/7d/83/cd7d834f-34bf-7be0-1647-0fb0920d25a7/mzaf_5281747653026802926.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/here-comes-the-sun/1441164426?i=1441164589&uo=4"
      },
      {
        "id": "cd-2",
        "title": "Golden",
        "artist": "Harry Styles",
        "duration": "3:28",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/23/da/a0/23daa049-e543-2745-845a-768e15fbf013/mzaf_11620756946917001605.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/golden/1485802965?i=1485802966&uo=4"
      },
      {
        "id": "cd-3",
        "title": "Walking on Sunshine",
        "artist": "Katrina and the Waves",
        "duration": "3:59",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f6/b6/37/f6b6378c-9b34-72fb-9abe-4a6d6042ad53/13ULAIM49571.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fe/af/a9/feafa950-3d4d-6eb4-5c5c-a4170d27a605/mzaf_14050415466863438352.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/walking-on-sunshine/723501408?i=723501674&uo=4"
      },
      {
        "id": "cd-4",
        "title": "Sunflower",
        "artist": "Post Malone & Swae Lee",
        "duration": "2:38",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4b/30/2c/4b302cb6-7a14-5464-4e97-0577e9d0be49/18UMGIM82277.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/98/f0/d6/98f0d67e-f8bf-762d-cac7-1c6b3b6b35dd/mzaf_4543283896248560946.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/sunflower-spider-man-into-the-spider-verse/1445949265?i=1445949267&uo=4"
      },
      {
        "id": "cd-5",
        "title": "Sunday Best",
        "artist": "Surfaces",
        "duration": "2:38",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ed/cd/ee/edcdeef4-bc7c-a53d-7e2c-64c158c9a89a/842812115431.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/19/5d/c8/195dc887-0272-4ba1-4cb3-7f6216d102cc/mzaf_16366333469501790932.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/sunday-best/1711402061?i=1711402500&uo=4"
      },
      {
        "id": "cd-6",
        "title": "Put Your Records On",
        "artist": "Corinne Bailey Rae",
        "duration": "3:35",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/76/db/e8/76dbe8bd-fd8f-b3f7-c6a8-26f401305eb0/13UABIM52293.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/05/be/f0/05bef0b3-376e-590e-9347-cc24fefd37f3/mzaf_14835514781546194541.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/put-your-records-on/714614474?i=714614517&uo=4"
      },
      {
        "id": "cd-7",
        "title": "Lovely Day",
        "artist": "Bill Withers",
        "duration": "4:15",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/3a/93/40/3a9340a1-73f7-5bbb-86a2-15a4ba20acea/884977735840.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4d/4f/4d/4d4f4def-089f-5ead-eb65-c2e754c4eb0b/mzaf_17532940935688196080.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/lovely-day/391725408?i=391725492&uo=4"
      },
      {
        "id": "cd-8",
        "title": "Daylight",
        "artist": "Taylor Swift",
        "duration": "4:53",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9d/10/f6/9d10f6cc-8fa8-8ea1-1323-edabdcdeadae/mzaf_15969938021558823306.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/daylight/1468058165?i=1468058708&uo=4"
      }
    ]
  },
  "clear-night": {
    "tagline": "Starlit stillness, cosmic reverie, and calm night air",
    "palette": {
      "accent": "#6366F1",
      "vibe": "Cosmic, nocturnal & introspective"
    },
    "tracks": [
      {
        "id": "cn-1",
        "title": "Midnight City",
        "artist": "M83",
        "duration": "4:03",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cb/7b/a9/cb7ba903-b5f1-cc21-90db-7a81b7aa0997/724596951057.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/24/09/79/2409794c-3d5d-af26-580e-7dc00ee4f207/mzaf_369629549966021675.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/midnight-city/828259375?i=828259377&uo=4"
      },
      {
        "id": "cn-2",
        "title": "Starboy",
        "artist": "The Weeknd ft. Daft Punk",
        "duration": "3:50",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/11/71/d6/1171d6ad-3c96-e027-2af6-58028426588c/mzaf_15137631797407745471.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/starboy-feat-daft-punk/1440870373?i=1440870375&uo=4"
      },
      {
        "id": "cn-3",
        "title": "Counting Stars",
        "artist": "OneRepublic",
        "duration": "4:17",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/25/46/a7/2546a71a-b2bb-b4c9-4c52-a4daa3ae23ca/13UMGIM15076.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b0/db/7f/b0db7fbe-f8ff-1f67-fe72-ca8185ffbca2/mzaf_15298650366584767800.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/counting-stars/1471704173?i=1471704175&uo=4"
      },
      {
        "id": "cn-4",
        "title": "A Sky Full of Stars",
        "artist": "Coldplay",
        "duration": "4:27",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/60/90/ad/6090adc3-8863-861d-afcc-23c55c6fe5da/dj.vmtulfyu.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f1/24/d0/f124d058-5d43-73ca-79e4-36f5eb42b172/mzaf_12358370529108063354.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/a-sky-full-of-stars/829909653?i=829910927&uo=4"
      },
      {
        "id": "cn-5",
        "title": "Nightcall",
        "artist": "Kavinsky",
        "duration": "4:19",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c1/2d/fe/c12dfe8f-cdf6-e179-d69a-8ec35f760266/00602537248681.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d2/45/fb/d245fbf9-8570-fdc0-5e6b-aa528c130486/mzaf_11947081694159530687.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/nightcall/1442447952?i=1442447970&uo=4"
      },
      {
        "id": "cn-6",
        "title": "Space Song",
        "artist": "Beach House",
        "duration": "5:20",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/09/e0/d5/09e0d559-0682-f0f0-5e0c-3cd11e3114fd/beachhouse_depressioncherry_2400_300.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/41/61/14/416114cc-282e-4c76-2808-a3eb9c3f973d/mzaf_6665874998714897722.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/space-song/997913392?i=997914096&uo=4"
      },
      {
        "id": "cn-7",
        "title": "Moonlight",
        "artist": "Ali Gatie",
        "duration": "3:48",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/57/7b/b5577b30-d958-d5ad-f7ba-0b0df004d842/093624896074.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fe/55/db/fe55db43-0578-366a-a357-a1a14aa89cab/mzaf_2007562306188623122.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/moonlight/1484384469?i=1484384473&uo=4"
      },
      {
        "id": "cn-8",
        "title": "Wait",
        "artist": "M83",
        "duration": "5:43",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cb/7b/a9/cb7ba903-b5f1-cc21-90db-7a81b7aa0997/724596951057.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0c/19/bc/0c19bc7e-cc70-b343-81a6-b1c3b89e3e25/mzaf_12222995270625311937.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/wait/828259375?i=828259380&uo=4"
      }
    ]
  },
  "partly-cloudy": {
    "tagline": "Drifting skies, fleeting shadows, and mellow daydreaming",
    "palette": {
      "accent": "#38BDF8",
      "vibe": "Breezy, contemplative & floating"
    },
    "tracks": [
      {
        "id": "pc-1",
        "title": "Electric Feel",
        "artist": "MGMT",
        "duration": "3:49",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/29/7c/40/297c40a2-fc65-ad81-12d4-e28c8043b600/888880646842.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b8/4e/73/b84e7338-0936-a4f3-4993-848a11c49c5f/mzaf_12245665201660857941.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/electric-feel-justice-remix/284741732?i=284741737&uo=4"
      },
      {
        "id": "pc-2",
        "title": "Tongue Tied",
        "artist": "GROUPLOVE",
        "duration": "3:38",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/fa/aa/01/faaa01bd-5bb4-a678-c5eb-b9fe0ebc752a/mzi.tcmvdwba.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/69/95/cb/6995cb67-6f8d-a816-5961-9623ff38af02/mzaf_13215718285140038721.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/tongue-tied/469867730?i=469867732&uo=4"
      },
      {
        "id": "pc-3",
        "title": "Float On",
        "artist": "Modest Mouse",
        "duration": "3:28",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3a/15/73/3a1573f6-fd63-bd5d-3182-65399cbade55/mzi.kplxkuxw.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8e/b8/1d/8eb81def-1da7-d07f-97d4-a62af1e965d0/mzaf_6116804172668312758.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/float-on/190780827?i=190780833&uo=4"
      },
      {
        "id": "pc-4",
        "title": "Little Talks",
        "artist": "Of Monsters and Men",
        "duration": "4:26",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/a3/a8/c2/a3a8c2ee-79ca-f4f0-8adb-0060e04432fd/12UMGIM10062.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2d/47/ed/2d47edef-3854-096a-c49b-f6299c83e7b1/mzaf_67984575308519465.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/little-talks/1440808821?i=1440809330&uo=4"
      },
      {
        "id": "pc-5",
        "title": "Dreams",
        "artist": "Fleetwood Mac",
        "duration": "4:14",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d2/48/f4/d248f4ae-a7e4-a48e-1588-6617de3e8d76/mzi.izeorbmm.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b6/5a/4b/b65a4b6f-54dd-ee99-0b36-98e27d5b5dd8/mzaf_13813391014293209258.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/dreams/202271826?i=202272624&uo=4"
      },
      {
        "id": "pc-6",
        "title": "Breezeblocks",
        "artist": "alt-J",
        "duration": "3:47",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/14/ce/32/14ce329f-ce30-569a-725b-1b2feefdcdfc/075679959959.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/74/46/c7/7446c74e-36eb-75a0-f95e-a689282a5744/mzaf_771359046077069774.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/breezeblocks/558262493?i=558262504&uo=4"
      },
      {
        "id": "pc-7",
        "title": "Safe and Sound",
        "artist": "Capital Cities",
        "duration": "3:13",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d1/a1/54/d1a1545c-7fc7-1262-d65a-f7a9b0a3a5ca/602537370351_cover.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1d/13/67/1d1367e8-394c-ef92-9237-c4175ba038c1/mzaf_12971151638979749050.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/safe-and-sound/1766005714?i=1766005715&uo=4"
      },
      {
        "id": "pc-8",
        "title": "Riptide",
        "artist": "Vance Joy",
        "duration": "3:24",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/7a/1c/65/7a1c6571-34e9-bb77-32be-90c72ba003c0/075679920355.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1e/de/ea/1edeea50-c0f4-9d95-f0b8-b23a1af561db/mzaf_6343110017276582270.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/riptide/1022164257?i=1022164261&uo=4"
      }
    ]
  },
  "cloudy": {
    "tagline": "Velvet grey horizons, cozy isolation, and quiet thoughts",
    "palette": {
      "accent": "#94A3B8",
      "vibe": "Atmospheric, grounded & reflective"
    },
    "tracks": [
      {
        "id": "cl-1",
        "title": "Holocene",
        "artist": "Bon Iver",
        "duration": "5:36",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/87/0e/b1/870eb1eb-da2e-a51b-1ed2-3cac0e8fdd95/789577237896.png/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/d1/b8/c0/d1b8c0e1-b434-c4f1-70c2-fd4ec26a54e5/mzaf_8421999634197988050.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/holocene-instrumental/1669594530?i=1669594531&uo=4"
      },
      {
        "id": "cl-2",
        "title": "Skinny Love",
        "artist": "Birdy",
        "duration": "3:23",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/62/41/e5/6241e5f2-2b75-656b-e1f8-7ea97dc2da3c/825646289899.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a5/a3/43/a5a343a5-1a9d-3ec7-9cd7-98b3a5b22697/mzaf_17996803637422042567.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/skinny-love/855455368?i=855455561&uo=4"
      },
      {
        "id": "cl-3",
        "title": "Sweater Weather",
        "artist": "The Neighbourhood",
        "duration": "4:00",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/28/71/00/287100fb-5c31-0195-5343-e6b3625886d0/886443969834.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8c/37/20/8c372047-2727-8054-9411-0e4867643dd8/mzaf_10169659262182214119.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/sweater-weather/635016635?i=635016640&uo=4"
      },
      {
        "id": "cl-4",
        "title": "Youth",
        "artist": "Daughter",
        "duration": "4:44",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d1/c9/65/d1c965fe-57d0-8705-e3e0-4c7419cd079e/0044003159716_Cover.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fc/b6/d0/fcb6d035-9676-2e29-0b3d-9d42ed7a49ff/mzaf_6141053134205734138.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/youth/1771706938?i=1771706941&uo=4"
      },
      {
        "id": "cl-5",
        "title": "Flume",
        "artist": "Bon Iver",
        "duration": "3:39",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/21/2f/ea/212fea18-5fdc-ba4d-5dd7-1b07aaa88b67/656605211565.tif/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/38/88/e2/3888e246-4970-0129-37ff-4ea7c10802aa/mzaf_12669747809622804569.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/flume/947059824?i=947059827&uo=4"
      },
      {
        "id": "cl-6",
        "title": "Chamber of Reflection",
        "artist": "Mac DeMarco",
        "duration": "3:51",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e0/04/eb/e004eb2b-754f-4a76-9ecc-87d4eea2a327/cover.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6e/8b/6b/6e8b6b9d-0881-6810-11d9-fa081cf37d81/mzaf_15689875906597339969.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/chamber-of-reflection/6789834398?i=6789834619&uo=4"
      },
      {
        "id": "cl-7",
        "title": "Between the Bars",
        "artist": "Elliott Smith",
        "duration": "2:21",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ff/ea/28/ffea28a4-988a-f02e-7e1a-8566db3cab02/mzi.uoqucyoy.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/56/a7/df/56a7df52-3fb4-1c49-11e7-72438cb07330/mzaf_11460446142122429949.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/between-the-bars/313302066?i=313302072&uo=4"
      },
      {
        "id": "cl-8",
        "title": "White Winter Hymnal",
        "artist": "Fleet Foxes",
        "duration": "2:27",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/b5/13/5d/b5135d6b-97e1-19cb-4234-5f711b77972e/098787077766.png/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/60/3b/78/603b7868-5a1c-9268-74ba-ac19292c21f4/mzaf_10722627666222253774.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/white-winter-hymnal/281086394?i=281086428&uo=4"
      }
    ]
  },
  "rain": {
    "tagline": "Windows fogged, thoughts slow",
    "palette": {
      "accent": "#38BDF8",
      "vibe": "Gentle downpour, warm tea & melancholic bliss"
    },
    "tracks": [
      {
        "id": "rn-1",
        "title": "Set Fire to the Rain",
        "artist": "Adele",
        "duration": "4:02",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/ca/25/ebca2596-cd1e-b295-91a3-771c868d0a79/191404113868.png/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/96/8b/3f/968b3f92-f082-c8c2-47ba-ab7add22dfdc/mzaf_7388168289354543091.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/set-fire-to-the-rain/1544491232?i=1544491988&uo=4"
      },
      {
        "id": "rn-2",
        "title": "Riders on the Storm",
        "artist": "The Doors",
        "duration": "7:14",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/03/c6/2d/03c62d8a-487f-78c3-8416-488cfac664eb/dj.sboowgda.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ba/1d/59/ba1d598c-e369-bb90-178d-de4be5ec642b/mzaf_14953698594657028707.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/riders-on-the-storm/640047463?i=640047752&uo=4"
      },
      {
        "id": "rn-3",
        "title": "Rain On Me",
        "artist": "Lady Gaga & Ariana Grande",
        "duration": "3:02",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5d/4d/f9/5d4df96a-e95e-2fe9-404a-5d570513762d/20UMGIM15390.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/52/63/c4/5263c44d-04c6-a6b8-dbe2-3cebdb7f4445/mzaf_16942108133093318443.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/rain-on-me/1500951604?i=1500952424&uo=4"
      },
      {
        "id": "rn-4",
        "title": "Banana Pancakes",
        "artist": "Jack Johnson",
        "duration": "3:12",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/44/06/fd/4406fdc0-aab5-e300-82ba-3e5fe81a68a7/00602537868858.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/88/66/4f/88664fb9-de4e-ae0f-c552-063c7a6df47d/mzaf_2779752966584665566.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/banana-pancakes/1440857781?i=1440857795&uo=4"
      },
      {
        "id": "rn-5",
        "title": "Stan",
        "artist": "Eminem ft. Dido",
        "duration": "6:44",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/ea/ac/03/eaac03e5-8e9d-847e-d5b9-af7dee6a970b/00606949063221.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/da/e8/29/dae829f1-6d2f-1586-eec6-18ad342ae162/mzaf_8655433564349456575.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/stan-feat-dido/1440906504?i=1440906513&uo=4"
      },
      {
        "id": "rn-6",
        "title": "Blue in Green",
        "artist": "Miles Davis",
        "duration": "5:37",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music/7f/9f/d6/mzi.vtnaewef.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/af/5d/60/af5d603d-d0db-c066-3fe6-54bb2b51bdfb/mzaf_1714770531795139058.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/blue-in-green/268443092?i=268443131&uo=4"
      },
      {
        "id": "rn-7",
        "title": "Coffee",
        "artist": "beabadoobee",
        "duration": "2:06",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/9a/9e/05/9a9e0570-bee1-20b5-e512-38b5e1168a76/192641174858_Cover.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ad/a8/35/ada83596-5e76-e480-def6-b882ca10bfcb/mzaf_9038352204269951733.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/coffee/1435258131?i=1435258133&uo=4"
      },
      {
        "id": "rn-8",
        "title": "I Love a Rainy Night",
        "artist": "Eddie Rabbitt",
        "duration": "3:10",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b7/64/57/b7645755-1fe3-2c2f-3402-a00d165a229c/842474169308.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b0/a4/ab/b0a4abb3-7ee7-d755-bcf0-1014c4f21ae7/mzaf_2053984547502839901.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/i-love-a-rainy-night/1382703301?i=1382703303&uo=4"
      }
    ]
  },
  "thunderstorm": {
    "tagline": "Electric skies, rumbling horizons, and untamed currents",
    "palette": {
      "accent": "#A855F7",
      "vibe": "Charged, cinematic & high voltage"
    },
    "tracks": [
      {
        "id": "ts-1",
        "title": "Thunderstruck",
        "artist": "AC/DC",
        "duration": "4:52",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/bb/a2/f0/bba2f0d7-4d9e-c617-d49e-3ae02fd5d440/dj.xbkfgllk.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/11/cb/bb/11cbbbcc-49f3-11e2-cbe9-9f8c02ce390f/mzaf_13150709707479713449.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/thunderstruck/575998519?i=575998661&uo=4"
      },
      {
        "id": "ts-2",
        "title": "Radioactive",
        "artist": "Imagine Dragons",
        "duration": "3:06",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/1f/fa/09/1ffa092f-f52f-4a66-7d10-4cc5982dc747/12UMGIM46901.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/77/70/88/777088e9-60a1-c459-bfa5-6e66f2fd2695/mzaf_7685408661765681881.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/radioactive/1440873107?i=1440873126&uo=4"
      },
      {
        "id": "ts-3",
        "title": "Sail",
        "artist": "AWOLNATION",
        "duration": "4:19",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/57/96/fe/5796fe01-7f69-8054-9ac2-1fea6b051f18/884977928860.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5f/1f/e6/5f1fe623-efca-398e-8bd7-9fb0edea89f1/mzaf_9210645182707764959.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/sail/422478077?i=422478211&uo=4"
      },
      {
        "id": "ts-4",
        "title": "Supermassive Black Hole",
        "artist": "Muse",
        "duration": "3:29",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4a/c1/5d/4ac15dc9-2ae6-1d5b-3add-43bae227f941/825646095452.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/76/4a/63/764a63c0-9533-97ce-51a5-31a23b57f2eb/mzaf_3187296926844362175.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/supermassive-black-hole/992221994?i=992221997&uo=4"
      },
      {
        "id": "ts-5",
        "title": "Thunder",
        "artist": "Imagine Dragons",
        "duration": "3:07",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/11/7a/b8/117ab805-6811-8929-18b9-0fad7baf0c25/17UMGIM98210.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/78/7d/8b/787d8b89-7b57-d3bc-1f9d-6378fad1b4f5/mzaf_5131352572683029126.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/thunder/1411625594?i=1411629089&uo=4"
      },
      {
        "id": "ts-6",
        "title": "Seven Nation Army",
        "artist": "The White Stripes",
        "duration": "3:51",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/07/25/09/0725098a-09f4-f240-e551-94384a590371/886448799009.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fe/2d/58/fe2d587f-6344-3fb3-43f7-d318a6253dcc/mzaf_16825320951570507954.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/seven-nation-army/1533513536?i=1533513537&uo=4"
      },
      {
        "id": "ts-7",
        "title": "Believer",
        "artist": "Imagine Dragons",
        "duration": "3:24",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/11/7a/b8/117ab805-6811-8929-18b9-0fad7baf0c25/17UMGIM98210.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c0/3f/36/c03f367a-b66b-fd0a-a54c-30f8250c4410/mzaf_12768434238801682952.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/believer/1411625594?i=1411628233&uo=4"
      },
      {
        "id": "ts-8",
        "title": "In the Air Tonight",
        "artist": "Phil Collins",
        "duration": "5:34",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/29/3f/e0/293fe00f-f9ac-859f-bbe5-f3c2de3d83fc/603497880249.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/87/dc/e5/87dce590-ff0c-3194-dfc1-1bc9b3aa1fe5/mzaf_1137975488766871124.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/in-the-air-tonight/1076779219?i=1076779225&uo=4"
      }
    ]
  },
  "snow": {
    "tagline": "Quiet snowfall, frosted glass, and muffled footsteps",
    "palette": {
      "accent": "#67E8F9",
      "vibe": "Pristine, crystalline & serene chill"
    },
    "tracks": [
      {
        "id": "sn-1",
        "title": "Snow (Hey Oh)",
        "artist": "Red Hot Chili Peppers",
        "duration": "5:34",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/2a/24/8e/2a248e94-2b8e-3745-906a-084837c0d547/mzi.xeoqdinh.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f8/6a/19/f86a1929-8879-3e67-1d68-c4ad4f51a92f/mzaf_12319267610582322660.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/snow-hey-oh/207928114?i=207928116&uo=4"
      },
      {
        "id": "sn-2",
        "title": "Winter",
        "artist": "Tori Amos",
        "duration": "5:41",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/92/4a/1b/924a1b3a-7fb3-2681-7fd1-01ecbf7e8204/s02.xckeknns.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6f/47/d0/6f47d08b-8057-9bc9-d27c-840fe0277d2f/mzaf_14818847011797541238.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/winter/3654964?i=3654468&uo=4"
      },
      {
        "id": "sn-3",
        "title": "Hazy Shade of Winter",
        "artist": "Simon & Garfunkel",
        "duration": "2:17",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/1c/3c/09/1c3c0934-8ae5-fc87-2647-e104057d41f4/074640952920.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e9/8c/67/e98c676e-8884-7cce-d4cf-7fdfc4cf3f38/mzaf_1865612353382093103.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/a-hazy-shade-of-winter/203303421?i=203304629&uo=4"
      },
      {
        "id": "sn-4",
        "title": "Roslyn",
        "artist": "Bon Iver & St. Vincent",
        "duration": "4:49",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/6b/b4/f3/6bb4f335-7700-3877-e65e-f37a850f5ec2/mzi.ouovshmg.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e6/3a/d2/e63ad227-ea29-267c-9d4c-9f4bc47e0754/mzaf_4636346321278107695.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/rosyln/334818018?i=334818026&uo=4"
      },
      {
        "id": "sn-5",
        "title": "Cold Little Heart",
        "artist": "Michael Kiwanuka",
        "duration": "9:57",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c4/ad/7e/c4ad7e3d-11c5-a0dc-801a-605dd6764147/16UMGIM11863.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2e/3a/48/2e3a4814-1fd2-c92e-cf05-d55717c7e339/mzaf_10627100711625513087.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/cold-little-heart/1440832200?i=1440832486&uo=4"
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
        "title": "Broadripple is Burning",
        "artist": "Margot & the Nuclear So and So’s",
        "duration": "5:18",
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
        "id": "fg-1",
        "title": "Intro",
        "artist": "The xx",
        "duration": "2:07",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/28/44/8e/28448e14-19be-438b-bc9b-8c1d3f68f578/609008295069.png/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/1d/e9/4a1de930-f0f2-484c-eea9-7d46bcd89de8/mzaf_11582686532983847296.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/intro/1850810462?i=1850810463&uo=4"
      },
      {
        "id": "fg-2",
        "title": "Teardrop",
        "artist": "Massive Attack",
        "duration": "5:29",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/0a/98/55/0a98555b-8d9d-3b46-660a-b91261557d17/00724384559953.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a3/a6/91/a3a691b0-8e49-399d-2585-ddcd6694c9f2/mzaf_16325826545413166648.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/teardrop/724466069?i=724466700&uo=4"
      },
      {
        "id": "fg-3",
        "title": "Breathe Me",
        "artist": "Sia",
        "duration": "4:34",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/68/fd/a8/68fda820-dbb9-d9d1-3c81-c9822e43e4fd/00094634810357.rgb.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0e/f6/3a/0ef63aed-db6b-b2d0-92dd-d0812a542bb5/mzaf_5359865937426457300.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/breathe-me/714520927?i=714521368&uo=4"
      },
      {
        "id": "fg-4",
        "title": "Mystery of Love",
        "artist": "Sufjan Stevens",
        "duration": "4:08",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/06/92/3c/06923c8d-1524-b097-1779-b7aebbd6aec2/CMBYN_Mystery_of_Love_Digital_Cover.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/73/5f/3d/735f3ddf-b063-1f18-db94-ab20e888edb3/mzaf_16854351342495465745.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/mystery-of-love-from-call-me-by-your-name/1318981693?i=1318981699&uo=4"
      },
      {
        "id": "fg-5",
        "title": "Cigarettes After Sex",
        "artist": "Apocalypse",
        "duration": "4:50",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b3/5e/0f/b35e0fbe-2370-fc48-0f0c-977525e93bf2/720841214601_Cover.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b1/43/b0/b143b0ee-863a-8f7c-3c56-a67110ef1591/mzaf_10438092015459317290.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/apocalypse/1217977525?i=1217977755&uo=4"
      },
      {
        "id": "fg-6",
        "title": "Motion Picture Soundtrack",
        "artist": "Radiohead",
        "duration": "3:20",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/45/fb/81/45fb8153-21f0-8a66-ba39-4bbd66a12be0/191404116654.png/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/95/05/c1/9505c1be-4ef7-57d3-a1ef-712d858095e3/mzaf_5849590265332793360.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/motion-picture-soundtrack/1581785974?i=1581786358&uo=4"
      },
      {
        "id": "fg-7",
        "title": "Porcelain",
        "artist": "Moby",
        "duration": "4:01",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b0/b4/93/b0b493b1-71ae-b154-ab40-e6acc7d84c46/842108036099_1.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/cb/7f/60/cb7f606e-7e11-cea4-cd07-6134bde231f5/mzaf_13105072326584009753.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/porcelain/281242279?i=281242336&uo=4"
      },
      {
        "id": "fg-8",
        "title": "Mad World",
        "artist": "Gary Jules",
        "duration": "3:07",
        "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e6/2b/71/e62b71a0-013c-c43e-f20a-9ac454d9c8af/822665.jpg/600x600bb.jpg",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6f/7f/a7/6f7fa78d-d8fb-a76f-412c-651134f97202/mzaf_18374472166815870347.plus.aac.p.m4a",
        "directSongUrl": "https://music.apple.com/us/album/mad-world/1829564204?i=1829564210&uo=4"
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
    // /tracks ensures Spotify opens the exact tracks list, not user playlists
    spotifyUrl: `https://open.spotify.com/search/${query}/tracks`,
    // Direct song video search
    youtubeUrl: `https://www.youtube.com/results?search_query=${query}+official+audio`,
    appleMusicUrl: track.directSongUrl || `https://music.apple.com/us/search?term=${query}`,
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
