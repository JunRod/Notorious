import {DataTypes} from "sequelize";
import sequelize from "@orm-sequelize/connection"


export const WordsDinamics = sequelize.define('WordsDinamics', {
        word_english: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        word_similar: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false,
    });

export const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: false,
    });

User.hasMany(WordsDinamics, { foreignKey: 'username_fk' });