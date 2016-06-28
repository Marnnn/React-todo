var React = require('react');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }
      ]
    };
  },
  render: function () {
    return (
      <div>
        TodoApp.jsx
      </div>
    )
  }
});

module.exports = TodoApp;
