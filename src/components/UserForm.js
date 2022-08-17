import React, { useState } from "react";
import Card from "../UI/Card.js";
import UserData from "./UserData.js";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
    const [userName, setUserName] = useState("");
    const [userData, setUserData] = useState(null);
    const [validUser, setValidUser] = useState("");

    const getData = async (e) => {
        e.preventDefault();

        if (userName.trim().length === 0) return;

        let response = await fetch(
            `https://api.github.com/users/${userName.trim()}`
        ).then((response) => response);

        if (response.status === 200) {
            let data = await response.json();
            setUserData(data);
            setValidUser("true");
        } else if (response.status === 404) {
            setUserData({});
            setValidUser("false");
        }
    };

    const nameChangeHandler = (e) => {
        setUserName(e.target.value);
    };

    return (
        <React.Fragment>
            <Card className={classes["card_spacing"]}>
                <input
                    className={`${classes["user-input"]} ${
                        validUser === "false" ? classes["invalid"] : ""
                    }`}
                    type="text"
                    placeholder="Enter GitHub username"
                    value={userName}
                    onChange={nameChangeHandler}
                />
                <button className={classes["submit-btn"]} onClick={getData}>
                    Submit
                </button>
            </Card>

            {userData !== null && (
                <Card>
                    {validUser === "false" && <h1>{`User not found :(`}</h1>}
                    {validUser === "true" && <UserData data={userData} />}
                </Card>
            )}
        </React.Fragment>
    );
};

export default UserForm;
