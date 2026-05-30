const router = require("express").Router();
router.get('/',(req,res) =>{
    res.json([{
        id:1,
        name:"Laptop",
        price:50000
    }])
})
module.exports = router;