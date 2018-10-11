import React, { Component } from "react";
import API from "../../utils/API";
import Navigation from "../../components/Navbar/Navbar";
import Banners from "../../components/Banners/Banners";
import Login from "../Login/Login";
import Cards from "../../components/Cards/Cards";
import { Button, Col, Row } from 'reactstrap';

class Beers extends React.Component {
    state = {
        example: "some state!"
    };



    render() {
        return (
            <div>
                <Navigation />
                <Col>
                    <Button md="12" className="mx-auto" color="dark" href="/addBeer" body>Add A Beer!</Button>
                </Col>
                <Cards />
            </div>
        );
    }
}

export default Beers;