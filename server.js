import { createRequire } from "module";
const require = createRequire(import.meta.url);

const PORT = 8000

const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express() 
/*const corsOptions = {
    origin:["http://localhost:5173"],
}*/

app.use(cors())

// api call from NASA and USGS
app.get('/apinasa', (req, res) => {
    const { naturalEvent } = req.query;
    const { numOfEvents } = req.query;
    const options = {
        method: 'GET',
        url: 'https://eonet.gsfc.nasa.gov/api/v3/events?category=' + naturalEvent + '&limit=' + numOfEvents + '&api_key=' + process.env.NASA_API_KEY
    }
    console.log(naturalEvent);
    console.log(numOfEvents);

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.log(error)
    })
})

app.get('/apipastevents', (req, res) => {
    const { naturalEvent } = req.query;
    const { numOfEvents } = req.query;
    const options = {
        method: 'GET',
        url: 'https://eonet.gsfc.nasa.gov/api/v3/events?status=all&limit=' + numOfEvents + '&category=' + naturalEvent + '&api_key=' + process.env.NASA_API_KEY
    }
    console.log(naturalEvent);
    console.log(numOfEvents);

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.log(error)
    })
})

// for chart data
app.get('/severeStorms', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://eonet.gsfc.nasa.gov/api/v3/events?status=all&category=severeStorms&api_key=' + process.env.NASA_API_KEY
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.log(error)
    })
})

app.get('/volcanoes', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://eonet.gsfc.nasa.gov/api/v3/events?status=all&category=volcanoes&api_key=' + process.env.NASA_API_KEY
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.log(error)
    })
})

app.get('/seaLakeIce', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://eonet.gsfc.nasa.gov/api/v3/events?status=all&category=seaLakeIce&api_key=' + process.env.NASA_API_KEY
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.log(error)
    })
})

app.get('/wildfires', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://eonet.gsfc.nasa.gov/api/v3/events?category=wildfires&api_key=' + process.env.NASA_API_KEY
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.log(error)
    })
})

app.get('/drought', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://eonet.gsfc.nasa.gov/api/v3/events?status=all&category=drought&api_key=' + process.env.NASA_API_KEY
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.log(error)
    })
})

app.get('/floods', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://eonet.gsfc.nasa.gov/api/v3/events?status=all&category=floods&api_key=' + process.env.NASA_API_KEY
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.log(error)
    })
})

app.get('/dustHaze', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://eonet.gsfc.nasa.gov/api/v3/events?status=all&category=dustHaze&api_key=' + process.env.NASA_API_KEY
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.log(error)
    })
})

app.get('/landslides', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://eonet.gsfc.nasa.gov/api/v3/events?status=all&category=landslides&api_key=' + process.env.NASA_API_KEY
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.log(error)
    })
})

app.get('/snow', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://eonet.gsfc.nasa.gov/api/v3/events?status=all&category=snow&api_key=' + process.env.NASA_API_KEY
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.log(error)
    })
})

app.get('/tempExtremes', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://eonet.gsfc.nasa.gov/api/v3/events?status=all&category=tempExtremes&api_key=' + process.env.NASA_API_KEY
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.log(error)
    })
})


// api call from Mapbox
app.get('/map', (req, res) => {

   // mapboxgl.accessToken = process.env.VITE_MAPBOX_API_KEY;
   //https://api.mapbox.com/styles/v1/{owner}/{style_id}?access_token=YOUR_MAPBOX_ACCESS_TOKEN
    
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

