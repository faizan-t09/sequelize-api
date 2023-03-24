import { Sequelize, DataTypes } from "sequelize";
import seqConn from "../dbConn";

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
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deletedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "users",
  }
);

export default User;
