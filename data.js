var APP_DATA = {
  "scenes": [
    {
      "id": "0-nva---entry-pano-vr_nva_-_entry",
      "name": "NVA - Entry Pano VR_NVA_-_Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.6231562043547356,
        "pitch": 0.08496408823736346,
        "fov": 1.4661211029866583
      },
      "linkHotspots": [
        {
          "yaw": -1.431169986635357,
          "pitch": 0.06381954378654875,
          "rotation": 6.283185307179586,
          "target": "2-nva---courtyard-pano-vr"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3179865930841004,
          "pitch": 0.10860682537025923,
          "title": "Main Courtyard",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-nva---entry-pano-vr_nva_-_fishing_pond",
      "name": "NVA - Entry Pano VR_NVA_-_Fishing_Pond",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.4977105494402672,
        "pitch": 0.17154637299898923,
        "fov": 1.4661211029866583
      },
      "linkHotspots": [
        {
          "yaw": 1.5570467203960057,
          "pitch": 0.01029135262953318,
          "rotation": 0,
          "target": "2-nva---courtyard-pano-vr"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6649495219916854,
          "pitch": 0.05868811281154862,
          "title": "Main Courtyard",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-nva---courtyard-pano-vr",
      "name": "NVA - Courtyard Pano VR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.616480206919217,
          "pitch": 0.01663511943039886,
          "rotation": 0,
          "target": "1-nva---entry-pano-vr_nva_-_fishing_pond"
        },
        {
          "yaw": 1.565917307380552,
          "pitch": 0.10983377410136796,
          "rotation": 0,
          "target": "0-nva---entry-pano-vr_nva_-_entry"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.615323373178537,
          "pitch": 0.12848087826976773,
          "title": "Fishing Pond",
          "text": "Text"
        },
        {
          "yaw": 1.571631800680116,
          "pitch": 0.249172131574662,
          "title": "Courtyard",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "NVA- Pano - Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
