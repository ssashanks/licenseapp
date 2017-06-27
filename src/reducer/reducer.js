import { STORE_WRITTEN_TEST_DETAILS } from '../actions/actions';

export function writtenQuestions(state = [], action) {
    switch(action.type) {
        case STORE_WRITTEN_TEST_DETAILS:
            return action.questions;
        default: 
            return state;
    }
}