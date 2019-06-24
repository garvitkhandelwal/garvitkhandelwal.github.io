import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class ReviewFlex extends React.Component {
    constructor() {
        super()
        this.state = {
            rating: 1,
        };
    }
    componentDidMount = () => {
        this.props.getReviews();
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({
            rating: nextValue
        });
    }

    render() {
        let {heading} = this.props;
        if(heading) {
            heading.sort((a,b) => {
                let temp1 = new Date(a.date);
                let temp2 = new Date(b.date);
                return temp2.getTime() - temp1.getTime()
            })
        }

        const {rating} = this.state;
        return (
            <div className="reviewflex-container">
                <button className="write-review-btn" onClick={this.props.writeReview}>
                    <i class="fas fa-pencil-alt"></i>
                    Write a review
                </button>
                {this.props.showReviewBox ?
                    <div className="rating-dialog-box">
                        <p className="rate-this-app">Rate this app</p>
                        <p className="liked-it">Liked it?</p>
                        <StarRatingComponent
                            className="star-rating-component"
                            name="rating"
                            starCount={5}
                            value={rating}
                            onStarClick={this.onStarClick.bind(this)}
                        />
                        <input className="review-input" type="text" placeholder="Write a review (Optional)" onChange={this.props.handleInputChange}></input>
                        <div>
                            <button className="cancel-review-btn" type="click" onClick={this.props.writeReview}>cancel</button>
                            <input className="submit-review-btn" type="submit" onClick={() => this.props.handleReviewSubmit(this.state.rating)}></input>
                        </div>
                    </div>
                    : null
                }
                <div>
                    {heading && heading.map((review, key) => {
                        return <div className="review" key={key}>   
                            <div className="review-rating">
                                <button className="review-rating-btn">{review.rating}<i className="fas fa-star review-star"></i></button>
                            </div>
                            <div>
                            <p className="review-msg">{review.msg}</p>
                            <p className="review-date">{review.date}</p>
                            </div>
                            <hr className="review-hr" /> 
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default ReviewFlex;