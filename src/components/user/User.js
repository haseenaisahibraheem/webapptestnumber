import React, { Component } from "react";
import TodoList from "./TodoList";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  ButtonGroup,
  ButtonToolbar
} from "reactstrap";

import "../../style/User.TodoList.css";

const axios = require("axios");
let currentItems = [];
let todoSearch;

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.todoSearch = this.todoSearch.bind(this);
    this.doWithAll = this.doWithAll.bind(this);
    this.doWithChecked = this.doWithChecked.bind(this);
    this.doWithTodo = this.doWithTodo.bind(this);
  }

  componentDidMount() {
    axios.get("https://s0nr0.sse.codesandbox.io/todoList").then(res => {
      this.setState({
        todoItems: res.data.todoItems
      });
    });
  }

  onItemClick(item, index) {
    return () => {
      const { todoItems } = this.state;
      const isComplete = item.isComplete;
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          { ...item, isComplete: !isComplete },
          ...todoItems.slice(index + 1)
        ]
      });
      axios.put("https://s0nr0.sse.codesandbox.io/todoList", {
        todoItems: this.state.todoItems
      });
    };
  }
  handleChange(event) {
    todoSearch = event.target.value;
    return todoSearch;
  }
  todoSearch() {
    currentItems = this.state.todoItems.filter(
      item => item.title.toLowerCase().indexOf(todoSearch.toLowerCase()) !== -1
    );
    this.setState({
      todoItems: currentItems
    });
  }
  doWithAll() {
    axios.get("https://s0nr0.sse.codesandbox.io/todoList").then(res => {
      currentItems = res.data.todoItems;
    });
  }
  doWithChecked() {
    axios.get("https://s0nr0.sse.codesandbox.io/todoList").then(res => {
      currentItems = res.data.todoItems.filter(item => {
        item.isComplete === true;
      });
    });
  }
  doWithTodo() {
    axios.get("https://s0nr0.sse.codesandbox.io/todoList").then(res => {
      currentItems = res.data.todoItems.filter(item => {
        item.isComplete === false;
      });
    });
  }
  render() {
    return (
      <div className="User">
        <ButtonToolbar className="header-todo-list">
          <ButtonGroup>
            <Button onClick={this.doWithAll}>All</Button>
            <Button onClick={this.doWithChecked}>Checked</Button>
            <Button onClick={this.doWithTodo}>To do</Button>
          </ButtonGroup>
        </ButtonToolbar>
        {currentItems.length > 0 &&
          currentItems.map((item, index) => (
            <TodoList
              key={item.id}
              item={item}
              onClicked={this.onItemClick(item, index)}
            />
          ))}
        {currentItems.length === 0 && <h3>Nothing Here!</h3>}
        <div className="nav-search-todo-item">
          <InputGroup>
            <Input onChange={this.handleChange} />
            <InputGroupAddon addonType="append">
              <Button onClick={this.todoSearch} color="primary">
                Search
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    );
  }
}
