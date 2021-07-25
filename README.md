# Net-Ninja-API-Tutorial
completed code from Net Ninja Youtube series

## Screenshots
<p align="center">
  <img alt="Image1" src="https://github.com/imamhossain94/mongo-express/blob/main/screenshots/image1.png" width="100%">
  <img alt="image" src="https://github.com/imamhossain94/mongo-express/blob/main/screenshots/image2.png" width="100%">
</p>


#### Collection Name: ninjas


#### All The Routes:


#### Get Request

http://localhost:4000/api/ninjas/?lng=-80&lat=25
```json
[
    {
        "_id": "60eeb1f855223c5f7caab415",
        "available": true,
        "name": "ken",
        "rank": "red belt",
        "geometry": {
            "type": "point",
            "coordinates": [
                -80.245,
                25.391
            ],
            "_id": "60eeb1f855223c5f7caab416"
        },
        "__v": 0,
        "dist": {
            "calculated": 50035.00234462694
        }
    },
    {
        "_id": "60eeb21e55223c5f7caab41e",
        "available": true,
        "name": "Dhalsim",
        "rank": "yellow belt",
        "geometry": {
            "type": "point",
            "coordinates": [
                -80.75,
                24.6
            ],
            "_id": "60eeb21e55223c5f7caab41f"
        },
        "__v": 0,
        "dist": {
            "calculated": 87901.68164056083
        }
    }
]
```

#### Post Request

http://localhost:3000/api/ninjas/
```json
{
  "name": "ryu",
  "rank": "black belt",
  "available": true,
  "geometry" : {"type": "point", "coordinates": [-80, 25.791]}
}
```

#### Put Request

http://localhost:3000/api/ninjas/60eeb1e855223c5f7caab412


#### Delete Request

http://localhost:3000/api/ninjas/60eeb1e855223c5f7caab412


Add all object in the database using post request
```json
{
  "name": "ryu",
  "rank": "black belt",
  "available": true,
  "geometry" : {"type": "point", "coordinates": [-80, 25.791]}
}

{
  "name": "ken",
  "rank": "red belt",
  "available": true,
  "geometry" : {"type": "point", "coordinates": [-80.245, 25.391]}
}

{
  "name": "chun li",
  "rank": "purple belt",
  "available": true,
  "geometry" : {"type": "point", "coordinates": [-80.789, 25.701]}
}

{
  "name": "Guile",
  "rank": "brown belt",
  "available": true,
  "geometry" : {"type": "point", "coordinates": [-81.1, 24.95]}
}

{
  "name": "Dhalsim",
  "rank": "yellow belt",
  "available": true,
  "geometry" : {"type": "point", "coordinates": [-80.750, 24.60]}
}

{
  "name": "E Honda",
  "rank": "no belt",
  "available": true,
  "geometry" : {"type": "point", "coordinates": [-81.500, 24.10]}
}﻿
```