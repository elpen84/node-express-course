const express = require('express');
const router = express.Router();



//routes
router.route('/').get(( req, res) =>{
res.send('all tasks')

})



module.exports = router


