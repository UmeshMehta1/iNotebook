// const express = require('express');
import express from 'express'
import User from '../models/User.js';
const router = express.Router();

router.post('/', (req,res)=>{
   
   console.log(req.body)
   const user = User(req.body);
   user.save()
   res.send(user);
    
})

export default router