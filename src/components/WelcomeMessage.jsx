import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  return (
    <marquee>
      <h2 className={styles.heading}>Enjoy your Day!</h2>
    </marquee>
  );
};

export default WelcomeMessage;