import React from 'react'
import NoteItem from './NoteItemComponent'
import { Container, Row, Col } from "reactstrap";

function NoteList({ notes, label, setNotes }) {
    return (
        <div className='note-app-header-all-notes'>
            <h2 className='text-align-center border-bottom-1 '>{label}</h2>
            <Container className='margin-top-10'>
                <Row>
                    {notes.length === 0 ? <p className="text-align-center">Notes is empty</p>
                        : notes.map((note) => (
                            <Col key={note.id} md="4">
                                <NoteItem action={setNotes} key={note.id} {...note} />
                            </Col>
                        ))}
                </Row>
            </Container>


        </div>

    )
}

export default NoteList
