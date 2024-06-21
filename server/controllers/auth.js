const fs = require('fs');
const path = require('path');
require('dotenv').config()

// const { validationResult } = require('express-validator/check');

const User = require('../models/User')

exports.login = (res, req, next) => {
    const scope = 'user-read-private user-read-email'

    const params = {
        'client_id': process.env.SPOTIFY_CLIENT_ID,
        'response_type': 'code',
        'scope': scope,
        'redirect_uri': process.env.REDIRECT_URI,
        'show_dialog': True
    }

    const authUrl = `${process.env.Auth_URL}?${querystring.stringify(params)}`

    // const urlParams = new

    // const redirectUrl = `${auth_url}?${urlParams.toString()}/`

    return res.redirect(authUrl)
}