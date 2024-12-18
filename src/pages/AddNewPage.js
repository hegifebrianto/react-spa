import React from 'react';
import { Helmet } from 'react-helmet';
import { MdCheck } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import LocaleContext from '../context/LocaleContext';
import useInput from '../hooks/useInput';
import { decodeHTMLEntities } from '../utils';
import { addNote } from '../utils/network-data';

const AddNewPage = () => {
  const navigate = useNavigate();
  const [title, onTitleChangeHandler] = useInput('');
  const [body, setBody] = React.useState('');
  const { locale } = React.useContext(LocaleContext);

  const onBodyInputHandler = (event) => {
    console.log(event.target.value);
    setBody(() => event.target.value);
  };

  const onAddNoteHandler = async () => {
    const { error } = await addNote({ title, body });
    if (!error) {
      navigate('/');
    }
  };

  return (
    <section className='add-new-page text-align-center'>
      <Helmet>
        <title>Add New Note - Note APP</title>
      </Helmet>
      <h1 className="">Add New Note</h1>
      <div className='add-new-page__input '>
        <input
          className=' add-new-note-input__title width-400'
          placeholder={locale === 'id' ? 'Ketik judul catatan...' : 'Type your note title ...'}
          onChange={onTitleChangeHandler}
        />
        <br></br>
        <textarea
          className='add-new-page__input__body width-400 margin-top-10'
          placeholder={locale === 'id' ? 'Ketik isi catatan ...' : 'Type your note ...'}
          contentEditable
          onInput={onBodyInputHandler}
          suppressContentEditableWarning={true} // Suppress React warning

        />
      </div>
      <div className='add-new-page__action'>
        <Button
          title={locale === 'id' ? 'Simpan' : 'Save'}
          onClick={onAddNoteHandler}
          icon={<MdCheck />}
        />
      </div>
    </section>
  );
};

export default AddNewPage;
