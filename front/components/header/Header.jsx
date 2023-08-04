import NotoriousStyles from "@styles/Notorious.module.css";
import {orbitron} from "@fonts";
import Link from "next/link";
import Button from "@components/header/Button";
import {getServerSession} from "next-auth";
import {authOptions} from "@app/api/auth/[...nextauth]/route";

async function Header() {

    const session = await getServerSession(authOptions)
    let queryVerification = {};

    //Obtener el usuario logeado
    if (session) {
        const {username} = session
        const resp = await fetch(`https://notoriousback.ddns.net/getUser?username=${username}`)
        queryVerification =  await resp.json()
    }

    //Crear nuevo usuario si no existe
    if (session && !queryVerification?.username) {
        const {username, password} = session
        const resp = await fetch(`https://notoriousback.ddns.net/add?username=${username}&password=${password}`, {
            method: 'POST'
        })
        queryVerification = await resp.json()
    }

    return (
        <div className={`${NotoriousStyles.title} ${orbitron.className}`} style={{color: "white"}}>
            <Link  style={{color: "white"}} href={"/"} prefetch>
                Notorious
            </Link>
            {
                queryVerification?.username ? `¡Bievenido ${queryVerification?.username}!` : <></>
            }
            <Button/>
        </div>
    );
}

export default Header;