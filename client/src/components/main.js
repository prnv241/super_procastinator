import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, addTodo, delTodo } from '../redux/actionCreaters';
import Header from './appNavbar';
import Todo from './todo';
import Home from './home';
import Newz from './newz';
import { actions } from 'react-redux-form';
import { Switch, Route, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  delTodo: (todoid) => dispatch(delTodo(todoid)),
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
});
class Main extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component={() => <Home />} />
              <Route path="/todo" component={() => <Todo
                todos={this.props.todos.todos}
                isLoading={this.props.todos.isLoading}
                errMess={this.props.todos.errMess}
                addTodo={this.props.addTodo}
                delTodo={this.props.delTodo}
                resetFeedbackForm={this.props.resetFeedbackForm}
              />} />
              <Route path="/newz" component={() => <Newz />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
