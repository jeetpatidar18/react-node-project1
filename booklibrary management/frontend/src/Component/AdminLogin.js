import React, { useState } from "react";
import FailurePage from "./FailurePage.js";
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import Admin from "./Admin.js";

export default function AdminLogin() {
    const [uid, setUid] = useState();
    const [upass, setUpass] = useState();

    const handleTextChange = (evt) => {
        if (evt.target.name === "tbuid") {
            setUid(evt.target.value);
        }
        else if (evt.target.name === "tbupass") {
            setUpass(evt.target.value);
        }
    }
    const handleButtonClick = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        if (uid === "admin" && upass === "12345") {
            root.render(
                <BrowserRouter>
                    <Admin />
                </BrowserRouter>
            );
        } else {
            root.render(
                <BrowserRouter>
                    <FailurePage />
                </BrowserRouter>
            );
        }
    }
    return (
        <div id="books" style={{ marginTop: "30px"}}>
            <center>
                <h1>Admin Login</h1>
                <table>
                    <tr>
                        <td>User Id</td>
                        <td>
                            <input type="text" name="tbuid" onChange={handleTextChange} placeholder="Input User" />
                        </td>
                    </tr>
                    <tr>
                        <td>User Password</td>
                        <td>
                            <input type="password" name="tbupass" onChange={handleTextChange} placeholder="Input User" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <button id="btn" type="submit" name="btnlogin" onClick={handleButtonClick}>Login</button>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
    );
}