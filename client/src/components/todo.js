
import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Modal, ModalHeader, ModalBody, Row, Label } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Loading } from './loading';
import { Control, Form } from 'react-redux-form';
import { actions } from 'react-redux-form';
import { fetchTodos, addTodo, delTodo } from '../redux/actionCreaters';
import { connect } from 'react-redux';

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

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }
  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }
  handleSubmit = (values) => {
    this.toggleModal();
    this.props.resetFeedbackForm();
    this.props.addTodo(values.name);
  }
  removetodo = (todoid) => {
    this.props.delTodo(todoid);
  }
  render() {
    if (this.props.todos.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    }
    else if (this.props.todos.errMess) {
      return (
        <div className="container">
          <div className="row">
            <h4>{this.props.errMess}</h4>
          </div>
        </div>
      )
    }
    else if (this.props.todos != null) {
      const { todos } = this.props.todos;
      return (
        <Container className="main mt-4">
          <h2>Todo List for SuperPro's</h2>
          <p>Save all your super procastinator tasks here so you wont get lost wandering on internet</p>
          <Button color="dark" style={{ marginBottom: '2rem' }} onClick={this.toggleModal}>Add Item</Button>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Add new Todo</ModalHeader>
            <ModalBody className="p-5">
              <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                  <Label htmlFor="todo">Todo</Label>
                  <Control.text model=".name" id="todo" name="name" className="form-control" placeholder="Todo here..."
                  />
                </Row>
                <Button color="dark" type="submit" value="submit">Submit</Button>
              </Form>
            </ModalBody>
          </Modal>
          <ListGroup>
            <TransitionGroup className="todos-list">
              {todos.map(({ _id, name }) => (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                  <ListGroupItem >
                    <Button className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={() => this.removetodo(_id)} >
                      Delete
                    </Button>
                    {name}
                  </ListGroupItem>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
        </Container>
      );
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);