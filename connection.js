import { Sequelize } from "sequelize"


export const sequelize = new Sequelize('assignment5', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export async function database_connection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export const databasesync=async ()=>{
    const { postschema } = await import("./model/posts.model.js")
    const {userschema } = await import("./model/users.model.js")
    const { commentschema } = await import("./model/comments.model.js") 
    const {relations} = await import("./relations.js")
    sequelize.sync({force:false})
    
}
