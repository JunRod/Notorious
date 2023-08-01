import {User} from "@sequelize";

export async function getUser (session) {
    return await User.findAll({
        where: {
            username: session?.username,
        },
        raw: true,
    });
}

export async function createUser (session) {
    return await User.create({
        username: session?.username || "",
        password: session?.password || "",
    });
}