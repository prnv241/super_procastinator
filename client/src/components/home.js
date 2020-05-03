import React from 'react';

const Home = (props) => {
  return (
    <div className="container main mt-4">
      <h2 className="text-left">Welcome to Super Procastinator, Pranav</h2>
      <p>Here are some shortcuts for some of your favorite websites...</p>
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-3">
          <div className="card">
            <img src="https://i.imgur.com/FwUCnbF.png" style={{width: "250px", height: "250px"}} className="card-img-top" alt="Youtube"/>
            <div className="card-body">
              <a className="card-title btn btn-dark" href="https://youtube.com" style={{color: "white"}}>Youtube</a>
            </div>
          </div>
        </div>
        <div class="col mb-3">
          <div className="card">
            <img src="https://i.imgur.com/FwUCnbF.png" style={{width: "250px", height: "250px"}} className="card-img-top" alt="Youtube"/>
            <div className="card-body">
              <a className="card-title btn btn-dark" href="https://youtube.com" style={{color: "white"}}>Youtube</a>
            </div>
          </div>
        </div>
        <div class="col mb-3">
          <div className="card">
            <img src="https://i.imgur.com/FwUCnbF.png" style={{width: "250px", height: "250px"}} className="card-img-top" alt="Youtube"/>
            <div className="card-body">
              <a className="card-title btn btn-dark" href="https://youtube.com" style={{color: "white"}}>Youtube</a>
            </div>
          </div>
        </div>
        <div class="col mb-3">
          <div className="card">
            <img src="https://i.imgur.com/FwUCnbF.png" style={{width: "250px", height: "250px"}} className="card-img-top" alt="Youtube"/>
            <div className="card-body">
              <a className="card-title btn btn-dark" href="https://youtube.com" style={{color: "white"}}>Youtube</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div className="card">
            <img src="https://i.imgur.com/FwUCnbF.png" style={{width: "250px", height: "250px"}} className="card-img-top" alt="Youtube"/>
            <div className="card-body">
              <a className="card-title btn btn-dark" href="https://youtube.com" style={{color: "white"}}>Youtube</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div className="card">
            <img src="https://i.imgur.com/FwUCnbF.png" style={{width: "250px", height: "250px"}} className="card-img-top" alt="Youtube"/>
            <div className="card-body">
              <a className="card-title btn btn-dark" href="https://youtube.com" style={{color: "white"}}>Youtube</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;