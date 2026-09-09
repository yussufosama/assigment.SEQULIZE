import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";



export const commentschema = sequelize.define("comment",{
    content : {
        type : DataTypes.STRING,
        allowNull:false
    },
    postID: {
        type: DataTypes.INTEGER,
        allowNull : false,
        references :{
            model : "posts",
            key : "id"
        }
    },
    userID :{
        type : DataTypes.INTEGER,
        allowNull : false,
        references :{
            model : "users",
            key : "id"
        },

    }
    
})
