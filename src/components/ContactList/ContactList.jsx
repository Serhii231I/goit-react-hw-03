import Contact from "../Contact/Contact";
import s from "../ContactList/ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
export default ContactList;
