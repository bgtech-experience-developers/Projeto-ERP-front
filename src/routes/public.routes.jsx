import React from "react";
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from "../contexts/AuthContext";

import UserLogin from "../screens/Login";

export const PublicRoutes = () => { 

    return (
        <Routes>
        <Route>
            <Route path="*" element={<UserLogin/>}/>
        </Route>

        </Routes>
    )
}

