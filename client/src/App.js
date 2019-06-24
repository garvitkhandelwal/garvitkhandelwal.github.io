import React from 'react';
import { Container } from 'reactstrap';
import './Styles/App.css';
import Navbar from './Components/LandingPage/Navbar';
import Search from './Components/LandingPage/Search';
import Platform from './Components/LandingPage/Platform';
import CustomerApps from './Components/LandingPage/CustomerApps';
import ManagementApps from './Components/LandingPage/ManagementApps';
import FlexContainer from './Components/flex/FlexContainer';
import axios from 'axios';

class App extends React.Component {

  state = {
    showFlex: false,
    showAbout: true,
    showReview: false,
    app_name: null,
    app_price: null,
    res_price: null,
    hotel_price: null,
    banquet_price: null,
    shop_price: null,
    points_price: null,
    campaigns_price: null,
    marketing_price: null,
    review_price: null,
    cash_management_price: null,
    staff_management_price: null,
    inventory_price: null,
    //cart_total: 0,
    //refund_id: 0
  }
  handleFlex = (name, price) => {
    this.setState (prevState => ({
      showFlex: !prevState.showFlex,
      app_name: name,
      app_price: price
    }))
  }
  handleAbout = (e) => {
    e.preventDefault()
    this.setState ({
      showAbout: true,
      showReview: false
    })
  }
  handleReview = (e) => {
    e.preventDefault()
    this.setState ({
      showReview: true,
      showAbout: false
    })
  }
  handleRestaurant = (num) => {
    this.setState ({
      res_price: num
    })
  }
  handleHotel = (num) => {
    this.setState ({
      hotel_price: num
    })
  }
  handleBanquet = (num) => {
    this.setState ({
      banquet_price: num
    })
  }
  handleShop = (num) => {
    this.setState ({
      shop_price: num
    })
  }
  handlePoints = (num) => {
    this.setState ({
      points_price: num
    })
  }
  handleCampaigns = (num) => {
    this.setState ({
      campaigns_price: num
    })
  }
  handleMarketing = (num) => {
    this.setState ({
      marketing_price: num
    })
  }
  handleReviews = (num) => {
    this.setState ({
      review_price: num
    })
  }
  handleCashManagement = (num) => {
    this.setState ({
      cash_management_price: num
    })
  }
  handleStaffManagement = (num) => {
    this.setState ({
      staff_management_price: num
    })
  }
  handleInventory = (num) => {
    this.setState ({
      inventory_price: num
    })
  }
  // handleCartTotal = (num) => {
  //   alert("Item added to cart")
  //   this.setState (prevState => ({
  //     cart_total: prevState.cart_total + Number(num)
  //   }))
  // }
  paymentHandler = (price, app) => {
    const amount = Number(price);
    axios.get('/pay')
    .then((response) => {
      console.log(response);
      const options = {
        "key": response.data,
        "amount": amount * 100,
        "name": 'Biller',
        "description": 'Let us serve you better',
        "handler": function(response) {
          axios.post('/transactions/create', {
            payment_id: response.razorpay_payment_id,
            userId: "qwerty",
            app: app,
            amount: price,
          })
          alert(response.razorpay_payment_id);
        },
        "prefill": {
          "name": 'My Biller',
          //"email": 'nimirtiwari.mybiller.io',
        },
        "notes": {
          "address": 'Rajasthan, India'
        },
        "theme": {
          "color": 'rgb(255, 94, 53)'
        }
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    })
    .catch((error) => {
      console.log("Payment could not succeed!");
    })
    // const options = {
    //   "key": "rzp_test_Z9L3XWDX6HCqYb",
    //   "amount": amount * 100,
    //   "name": 'Biller',
    //   "description": 'Let us serve you better',

    //   "handler": function(response) {
    //     alert(response.razorpay_payment_id);
    //   },
    //   "prefill": {
    //     "name": 'My Biller',
    //     "email": 'nimirtiwari.mybiller.io',
    //   },
    //   "notes": {
    //     "address": 'Rajasthan, India'
    //   },
    //   "theme": {
    //     "color": 'rgb(255, 94, 53)'
    //   }
    // };
    // const rzp1 = new window.Razorpay(options);
    // rzp1.open();
  }
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <Search />
        <Container className="main-container">
          <Platform
            handleRestaurant={this.handleRestaurant}
            handleHotel={this.handleHotel}
            handleBanquet={this.handleBanquet}
            handleShop={this.handleShop}
            res_price={this.state.res_price}
            hotel_price={this.state.hotel_price}
            banquet_price={this.state.banquet_price}
            shop_price={this.state.shop_price}
            handleFlex={this.handleFlex} 
          />
          <CustomerApps 
            handlePoints={this.handlePoints}
            handleCampaigns={this.handleCampaigns}
            handleMarketing={this.handleMarketing}
            handleReviews={this.handleReviews}
            points_price={this.state.points_price}
            campaigns_price={this.state.campaigns_price}
            marketing_price={this.state.marketing_price}
            review_price={this.state.review_price}
            showFlex={this.state.showFlex} 
            handleFlex={this.handleFlex} 
          />
          <ManagementApps
            handleCashManagement={this.handleCashManagement}
            handleStaffManagement={this.handleStaffManagement}
            handleInventory={this.handleInventory}
            cash_management_price={this.state.cash_management_price}
            staff_management_price={this.state.staff_management_price}
            inventory_price={this.state.inventory_price}
            showFlex={this.state.showFlex} 
            handleFlex={this.handleFlex} 
          />
        </Container>
        {this.state.showFlex ? <FlexContainer 
                                  app_name={this.state.app_name}
                                  app_price={this.state.app_price}
                                  showAbout={this.state.showAbout} 
                                  handleAbout={this.handleAbout}
                                  handleFlex={this.handleFlex}
                                  showReview={this.state.showReview}
                                  handleReview={this.handleReview}
                                  handleCartTotal={this.handleCartTotal}
                                  handleClick={this.handleClick} 
                                  paymentHandler={this.paymentHandler}
                                /> : null}
      </div>
    );
  }
}

export default App;
