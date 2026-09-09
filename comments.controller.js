import { Router } from "express";
import { create_comments, find_or_create_comment, get_comment_by_pk, get_recent_comments_by_post, search_comments_by_word, update_comment } from "./comments.service.js";
const router = Router()

router.post("/create_comment",async(req,res)=>{
    let comment_data=await create_comments(req.body)
    res.json(comment_data)
})
router.patch("/update_comment",async(req,res)=>{
    let comment_data=await update_comment(req.body,req.params)
    res.json(comment_data)
})
router.post("/find_comment",async(req,res)=>{
    let comment_data=await find_or_create_comment(req.body)
    res.json(comment_data)
})
router.get("/search_comment",async(req,res)=>{
    let comment_data=await search_comments_by_word(req.params)
    res.json(comment_data)
})
router.get("/recent_comment",async(req,res)=>{
    let comment_data=await get_recent_comments_by_post(req.params)
    res.json(comment_data)
})
router.get("/create_users",async(req,res)=>{
    let comment_data=await get_comment_by_pk(req.params)
    res.json(comment_data)
})
export default router
