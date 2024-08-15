import React from "react";

function Facilities() {
    return (
      <section className="facilities">
        <div className="ctn">
        <h2>We do our best facilities provide you</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button className="btm">Contact Now</button>
        </div>

        <div className="facilities-grid">
          <div className="facility-item">
          <i class="fa-solid fa-desktop"></i><h4>Private Workspace</h4></div>
          <div className="facility-item">
          <i class="fa-solid fa-square-parking"></i><h4>Parking Area</h4></div>
          <div className="facility-item">
          <i class="fa-solid fa-mug-saucer"></i><h4>Breakfast</h4></div>
          <div className="facility-item">
          <i class="fa-solid fa-wifi"></i><h4>Free WiFi</h4></div>
          <div className="facility-item">
          <i class="fa-solid fa-bolt"></i><h4>Free Electricity</h4></div>
          <div className="facility-item">
          <i class="fa-solid fa-person-swimming"></i><h4>Swimming Pool</h4></div>
          <div className="facility-item">
          <i class="fa-solid fa-dumbbell"></i><h4>Exercise Space</h4></div>
          <div className="facility-item">
          <i class="fa-solid fa-bars"></i><h4>Other Service</h4></div>
        </div>
      </section>

    
    );
  }
  
  export default Facilities;