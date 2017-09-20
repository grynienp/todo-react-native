'use strict';
import TodoModel from '../TodoModel';

let dataList = [
  new TodoModel('Hello World'),
  new TodoModel('Save World'),
];

const initialState = {
  todoitems: dataList
};

function todolist(state = initialState, action) {
  if (action.type === 'NEW') {
    return {...state, todoitems: action.todoitems};
  }
  return state;
}

module.exports = todolist;
