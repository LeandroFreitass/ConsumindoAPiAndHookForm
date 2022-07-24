import { Sequelize } from "sequelize";

const db = new Sequelize('CadastroPosts', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;