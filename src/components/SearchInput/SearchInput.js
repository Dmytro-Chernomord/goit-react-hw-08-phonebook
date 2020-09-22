import React from 'react';
import s from './Search.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactActions from '../../redux/contacts/contact-action';
import contactSelector from '../../redux/contacts/contacts-selector';

const SearchInput = ({ onSearch, value }) => {
  return (
    <label className={s.label}>
      <input
        className={s.input}
        type="text"
        name="filter"
        value={value}
        onChange={onSearch}
        placeholder="Find contacs by name"
      />
    </label>
  );
};

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactSelector.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onSearch: e => dispatch(contactActions.onSearch(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
