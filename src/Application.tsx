import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPortal from './app/pages/Admin'
import UserContacts from './app/pages/UserContacts'
import LayoutComponent from './app/view/components/Layout'

export interface IApplicationProps { }

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LayoutComponent />}>
                    <Route index element={<AdminPortal />} />
                </Route>
                <Route path='/usercontact' element={<LayoutComponent />}>
                    <Route index element={<UserContacts />} />
                </Route>
            </Routes>

        </BrowserRouter>
    )
}
export default Application