import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Yoga() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const apiUrl = "http://localhost:4001/yoga/allyoga";

  useEffect(() => {
    fetch(apiUrl, { method: 'GET' })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  // console.log(data);
  return (
    <>
    <div className="row justify-contain-evenly" style={{backgroundColor:'white'}}>
      {data.map(yoga => (
        <div className="card col-4 align-center" style={{ backgroundColor:"#B7B7B7",width:"21rem",margin:"20px" ,border:"1px solid black"}}>
          <div className="row align-items-between">
              <img src={yoga.Image} className="card-img-top"/>
          <div className="card-body align-items-center">
              <h5 className="card-title">{yoga.Name}</h5>
              <p className="card-text">{yoga.Level}</p>
              <Link to={`/yogadetails/${yoga.YogaId}`} className="btn btn-primary me-4" style={{backgroundColor:'#697565'}}>Read More</Link>
              <Link to={`/update/${yoga.YogaId}`} className="btn btn-primary" style={{backgroundColor:'#3C3D37'}}>Edit</Link>
          </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
export default Yoga;