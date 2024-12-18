import PropTypes from 'prop-types';
import React from 'react';
import { BsTranslate, BsMoon as MoonIcon, BsSun as SunIcon } from 'react-icons/bs';
import { } from 'react-icons/io';

import LocaleContext from '../context/LocaleContext';
import ThemeContext from '../context/ThemeContext';
import Navigation from './Navigation';
import { Language } from '@mui/icons-material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import IconButton from '@mui/material/IconButton';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LogoutIcon from '@mui/icons-material/Logout';


const Header = ({ isAuthed, logout }) => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { toggleLocale } = React.useContext(LocaleContext);
  return (
    <header>


      <div className='row note-app-header'>
        <h1 className='col-2'> 📒Notes App</h1>

        <div className="col-10 align-self-end">

          <div className='float-right margin-top-60'>
            {isAuthed && <Navigation />}
            <IconButton
              sx={{ ml: 1 }}
              onClick={toggleLocale}
              color="inherit"
            >
              <Language />
            </IconButton>


            <IconButton
              sx={{ ml: 1 }}
              onClick={toggleTheme}
              color="inherit"
            >
              {theme === 'light' ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
            {isAuthed ? (<><IconButton
              sx={{ ml: 1 }}
              onClick={logout}
              color="inherit"
            >
              <LogoutIcon />
            </IconButton></>) : (<></>)}


          </div>
        </div>

      </div>
    </header>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Header;
