import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import configureStore from "../../store/configureStore";
import axios from "axios";

const store = configureStore();

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    //user validation with "SimpleReactValidator" start
    const validator = useRef(
        new SimpleReactValidator({
            messages: {
                required: "پر کردن این فیلد الزامی میباشد",
                min: `لطفا بیشتر از 5 و کتر از 30 کاراکتر وارد کنید`,
                email: "ایمیل نوشته شده صحیح نمی باشد",

            },
            element: message => <div style={{ color: "red", textAlign: "center", fontSize: "2vh" }}>{message}</div>
        })
    );
    //user validation with "SimpleReactValidator" end

    //login and reset start
    const reset = () => {
        setEmail("");
        setPassword("");
    };
    const login = async event => {
        event.preventDefault();
        const user = { email, password };
        console.log(user)

        try {
            if (validator.current.allValid()) {
                console.log("valid");
                setLoading(true);
                let status;
                await axios.post("http://192.168.1.103:8080/api/auth/login", user).then((response) => {
                    console.log(response);
                    status = response.status;
                }).catch((error) => {
                    console.log(error);
                });

                if (status === 200) {


                    console.log("what");
                    setLoading(false);

                    reset();
                }
            } else {
                validator.current.showMessages();

                forceUpdate(1);
            }
        } catch (ex) {
            console.log(ex);
            setLoading(false);

        }
    };



    //login and reset start end

    return (

        <div className="login">

            <div className="logo sl-logo">
                <img src="./images/logo-min.png" alt="Train" title="Train" />
            </div>

            <div className="links">
                <a href="./signup.html">ثبت نام</a>
                <a href="./">ورود</a>
            </div>


            <form action="#" method="post" onSubmit={login}>
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="ایمیل"
                    value={email}
                    onChange={e => {
                        setEmail(e.target.value);
                        validator.current.showMessageFor("email");
                    }}
                />
                {validator.current.message(
                    "email",
                    email,
                    "required|email"
                )}

                <input
                    type="password"
                    name="password"
                    required
                    placeholder="رمز ورود"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                        validator.current.showMessageFor(
                            "password"
                        );
                    }} />
                {validator.current.message(
                    "password",
                    password,
                    `required|min: 5`
                )}
                <input type="submit" value="ورود" className="send" />

            </form>

        </div>





    );
}

export default Login;