const { Router } = require('express');
const taskRouter = require('./task');

const router = Router();

router.use('/task', taskRouter);

module.exports = router;
