import React from "react";

function Map(){
    return(
        <div className="maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4505704988733!2d72.81669337466441!3d19.04391745297995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c945f2fb1149%3A0xa2ba742a39963b31!2sTaj%20Lands%20End%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1723733603371!5m2!1sen!2sin" className="map" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default Map;