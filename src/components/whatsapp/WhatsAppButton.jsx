import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton = () => {
  const phoneNumber = "1234567890"; // Replace with your WhatsApp number
  const message = "Hello! I would like to know more about your services."; // Custom message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-success d-flex justify-content-center align-items-center position-fixed"
      style={{
        bottom: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        zIndex: 1000,
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      }}
    >
      <FontAwesomeIcon
        icon={faWhatsapp}
        style={{ fontSize: "24px", color: "#fff" }}
      />
    </a>
  );
};

export default WhatsAppButton;
