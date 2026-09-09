import { where } from "sequelize"
import { userschema } from "../../database/model/users.model.js"






export const add_user= async (body)=>{
    let {name,email,password,role} = body
    let existed_user=await userschema.findOne({where: {email}})
    if(existed_user){
        return{message: "user alrady exists"}
    }else{
        await userschema.create({name,email,password,role})
        await existed_user.save()
        return {message:"user added successfuly"}
    }

}
export const update_user_by_id=async(body,params)=>{
    let {name,email,password,role}=body
    let {id}=params
    let updated_user = await userschema.update({name,email,password,role})
    if(updated_user[0]==1){
        await updated_user.save()
        return updated_user
        
    }else{
        return{message:"something went wrong"}
    }
}

export const find_user_by_id =async(params)=>{
    let{id}=params
    let find_user= await userschema.findByPk(id)
    if(find_user){
        return find_user
    }else{
        return {message:"user not found"}
    }

}
export const find_user_by_id_excluding_role =async(params)=>{
    let{id}=params
    let find_user= await userschema.findByPk(id,{
        attributes:{exclude:"[role]"}
    })
    if(find_user){
        return find_user
    }else{
        return {message:"user not found"}
    }
}
