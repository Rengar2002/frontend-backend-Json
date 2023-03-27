const Router = require('express');
const router = new Router();
const main = require('./main')

router.use("/",main);

module.exports = router;