import React from "react";
import {  Route, Routes } from "react-router-dom";
import { StudentList } from './StudentList.js';
import { LibrarianList } from './LibrarianList.js';
import AdminNav from './AdminNav.js'
import { ManageBook } from './ManageBook.js';
import { ManageUser } from './ManageUser.js';
import { NavigationBar } from "./NavigationBar.js";
export default function Admin() {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <AdminNav></AdminNav>
            <Routes>
                <Route path='/managebook' element={<ManageBook></ManageBook>}></Route>
                <Route path='/manageuser' element={<ManageUser></ManageUser>}></Route>
                <Route path='/studentlist' element={<StudentList></StudentList>}></Route>
                <Route path='/librarianlist' element={<LibrarianList></LibrarianList>}></Route>
            </Routes>
        </div>
    );
}