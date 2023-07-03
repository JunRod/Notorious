import LandingStyles from "@styles/LandingStyles.module.css";
import Title from "@components/Title/Title";
import Button from "@components/Button/Button";
import Avatar from "@components/Avatar/Avatar";
import Circle from "@components/Circle/Circle";

const Page = () => {
  return (
      <div className={LandingStyles.container}>
          <Title/>
          <Button>Prueba Notorious</Button>
          <Avatar/>
          <Circle/>
      </div>
  );
};

export default Page;