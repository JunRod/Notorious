import NotoriousStyles from "@styles/Notorious.module.css"
import DocumentationStyle from "@styles/Documentation.module.css";
import List from "@components/play/list";
import Header from "@components/Header/Header";
function Layout({children}) {

    return (
        <>
            <Header/>
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