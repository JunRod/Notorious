import NotoriousStyles from "@styles/Notorious.module.css"
import {orbitron} from "@fonts";
import DocumentationStyle from "@styles/Documentation.module.css";
import Link from "next/link";
import List from "@components/play/list";

function Layout({children}) {

    return (
        <>
            <div className={`${NotoriousStyles.title} ${orbitron.className}`}>
                <Link href={"/"} style={{color: "white"}} prefetch>
                    Notorious
                </Link>
            </div>
            <div className={NotoriousStyles.container}>
                <div className={`${DocumentationStyle.container} ${NotoriousStyles.form}`}>
                    <List/>
                </div>
                {children}
            </div>
        </>
    );
}


export default Layout;