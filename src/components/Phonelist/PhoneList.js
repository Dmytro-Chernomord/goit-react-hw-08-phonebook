import React from 'react';
import s from './Phone.module.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import contactsOperation from '../../redux/contacts/contacts-operation';
import selectorContacts from '../../redux/contacts/contacts-selector';

const PhoneList = props => {
  const { items, onDelete } = props;

  return (
    <TransitionGroup component="ul" className={s.ul}>
      {items.map(el => {
        const { number, name, id } = el;
        return (
          <CSSTransition key={id} in timeout={250} unmountOnExit classNames={s}>
            <li key={id} className={s.li}>
              <span className={s.p}>
                {name}: <span className={s.p}>{number}</span>
              </span>

              <button
                className={s.button}
                type="button"
                onClick={() => onDelete(id)}
              >
                <span className={s.emoji} role="img" aria-label="trash">
                  🗑
                </span>
              </button>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

PhoneList.propTypes = {
  // onSearch: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  items: selectorContacts.getFilteredContacts(state),
});
const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsOperation.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
