const asyncHandler = require('express-async-handler');

//@desc Set Goals
//@rout Get api/goals
//access private
const getGoals =asyncHandler  ((req, res) => {
    {res.status(200).json({message:'hi10iii'})}
})

//@desc Set Goal
//@rout Post api/goals
//access private
const postGoals = asyncHandler ((req, res) => {
    console.log("post body request ......" ,req.body)
    if(!req.params.text) {
        res.status(400)
        throw new Error("please enter value ")
    }else
    res.status(200).json({message:'creat'})
})

//@desc edit Goal
//@rout PUT api/goals:id
//access private
const updateGoals = asyncHandler ((req, res) => {
    res.status(200).json({message:`edit ${req.params.id}`})
})

//@desc delete Goal
//@rout DELETE api/goals
//access private
const deleteGoals =  asyncHandler((req, res) => {
    res.status(200).json({message:`delete ${req.params.id}`})
})
module.exports = {
    getGoals,
    postGoals,
    updateGoals,
    deleteGoals
}