import React, { Component } from 'react';
import Form from '../components/Form';
import PhoneList from '../components/Phonelist';
import SearchInput from '../components/SearchInput';
import s from './ContactView.module.css';
import { CSSTransition } from 'react-transition-group';
import contactOperation from '../redux/contacts/contacts-operation';
import { connect } from 'react-redux';
import contactsSelector from '../redux/contacts/contacts-selector';

class ContactView extends Component {
  componentDidMount() {
    this.props.fetchContacs();
  }

  render() {
    console.log(this.props.filter);
    return (
      <>
        <CSSTransition
          appear={true}
          in
          timeout={500}
          unmountOnExit
          classNames={s}
        >
          <h1 className={s.title}>Phonebook</h1>
        </CSSTransition>
        <Form />
        <h2>Contacts</h2>
        <CSSTransition
          // in={true}
          in={this.props.items.length > 1 || this.props.filter !== ''}
          timeout={250}
          unmountOnExit
          classNames={s}
        >
          <SearchInput />
        </CSSTransition>
        {this.props.isContactLoading && <h2>Loading...</h2>}
        <PhoneList />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: contactsSelector.getItems(state),
    isContactLoading: contactsSelector.isLoading(state),
    filter: contactsSelector.getFilter(state),
  };
};

const mapDispatchToProps = {
  fetchContacs: contactOperation.fetchContacs,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactView);
