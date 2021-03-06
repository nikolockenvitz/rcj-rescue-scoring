define({ "api": [
  {
    "type": "get",
    "url": "/auth/logout",
    "title": "Request logout",
    "name": "GetLogout",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>This function is used for logging out. This means you are cleared from the server, so even though the cookie is left it doesnt know you.</p>",
    "filename": "routes/api/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Request login",
    "name": "PostLogin",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>This authentication method uses cookies and for that you need suppot for cookies. The complete return is in the cookie header. This is not the best way to do it (should use oauth2).</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Bottled message</p>"
          }
        ],
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Bottled message</p>"
          }
        ]
      }
    },
    "filename": "routes/api/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "/runs/line/:runid",
    "title": "Delete run",
    "name": "DeleteRun",
    "group": "Run",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "runid",
            "description": "<p>The run id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Success msg</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>The error message</p>"
          }
        ]
      }
    },
    "filename": "routes/api/lineRuns.js",
    "groupTitle": "Run"
  },
  {
    "type": "post",
    "url": "/runs/line",
    "title": "Create new run",
    "name": "PostRun",
    "group": "Run",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "competition",
            "description": "<p>The competition id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "round",
            "description": "<p>The round id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "team",
            "description": "<p>The team id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>The field id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "map",
            "description": "<p>The map id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Success msg</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The new run id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>The error message</p>"
          }
        ]
      }
    },
    "filename": "routes/api/lineRuns.js",
    "groupTitle": "Run"
  },
  {
    "type": "put",
    "url": "/runs/line/:runid",
    "title": "Update run",
    "name": "PutRun",
    "group": "Run",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "runid",
            "description": "<p>The run id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "tiles",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "tiles.isDropTile",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "tiles.scoredItems",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "tiles.scoredItems.obstacles",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "tiles.scoredItems.speedbumps",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "tiles.scoredItems.intersection",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "tiles.scoredItems.gaps",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "tiles.scoredItems.dropTile",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "LoPs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "evacuationLevel",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "exitBonus",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "rescuedLiveVictims",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "rescuedDeadVictims",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "score",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "showedUp",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "time.minutes",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "time.seconds",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Success msg</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "score",
            "description": "<p>The current score</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>The error message</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>The error message</p>"
          }
        ]
      }
    },
    "filename": "routes/api/lineRuns.js",
    "groupTitle": "Run"
  }
] });
