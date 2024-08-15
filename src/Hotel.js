import React from "react";


function Hotel(){
    return(

        <div className="Hotel">
            <h2 className="pop">Our most popular Hotel</h2>
            <div className="Hotel-txt">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button className="btn">View All</button>
            </div>
            <div className="Hotel-img">
                <div className="card">
                    <img className="hi" src="/DJCSI Technical Tasks (1).png" />
                    <h3>Danbius Hotel Regents Park</h3>
                    <div className="rating">
                    <p>$200 per night</p>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>

                    <p>4</p>
                    </div>

                </div>
                <div className="card">
                    <img className="hi" src="/DJCSI Technical Tasks (3).png" />
                    <h3>The Resident Soho</h3>
                    <div className="rating">
                    <p>$200 per night</p>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>

                    <p>4</p>
                    </div>

                </div>
                <div className="card">
                    <img className="hi" src="/DJCSI Technical Tasks (2).png" />
                    <h3>Lodon Bridge Hotel</h3>
                    <div className="rating">
                    <p>$200 per night</p>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <p>4</p>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default Hotel;