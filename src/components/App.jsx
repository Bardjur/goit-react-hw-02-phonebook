import React from "react";
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import css from './App.module.css';
class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  isIncludeContact = str => {
    str = str.toLowerCase();
    const findRow = this.state.contacts.find(item => item.name.toLowerCase() === str)

    return findRow ? true : false;
  }

  addContact = ({ name, number }) => {
    if (this.isIncludeContact(name.value)) {
      Notify.failure(`${name.value} is already in contacts`);
      return
    }
    
    const id = nanoid(10);

    this.setState(({contacts}) => {
      return { contacts : [{ id, name: name.value, number: number.value }, ...contacts] };
    })
  }

  delContact = (id) => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(item => item.id != id)
      return {contacts: newContacts}
    })
  }

  filterChange = value => this.setState({ filter: value });

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const filteredData = contacts.filter(({ name }) => name.toLowerCase().includes(normalizeFilter));

    return (
      <div className={css.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact}
        />

        {contacts.length
          ? ( <>
            <h2>Contacts</h2>
            <Filter onChange={this.filterChange} />
            <ContactList
              contacts={filteredData}
              onClick={this.delContact} />
          </> )
          : <h2>No contacts</h2>}

      </div>
    );
  }
};

export default App
