import React from 'react';
import { Helmet } from 'react-helmet';
import { MdAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import LoadingSpace from '../components/LoadingSpace';
import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';
import LocaleContext from '../context/LocaleContext';
import useKeyword from '../hooks/useKeyword';
import useNotes from '../hooks/useNotes';
import { searchFilter } from '../utils';
import { Col, Row } from 'reactstrap';

const HomePage = () => {
  const navigate = useNavigate();
  const [keyword, onKeywordChangeHandler] = useKeyword();
  const { locale } = React.useContext(LocaleContext);
  const { loading, notes, onDeleteNote, onArchiveNote } = useNotes(false);

  const filteredNotes = searchFilter(notes, keyword);

  return (
    <section className='homepage'>
      <Helmet>
        <title>Home Page - Notes APP</title>
      </Helmet>
      <h2 className='text-align-center'>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
      <Row >
        <Col className='align-self-center text-align-center'>
          <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <Row >
        <Col md="12">
          {loading ? (
            <LoadingSpace>{locale === 'id' ? 'Memuat catatan ...' : 'Loading notes ...'}</LoadingSpace>
          ) : (

            <div className='note-app-header-all-notes'>
              <NotesList notes={filteredNotes} onDelete={onDeleteNote} onArchive={onArchiveNote} />


            </div>


          )}
        </Col>

      </Row>


      <div className='text-align-center'>
        <Button
          title={locale === 'id' ? 'Tambah catatan baru' : 'Add new note'}
          onClick={() => navigate('/notes/new')}
          icon={<MdAdd />}
        />
      </div>
    </section>
  );
};

export default HomePage;
