import footerStyle from "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <p>
        {" "}
        <span style={{ color: "blue" }}>&copy;</span>
        <span>Designed By CSKN &nbsp; </span>{" "}
        {new Date().toLocaleDateString("tr", "TR")}{" "}
      </p>
    </footer>
  );
};

export default Footer;
