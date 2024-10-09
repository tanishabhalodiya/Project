import { Link, useNavigate } from 'react-router-dom';
import { useState} from 'react';
import axios from 'axios';
// import { use } from '../../../../Backend/Routes/Yoga_pose';

//when we want to add yoga this function will call
function AddYogaPose(){
    const [data,setData]=useState(
        {
            YogaId:"",
            Name:"",
            Description:"",
            Image:"",
            Category:"",
            Level:"",
            Benefits:"",
            Precautions:""
        }
    )
    const [error,setError]=useState("");
    const navigate = useNavigate();
    const handleChange=({currentTarget : input})=>{
        setData(
            {   
                ...data,
                [input.name]:input.value
            }
        )
    }
    //when u click submit data will be submited
    console.log(data);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const url="http://localhost:4001/yoga/addyoga";
            const res = await axios.post(url, data);
            navigate('/allyoga');
        }
        catch (error) {
            if(error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500)
            {
                setError(error.response.data.message);
            }   
        }
    }
    //style={{backgroundColor: '#090808'}}
    return (
        <div class="vh-100 container align-items-center" style={{color: '#090808'}}>
            <div class="container py-2 h-100">
                <form class="justify-content-center align-center" style={{backgroundColor: '#5f6669'}}>

                    <div class="d-flex align-items-center mb-1 pb-1 justify-align-center" >
                        <i class="fas fa-cubes fa-2x me-3" style={{ color: "#090808" }}></i>
                        <span class="h1 fw-bold mt-4">Add Yoga Details</span>
                    </div>

                    <div class="input-group flex-nowrap mb-3"  style={{ maxWidth: "60%" }}>
                        <span class="input-group-text" id="addon-wrapping">Yoga Id</span>
                        <input type="text" class="form-control" placeholder="Yoga Id" aria-label="Username" aria-describedby="addon-wrapping"
                            name='YogaId'
                            onChange={handleChange}
                            value={data.YogaId}
                            required
                        />
                    </div>
                    <div class="input-group flex-nowrap mb-3"  style={{ maxWidth: "60%" }}>
                        <span class="input-group-text" id="addon-wrapping">Yoga Name</span>
                        <input type="text" class="form-control" placeholder="Yoga Name" aria-label="Username" aria-describedby="addon-wrapping"
                            name='Name'
                            onChange={handleChange}
                            value={data.Name}
                            required
                        />
                    </div>
                    <div class="input-group flex-nowrap mb-3" style={{ maxWidth: "60%" }}>
                        <span class="input-group-text" id="addon-wrapping">Description</span>
                        <input type="text" class="form-control" placeholder="Description" aria-label="Username" aria-describedby="addon-wrapping"
                            name='Description'
                            onChange={handleChange}
                            value={data.Description}
                            required
                        />
                    </div>
                    <div class="input-group flex-nowrap mb-3" style={{ maxWidth: "60%" }}>
                        <span class="input-group-text" id="addon-wrapping">Image</span>
                        <input type="text" class="form-control" placeholder="Image" aria-label="Username" aria-describedby="addon-wrapping"
                            name='Image'
                            onChange={handleChange}
                            value={data.Image}
                            required
                        />
                    </div>
                    <div class="input-group flex-nowrap mb-3" style={{ maxWidth: "60%" }}>
                        <span class="input-group-text" id="addon-wrapping">Category</span>
                        <input type="text" class="form-control" placeholder="Category" aria-label="Username" aria-describedby="addon-wrapping"
                            name='Category'
                            onChange={handleChange}
                            value={data.Category}
                            required
                        />
                    </div>
                    <div class="input-group flex-nowrap mb-3" style={{ maxWidth: "60%" }}>
                        <span class="input-group-text" id="addon-wrapping">Level</span>
                        <input type="text" class="form-control" placeholder="Level" aria-label="Username" aria-describedby="addon-wrapping"
                            name='Level'
                            onChange={handleChange}
                            value={data.Level}
                            required
                        />
                    </div>
                    <div class="input-group flex-nowrap mb-3" style={{ maxWidth: "60%" }}>
                        <span class="input-group-text" id="addon-wrapping">Benefits</span>
                        <input type="text" class="form-control" placeholder="Benefits" aria-label="Username" aria-describedby="addon-wrapping"
                            name='Benefits'
                            onChange={handleChange}
                            value={data.Benefits}
                            required
                        />
                    </div>
                    <div class="input-group flex-nowrap mb-3" style={{ maxWidth: "60%" }}>
                        <span class="input-group-text" id="addon-wrapping">Precautions</span>
                        <input type="text" class="form-control" placeholder="Precautions" aria-label="Username" aria-describedby="addon-wrapping"
                            name='Precautions'
                            onChange={handleChange}
                            value={data.Precautions}
                            required
                        />
                    </div>
                    
                    <Link to="/allyoga">
                        <div class="mt-3 justify-content-center">
                            <button data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-lg btn-block" type="button"
                                onClick={handleSubmit}
                            >Add</button>
                        </div>
                    </Link>
                </form>
            </div>
        </div>
        
    )
}
export default AddYogaPose;