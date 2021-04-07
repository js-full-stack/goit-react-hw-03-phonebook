import styles from './Filter.module.scss';
import sprite from '../sprite.svg';
import PropTypes from 'prop-types';

const Filter = ({ onChangeFilter }) => (
  <label className={styles.label}>
    <span className={styles.text}>Find contacts by name</span>

    <div className={styles.wrapper}>
      <svg className={styles.iconSearch}>
        <use href={`${sprite}#icon-search`}></use>
      </svg>{' '}
      <input className={styles.input} onChange={onChangeFilter} type="text" />
    </div>
  </label>
);

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
