import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import axios from 'axios';
import inventory from '../../Images/inventory.svg';
import cashmanagement from '../../Images/cashmanagement.svg';
import staffmanagement from '../../Images/staffmanagement.png';

class ManagementApps extends React.Component {
    componentDidMount = () => {
        axios.get('http://localhost:3001/products/rating/Cash%20Management')
            .then((response) => {
                this.props.handleCashManagement(response.data.app_price)
            })
            .catch((error) => {
                console.log(error);
            })
        axios.get('http://localhost:3001/products/rating/Staff%20Management')
            .then((response) => {
                this.props.handleStaffManagement(response.data.app_price)
            })
            .catch((error) => {
                console.log(error);
            })
        axios.get('http://localhost:3001/products/rating/Inventory')
            .then((response) => {
                this.props.handleInventory(response.data.app_price)
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
                            <p className="apps-heading">Apps for Management</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="card-apps" onClick={()=>this.props.handleFlex("Cash Management")}>
                                <CardImg src={cashmanagement} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Cash Management</CardTitle>
                                    <CardSubtitle>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="rupee">₹ {this.props.cash_management_price}</span>
                                    </CardSubtitle>
                                </CardBody>
                                <div className="card-overlay">
                                    <Button className="purchase-overlay-btn" size="sm">Purchase</Button>
                                </div>
                            </Card>
                            <Card className="card-apps" onClick={()=>this.props.handleFlex("Staff Management")}>
                                <CardImg src={staffmanagement} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Staff Management</CardTitle>
                                    <CardSubtitle>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="rupee">₹ {this.props.staff_management_price}</span>
                                    </CardSubtitle>
                                </CardBody>
                                <div className="card-overlay">
                                    <Button className="purchase-overlay-btn" size="sm">Purchase</Button>
                                </div>
                            </Card>
                            <Card className="card-apps" onClick={()=>this.props.handleFlex("Inventory")}>
                                <CardImg src={inventory} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Inventory</CardTitle>
                                    <CardSubtitle>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="fas fa-star checked"></span>
                                        <span className="rupee">₹ {this.props.inventory_price}</span>
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

export default ManagementApps;