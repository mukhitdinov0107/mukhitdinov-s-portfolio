import React from "react"
import Particle from "react-particles-js";
import particlesConfig from "../assets/particlesConfig.json"


function App() {
    return (
        <>
            <Particle params={particlesConfig} className="App-particles_container" />
            <div className="App">
                <div className="App-text">
                    <h1 className="App_title">Najmiddin Muhitdinov</h1>
                    <h2 className="App_body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur debitis facilis, magnam mollitia nostrum, numquam optio porro quae soluta, tempore voluptas! Autem facere, magni perferendis perspiciatis praesentium rerum sequi!
                    </h2>
                </div>
            </div>
        </>
    );
}

export default App;