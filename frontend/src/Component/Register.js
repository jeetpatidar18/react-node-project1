import React, { useState } from "react";
import axios from "axios";

export default function Register(){
    const [uid,setUid]=useState();
    const [upass,setUpass]=useState();
    const [fullname,setFullName]=useState();
    const [classname,setClassName]=useState();
    const [gender,setGender]=useState();
    const [city,setCity]=useState();
    const [studrollno,setStudRollNo]=useState();
    const [regdate,setRegDate]=useState();
    const [status,setStatus]=useState();
    

    const handleUidText=(evt)=>{
        setUid(evt.target.value);
    }
    const handleUpassText=(evt)=>{
        setUpass(evt.target.value);
    }
    const handleFullNameText=(evt)=>{
        setFullName(evt.target.value);
    }
    const handleClassNameText=(evt)=>{
        setClassName(evt.target.value);
    }
    const handleGenderText=(evt)=>{
        setGender(evt.target.value);
    }
    const handleCityNameText=(evt)=>{
        setCity(evt.target.value);
    }
    const handleStudRollNoText=(evt)=>{
        setStudRollNo(evt.target.value);
    }
    const handleRegDateText=(evt)=>{
        setRegDate(evt.target.value);
    }
    const handleStatusText=(evt)=>{
        setStatus(evt.target.value);
    }
    const handleRegButton=()=>{
        let obj={
            uid:uid,
            upass:upass,
            fullname:fullname,
            classname:classname,
            gender:gender,
            city:city,
            studrollno:studrollno,
            regdate:regdate,
            status:status
        };
        axios.post("http://localhost:5550/books/registration",obj)
        .then(res=>console.log(res.data))
        .then(alert("Registration Successfully"));
    }
    return(
        <div style={{marginTop:"30px"}}id="books">
            <center>

                <h1>Registration From</h1>
        
                <table>
                    <tr>
                        <td>User Id</td>
                        <td>
                            <input type="text" placeholder="User ID"
                             onChange={handleUidText}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                        <input type="password" placeholder="Password" 
                        onChange={handleUpassText}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Full name</td>
                        <td>
                            <input type="text" placeholder="Full name" 
                            onChange={handleFullNameText}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Class Name</td>
                        <td>
                            <select onChange={handleClassNameText}>
                                <option >9th</option>
                                <option >10th</option>
                                <option >11th</option>
                                <option >12th</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>
                            <input type="radio"value="male"name="gender"onChange={handleGenderText}/>Male
                            <input type="radio" value="female" name="gender" onChange={handleGenderText}/>Female
                        </td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>
                            <select onChange={handleCityNameText}>
                                <option >Khargone</option>
                                <option >Bhopal</option>
                                <option >Indore</option>
                                <option >Ujjain</option>
                                
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Roll No</td>
                        <td>
                            <input type="number"onChange={handleStudRollNoText}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Reg Date</td>
                        <td>
                            <input type="date"onChange={handleRegDateText}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <select onChange={handleStatusText}>
                            <option >Active</option>
                            <option>Inactive</option>
                        </select>
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