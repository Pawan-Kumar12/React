import React from 'react';

export default function NavBar(props){




    return(
      <div>
         <nav className="navbar navbar-expand-lg bg-info">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Play_With_React</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div className="btn-group btn-group-sm ms-2" role="group" aria-label="Small button group">
                    <button type="button" className="btn btn-dark" onClick={props.modeChange} value="Dark"> Dark Mode</button>
                    <button type="button" className="btn btn-light" onClick={props.modeChange} style={{color:"rgb(30 34 52)"}}value="Light">Light Mode</button>
                </div>
              </div>
            </div>
          </nav> 
          <div className='alert'></div>
      </div>  
    )
}


