import express from "express"
import { database_connection, databasesync } from "./src/database/connection.js"
import { userschema } from "./src/database/model/users.model.js"
import { postschema } from "./src/database/model/posts.model.js"
import { commentschema } from "./src/database/model/comments.model.js"
import user_router from "./src/module/users/users.controller.js"
import post_router from "./src/module/posts/posts.controller.js"
import comment_router from "./src/module/comments/comments.controller.js"
const app = express()
app.use(express.json())
database_connection()
databasesync()
app.use('/users',user_router)
app.use('/posts',post_router)
app.use('/commetns',comment_router)

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
