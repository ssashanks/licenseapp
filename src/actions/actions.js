import fetch from 'isomorphic-fetch';

export const STORE_WRITTEN_TEST_DETAILS = "STORE_WRITTEN_TEST_DETAILS";
export const UPDATE_VIEW = "UPDATE_VIEW";

export function getWrittenFromServer () {
    return dispatch => {
   return fetch('http://localhost:9000/api/writing', {
//    return fetch('/ret', {
      method: 'GET'})
      .then(res => {
        return res.json();
      })
      .then(json => dispatch(writtenDetails(json)))
  };
}

function writtenDetails (response) {
    return {
        type: STORE_WRITTEN_TEST_DETAILS,
        questions: response.questions
    }
}

