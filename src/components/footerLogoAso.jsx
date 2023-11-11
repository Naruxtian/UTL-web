//mi rama
import logosASO from "/src/assets/img/logosAso.jpg"
const Footer = () => {
  return (
    <div className="row">
      <div>
        <img
          src={logosASO}
          className="img-fluid"
          style={{ width: "100%" }}
          alt="LogosAso"
        />
      </div>
    </div>
  );
};

export default Footer;
