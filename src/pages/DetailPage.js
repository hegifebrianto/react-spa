import parse from 'html-react-parser';
import React from 'react';
import { Helmet } from 'react-helmet';
import { MdDeleteOutline, MdOutlineArchive, MdOutlineUnarchive } from 'react-icons/md';
import { useParams } from 'react-router-dom';

import Button from '../components/Button';
import LoadingSpace from '../components/LoadingSpace';
import LocaleContext from '../context/LocaleContext';
import useSingleNote from '../hooks/useSingleNote';
import NoMatchPage from '../pages/NoMatchPage';
import { showFormattedDate } from '../utils';

const DetailPage = () => {
    const { id } = useParams();
    const { locale } = React.useContext(LocaleContext);

    const { loading, note, onArchiveNote, onUnarchiveNote, onDeleteNote } = useSingleNote(id);

    if (loading) {
        return (
            <LoadingSpace>{locale === 'id' ? 'Memuat catatan ...' : 'Loading notes ...'}</LoadingSpace>
        );
    }

    if (!note) {
        return <NoMatchPage />;
    }

    const { title, createdAt, body, archived } = note;

    return (
        <section className='detail-page text-align-center note-item'>
            <Helmet>
                <title>{title} - notes.self</title>
            </Helmet>
            <h3 className='text-color'>{title}</h3>
            <p className='text-color'>{showFormattedDate(createdAt)}</p>
            <div className='text-color'>{parse(body)}</div>
            <div className='text-color card'>
                {archived ? (
                    <Button
            title={locale === 'id' ? 'Aktifkan' : 'Unarchive'}
            onClick={onUnarchiveNote}
            icon={<MdOutlineUnarchive />}
          />
                
            ) : (
            <Button
                title={locale === 'id' ? 'Arsipkan' : 'Archive'}
                onClick={onArchiveNote}
                icon={<MdOutlineArchive />}
            />
        )}
            <Button
                title={locale === 'id' ? 'Hapus' : 'Delete'}
                onClick={onDeleteNote}
                icon={<MdDeleteOutline />}
            />
        </div>
    </section>
  );
};

export default DetailPage;
