import {Sequelize, DataTypes} from "sequelize";
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

export const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: false,
    });

export const Words = sequelize.define('Words', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        wordEnglish: {
            type: DataTypes.STRING,
            allowNull: false
        },
        wordSimilar: {
            type: DataTypes.STRING,
            allowNull: false
        },
        idea: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subscription: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    },
    {
        timestamps: false,
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