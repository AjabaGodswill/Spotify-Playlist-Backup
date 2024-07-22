const fs = require('fs');
const path = require('path');
require('dotenv').config()
const axios = require('axios');
// const { validationResult } = require('express-validator/check');

const User = require('../models/User');
const { error } = require('console');

exports.login = (res, req, next) => {
    const scope = 'user-read-private user-read-email'

    const params = {
        'client_id': process.env.SPOTIFY_CLIENT_ID,
        'response_type': 'code',
        'scope': scope,
        'redirect_uri': process.env.REDIRECT_URI,
        'show_dialog': true
    }

    const authUrl = `${process.env.Auth_URL}?${querystring.stringify(params)}`

    return res.redirect(authUrl)

}

exports.callback = async (req, res, next) => {
    if ('err' in req) {
        return JSON.stringify({ "err": req['err'] })
    }

    if ('code' in req) {
        req.body = {
            'code': req.args['code'],
            'grantType': 'authorizationCode',
            'redirectUrl': process.env.REDIRECT_URI,
            'client_id': process.env.SPOTIFY_CLIENT_ID,
            'clientSecret': process.env.SPOTIFY_CLIENT_SECRET
        }
        try {


            const response = await axios.post(process.env.TOKEN_URL, data = req.body)
            tokenInfo = response.data

            const expiresAt = Math.floor(Date.now() / 1000) + tokenInfo.expires_in;

            req.session.accessToken = tokenInfo.accessToken
            req.session.refreshToken = tokinInfo.refreshToken
            req.session.expiresAt = expiresAt
        } catch (error) {
            console.error('Error fetching token:', error);
            res.status(500).send('Error fetching token');
        }

        return res.redirect('/playlists')
    }
}

exports.playlists = (req, res, next) => {

}