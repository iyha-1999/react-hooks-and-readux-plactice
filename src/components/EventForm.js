import React, { useState,useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { CREATE_EVENT, DELETE_ALL_EVENTS } from './actions/index';


const EventForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { state, dispatch } = useContext(AppContext);

    const addEvent = e => {
        e.preventDefault();
        dispatch({
          type: CREATE_EVENT,
          title,
          body
        })
    
        setTitle('');
        setBody('');
    }
      
    const deleteAllEvents = e => {
        e.preventDefault();
        const result = window.confirm('全てのイベントを本当に削除しても良いですか？');
        if (result) dispatch({ type: DELETE_ALL_EVENTS });
    }
    
    const unCreatable = title === '' || body === '';
    
    return (
        <>
        <h4>イベント作成フォーム</h4>
        <form>
          <div className="form-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input className="form-control" id="fromEventTitle" value={ title } onChange={ e => setTitle(e.target.value) }/>
          </div>
  
          <div className="form-group">
            <label htmlFor="formEventBody">ボディー</label>
            <textarea className="form-control" id="formEventBody" value={ body } onChange={ e => setBody(e.target.value) }/>
          </div>
  
          <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
          <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0}>全てのイベントを削除する</button>
        </form>
        </>
    )
}

export default EventForm;