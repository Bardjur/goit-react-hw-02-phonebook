import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css'

class ContactForm extends React.Component {
  state = {
    name: '',
    number: ''
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;

    this.props.onSubmit({ name, number });
    this.setState({ name: '', number: ''});
  }
  
  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <label className={css['input-wrap']}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <label className={css['input-wrap']}>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    )
  }
}

export default ContactForm