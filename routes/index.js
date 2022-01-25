const express = require('express');
const router = express.Router();

const userActionsHelper = require('../helpers/userActions');

router.route('/')
 .get(userActionsHelper.getRandomQuote);

module.exports = router;