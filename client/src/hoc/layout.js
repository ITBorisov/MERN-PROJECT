import React from 'react'
import Header from '../components/Header/header';
import './layout.css';

const layout = (props) => {
  return (
    <div>
        <Header />
        <div className="main">
            {props.children}
        </div>
    </div>
  )
}

export default layout
