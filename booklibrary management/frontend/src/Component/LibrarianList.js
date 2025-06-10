import axios from 'axios';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

export function LibrarianList() {
    const [libList, setLibList] = useState([]);
    const [uid, setUid] = useState();
    const [status, setStatus] = useState();

    const handleUid = (evt) => {
        setUid(evt.target.value);
    }
    const handleSatus = (evt) => {
        setStatus(evt.target.value);
    }

    const handleSubmit = () => {
        axios.get('http://localhost:5550/library/editlibrary/' + uid + '/' + status).then(res => {
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
        axios.get("http://localhost:5550/library/showAll").then(res => {
            if (res.data != null) {
                setLibList(res.data);
            }
            else {
                alert("Data Not Found");
            }
        }).catch(err => {
            alert("Something Went Wrong");
        });
    }
    return (
        <div>
            <center>
                <button className='mt-3' type='submit' onClick={handleButtonClick}>Click To Lirarian List</button>

                <Table className='mt-3' striped bordered hover>
                    <thead>
                        <tr>

                            <th>Librarian Id</th>
                            <th>Librarian Name</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {libList.map((item) => {
                            return (
                                <tr>
                                    <td>{item.uid}</td>
                                    <td>{item.fullname}</td>
                                    <td>{item.status}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <table>
                    <tr>
                        <td>Librarian Id</td>
                        <td>
                            <input type="text" placeholder="Enter Librarian Id" onChange={handleUid} />
                        </td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <select onChange={handleSatus}>
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
    );
}