import React, { useState, useEffect } from 'react';
import Navbar from '../component/navbar';
import setA from '../images/setA.png'
import setB from '../images/setB.png'
import setC from '../images/setC.png'
import setD from '../images/setD.png'

import { FaShoppingCart } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';
import * as inventoryApi from '../api/Inventory';
import { list } from 'postcss';

export default function LandingPage() {

  const items = [
    {
      name: 'Gaming PC SET A Budget Meal',
      description: 'Intel Core i5-10400F Processor / GIGABYTE H410M-H /(4GBx2) 8gb DDR4 MEMORY / 1TB HDD / GT730 2GB VIDEO CARD / 18.5 LED MONITOR Computer Gaming Package',
      price: 27999,
      img: setA
    },
    {
      name: 'Gaming PC SET B Budget Meal',
      description: 'INTEL i3 10100 10th Gen QUAD CORE [WINDOWS 11 Pro] BEST BUDGET GAMING PC SET BRAND NEW',
      price: 23785,
      img: setB
    },
    {
      name: 'Gaming PC SET C Budget Meal',
      description: 'computer set gaming pc cpu computer windows 10 AMD A6-7480 3.9GHZ dual-core with GPU GT730 for Gameing 8G memory and 120G 240G SSD 500G 1TB HDD computer package set with 21.5inch monitor desktop computer set ready to use',
      price: 15519,
      img: setC
    },
    {
      name: 'Gaming PC SET D Budget Meal',
      description: 'computer set gaming pc cpu computer windows 10 AMD A6-7480 3.9GHZ dual-core with GPU GT730 for Gameing 8G memory and 120G 240G SSD 500G 1TB HDD computer package set with 21.5inch monitor desktop computer set ready to use',
      price: 16299,
      img: setD
    },
    {
      name: 'Gaming PC SET E Budget Meal',
      description: 'Desktop Computer Set PC Full set Computer Set Gaming PC Set Gaming Intel I3 8100 built int HD630 Gragraphic with 4G 8G 16G Memory 60G 120g 240g ssd 500g 1Tb HDD GTX1050ti 4G for home online learning moive office gaming',
      price: 18199,
      img: setA
    }
  ]

  const list = [...items].map(item =>< Items name={item.name} description={item.description} image={item.img} price={item.price} />)

  return (
    <div className="landing">
      <Navbar />
      <div div className="content">
      {
      list
      }
    </div>
  </div>
  )
}

const Items = ({name, description, image, price}) =>{
console.log(price)
  return(
    <div className="items" key={name}>
        <div className="item_header">
            <img src={image} alt="" />
        </div>
        <div className="item_body">
            <h5 className='product_name'>{name}</h5>
            <p className='description'>{description}</p>
            <h6 className='price'>{price}</h6>
        </div>
        <div className="item_button">
            <button className='btn btn-primary my-2'>Add to cart</button>
        </div>
    </div>
  )
}

