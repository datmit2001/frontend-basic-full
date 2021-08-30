import React from 'react'
import { Link, NavLink, useRouteMatch } from 'react-router-dom'
const Layoutadmin = (props) => {
    let { url } = useRouteMatch();
    console.log(url);
    const divStyle = {
        margin: '50px 80px'
      };
    return ( 
        <div className="row" style={divStyle} >
            <div className="col-4">
               <ul className="list-group">
                   <li className="list-group-item">
                      <NavLink activeClassName="active" exact to="/admin/dashboard">Dashboard</NavLink>
                   </li>
                   <li className="list-group-item">
                      <NavLink activeClassName="active"  to="/admin/product">Product</NavLink>
                   </li>
                   <li className="list-group-item">
                      <NavLink activeClassName="active"  to="/admin/category">Category</NavLink>
                   </li>
                   <li className="list-group-item">
                      <NavLink activeClassName="active"  to="/admin/user">Users</NavLink>
                   </li>
               </ul>
            </div>
            <div className="col-8">
                {props.children}
            </div>
        </div>
    )
}

export default Layoutadmin
