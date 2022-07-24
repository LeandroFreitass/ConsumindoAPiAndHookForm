import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Posts = db.define(
  "cadastroPosts",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    tituloPosts: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    descriçaoPosts: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    conteudoPosts: {
      type: DataTypes.STRING(500),
      allowNull: false,
    }, 
  },
  {
    freezeTableName: true,
  }
);

Posts.sync({ force: false });
export default Posts;
