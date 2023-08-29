import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { Component } from 'react';
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MdOutlineContactPhone } from "react-icons/md";

const optNotiflx = {
  // width: '380px',
  position: 'center-top',
  timeout: 5000,
  fontSize: '18px',
};

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  addContact = contact => {
    if (this.isInList(contact)) {
      Notify.warning(`${contact.name} is already in contacts`, optNotiflx)
    } else{
      this.setState(prevState =>({contacts: [...prevState.contacts, {id: nanoid(), ...contact}]}))
    }
  }

  deleteContact = contactId =>{
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => (el.id !== contactId))
    }))
  }

  isInList = contact =>{
    return this.state.contacts.some(el => (el.name.toLowerCase()===contact.name.toLowerCase()))
  }

  handleFilter = filter =>{
    this.setState(prevState=>({filter}))
  }
  getFilteredContacts = () =>{
    const { contacts, filter } = this.state;
    return contacts.filter(el => el.name.toLowerCase().startsWith(filter.toLowerCase()))
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Layout>
        <h1><MdOutlineContactPhone size={48} /> Phonebook</h1>
        <ContactForm onAdd={this.addContact}/>
        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={this.handleFilter} />
        <ContactList contacts={filteredContacts} onClick={this.deleteContact}/>
        <GlobalStyle />
      </Layout>
    );
  }
}

