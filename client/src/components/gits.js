import React, {Component} from 'react';
import { fetchGits } from '../redux/actionCreaters';
import { connect } from 'react-redux';
import { Loading } from './loading';

const mapStateToProps =  (state) => {
    return {
        gits: state.gits,
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchGits: (langURI) => dispatch(fetchGits(langURI))
});

class Gits extends Component {
    componentDidMount() {
        this.props.fetchGits('https://ghapi.huchen.dev/developers?since=weekly');
    }
    render() {
        return(
          <>
            <div className="container mb-4">
              <button className="btn btn-dark m-3" onClick={() => this.props.fetchGits('https://ghapi.huchen.dev/developers?language=javascript&since=weekly')}>JavaScript</button>
              <button className="btn btn-dark m-3" onClick={() => this.props.fetchGits('https://ghapi.huchen.dev/developers?language=cpp&since=weekly')}>C++</button>
              <button className="btn btn-dark m-3" onClick={() => this.props.fetchGits('https://ghapi.huchen.dev/developers?language=python&since=weekly')}>Python</button>
              <button className="btn btn-dark m-3" onClick={() => this.props.fetchGits('https://ghapi.huchen.dev/developers?language=java&since=weekly')}>Java</button>
            </div>
            <ul className="list-unstyled">
              <RenderGits gits={this.props.gits} />
            </ul>
          </>
        );
    }
}

function RenderGits(props) {
    console.log(JSON.stringify(props))
    if(props.gits.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } 
    else if(props.gits.errMess) {
      return (
        <div className="container">
          <div className="row">
            <h4>{props.gits.errMess}</h4>
          </div>
        </div>
      );
    }
    else if(props.gits.gits) {
      const gits = props.gits.gits.map((git, index) => {
        return(
          <li className="media" key={index}>
            <img src={git.avatar} className="mr-3" alt="thumbnail"/>
            <div className="media-body">
              <a style={{fontSize: "1.5rem", color: "black"}} href={git.repo.url}>{git.repo.name}</a>
              <h5>{git.username} -- {git.name}</h5>
              <p>{git.repo.description.substring(0,300)}</p>
            </div>
          </li>
        )
      })
      return(
        <div className="container main">
          {gits}
        </div>
      );
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Gits);
  