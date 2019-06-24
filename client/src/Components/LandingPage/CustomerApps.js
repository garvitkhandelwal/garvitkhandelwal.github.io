import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import axios from 'axios';
import points from '../../Images/points.png';
import campaigns from '../../Images/campaigns.png';
import marketing from '../../Images/marketing.png';
import reviews from '../../Images/reviews.png';

class CustomerApps extends React.Component {
    componentDidMount = () => {
        axios.get('http://localhost:3001/products/rating/Points')
            .then((response) => {
                this.props.handlePoints(response.data.app_price)
            })
            .catch((error) => {
                console.log(error);
            })
        axios.get('http://localhost:3001/products/rating/Campaigns')
            .then((response) => {
                this.props.handleCampaigns(response.data.app_price)
            })
            .catch((error) => {
                console.log(error);
            })
        axios.get('http://localhost:3001/products/rating/Marketing')
            .then((response) => {
                this.props.handleMarketing(response.data.app_price)
            })
            .catch((error) => {
                console.log(error);
            })
        axios.get('http://localhost:3001/products/rating/Review')
            .then((response) => {
                this.props.handleReviews(response.data.app_price)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                <Container className="apps-container">
                    <Row>
                        <Col>
                            <p className="apps-heading">App for Customers</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="card-apps" onClick={()=>this.props.handleFlex("Points", this.props.points_price)}>
                                <CardImg className="card-img" src={points} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Points</CardTitle>
                                    <CardSubtitle>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="rupee">₹ {this.props.points_price}</span>
                                    </CardSubtitle>
                                </CardBody>
                                <div className="card-overlay">
                                    <Button className="purchase-overlay-btn" size="sm">Purchase</Button>
                                </div>
                            </Card>
                            
                            <Card className="card-apps" onClick={()=>this.props.handleFlex("Campaigns", this.props.campaigns_price)}>
                                <CardImg src={campaigns} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Campaigns</CardTitle>
                                    <CardSubtitle>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="rupee">₹ {this.props.campaigns_price}</span>
                                    </CardSubtitle>
                                </CardBody>
                                <div className="card-overlay">
                                    <Button className="purchase-overlay-btn" size="sm">Purchase</Button>
                                </div>
                            </Card>
                            <Card className="card-apps" onClick={()=>this.props.handleFlex("Marketing", this.props.marketing_price)}>
                                <CardImg src={marketing} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Marketing</CardTitle>
                                    <CardSubtitle>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="rupee">₹ {this.props.marketing_price}</span>
                                    </CardSubtitle>
                                </CardBody>
                                <div className="card-overlay">
                                    <Button className="purchase-overlay-btn" size="sm">Purchase</Button>
                                </div>
                            </Card>
                            <Card className="card-apps" onClick={()=>this.props.handleFlex("Review", this.props.review_price)}>
                                <CardImg src={reviews} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Review</CardTitle>
                                    <CardSubtitle>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="rupee">₹ {this.props.review_price}</span>
                                    </CardSubtitle>
                                </CardBody>
                                <div className="card-overlay">
                                    <Button className="purchase-overlay-btn" size="sm">Purchase</Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CustomerApps;