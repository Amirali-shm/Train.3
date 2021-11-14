import React from "react";

const Pin = () => {
    return(
        <div className="alert-b">
                <i className="fa fa-circle" style={{ color: "#ffb830", right: "-40px" }} ariaHidden="true" ></i>
                <i className="fa fa-circle" style={{ color: "#ff2442", right: "-20px" }} ariaHidden="true"></i>
                <i className="fa fa-times" style={{
                    background: "#fff", color: "#ffffff", cursor: "pointer"
                }} ariaHidden="true" ></i>
                <p>طراحی پوستر صفحه اصلی بخش طراحی پوستر صفحه اصلی بخش طراحی پوستر صفحه اصلی بخش طراحی پوستر</p>
                <i className="fa fa-circle" style={{
                    color: '#3db2ff', left: '-20px'
                }} ariaHidden="true"></i>
                <i className="fa fa-circle" style={{ color: '#00af91', left: '-40px' }} ariaHidden="true"></i>
            </div>
    );
} 

export default Pin;