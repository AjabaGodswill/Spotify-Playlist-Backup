const express = require('express');
// const { body } = require('express-validator/check');

const playlistController = require('../controllers/playlist');

const router = express.Router();

router.get('/', playlistController.index)

router.get('/playlist', playlistController.getPlaylist)

router.get('/backup', playlistController.backupPlaylist)

// module.exports = router;
module.exports = router;
