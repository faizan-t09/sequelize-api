import { Request, Response } from "express";
import Role from "../models/roleModel";
import getCurrentTimeStamp from "./timeStampHelper";

export const handleRoleInsert = async (req: Request, res: Response) => {
  // console.log({ path: "/role POST", Body: req.body, Params: req.query });
  try {
    const role = await Role.create({ ...req.body });
    res.status(200).json(role);
  } catch (err) {
    res.status(400).json("Error creating role : " + err);
  }
};

export const handleRoleGetAll = async (req: Request, res: Response) => {
  // res.json({ path: "/role GET", Body: req.body, Params: req.query });
  try {
    const roles = await Role.findAll({
      ...req.body,
      where: { deletedBy: null },
    });
    if (roles.length > 0) {
      res.status(200).json(roles);
    } else {
      res.status(404).json("Not matching roles found");
    }
  } catch (err) {
    res.status(400).json("Error fetching roles : " + err);
  }
};

export const handleRoleGetById = async (req: Request, res: Response) => {
  // res.json({ path: "/role/getById GET", Body: req.body, Params: req.query });
  try {
    const role = await Role.findOne({
      where: { id: req.params.id, deletedBy: null },
    });
    if (role) {
      res.status(200).json(role);
    } else {
      res.status(404).json("Not matching role found");
    }
  } catch (err) {
    res.status(400).json("Error fetching role : " + err);
  }
};

export const handleRoleReplace = async (req: Request, res: Response) => {
  // res.json({ path: "/role PUT", Body: req.body, Params: req.query });
  try {
    const roles = await Role.update(
      {
        name: req.body.name,
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy,
      },
      { where: { id: req.params.id, deletedBy: null } }
    );
    if (roles[0] == 1) {
      res.status(200).json("Role replaced successfully");
    } else {
      res.status(404).json("No such role found to be replaced");
    }
  } catch (err) {
    res.status(400).json("Error updating role : " + err);
  }
};

export const handleRoleUpdate = async (req: Request, res: Response) => {
  // res.json({ path: "/role PATCH", Body: req.body, Params: req.query });
  try {
    const roles = await Role.update(
      { ...req.body },
      { where: { id: req.params.id, deletedBy: null } }
    );
    if (roles[0] == 1) {
      res.status(200).json("Role updated successfully");
    } else {
      res.status(404).json("No such role found to be updated");
    }
  } catch (err) {
    res.status(400).json("Error updating role : " + err);
  }
};

export const handleRoleDelete = async (req: Request, res: Response) => {
  // res.json({ path: "/role/delete PATCH", Body: req.body, Params: req.query });
  try {
    const roles = await Role.update(
      { deletedBy: req.body.deletedBy, deletedAt: getCurrentTimeStamp() },
      { where: { id: req.params.id, deletedBy: null } }
    );
    if (roles[0] == 1) {
      res.status(200).json("Role deleted successfully");
    } else {
      res.status(404).json("No such role found to be deleted");
    }
  } catch (err) {
    res.status(400).json("Error deleting role : " + err);
  }
};
