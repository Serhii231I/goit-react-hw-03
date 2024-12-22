import s from "../Contact/Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={s.contactListItem}>
      <div className={s.contactInfo}>
        <span className={s.icon}>
          <FaUserTie />
        </span>

        <p className={s.contactListText}>{name}</p>
        <span className={s.icon}>
          <BsFillTelephoneFill />
        </span>
        <p className={s.contactListText}>{number}</p>
      </div>
      <button
        type="button"
        className={s.contactListBtn}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};
export default Contact;
