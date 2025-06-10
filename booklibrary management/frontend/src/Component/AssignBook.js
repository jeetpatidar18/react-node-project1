import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AssignBook() {
    const [studid, setStudUid] = useState();
    const [studname, setStudName] = useState();
    const [studclassname, setStudClassName] = useState();
    const [bookstatus, setBookStatus] = useState();
    const [bookname, setBookName] = useState();
    const [mylist,setMyList]=useState([])

    const handleStudUidText = (evt) => {
        setStudUid(evt.target.value);
    }
    const handleStudNameText = (evt) => {
        setStudName(evt.target.value);
    }
    const handleStudClassNameText = (evt) => {
        setStudClassName(evt.target.value);
    }
    const handleBookStatus = (evt) => {
        setBookStatus(evt.target.value);
    }
    const handleBookNameText = (evt) => {
        setBookName(evt.target.value);
    }
        const handleRegButton = () => {
            let obj = {
                studid: studid,
                studname: studname,
                studclassname: studclassname,
                bookstatus:bookstatus,
                bookname:bookname,
            };
            axios.post("http://localhost:5550/issuebook/save", obj)
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
    });
    return (
        <div style={{ marginTop: "30px" }} id="books">
            <center>

                <h1>Assign Book</h1>

                <table>
                    <tr>
                        <td>Student Id</td>
                        <td>
                            <input type="text" placeholder="Student ID"
                                onChange={handleStudUidText} />
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
                        <td>Book Status</td>
                        <td>
                            <select onClick={handleBookStatus}>
                                <option>IssueBook</option>
                                <option>SubmitBook</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td>Book Name</td>
                        <td>
                            <select onClick={handleBookNameText}>
                                {
                                    mylist.map((item) => (
                                        <option value={item.bcode}>{item.bname}</option>
                                    ))
                                }
                            </select>
                        </td>
                    </tr>

                    <br></br>
                    <tr>
                        <td>
                            <button id="btn" type="submit" onClick={handleRegButton}>Register me</button>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
    );
} 