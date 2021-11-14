import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import configureStore from "../../store/configureStore";
import axios from "axios";

const AddPin = () => {
    return(
        <div class="borderc pinbox">
        <h2>پین جدید</h2>
        <form action="#newpin.php" method="post">
            <textarea name="cpin" cols="30" rows="10" placeholder="توضیحات" required></textarea>
            <img src="./images/formicn.png" alt="formicn"/>
            <input type="text" name="titr" placeholder="موضوع" required/>
            <input type="submit" value="ثبت"/>
        </form>
    </div>
    );
}

export default AddPin ;