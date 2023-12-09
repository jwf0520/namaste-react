import React from "react";
import reactDom from "react-dom/client";

/**
 * Header
 *  - logo
 *  - nav items
 * Body
 *  - search box
 *  - search button
 *  - restaurant container
 *    -restaurant card
 *      - img
 *      - name of restaurant, star rating, cuisines, delivery ETA
 * Footer
 *  - copyright
 *  - links
 *  - contact info
 */

//reactDOM.createRoot grab an element on the page and then interact with it
const root = reactDom.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/23/ea/f7/23eaf73a1787621248279492ecbfb43f.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "gray",
};

const RestaurantCard = () => {
  return (
    <div className="restaurant-card" style={{ backgroundColor: "gray" }}>
      <img
        className="restaurant-card-logo"
        src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/1862/1046/steak-istock.jpg?ve=1&tl=1"
      />
      <h2>JDs House of Beef</h2>
      <h3>Steak, Butter, Eggs</h3>
      <h4>5.1 Stars</h4>
      <h4>45 mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

//functional components are in angular brackets
root.render(<AppLayout />);
