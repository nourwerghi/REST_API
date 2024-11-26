const express = require ("express");
const mongoose = require("mongoose")
const router = express.Router();
const User = require("../models/User");

//POST: Add a new user
router.post("/", async (req, res) => {
  try {
    const Users= req.body;
    const savedusers = await User.insertMany(Users)  
     res.status(201).json(savedusers);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
})

  
  //GET
   router.get("/:id", async (req,res)=>{
    try {
        const id = req.params.id
        const result = await User.findById(id);
      if (!result) {
        return res.status(404).json({ error: "User not found" }); 
    }


    res.status(200).json(result); 
} catch (error) {
    console.log(error); 


    res.status(500).json({ error: "Internal Server Error" });
}
});
     //PUT
     router.put('/:id', async (req, res) => {
       try {
         const userId = req.params.id;  
         const { name } = req.body; 
         const updatedUser = await User.findByIdAndUpdate(
           userId, 
           { $set: { name: name } }, 
           { new: true } 
         );
     
         if (!updatedUser) {
           return res.status(404).json({ error: 'User not found' });
         }
     
         res.status(200).json(updatedUser);
       } catch (err) {
         res.status(500).json({ error: err.message });
       }
     });
     
     module.exports = router;
     
       //DELETE
    router.delete('/:id', async (req, res) => {
    try {
      const UserId = req.params.id;
      const deletedUser = await User.findByIdAndDelete(UserId);
      if (!deletedUser) {return res.status(404).json({ error: 'User not found' })};
      res.status(200).json({ message: 'User deleted', deletedUser });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });






module.exports = router;
