import React, { useState } from "react";
import axios from "axios";
import FailurePage from "./FailurePage.js";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from 'react-router-dom'
import { StudNav } from "./StudNav";


export function Login() {
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
    const handleLogedinButton = () => {
        axios.get("http://localhost:5550/books/login/" + uid + "/" + upass).then(res => {
            if (res.data != null) {
                var fname = res.data.fullname;
                root.render(
                    <BrowserRouter>
                        <StudNav data={fname} />
                    </BrowserRouter>
                )
            }
            else {
                root.render(
                    <React.StrictMode>
                        <FailurePage />
                    </React.StrictMode>
                )
            }
        });
    }
    return (
        
        <div id="books"style={{marginTop:"30px"}}>
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