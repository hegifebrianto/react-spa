import React from 'react';
import { Link } from 'react-router-dom';

import LocaleContext from '../context/LocaleContext';

const Navigation = () => {
  const { locale } = React.useContext(LocaleContext);
  return (
    <nav className='navigation'>
      <Link to='/archives'>{locale === 'id' ? <span className="margin-left-50 float-left">Arsip</span> : <span className="margin-left-50 float-left">Archived</span>}</Link>

    </nav>
  );
};

export default Navigation;
