
import React from "react";
import Event from './Event';

const Events = ({state,dispatch}) => {
    return (
        <>
        <h4>イベント一覧</h4>
        <table class="table table-hover">
        <thead class="thead-inverse">
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            state.map((event, index) => <Event key={index} event={event} dispatch={ dispatch }/>)
          }
        </tbody>
        </table>
    </>
    )
}

export default Events;