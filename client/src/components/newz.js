import React, {Component} from 'react';
import { fetchNews } from '../redux/actionCreaters';
import { connect } from 'react-redux';
import { Loading } from './loading';

const mapStateToProps = (state) => {
  return {
    news: state.news,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchNews: (TopicURI) => dispatch(fetchNews(TopicURI))
});

class News extends Component {
  componentDidMount() {
    this.props.fetchNews('https://newsapi.org/v2/top-headlines?country=in&apiKey=')
  }
  render() {
    return(
      <>
        <div className="container mb-4">
          <button className="btn btn-dark m-3" onClick={() => this.props.fetchNews('http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-03&sortBy=publishedAt&apiKey=')}>Bitcoin</button>
          <button className="btn btn-dark m-3" onClick={() => this.props.fetchNews('http://newsapi.org/v2/everything?q=hack&from=2020-04-03&sortBy=publishedAt&apiKey=')}>Hacker</button>
          <button className="btn btn-dark m-3" onClick={() => this.props.fetchNews('http://newsapi.org/v2/everything?q=tech&from=2020-04-03&sortBy=publishedAt&apiKey=')}>Tech</button>
          <button className="btn btn-dark m-3" onClick={() => this.props.fetchNews('http://newsapi.org/v2/everything?q=gaming&from=2020-04-03&sortBy=publishedAt&apiKey=')}>Gaming</button>
        </div>
        <ul className="list-unstyled">
          <RenderNews news={this.props.news} />
        </ul>
      </>
    );
  }
}

function RenderNews(props) {
  if(props.news.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } 
  else if(props.news.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.news.errMess}</h4>
        </div>
      </div>
    );
  }
  else if(props.news.news.articles) {
    const news = props.news.news.articles.map((newa,index) => {
      return(
        <li className="media" key={index}>
          <img src={newa.urlToImage} className="mr-3" alt="thumbnail"/>
          <div className="media-body">
            <a style={{fontSize: "1.3rem", color: "black"}} href={newa.url}>{newa.title}</a>
            <h5>{newa.author}</h5>
            <p>{newa.description.substring(0,200)}</p>
          </div>
        </li>
      );
    })
    return(
      <div className="container main">
        {news}
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(News);

