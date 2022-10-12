import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { User } from "../components/pages/User";
import { DefaultLayout } from "../components/templates/DefaultLayout"
import { HeaderOnly } from "../components/templates/HeaderOnly"

export const CardRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={
                    <DefaultLayout>
                        <Top />
                    </DefaultLayout>
                } />
                <Route exact path='/user' element={
                    <HeaderOnly>
                        <User />
                    </HeaderOnly>
                } />
            </Routes>
        </BrowserRouter>

    );
}