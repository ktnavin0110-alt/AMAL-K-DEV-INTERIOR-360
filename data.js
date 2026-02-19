var APP_DATA = {
  "scenes": [
    {
      "id": "0-formal-living",
      "name": "FORMAL LIVING",
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
        "yaw": 0.00021304371056096727,
        "pitch": 0.05307807219676164,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": -1.794842038527019,
          "pitch": -0.24599184462987012,
          "rotation": 0,
          "target": "1-familyliving"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-familyliving",
      "name": "FAMILYLIVING",
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
          "yaw": 0.7068526673712086,
          "pitch": 0.018308189619082427,
          "rotation": 4.71238898038469,
          "target": "0-formal-living"
        },
        {
          "yaw": 1.6917853355442967,
          "pitch": 0.07079463952648446,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "DINING",
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
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": -2.4994259615815118,
          "pitch": 0.03985544768631755,
          "rotation": 1.5707963267948966,
          "target": "4-parents-bed"
        },
        {
          "yaw": -1.3351826228627566,
          "pitch": 0.12466308809441529,
          "rotation": 0,
          "target": "1-familyliving"
        },
        {
          "yaw": 2.099893304517634,
          "pitch": 0.14428267207394185,
          "rotation": 0,
          "target": "6-guest-bed"
        },
        {
          "yaw": 1.1879092661988686,
          "pitch": -0.220036614054397,
          "rotation": 0.7853981633974483,
          "target": "8-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "KITCHEN",
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
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8151898807198368,
          "pitch": 0.005575452967127248,
          "title": "WORKAREA",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "4-parents-bed",
      "name": "PARENTS BED",
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
          "yaw": -1.8991323932498414,
          "pitch": 0.1929835950482115,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": -1.5941095848793836,
          "pitch": 0.35054813548139485,
          "rotation": 1.5707963267948966,
          "target": "5-parents-bed-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-parents-bed-toilet",
      "name": "PARENTS BED-TOILET",
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
          "yaw": 3.0041556057359218,
          "pitch": 0.032281789990365795,
          "rotation": 0,
          "target": "4-parents-bed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-guest-bed",
      "name": "GUEST BED",
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
          "yaw": 0.24687411267868242,
          "pitch": -0.03147655075318134,
          "rotation": 1.5707963267948966,
          "target": "7-guest-bed-toilet"
        },
        {
          "yaw": 2.203882405758499,
          "pitch": 0.007649354411512377,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-guest-bed-toilet",
      "name": "GUEST BED-TOILET",
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
          "yaw": 2.931095078549051,
          "pitch": 0.12488345174340587,
          "rotation": 0,
          "target": "6-guest-bed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-upper-living",
      "name": "UPPER LIVING",
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
          "yaw": 1.600184503090638,
          "pitch": 0.31510240060392825,
          "rotation": 10.210176124166829,
          "target": "2-dining"
        },
        {
          "yaw": 2.153941023555366,
          "pitch": 0.21076080630369098,
          "rotation": 0,
          "target": "12-bedroom-4"
        },
        {
          "yaw": -2.5119471756585305,
          "pitch": 0.13929854099918337,
          "rotation": 0,
          "target": "9-masterbedroom-entry"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6044567639934435,
          "pitch": 0.05894660634323046,
          "title": "OPEN TERRACE",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "9-masterbedroom-entry",
      "name": "MASTERBEDROOM ENTRY",
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
          "yaw": -1.7705415960964395,
          "pitch": 0.3059415689430782,
          "rotation": 4.71238898038469,
          "target": "11-masterbedroom-toilet"
        },
        {
          "yaw": -1.4460022579250857,
          "pitch": 0.08669209310686554,
          "rotation": 4.71238898038469,
          "target": "10-masterbedroom"
        },
        {
          "yaw": 1.4322063551356434,
          "pitch": -0.09316171245836102,
          "rotation": 0,
          "target": "8-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-masterbedroom",
      "name": "MASTERBEDROOM",
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
          "yaw": -2.101253970465141,
          "pitch": 0.10756358820873935,
          "rotation": 1.5707963267948966,
          "target": "9-masterbedroom-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-masterbedroom-toilet",
      "name": "MASTERBEDROOM TOILET",
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
          "yaw": 2.667697214215611,
          "pitch": 0.1521714674294241,
          "rotation": 0,
          "target": "9-masterbedroom-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bedroom-4",
      "name": "BEDROOM 4",
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
          "yaw": -0.591275174744764,
          "pitch": 0.15404005325780545,
          "rotation": 0,
          "target": "13--bedroom-4-dressing"
        },
        {
          "yaw": 1.9443305750460533,
          "pitch": 0.24103910753168378,
          "rotation": 0,
          "target": "8-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13--bedroom-4-dressing",
      "name": " BEDROOM 4 DRESSING",
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
          "yaw": -1.3428561965864425,
          "pitch": 0.2593254271613574,
          "rotation": 10.995574287564278,
          "target": "12-bedroom-4"
        },
        {
          "yaw": -1.8642389226134437,
          "pitch": 0.6059232809253157,
          "rotation": 10.995574287564278,
          "target": "14-bedroom-4-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bedroom-4-toilet",
      "name": "BEDROOM 4 TOILET",
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
          "yaw": 2.810083517706193,
          "pitch": 0.06762450832681388,
          "rotation": 0,
          "target": "13--bedroom-4-dressing"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "AMAL K DEV RESIDENCE",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
