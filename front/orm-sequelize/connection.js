import {Sequelize} from "sequelize";
import mysql2 from "mysql2";

const sequelize = new Sequelize('notorious', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect: "mysql",
    dialectModule: mysql2,
    host: 'localhost',
    port: process.env.DB_PORT,
    pool: {
        max: 5,
        idle: 3000,
        acquire: 60000
    }
});

try {
    await sequelize.authenticate()
    console.log("Conexión verificada")
    //Sincronizar todos los modelostt
    await sequelize.sync({alter: true})
    console.log("Todos los modelos fueron sicronizados correctamente")
} catch (error) {
    console.log("error: ", error)
}

export default sequelize