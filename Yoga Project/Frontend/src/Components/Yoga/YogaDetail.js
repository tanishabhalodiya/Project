import { useEffect, useState } from "react";
import { Link, useParams ,Navigate } from "react-router-dom";
import axios from "axios";

function YogaDetails(){
    const params=useParams();
    const [data, setData] = useState({});
    
    useEffect(()=>{
        fetch("http://localhost:4001/yoga/"+params.YogaId)
        .then(res=>res.json())
        .then(res=>setData(res));
    },[params.YogaId]);
    
    const handleDelete = async (e) => {
        e.preventDefault();
        try{
            const url="http://localhost:4001/yoga/deleteyoga/"+params.YogaId;
            const res=await axios.delete(url,data);
             console.log("Response from server:", res.data);
             Navigate('/allyoga');
        }
        catch(error){
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                console.log("Errorr")
            } else {
                console.log("error")
            }
        }
    }
        return(
            <>
            <div  className="container-fluid" style={{height:"100px", padding:"30px"}}>
                <Link to="/allyoga" className="btn btn-primary border">Back</Link>
                 <button className="btn btn-danger" onClick={handleDelete} >Delete</button>
            </div>
            
            <div className="row container-fluid">
            <div className="row">
                <div className="col-6">
                        <img claasName="my-4" src={data.Image}  width={"100%"} height={"600vh"} />
                </div>
                <div className="col-6">
                        <tr><td><h1>Name  :  {data.Name}</h1></td></tr>
                        <tr><td><h2>Description  :  {data.Description}</h2></td></tr>
                        <tr><td><h4>Category  :  {data.Category}</h4></td></tr>
                        <tr><td><h4>Level  :  {data.Level}</h4></td></tr>
                        <tr><td><h4>Benefits  :  {data.Benefits}</h4></td></tr>
                        <tr><td><h4>Precautions  :  {data.Precautions}</h4></td></tr>
                </div>
            </div>
                
            </div>        
        </>
    );
}

export default YogaDetails;