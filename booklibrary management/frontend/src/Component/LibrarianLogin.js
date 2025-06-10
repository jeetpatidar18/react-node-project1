import React, { useState } from "react";
import axios from "axios";
import FailurePage from "./FailurePage.js";
import ReactDOM from "react-dom/client";
import { Librarian } from "./Librarian.js";
import { BrowserRouter } from "react-router-dom";
export default function LibrarianLogin() {
    const [uid, setUid] = useState();
    const [upass, setUpass] = useState();
    const [fullname,setFullName]=useState();
    const [isLogedin, setIsLogedin] = useState(false);
    const root = ReactDOM.createRoot(document.getElementById('root'));

    const handleUidText = (evt) => {
        setUid(evt.target.value);
    }
    const handleUpassText = (evt) => {
        setUpass(evt.target.value);
    }
    const handleFullNameText=(evt)=>{
        setFullName(evt.target.value);
    }
    const handleLogedinButton = (e) => {
        axios.get("http://localhost:5550/library/login/" + uid + "/" + upass+"/"+ fullname).then(res => {
            if (res.data != null) {
                root.render(
                    <BrowserRouter>
                        <Librarian/>
                    </BrowserRouter>
                )
            }
            else {
                root.render(
                    <BrowserRouter>
                        <FailurePage />
                    </BrowserRouter>
                )
            }
        });
    }
    return (
        
        <div style={{marginTop:"30px"}}id="books">
            <center>
                <h1>User Login</h1>
                <table>
                    <tr>
                        <td>User Id</td>
                        <td>
                            <input type="text" onChange={handleUidText} />
                        </td>
                    </tr>
                    <tr>
                        <td>User Password</td>
                        <td>
                            <input type="password" onChange={handleUpassText} />
                        </td>
                    </tr>
                    <tr>
                        <td>Full Name</td>
                        <td>
                            <input type="text"onChange={handleFullNameText}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="btn" type="submit" onClick={handleLogedinButton}>Login</button>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
    );
}