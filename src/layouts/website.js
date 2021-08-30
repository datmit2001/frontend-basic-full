import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'


const Layoutwebsite = (props) => {
    return (
        <div>
            <div><Header /></div>
           
            <div>{props.children}</div>
            <div><Footer /></div>
        </div>
    )
}

export default Layoutwebsite
