import React from 'react';
import css from './SearchForm.module.css';

const { search_form, search_fild, search_btn } = css;

function SearchForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={search_form}>
      <input
        type="text"
        name="search"
        className={search_fild}
        autoComplete="off"
        placeholder="Search movies"
      />
      <button type="submit" className={search_btn}>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
