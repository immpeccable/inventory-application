import { render } from '@testing-library/react';
import React, { Component, useEffect } from "react";
import '../App.css'
import { useState, useRef } from 'react';
import { useSearchParams } from "react-router-dom";


function DisplayItems(props) {



    function getCategoryId(curUrl){

        let index = 0;
        let res = "";
        for(let i = 0; i<curUrl.length; i++){
            if(curUrl[i] === "/"){
                index = i;
            }
        }
        
        for(let i = index + 1; i < curUrl.length; i++){
            res+=curUrl[i];
        }
        return res;

    }

    let curUrl = window.location.href;
    let category_id = getCategoryId(curUrl);

    const [categoryInfo, setCategoryInfo] = useState({});
    
    useEffect(() => {

        let isSubscribed = true;

        fetchCategoryInfo();

        async function fetchCategoryInfo() {
            let response = await fetch("http://localhost:3000/list/category/" + category_id);
            response = await response.json();
            if(isSubscribed){
                setCategoryInfo(response)
            }
        }

        return () => {
            isSubscribed = false;
        }
        

    }, [categoryInfo])

    //console.log(categoryInfo)

    function renderCorrespondingItems(){
        console.log(categoryInfo.components)
        if(!categoryInfo.category) return;
        return categoryInfo.components.map((el) => {

            return <div className='item'>
                <div className='component-name'>
                    {el.component_name}
                </div>
                <div className='component-description'>{el.description}</div>
                <div className='component-price'> {el.price} </div>
                <div className='component-stock'> {el.stock} </div>
                <div className='component-category'> {categoryInfo.category.category_name} </div>
                
            </div>

        })
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
        </div>
        {renderCorrespondingItems()}
    </div>



}

export default DisplayItems