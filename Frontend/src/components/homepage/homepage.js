import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import firstdata from "./firstdata";
import misscelaneous from "./misscelaneous";
import solar from "./solar";
import lunar from "./lunar";
import planets from "./planets";
import "./homepage.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



function createCard1(data1) {
    return (
        <Carousel.Item>
            <img
                className="d-block w-200"
                src={data1.img_link}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>{data1.name}</h3>
                <p>{data1.description}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );

}
function createCard2(data2) {
    return (
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={data2.img_link}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>{data2.date}</h3>
                <h4>{data2.name}</h4>
                <p>{data2.description}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );

}
function createCard3(data3) {
    return (
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={data3.img}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>{data3.date}</h3>
                <h4>{data3.name}</h4>
                <p>{data3.location}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );

}
function createCard4(data4) {
    return (
        <Carousel.Item>
            <img
                className="d-block w-200"
                src={data4.img_link}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>{data4.date}</h3>
                <h3>{data4.name}</h3>
                <p>{data4.description}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );

}
function createCard5(data5) {
    return (
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={data5.img}
                alt="First slide"
            />
            <Carousel.Caption>
                <a href={data5.info} target="blank"><h3 className="txt">{data5.name}</h3></a>
            </Carousel.Caption>
        </Carousel.Item>
    );

}


const Homepage = ({ setLoginUser }) => {

    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div class="ms-auto navbar-nav">
                        <a class="nav-item nav-link " href="#"><div className="btn btn-danger" onClick={() => setLoginUser({})}>Logout</div></a>
                    </div>
                </div>
            </nav>
            
            <Carousel>
                {firstdata.map(createCard1)}
            </Carousel>
            <div className="second_container">
                <h1 className="heading">Planetary Event</h1>
                <div className="second_carousel">
                    <Carousel>
                        {misscelaneous.map(createCard2)}
                    </Carousel>
                </div>
            </div>
            <div className="third_container">
                <h1 className="heading">Upcoming Solar Eclipses</h1>
                <div className="second_carousel">
                    <Carousel>
                        {solar.map(createCard3)}
                    </Carousel>
                </div>
            </div>
            <div className="fourth_container">
                <h1 className="heading">Upcoming Lunar Eclipses</h1>
                <div className="second_carousel">
                    <Carousel>
                        {lunar.map(createCard4)}
                    </Carousel>
                </div>
            </div>
            <div className="fifth_container">
                <div className="second_carousel">
                    <Carousel>
                        {planets.map(createCard5)}

                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
