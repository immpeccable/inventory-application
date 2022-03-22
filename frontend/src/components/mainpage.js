import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../App.css'
import { useState } from 'react';
import Item from './component'


let Main = () => {

    let [component, setComponent] = useState([])
    let [page, setPage] = useState("Main");

    useEffect(() => {
        
        fetchComponent();
        async function fetchComponent() {
            let response = await fetch("http://localhost:3000/list/category");
            response = await response.json();
            setComponent(response);
        }
    }, [component])

    function componentWrite(){
        console.log(component);
        return component.map((el) => {
            return <Item category_name = {el.category_name} description = {el.description} ></Item>
        })
    }
    

    if(page === "Main"){
        return <div className='main'>
        <div className='item first'>
            <div className='category-name'>
                Category Name
            </div>
            <div className='description'>
                Description
            </div>
            <div >
                Choose Item
            </div>
        </div>
        {componentWrite()}
    </div>
    }else{

        return <pageItem></pageItem>

    }



}

export default Main