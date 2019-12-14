import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App container-fluid">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="/">React Bootstrap Sass</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="form-inline mt-2 mt-md-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    
      <main role="main" className="container">
        <div className="jumbotron">
          <h1>React Bootstrap Sass</h1>
          <p className="lead">This is how you can customise Bootstrap with Sass in React!</p>
          <a className="btn btn-lg btn-primary" href="https://github.com/loljoho/react-bootstrap-sass/" role="button">View on GitHub &raquo;</a>
        </div>
      </main>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">

          <div className="col mb-4">
            <div className="card h-100 text-white bg-primary mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card h-100 text-white bg-secondary mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Secondary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card h-100 text-white bg-success mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Success card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card h-100 text-white bg-danger mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Danger card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          
          <div className="col mb-4">
            <div className="card h-100 text-white bg-warning mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Warning card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card h-100 text-white bg-danger mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Danger card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card h-100 bg-light mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Light card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card h-100 text-white bg-info mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Info card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card h-100 text-white bg-dark mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Dark card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card h-100 text-white bg-success mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Success card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card h-100 text-white bg-secondary mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Secondary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          
          <div className="col mb-4">
            <div className="card h-100 text-white bg-primary mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img className="mb-2" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"/>
            <small className="d-block mb-3 text-muted">&copy; 2017-2019</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="/">Cool stuff</a></li>
              <li><a className="text-muted" href="/">Random feature</a></li>
              <li><a className="text-muted" href="/">Team feature</a></li>
              <li><a className="text-muted" href="/">Stuff for developers</a></li>
              <li><a className="text-muted" href="/">Another one</a></li>
              <li><a className="text-muted" href="/">Last time</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="/">Resource</a></li>
              <li><a className="text-muted" href="/">Resource name</a></li>
              <li><a className="text-muted" href="/">Another resource</a></li>
              <li><a className="text-muted" href="/">Final resource</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="/">Team</a></li>
              <li><a className="text-muted" href="/">Locations</a></li>
              <li><a className="text-muted" href="/">Privacy</a></li>
              <li><a className="text-muted" href="/">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
