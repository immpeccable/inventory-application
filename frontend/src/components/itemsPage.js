import { render } from '@testing-library/react';
import React, { Component, useEffect } from "react";
import '../App.css'
import { useState } from 'react';


function DisplayItems(props) {


    const { category_id } = props;

    const [categoryInfo, setCategoryInfo] = useState({});

    useEffect(() => {

        fetchCategoryInfo();
        async function fetchCategoryInfo() {
            let response = await fetch("http://localhost:3000/list/category/" + category_id);
            response = await response.json();
            setCategoryInfo(response);
            console.log(response)
        }

    }, [categoryInfo])


    function renderCorrespondingItems(){
        /*return categoryInfo.map((el) => {

            return <div className='item'>

            </div>

        })*/
    }


    return <div className='main'>
        <div className='item first'>
            <div className='component-name'>
                Name
            </div>
            <div className='component-description'>
                Description
            </div>
            <div className='component-price'>
                Price
            </div>
            <div className='component-stock'>
                Stock
            </div>

            <div className='component-category'>
                Category
            </div>

            {renderCorrespondingItems()}
        </div>
    </div>



}

export default DisplayItems