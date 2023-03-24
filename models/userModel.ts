import { Sequelize, DataTypes, BelongsTo } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
import seqConn from "../dbConn";
import Role from "./roleModel";
const encryptpwd = require("encrypt-with-password");

const User = seqConn.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      get() {
        return this.getDataValue("username").toUpperCase();
      },
      validate:{
        notEmpty:true,
        isAlpha:true,
        len:[3,20],
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      set(value) {
        this.setDataValue(
          "password",
          encryptpwd.encrypt(value, process.env.ENCRYPTION_KEY)
        );
      },
      validate:{
        notEmpty:true,
        isAlphanumeric:true,
        len:[8,20],
      }
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty:true,
        isNumeric:true,
      }
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty:true,
        isNumeric:true,
      }
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty:true,
        isNumeric:true,
      }
    },
    deletedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate:{
        notEmpty:true,
        isNumeric:true,
      }
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      validate:{
        notEmpty:true,
        isDate:true,
      }
    },
  },
  {
    tableName: "users",
  }
);

User.belongsTo(Role, {
  foreignKey: "roleId",
  targetKey: "id",
});

export default User;
