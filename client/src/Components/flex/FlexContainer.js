import React from 'react';
import ReviewFlex from './Review/ReviewFlex';
import AboutFlex from './About/AboutFlex';
import axios from 'axios';

class FlexContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            showReviewBox: false,
            heading: [],
            message: null
        }
    }
    writeReview = () => {
        this.setState (prevState => ({
            showReviewBox: !prevState.showReviewBox
        }));
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({
            rating: nextValue
        });
    }
    handleInputChange = (e) => {
        this.setState ({
            message: e.target.value
        })
    }
    handleReviews = (heading) => {
        this.setState({heading})
    }
    getReviews = () => {
        axios.get('/products/rating/' + this.props.app_name)
            .then((response)=> {
                this.handleReviews(response.data.app_review)
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    handleReviewSubmit = (rating) => {
        alert("Review Added!");
        axios.post('/products/Add', {
            msg: this.state.message,
            rating: rating,
            name: this.props.app_name
        })
        .then((response)=> {
            this.getReviews();
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        });
        this.setState ({
            showReviewBox: false
        })
    }
    
    render() {
        return (
            <div className="flex-container">
                <div className="overlay-content">
                    <div className="overlay-header">
                        <div>
                            <i class="fas fa-times" onClick={this.props.handleFlex}></i>
                        </div>
                        <h2>
                            {this.props.app_name}
                        </h2>
                        <div>
                            <span class="fas fa-star checked"></span>
                            <span class="fas fa-star checked"></span>
                            <span class="fas fa-star checked"></span>
                            <span class="fas fa-star checked"></span>
                            <span class="fas fa-star checked"></span>
                            <span className="no-of-reviews">1022</span>
                            <span className="no-of-users">10,522+ users</span>
                        </div>
                        <button className="overlay-btn" type="click" onClick={() => this.props.paymentHandler(this.props.app_price, this.props.app_name)}>₹ {this.props.app_price} Buy</button>
                        <div className="overlay-switch-container">
                            <button className={this.props.showAbout ? "active" : null} type="click" onClick={this.props.handleAbout}>About</button>
                            <button className={this.props.showReview ? "active" : null} type="click" onClick={this.props.handleReview}>Review</button>
                        </div>
                    </div>
                    {this.props.showAbout ? <AboutFlex /> : null}
                    {this.props.showReview ? <ReviewFlex
                                                rating={this.state.rating}
                                                message={this.state.message}
                                                onStarClick={this.onStarClick}
                                                handleInputChange={this.handleInputChange}
                                                getReviews={this.getReviews}
                                                handleReviewSubmit={this.handleReviewSubmit}
                                                showReviewBox={this.state.showReviewBox}
                                                heading={this.state.heading} 
                                                writeReview={this.writeReview} /> : null}
                </div>
            </div>
        );
    }
}

export default FlexContainer;