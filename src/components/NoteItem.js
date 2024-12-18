import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import LocaleContext from '../context/LocaleContext';
import { showFormattedDate } from '../utils';

const NoteItem = ({ id, title, createdAt, body, archived, onDelete, onArchive }) => {
  const { locale } = useContext(LocaleContext);
  const arhiveText = locale === 'id' ? 'Aktifkan' : 'Unarchive';
  const unArchiveText = locale === 'id' ? 'Arsipkan' : 'Archive';
  return (
    <div className="card">
      <div className='note-item'>
        <h3 className='header-item text-align-center height-200'>
          <Link to={`/notes/${id}`} className='text-color'><span className="text-color">{title}</span></Link>
          <p className='body-item text-color'>{showFormattedDate(createdAt)}</p>

        </h3>
        <p className='body-item text-color height-50'>{parse(body)}</p>
        <div className='text-align-center card '>
          <button
            type="button"
            className="btn btn-secondary margin-5"
            id={id}
            onClick={() => onDelete(id)}
            aria-label="Delete Button"
          >
            {locale === 'id' ? 'Hapus' : 'Delete'}

          </button>
          <button
            type="button"
            className="btn btn-secondary archive-button margin-5"
            id={id}
            onClick={() => onArchive(id)}
            aria-label='Archive Button'
          >
            {archived ?arhiveText : unArchiveText  }
          </button>
        </div>
      </div>
    </div>


  );
};

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteItem;
