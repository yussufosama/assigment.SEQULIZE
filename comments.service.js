import { Op } from "sequelize"
import { commentschema } from "../../database/model/comments.model.js"
import { userschema } from "../../database/model/users.model.js"
import { postschema } from "../../database/model/posts.model.js"




export const create_comments=async (body)=>{
    let {content,postID,userID}=body
    let data=await commentschema.create({content,postID,userID})
    data.save()
    return data
}
export const update_comment=async (params,body)=>{
    let {content,postID,userID}=body
    let {id}=params
    let data = await commentschema.update({content,postID,userID})
        if(data[0]==1){
            await data.save()
            return data
            
        }else{
            return{message:"something went wrong"}
        }
    
}
export const find_or_create_comment = async (body) => {
  let { content, postId, userId } = body
  let data= await commentschema.findOrCreate({
    where: {
      content: content,
      postId: postId,
      userId: userId,
    },
    defaults: {
      content: content,
      postId: postId,
      userId: userId,
    },
  })
  data.save()
  return {
    data
  }
}
export const search_comments_by_word = async (word) => {
  const data = await commentschema.findAndCountAll({
    where: {
      content: {
        [Op.like]: `%${word}%`,
      },
    },
  })
  return data

}
export const get_recent_comments_by_post = async (params) => {
  const comments = await commentschema.findAll({
    where: {
      postId: postId,
    },
    order: [["createdAt", "DESC"]],
    limit: 3,                       
  })

  if (!comments || comments.length === 0) {
    return {message:"there is no data"}
  }

  return comments
}
export const get_comment_by_pk = async (id) => {
  const comment = await commentschema.findByPk(id, {
    include: [
      {
        model: userschema,
        attributes: ["id", "name", "email"], 
      },
      {
        model: postschema,
        attributes: ["id", "title", "content"], 
      },
    ],
  });

  if (!comment) {
    return {message:"user not found"}
 }

  return comment
}
