import React from 'react';
import PropTypes from 'prop-types';
import css from "./Filter.module.css";

class Filter extends React.Component {
  state = {
    filter: ''
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  handleChange = e => {
    this.setState({ filter: e.target.value });
    this.props.onChange(e.target.value)
   }
  
  render() {
    const { filter } = this.state;

    return (
      <label className={css['input-wrap']}>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="find contacts by name"
          required
          value={filter}
          onChange={this.handleChange}
        />
      </label>
    )
  }
}

export default Filter