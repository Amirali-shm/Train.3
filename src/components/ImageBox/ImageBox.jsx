import React from "react";
const ImageBox = () => {
    return (
        <div className="right shapebox">
            <div className="imgsbox">
                <div className="borderc">
                    <img src="./images/t-logo.png" alt="Train" />
                </div>
                <div className="borderc" style={{ width: '90%', margin: '0 auto' }}>
                    <img src="./images/shape-2-min.png" className="admin-img" alt="" />
                    <h2>امیرعلی شفیعی مقدم</h2>
                    <div className="img-sortby">
                        <span style={{ color: "#ff2442" }}>کدفرانت</span>
                        <span style={{ color: "#ffb830" }}>Ui/Ux</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ImageBox;