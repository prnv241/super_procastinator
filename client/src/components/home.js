import React from 'react';

const Home = (props) => {
  return (
    <div className="container main mt-4">
      <h2 className="text-left">Welcome to Super Procastinator, Pranav</h2>
      <p>Here are some shortcuts for some of your favorite websites...</p>
      <div class="row grid">
        <div class="col md-3">
          <div className="card">
            <a href="https://youtube.com"><img src="https://i.imgur.com/FwUCnbF.png" className="card-img-top" alt="Youtube"/></a>
          </div>
        </div>
        <div class="col md-3">
          <div className="card mr-0">
            <a href="https://facebook.com"><img src="https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_960_720.png" className="card-img-top" alt="Facebook"/></a>
          </div>
        </div>
        <div class="col md-3">
          <div className="card mr-0">
            <a href="https://instagram.com"><img src="https://cdn.pixabay.com/photo/2016/12/04/18/58/instagram-1882330_960_720.png" className="card-img-top" alt="Instagram"/></a>
          </div>
        </div>
        <div class="col md-3">
          <div className="card mr-0">
            <a href="https://web.whatsapp.com"><img src="https://cdn.pixabay.com/photo/2015/08/03/13/58/soon-873316_960_720.png" className="card-img-top" alt="Whatsapp"/></a>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="col md-3">
          <div className="card mr-0">
            <a href="https://netflix.com"><img src="https://www.freepnglogos.com/uploads/netflix-logo-tv-png-21.png" className="card-img-top" alt="Netflix"/></a>
          </div>
        </div>
        <div class="col md-3">
          <div className="card mr-0">
            <a href="https://netflix.com"><img src="https://cdn.pixabay.com/photo/2019/05/08/00/31/netflix-4187478_960_720.png" className="card-img-top" alt="Netflix"/></a>
          </div>
        </div>
        <div class="col md-3">
          <div className="card mr-0">
            <a href="https://netflix.com"><img src="https://cdn.pixabay.com/photo/2019/05/08/00/31/netflix-4187478_960_720.png" className="card-img-top" alt="Netflix"/></a>
          </div>
        </div>
        <div class="col md-3">
          <div className="card mr-0">
            <a href="https://netflix.com"><img src="https://cdn.pixabay.com/photo/2019/05/08/00/31/netflix-4187478_960_720.png" className="card-img-top" alt="Netflix"/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;