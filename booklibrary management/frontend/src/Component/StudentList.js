import React, { useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

export function StudentList() {
    const [studList, setStudList] = useState([]);
    const [uid, setUid] = useState();
    const [status, setStatus] = useState();

    const handleUid = (evt) => {
        setUid(evt.target.value);
    }
    const handleStatus = (evt) => {
        setStatus(evt.target.value);
    }
    const handleSubmit = () => {
        axios.get('http://localhost:5550/books/editstudent/' + uid + '/' + status).then(res => {
            if (res.data != null) {
                alert("Data updated")
            }
            else {
                alert("Data Not Updated");
            }
        }).catch(err => {
            alert("Something Went wrong");
        })
    }
    const handleButtonClick = () => {
        axios.get("http://localhost:5550/books/showAll").then(res => {
            if (res.data != null) {
                setStudList(res.data);
            }
            else {
                alert("Data Not Found");
            }
        }).catch(err => {
            alert("Something Went Wrong");
        });
    }
    return (
        <>
            <div>
                <center>
                    <h1 className="mt-3">List Of Student</h1>
                    <br></br>
                    <button type="submit" onClick={handleButtonClick}>Click To Show All Student</button>
                    <Table className="mt-3" striped bordered hover variant >
                        <thead>
                            <tr>

                                <th>Student Code</th>
                                <th>Student Name</th>
                                <th>Student Class</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studList.map((item) => {
                                return (
                                    <tr>

                                        <td>{item.uid}</td>
                                        <td>{item.fullname}</td>
                                        <td>{item.classname}</td>
                                        <td>{item.status}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                    <table>
                        <tr>
                            <td>StudentId</td>
                            <td>
                                <input type="text" placeholder="Enter student Id" onChange={handleUid} />
                            </td>
                        </tr>
                    
                        <tr>
                            <td>Status</td>
                            <select onChange={handleStatus}>
                                <option >Active</option>
                                <option >Inactive</option>
                            </select>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit" onClick={handleSubmit}>Submit</button>
                            </td>
                        </tr>
                    </table>
                </center>
            </div>
        </>
    );
}