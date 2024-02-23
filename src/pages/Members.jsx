import React from 'react'


const Members = () => {
  return (
    <div style={{ backgroundColor: "#f4f2eb" }}>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"
      />
      <h1 className="h1-text" style={{ margin: "0" }}>
        <i className="fa fa-users" aria-hidden="true" />
        Team Members
      </h1>
      <div className="container">
        <div className="box">
          <div className="top-bar" />
          <div className="top">
            <i className="fa fa-check-circle" aria-hidden="true" />
            <input type="checkbox" className="heart-btn" id="heart-btn-1" />
            <label className="heart" htmlFor="heart-btn-1" />
          </div>
          <div className="content">
            <img
              src="https://images.pexels.com/photos/2570145/pexels-photo-2570145.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
            />
            <strong>David Warner</strong>
            <p>thewarner@gmail.com</p>
          </div>
          <div className="btn">
            <a href="#">
              <i className="fa fa-clipboard" aria-hidden="true" />
              Assign
            </a>
            <a href="#">
              <i className="fa fa-eye" aria-hidden="true" />
              View
            </a>
          </div>
        </div>
        <div className="box">
          <div className="top-bar" />
          <div className="top">
            <div>
              <i className="fa fa-check-circle" aria-hidden="true" />
            </div>
            <div>
              <input type="checkbox" className="heart-btn" id="heart-btn-2" />
              <label className="heart" htmlFor="heart-btn-2" />
            </div>
          </div>
          <div className="content">
            <img
              src="https://images.pexels.com/photos/2826131/pexels-photo-2826131.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
            />
            <strong>Rohan Tolani</strong>
            <p>rooohan@gmail.com</p>
          </div>
          <div className="btn">
            <a href="#">
              <i className="fa fa-clipboard" aria-hidden="true" />
              Assign
            </a>
            <a href="#">
              <i className="fa fa-eye" aria-hidden="true" />
              View
            </a>
          </div>
        </div>
        <div className="box">
          <div className="top-bar" />
          <div className="top">
            <i className="fa fa-check-circle" aria-hidden="true" />
            <input type="checkbox" className="heart-btn" id="heart-btn-3" />
            <label className="heart" htmlFor="heart-btn-3" />
          </div>
          <div className="content">
            <img
              src="https://images.pexels.com/photos/3681591/pexels-photo-3681591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <strong>Raquel John</strong>
            <p>Raqueljohn@gmail.com</p>
          </div>
          <div className="btn">
            <a href="#">
              <i className="fa fa-clipboard" aria-hidden="true" />
              Assign
            </a>
            <a href="#">
              <i className="fa fa-eye" aria-hidden="true" />
              View
            </a>
          </div>
        </div>
        <div className="box">
          <div className="top-bar" />
          <div className="top">
            <i className="fa fa-check-circle" aria-hidden="true" />
            <input type="checkbox" className="heart-btn" id="heart-btn-4" />
            <label className="heart" htmlFor="heart-btn-4" />
          </div>
          <div className="content">
            <img
              src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <strong>Priya Mehra</strong>
            <p>priyamehraa@gmail.com</p>
          </div>
          <div className="btn">
            <a href="#">
              <i className="fa fa-clipboard" aria-hidden="true" />
              Assign
            </a>
            <a href="#">
              <i className="fa fa-eye" aria-hidden="true" />
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;