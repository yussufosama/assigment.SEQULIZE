import {Router} from "express"
import { create_post, delete_post, get_post } from "./posts.service.js"


const router=Router()
router.post("/add_post",async(req,res)=>{
    let post_data= await create_post(req.body)
    res.json(post_data)
})
router.delete("/delete_user",async(req,res)=>{
    let post_data = await delete_post(req.params)
    res.json(post_data)
})
router.get("/all_posts",async(req,res)=>{
    let post_data = await get_post()
    res.json(post_data)
})




export default router
