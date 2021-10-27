const router = require('express').Router();
const Alien = require('../models/alien');
router.get('/', async (req,res) => {
    try {
        const aliens = await Alien.find();
        await res.status(200).json({status:'success', data:aliens});        

    } catch (error) {
        console.log(error);
       await res.status(404).json({status:'error', message:'aliens not found'});        
    }
})


module.exports = router;