export var setSearchText = (searchtext) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchtext
  };
};

// toggle showCompleted TOGGLE_SHOW_COMPLETED
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

// toggleTodo(id) TODDLE_TODO

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
