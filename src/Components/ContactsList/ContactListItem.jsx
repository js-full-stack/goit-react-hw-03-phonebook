import PropTypes from 'prop-types';
import styles from './ContactsList.module.scss';
import sprite from '../sprite.svg';

const ContactListItem = ({ name, number, onRemove }) => (
  <li className={styles.contact}>
    <span className={styles.textContact}>
      {name} : {number}
    </span>
    <button className={styles.btnDelete} onClick={onRemove}>
      Delete
      <svg className={styles.iconRemove}>
        <use href={`${sprite}#icon-remove`}></use>
      </svg>
    </button>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
