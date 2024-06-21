const fs = require('fs');
const path = require('path');

// const { validationResult } = require('express-validator/check');

const Playlist = require('../models/Playlist')


exports.index = (req, res, next) => {
    res.send('Welcome to my spotify playlist backup app <a href="/Auth/Login">Login with spotiify<a/>')
}

exports.getPlaylist = (req, res, next) => {
res.send("All PlayLIsts")
}


exports.backupPlaylist = (req, res, next) => {
    res.send("Playlist backed up successfully")
}

