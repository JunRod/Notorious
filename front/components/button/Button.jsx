import { orbitron } from "@fonts";
import Link from "next/link";
import Styles from "@styles/Button.module.css";


const styles = {
    background: 'radial-gradient(farthest-side at 118px 7px, #FFF8FF, #FF5AFF 70%)',
    fontSize: '2.3rem',
    letterSpacing: '.1rem',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '1rem',
    zIndex: 10,
    fontWeight: 600
};


const Button = ({children}) => {
  return (
    <div className={Styles.container}>
        <div className={Styles.lightEffect}/>
        <Link
            href={"play"}
            className={orbitron.className}
            style={styles}
            prefetch
        >
            {children}
        </Link>
    </div>
  )
}

export default Button