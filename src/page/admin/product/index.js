import React from 'react'
import { Link } from 'react-router-dom'

const AdminProductPage = (props) => {
 
    return (
        <div>
            <div className="d-flex justify-content-between items-center">
             <h1>Product Mannager</h1>
             <div>
                 <Link to="/admin/product/add" className="btn btn-primary">Add</Link>
             </div>
            </div>
           <table className="table table-bordered">
               <thead>
                   <tr>
                       <th>#</th>
                       <th>Name</th>
                       <th>Image</th>
                       <th>Price</th>
                       <th>Description</th>
                       <th></th>
                       <th></th>
                   </tr>
               </thead>
               <tbody>
                   {props.products.map((product, index) => (
                     <tr key={index}>
                         <td>{index +1}</td>
                         <td>{product.name}</td>
                         <td>
                              <img src={`http://localhost:4000/api/product/photo/${product._id}`} width="50px" height="50px" />
                            </td>
                         <td>{product.price}</td>
                         <td>{product.description}</td>
                         <td className="text-center">
                             <Link to={`/admin/product/${product._id}`} className="btn btn-primary ">Edit</Link>
                         </td>
                         <td className="text-center">
                         <Link className="btn btn-danger btn-sm " onClick={() => props.onDelete(product._id)}>Delete</Link>
                         </td>
                    </tr>
                   ))}
               </tbody>
           </table>
        </div>
    )
}

export default AdminProductPage
