import React, { Component } from 'react';
import Header from './appNavbar';
import Todo from './todo';
import Home from './home';
import Newz from './newz';
import Gits from './gits';
import Sidebar from './appSidebar';
import Reddits from './reddits';
import { Switch, Route, withRouter, Redirect} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Main extends Component {
  
  render() {
    return (
      <>
      <Header />
      <div className="row no-gutters">
        <div className="col-md-3">
          <Sidebar />  
        </div>
        <div className="col-md-9">
          <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch>
                <Route path="/home" component={() => <Home />} />
                <Route path="/todo" component={() => <Todo />} />
                <Route path="/newz" component={() => <Newz />} />
                <Route path="/gits" component={() => <Gits />} />
                <Route path="/reddits" component={() => <Reddits />} />
                <Redirect to="/home" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>  
      </>
    );
  }
}

export default withRouter(Main);
