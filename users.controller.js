import { Router } from "express";
import { add_user, find_user_by_id_excluding_role, update_user_by_id } from "./users.service.js";
const router = Router()

router.post("/add_user",async (req,res)=>{
    let user_data= await add_user(req.body)
    res.json(user_data)
})
router.put("/add_user/:id",async(req,res)=>{
    let user_data= await update_user_by_id(req.body,req.params)
    res.json(user_data)
})
router.get("/get_user_by_id/:id",async(req,res)=>{
    let user_data = await find_user_by_id(req.params)
    res.json(user_data)
})
router.get("/get_user_by_id_exclude_role/:id",async(req,res)=>{
    let user_data = await find_user_by_id_excluding_role(req.params)
    res.json(user_data)
})


export default router
