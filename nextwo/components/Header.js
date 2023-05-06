import Styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={Styles.title}>
        {" "}
        <span> WEB DEV NEWS </span>
      </h1>
      <p className={Styles.description}> This is a good page </p>
    </div>
  );
};

export default Header;
