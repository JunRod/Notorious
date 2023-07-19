import styles from "@styles/landing.module.css";
import Title from "@components/title/Title";
import Button from "@components/button/Button";
import Avatar from "@components/avatar/Avatar";
import Circle from "@components/circle/Circle";

const Page = () => {
  return (
      <div className={styles.container}>
          <Title/>
          <Button>Prueba Notorious</Button>
          <Avatar/>
          <Circle/>
      </div>
  );
};

export default Page;