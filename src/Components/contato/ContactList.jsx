import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import ContactItem from "./ContactItem.jsx";
import { contact } from "../../data/contact.js";
import "./ContactList.css";

const ContactList = () => {
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
    </div>
  );
};

export default ContactList;
