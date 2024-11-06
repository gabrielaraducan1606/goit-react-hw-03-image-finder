import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css'

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.searchbar}>
      <form onSubmit={handleSubmit} className="form">
        <button type="submit" className={styles.button}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#2F4F4F"
          >
            <path d="M 10 2 C 5.582 2 2 5.582 2 10 C 2 14.418 5.582 18 10 18 C 11.848576 18 13.554656 17.373514 14.876953 16.34375 L 20.292969 21.707031 L 21.707031 20.292969 L 16.34375 14.876953 C 17.373514 13.554656 18 11.848576 18 10 C 18 5.582 14.418 2 10 2 z M 10 4 C 13.309 4 16 6.691 16 10 C 16 13.309 13.309 16 10 16 C 6.691 16 4 13.309 4 10 C 4 6.691 6.691 4 10 4 z" />
          </svg>
        </button>
        <input
          className={styles.input}
          type="text"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};