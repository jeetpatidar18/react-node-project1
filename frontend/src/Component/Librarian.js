import React from "react";
import { Route, Routes } from "react-router-dom";
import AssignBook from './AssignBook.js';
import RecieveBook from './RecieveBook.js';
import { LibNav } from "./LibNav.js"
import { NavigationBar } from "./NavigationBar.js";
export function Librarian() {
    return (
        <>
            <div>
                <NavigationBar></NavigationBar>
                <LibNav></LibNav>

                <Routes>
                    <Route path='/assignbook' element={<AssignBook></AssignBook>}></Route>
                    <Route path='/recievebook' element={<RecieveBook></RecieveBook>}></Route>
                </Routes>
            </div>
        </>
    );
}