import { postschema } from "./model/posts.model.js"
import { userschema } from "./model/users.model.js"
import { commentschema } from "./model/comments.model.js"


userschema.hasMany(postschema, {foreignKey :"userID"})
postschema.belongsTo(userschema,{foreignKey:"userID"})
userschema.hasMany(commentschema,{foreignKey:"userID"})
commentschema.belongsTo(userschema,{foreignKey:"userID"})
postschema.hasMany(commentschema,{foreignKey:"postID"})
commentschema.belongsTo(postschema,{foreignKey:"postID"})
