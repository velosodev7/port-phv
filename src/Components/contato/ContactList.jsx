import { FiMail, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import ContactItem from "./ContactItem.jsx";
import { contact } from "../../data/contact.js";
import "./ContactList.css";

const ContactList = () => {
  const cvAvailable = Boolean(contact.cv);

  return (
    <div className="contact-list">
      <ContactItem
        index="01"
        label="E-mail"
        value={contact.email}
        href={`mailto:${contact.email}`}
        icon={FiMail}
      />

      <ContactItem
        index="02"
        label="GitHub"
        value={`@${contact.github.user}`}
        href={contact.github.url}
        icon={FiGithub}
        external
      />

      <ContactItem
        index="03"
        label="LinkedIn"
        value={`/in/${contact.linkedin.user}`}
        href={contact.linkedin.url}
        icon={FiLinkedin}
        external
      />

      <ContactItem
        index="04"
        label="Currículo"
        value={cvAvailable ? "Baixar CV" : "Em breve"}
        href={cvAvailable ? contact.cv : null}
        icon={FiDownload}
        disabled={!cvAvailable}
        hint={cvAvailable ? "PDF" : "Será disponibilizado em breve"}
      />
    </div>
  );
};

export default ContactList;
