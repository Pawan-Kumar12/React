import React from 'react';

export default function NavBar(){

  const getDark = ()=>{
    console.log( document.querySelector('*'))
    document.querySelector('body').style.color = "white";
    document.querySelector('body').style.backgroundColor = "rgb(30 34 52)";
    document.querySelector('#exampleFormControlTextarea1').style.backgroundColor = "rgb(30 34 52)";
    document.querySelector('#exampleFormControlTextarea1').style.color = "white";
}
const getLight = ()=>{
  document.querySelector('body').style.color = "rgb(30 34 52)";
  document.querySelector('body').style.backgroundColor = "white";
  document.querySelector('#exampleFormControlTextarea1').style.backgroundColor = "white";
  document.querySelector('#exampleFormControlTextarea1').style.color = "rgb(30 34 52)";
}
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
          <button type="button" className="btn btn-dark" onClick={getDark}>Dark Mode</button>
          <button type="button" className="btn btn-light" onClick={getLight} style={{color:"rgb(30 34 52)"}}>Light Mode</button>
      </div>
    </div>
  </div>
</nav>
      </div>  
    )
}


