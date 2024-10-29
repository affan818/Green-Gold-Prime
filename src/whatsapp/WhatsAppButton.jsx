import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "918208922329"; // WhatsApp phone number without "+" or spaces
  const message = "Hello! I would like to know more about your services."; // Custom message

  // Building the link using `api.whatsapp.com`
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
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
