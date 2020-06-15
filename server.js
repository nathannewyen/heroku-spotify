const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv')
const querystring = require('querystring');
const request = require('request');

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

const app = express();

app.use(cors());
// Setting
app.use(express.static(__dirname + "/spotify/dist/spotify"));

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get('/login', (req, res) => {
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: process.env.SPOTIFY_CLIENT_ID,
            scope: 'user-read-recently-played user-read-private user-read-email user-top-read playlist-modify-public playlist-modify-private playlist-read-private playlist-read-collaborative user-follow-read',
            redirect_uri: process.env.REDIRECT_URI
        }));
});

app.get('/callback', (req, res) => {
    const code = req.query.code || null;

    const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
            code: code,
            redirect_uri: process.env.REDIRECT_URI,
            grant_type: 'authorization_code'
        },
        headers: {
            'Authorization': 'Basic ' + (new Buffer.from(
                process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
            ).toString('base64'))
        },
        json: true
    };

    request.post(authOptions, (error, response, body) => {
        const access_token = body.access_token;
        const uri = process.env.FRONTEND_URI;
        res.redirect(uri + '?access_token=' + access_token);
    });
});

require("./server/config/routes.js")(app);

// Localhost
app.listen(5000);