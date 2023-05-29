import React from "react";
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({contacts, onClick}) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
      <li
        className={css.item}
        key={id}>
        <span>{name}: {number}</span>
        <button
          type="button"
          onClick={() => {onClick(id)}}
        >delete</button>
      </li>
    ))}
  </ul>
)

export default ContactList

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
}