import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Container, Row, Button } from 'reactstrap';
import axios from 'axios';
import restaurant from '../../Images/restaurant.png';
import hotel from '../../Images/hotel.png';
import banquet from '../../Images/banquet.png';
import shop from '../../Images/shop.png';

class Platform extends React.Component {
    componentDidMount = () => {
        axios.get('http://localhost:3001/products/rating/Restaurant')
            .then((response) => {
                this.props.handleRestaurant(response.data.app_price)
            })
            .catch((error) => {
                console.log(error);
            })
        axios.get('http://localhost:3001/products/rating/Hotel')
            .then((response) => {
                this.props.handleHotel(response.data.app_price)
            })
            .catch((error) => {
                console.log(error);
            })
        axios.get('http://localhost:3001/products/rating/Banquet')
            .then((response) => {
                this.props.handleBanquet(response.data.app_price)
            })
            .catch((error) => {
                console.log(error);
            })
        axios.get('http://localhost:3001/products/rating/Shop')
            .then((response) => {
                this.props.handleShop(response.data.app_price)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (    
            <div>
                <Container className="platform">
                    <Row>
                        <p className="platform-heading">Your Platform</p>
                    </Row>
                    <Row className="platform-card-container">
                        <Card className="card-restaurant" onClick={()=>this.props.handleFlex("Restaurant", this.props.res_price)}>
                            <CardImg className="card-img" src={restaurant} alt="Card image cap" />
                            <CardBody className="card-body">
                                <CardTitle>Restaurant</CardTitle>
                                <CardSubtitle>
                                    <span className="fas fa-star checked"></span>
                                    <span className="fas fa-star checked"></span>
                                    <span className="fas fa-star checked"></span>
                                    <span className="far fa-star"></span>
                                    <span className="far fa-star"></span>
                                    <span className="rupee">₹ { this.props.res_price }</span>
                                </CardSubtitle>
                            </CardBody>
                            <div className="card-overlay">
                                <Button className="purchase-overlay-btn" size="sm">Purchase</Button>
                            </div>
                        </Card>
                        <Card className="card-hotel" onClick={()=>this.props.handleFlex("Hotel", this.props.hotel_price)}>
                            <CardImg className="card-img" src={hotel} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Hotel</CardTitle>
                                <CardSubtitle>
                                    <span className="fas fa-star checked"></span>
                                    <span className="fas fa-star checked"></span>
                                    <span className="fas fa-star checked"></span>
                                    <span className="fas fa-star checked"></span>
                                    <span className="far fa-star"></span>
                                    <span className="rupee">₹ { this.props.hotel_price }</span>
                                </CardSubtitle>
                            </CardBody>
                            <div className="card-overlay">
                                <Button className="purchase-overlay-btn" size="sm">Purchase</Button>
                            </div>
                        </Card>
                        <Card className="card-banquet" onClick={()=>this.props.handleFlex("Banquet", this.props.banquet_price)}>
                            <CardImg className="card-img" src={banquet} alt="Card image cap" />
                            <CardBody>
                                <CardTitle className="card-title">Banquet</CardTitle>
                                <CardSubtitle className="card-subtitle">
                                    <span className="fas fa-star checked"></span>
                                    <span className="fas fa-star checked"></span>
                                    <span className="fas fa-star checked"></span>
                                    <span className="fas fa-star checked"></span>
                                    <span className="fas fa-star checked"></span>
                                    <span className="rupee">₹ { this.props.banquet_price }</span>
                                </CardSubtitle>
                            </CardBody>
                            <div className="card-overlay">
                                <Button className="purchase-overlay-btn" size="sm">Purchase</Button>
                            </div>
                        </Card>
                        <Card className="card-shop" onClick={()=>this.props.handleFlex("Shop", this.props.shop_price)}>
                            <CardImg className="card-img" src={shop} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Shop</CardTitle>
                                <CardSubtitle>
                                    <span className="fas fa-star checked"></span>
                                    <span className="fas fa-star checked"></span>
                                    <span className="fas fa-star checked"></span>
                                    <span className="far fa-star"></span>
                                    <span className="far fa-star"></span>
                                    <span className="rupee">₹ { this.props.shop_price }</span>
                                </CardSubtitle>
                            </CardBody>
                            <div className="card-overlay">
                                <Button className="purchase-overlay-btn" size="sm">Purchase</Button>
                            </div>
                        </Card>
                    </Row>
                </Container>
            </div> 
        );
    }
}

export default Platform;