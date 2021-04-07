import styles from './ContactsList.module.scss';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

const ContactsList = ({ contacts, onRemove }) =>
  contacts.length > 0 && (
    <>
      <ul className={styles.contacts}>
        {contacts.map(({ name, number, id }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onRemove={() => onRemove(id)}
          />
        ))}
      </ul>
    </>
  );

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactsList;
