import React, {Component} from 'react';
import { fetchReddits } from '../redux/actionCreaters';
import { connect } from 'react-redux';
import { Loading } from './loading';

const mapStateToProps =  (state) => {
    return {
        reddits: state.reddits,
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchReddits: (rURI) => dispatch(fetchReddits(rURI))
});

class Reddits extends Component {
    componentDidMount() {
      this.props.fetchReddits('https://www.reddit.com/r/popular/top.json?limit=10');
    }
    render() {
        return(
          <>
            <div className="container mb-4">
              <button className="btn btn-dark m-3" onClick={() => this.props.fetchReddits('https://www.reddit.com/r/funny/top.json?limit=10')}>r/funny</button>
              <button className="btn btn-dark m-3" onClick={() => this.props.fetchReddits('https://www.reddit.com/r/gaming/top.json?limit=10')}>r/gaming</button>
              <button className="btn btn-dark m-3" onClick={() => this.props.fetchReddits('https://www.reddit.com/r/mildlyinteresting/top.json?limit=10')}>r/mildlyintresting</button>
              <button className="btn btn-dark m-3" onClick={() => this.props.fetchReddits('https://www.reddit.com/r/EarthPorn/top.json?limit=10')}>r/earthporn</button>
            </div>
            <ul className="list-unstyled">
              <RenderReddits reddits={this.props.reddits} />
            </ul>
            </>
        );
    }
}

function RenderReddits(props) {
    console.log(JSON.stringify(props))
    if(props.reddits.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } 
    else if(props.reddits.errMess) {
      return (
        <div className="container">
          <div className="row">
            <h4>{props.reddits.errMess}</h4>
          </div>
        </div>
      );
    }
    else if(props.reddits.reddits) {
      const reddits = props.reddits.reddits.data.children.map((reddit) => {
        return(
          <li className="media" key={reddit.data.created}>
            <img src={reddit.data.thumbnail} className="mr-3" alt="thumbnail"/>
            <div className="media-body">
              <a style={{fontSize: "1.3rem",color: "black"}} href={'https://www.reddit.com/' + reddit.data.permalink}>{reddit.data.title.substring(0,100)}</a>
              <p>{reddit.data.author_fullname}</p>
              <p>-- {reddit.data.subreddit_name_prefixed}</p>
            </div>
          </li>
        );
      })
      return(
        <div className="container main">
          {reddits}
        </div>
      );
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Reddits);
  