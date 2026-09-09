import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

export const userschema = sequelize.define('user',{
    name :{
        type : DataTypes.STRING,
        allowNull: false
    },
    email :{
        type : DataTypes.STRING(255),
        allowNull: false,
        unique : true
    },
    password :{
        type : DataTypes.STRING,
        allowNull: false,
        validate: {
            checkPasswordLength(value) {
                if (!value || value.length <= 6) {
                    throw new Error("Password length must be greater than 6 characters.");
                }
            }
        }
    },
    role :{
        type : DataTypes.STRING,
        allowNull: false
    }
})
