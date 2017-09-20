

'use strict';

function newArray(todoitems) {
  return {
    type: 'NEW',
    todoitems,
  };
}

module.exports = {newArray};
