import PropTypes from 'prop-types';
import React from 'react';

import LocaleContext from '../context/LocaleContext';

const SearchBar = ({ keyword, keywordChange }) => {
  const { locale } = React.useContext(LocaleContext);
  return (
    <section className='search-bar float-right'>
      <input
        className='width-400 margin-right-20 text-align-right'
        type='text'
        placeholder={locale === 'id' ? 'Cari berdasarkan judul ...' : 'Search by title ...'}
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </section>
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
