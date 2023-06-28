import Button from "@components/Button/Button";
import Circle from "@components/Circle";
import Title from "@components/Title/Title";
import landingStyles from "@styles/landingStyles.module.css";

const Landing = () => {
  return (
      <div className={landingStyles.body}>
        <Title />
        <Button />
        <Circle />
      </div>
  );
};

export default Landing;
