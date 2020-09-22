import axios from 'axios';
import contactsAction from './contact-action';

const addContact = data => dispatch => {
  dispatch(contactsAction.addContactRequest());

  axios
    .post('http://localhost:3004/contacts', { ...data })
    .then(response => dispatch(contactsAction.addContactSuccess(response.data)))
    .catch(error => dispatch(contactsAction.addContactError(error)));
};

const fetchContacs = () => dispatch => {
  dispatch(contactsAction.fetchContactsRequest());

  axios
    .get('http://localhost:3004/contacts')
    .then(response =>
      dispatch(contactsAction.fetchContactsSuccess(response.data)),
    )
    .catch(error =>
      dispatch(contactsAction.fetchContactsError(console.log(error))),
    );
};

const deleteContact = id => dispatch => {
  dispatch(contactsAction.deleteContactRequest());
  axios
    .delete(`http://localhost:3004/contacts/${id}`)
    .then(() => dispatch(contactsAction.deleteContactSuccess(id)))
    .catch(error => dispatch(contactsAction.deleteContactError(error)));
};

export default { addContact, fetchContacs, deleteContact };
