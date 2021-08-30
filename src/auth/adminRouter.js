import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {isAuthenticated} from '.'
const AdminRouter = ({children}) => {
    return (
       <Route render ={() => {
           return isAuthenticated() && isAuthenticated().user.role==1 ? children : < Redirect to={{pathname: '/'}} /> 
       }} />
    )
}

export default AdminRouter
