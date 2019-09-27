import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
  createTasks = item => {
    return (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        {item.text}
      </li>
    );
  };
  delete = key => {
    this.props.delete(key);
  };

  render() {
    const toDoEntries = this.props.entries;
    const listItems = toDoEntries.map(this.createTasks);

    return (
      <ul className="theList">
        <FlipMove duration={150} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default TodoItems;
