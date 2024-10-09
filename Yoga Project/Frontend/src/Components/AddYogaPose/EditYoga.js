import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function EditYoga() {
    const [data, setData] = useState({});
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { YogaId } = useParams();

    // Handle input changes
    const handleChange = ({ currentTarget: input }) => {
        setData({
            ...data,
            [input.name]: input.value
        });
    };

    // Fetch yoga details when component mounts
    useEffect(() => {
        const url = `http://localhost:4001/yoga/${YogaId}`;
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Failed to fetch");
                }
                return res.json();
            })
            .then(
                res => setData(res)
            )
            .catch(err => setError(err.message));
    }, [YogaId]);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const url = `http://localhost:4001/yoga/update/${YogaId}`;

        try {
            const response = await fetch(url, {
                method: 'PATCH', // Use PATCH to update
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Send the updated data
            });

            if (!response.ok) {
                throw new Error("Failed to update");
            }

            const updatedYoga = await response.json();
            // Navigate to another page or show success message
            navigate("/allyoga");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div class="vh-100 container" style={{color: '#090808'}}>
            <div class="container py-2 h-100">
                <form class="justify-content-center align-center" style={{backgroundColor: '#5f6669'}}>

                    <div class="d-flex align-items-center mb-1 pb-1 justify-align-center" >
                        <i class="fas fa-cubes fa-2x me-3" style={{ color: "#090808" }}></i>
                        <span class="h1 fw-bold mt-4">Edit Yoga Details</span>
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
                            >Edit</button>
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default EditYoga;
