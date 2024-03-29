const express = require('express')
const router = express.Router();
const {getGoals,postGoals,updateGoals,deleteGoals} = require('../controller/goalController')

router.route('/').get(getGoals).post(postGoals);


router.route('/:id').put(updateGoals).delete(deleteGoals)


module.exports = router