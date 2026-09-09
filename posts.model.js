import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";





export const postschema = sequelize.define("post",{
    title :{
        type:DataTypes.STRING,
        allowNull:false
    },
    content :{
        type : DataTypes.STRING,
        allowNull:false
    },
    userID:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"users",
            key:"id"
        }
    }
})
