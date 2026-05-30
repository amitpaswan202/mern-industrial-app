const router = require("express").Router();
router.get('/',(req,res) =>{
    res.json([{
        id:1,
        name:"Laptop",
        price:50000
    },{
        id:2,
        name:"Mobile",
        price:25000
    },{
        id:3,
        name:"Watch",
        price:12000
    }])
})
module.exports = router;