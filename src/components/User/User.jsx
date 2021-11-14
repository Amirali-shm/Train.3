import React, { useState, useRef } from "react";
import TaskBox from "../Task/TaskBox";
import configureStore from "../../store/configureStore";
import axios from "axios";
import Header from "../Header/Header"
import Pin from "../Pin/Pin";
import ImageBox from "../ImageBox/ImageBox";
const User = () => {
    return (
        <div dir="rtl">


            <div className="content">

                <a href="./profile.html" className="usericn">
                    <img src="./images/usericn.png" alt="user" />
                </a>

                <div className="logo">
                    <img src="./images/t-logo.png" alt="Train" />
                </div>

                <TaskBox boxTitle="فعالیت های فردی"  boxClass="right alonebox"/>



                <div className="right shapebox">
                    <div className="imgsbox">
                        <img src="./images/t-logo.png" alt="Train" />
                        <img src="./images/shape-1-min.png" alt="" />
                    </div>
                    <h2>احمد رضا وکیلی</h2>
                    <div className="img-sortby">
                        <span style={{ color: '#ff2442' }}>کدفرانت</span>
                        <span style={{ color: '#00af91' }}>فایننشال</span>
                    </div>
                </div>

                <div>
                    
                    <TaskBox boxTitle="فعالیت های گروهی"  boxClass="right groupbox"/>



                </div>
                <div style={{ clear: 'both' }} ></div>



                <div className="post-btn">
                    <span>جدید</span>
                </div>

                <div className="post">
                    <i className="fa fa-times" ariaHidden="true"></i>
                    <h2>پست جدید</h2>
                    <form action="#new-post.php" method="post">
                        <i className="fa fa-circle" style={{ color: "#707070" }} ariaHidden="true"></i>
                        <input type="text" name="tpost" placeholder="موضوع خود را بنویسید" required />
                        <textarea name="cpost" id="" cols="30" rows="10" placeholder="توضیحات" required></textarea>
                        <input type="text" name="retpost" placeholder="موضوع" required />
                        <input type="text" name="time" placeholder="زمان" required />
                        <input type="submit" value="ثبت" />
                    </form>
                </div>

                <Pin />
            </div>


        </div>

    );
}

export default User;