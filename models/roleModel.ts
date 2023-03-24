import { Sequelize, DataTypes } from "sequelize";
import seqConn from "../dbConn";
import User from "./userModel";

const Role = seqConn.define(
  "Role",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty:true,
        isAlpha:true,
        len:[3,20]
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
    tableName: "roles",
  }
);

export default Role;
