import React from "react";

function About(){
    return(
    <>
    <div className="p-3" style={{fontWeight:"bold",fontSize:"25px",backgroundImage:"url('https://www.freewallpapers4u.in/wp-content/uploads/2020/12/Yoga-HD-Wallpaper-1-1536x917.jpg')",width:"100%",height:"100vh",backgroundRepeat:"no-repeat"}} >
    <header>
        <h1>About Our Yoga Studio</h1>
    </header>
    <main>
        <section className="about-section">
            <h2>Our Mission</h2>
            <p>At Yoga Studio, our mission is to create a peaceful and supportive environment where individuals can explore and deepen their yoga practice.</p>
        </section>
        <section className="about-section">
            <h2>Our Instructors</h2>
            <p>Our team of certified yoga instructors is dedicated to guiding you on your journey, no matter your level of experience.</p>
        </section>
        <section className="about-section">
            <h2>Our Values</h2>
            <ul>
                <li>Community</li>
                <li>Mindfulness</li>
                <li>Inclusivity</li>
                <li>Wellness</li>
            </ul>
        </section>
        <section className="about-section">
            <h2>Join Us</h2>
            <p>Whether you're a beginner or an experienced yogi, we welcome you to join our community and embark on a transformative journey with us.</p>
        </section>
        {/* <img src="https://wallpaperaccess.com/full/1642718.jpg" width={"100%"} height={"1000vh"}/> */}
    </main>
    <footer>
        <p>&copy; 2024 Yoga Studio</p>
    </footer>
    </div>
    
    </>
    )
}

export default About;
