import fetch from 'isomorphic-fetch';

const CREATE_USER = 'CREATE_USER';
//GOOGLE
export const createUser = username => ({
  type: CREATE_USER,
  //post user to db

});

const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export const submitAnswer = answer => ({
  type: SUBMIT_ANSWER,
  questions: [questions],
  score: score + 1
});

const RECEIVE_DATA = 'RECEIVE_DATA';
const receive = (questions) => {
  return {
    type: RECEIVE_DATA,
    questions
  }
}

const NEXT_QUESTION = 'NEXT_QUESTION';

const LOAD_QUESTIONS = 'LOAD_QUESTIONS';
const loadQuestions = (questions) => {
//AJAX fetch to my server with this action
//return dispatch => {
  // return fetch(`url`)
  //   .then(res => res.json())
  //   .then(json => dispatch(RECEIVE_DATA))
}

const SPACED_REP = 'SPACED_REP';
export const spacedRep = () => ({
  type: SPACED_REP
});

const french = [
  'bonjour', 'oui', 'non', 'sil vous plait', 'merci', 'chat', 'noir', 'rouge'
]

const english = [
  'hello', 'yes', 'no', 'please', 'thank you', 'cat', 'black', 'red'
]

const freq = [
  1, 1, 1, 1, 1, 1, 1, 1
]
