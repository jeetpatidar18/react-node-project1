import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SubmitBook() {
    const [bid, setBid] = useState();
    const [studid, setStudid] = useState();
    const [studname, setStudname] = useState();
    const [studclassname, setStudClassName] = useState();
    const [bookstatus,setBookStatus] = useState();
    const [mylist, setMyList] = useState([]);

    const handleBid = (evt) => {
        setBid(evt.target.value);
    }
    const handleStudId = (evt) => {
        setStudid(evt.target.value);
    }
    const handleStudNameText = (evt) => {
        setStudname(evt.target.value);
    }

    const handleStudClassNameText = (evt) => {
        setStudClassName(evt.target.value);
    }
    const handleBookStatus = (evt) => {
        setBookStatus(evt.target.value);
    }
    
    const handleRegButton = () => {
        let obj = {
            bid: bid,
            studid: studid,
            studname: studname,
            studclassname: studclassname,
            bookstatus:bookstatus,
        };
        axios.post("http://localhost:5550/submitbook/save", obj)
            .then(res => console.log(res.data))
            .then(alert("Registration Successfully"));
    }
    useEffect(() => {
        axios.get("http://localhost:5550/book/showAll").then(res => {
            if (res.data != null) {
                setMyList(res.data);
            }
            else {
                alert("Data Not Found");
            }
        }).catch(err => {
            alert("Something Went Wrong");
        });
    })
    return (
        <div style={{ marginTop: "30px" }} id="books">
            <center>

                <h1>SubmitBook Library</h1>

                <table>
                    <tr>
                        <td>Student Id</td>
                        <td>
                            <input type="text" placeholder="Student ID"
                                onChange={handleStudId} />
                        </td>
                    </tr>
                    <tr>
                        <td>Student Name</td>
                        <td>
                            <input type="text" placeholder="Student Name"
                                onChange={handleStudNameText} />
                        </td>
                    </tr>
                    <tr>
                        <td>Class</td>
                        <td>
                            <select onChange={handleStudClassNameText}>
                                <option>9th</option>
                                <option>10th</option>
                                <option>11th</option>
                                <option>12th</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Book Name</td>
                        <td>
                            <select onClick={handleBid}>
                                {
                                    mylist.map((item) => (
                                        <option value={item.bcode}>{item.bname}</option>
                                    ))
                                }
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Book Status</td>
                        <td>
                            <select onClick={handleBookStatus}>
                                <option>SubmitBook</option>
                                <option>IssueBook</option>
                            </select>
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td>
                            <button id="btn" type="submit" onClick={handleRegButton}>Submit</button>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
    );
} 