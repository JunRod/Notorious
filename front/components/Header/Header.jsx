import NotoriousStyles from "@styles/Notorious.module.css";
import {orbitron} from "@fonts";
import Link from "next/link";
import Button from "@components/Header/Button";
import {getServerSession} from "next-auth";
import {authOptions} from "@app/api/auth/[...nextauth]/route";
import {createUser, getUser} from "@app/play/querys";

async function Header() {

    const session = await getServerSession(authOptions)
    let queryVerification = [];

    if (session) {
        queryVerification = JSON.stringify(await getUser(session))
    }

    if (session && !queryVerification[0]?.id) {
        await createUser(session)
        queryVerification = JSON.stringify(await getUser(session))
    }

    return (
        <div className={`${NotoriousStyles.title} ${orbitron.className}`}>
            <Link href={"/"} style={{color: "white"}} prefetch>
                Notorious
            </Link>
            {queryVerification}
            <Button/>
        </div>
    );
}

export default Header;