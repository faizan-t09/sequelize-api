import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

const sequelizeConn = new Sequelize(
  "seqServer",
  process.env.DB_USERNAME as string,
  process.env.DB_PASSWORD as string,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

export default sequelizeConn;
