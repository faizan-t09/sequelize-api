import { Request, Response } from "express";
import getCurrentTimeStamp from "./timeStampHelper";
import User from "../models/userModel";
import Role from "../models/roleModel";
import sequelizeConn from "../dbConn";
const { Op } = require("sequelize");

export const handleUserInsert = async (req: Request, res: Response) => {
  // console.log({ path: "/user POST", Body: req.body, Params: req.query });
  try {
    const user = await User.create({ ...req.body });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json("Error creating user : " + err);
  }
};

export const handleUserGetAll = async (req: Request, res: Response) => {
  // res.json({ path: "/user GET", Body: req.body, Params: req.query });
  try {
    const users = await User.findAll({
      ...req.body,
      where: { deletedBy: null },
      order: req.query.sortBy && [[req.query.sortBy, req.query.isDescending=='true' ? "DESC" : "ASC"]],
      group: req.query.groupBy && [req.query.groupBy as string],
      limit: req.query.limit && parseInt(req.query.limit as string),
      offset: req.query.offset && parseInt(req.query.offset as string),
      attributes: ["id", "username"],
      include: [{ model: Role, attributes: ["name"] }],
    });
    if (users.length > 0) {
      res.status(200).json(users);
    } else {
      res.status(404).json("Not matching users found");
    }
  } catch (err) {
    res.status(400).json("Error fetching users : " + err);
  }
};

export const handleUserGetById = async (req: Request, res: Response) => {
  // res.json({ path: "/user/getById GET", Body: req.body, Params: req.query });
  try {
    const user = await User.findOne({
      where: { id: req.params.id, deletedBy: null },
      attributes: ["id", "username", "roleId"],
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json("Not matching user found");
    }
  } catch (err) {
    res.status(400).json("Error fetching user : " + err);
  }
};

export const handleUserReplace = async (req: Request, res: Response) => {
  // res.json({ path: "/user PUT", Body: req.body, Params: req.query });
  try {
    const users = await User.update(
      {
        username: req.body.username,
        password: req.body.password,
        roleId: req.body.roleId,
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy,
      },
      { where: { id: req.params.id, deletedBy: null } }
    );
    if (users[0] == 1) {
      res.status(200).json("User replaced successfully");
    } else {
      res.status(404).json("No such user found to be replaced");
    }
  } catch (err) {
    res.status(400).json("Error updating user : " + err);
  }
};

export const handleUserUpdate = async (req: Request, res: Response) => {
  // res.json({ path: "/user PATCH", Body: req.body, Params: req.query });
  try {
    const users = await User.update(
      { ...req.body },
      { where: { id: req.params.id, deletedBy: null } }
    );
    if (users[0] == 1) {
      res.status(200).json("User updated successfully");
    } else {
      res.status(404).json("No such user found to be updated");
    }
  } catch (err) {
    res.status(400).json("Error updating user : " + err);
  }
};

export const handleUserDelete = async (req: Request, res: Response) => {
  // res.json({ path: "/user/delete PATCH", Body: req.body, Params: req.query });
  try {
    const users = await User.update(
      { deletedBy: req.body.deletedBy, deletedAt: getCurrentTimeStamp() },
      { where: { id: req.params.id, deletedBy: null } }
    );
    if (users[0] == 1) {
      res.status(200).json("User deleted successfully");
    } else {
      res.status(404).json("No such user found to be deleted");
    }
  } catch (err) {
    res.status(400).json("Error deleting user : " + err);
  }
};
