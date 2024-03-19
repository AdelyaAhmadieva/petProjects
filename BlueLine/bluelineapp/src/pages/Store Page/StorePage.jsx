import React, { useEffect, useState } from 'react';
import ItemCard from './components/ItemCard/ItemCard';
import style from './StorePage.module.css'

const StorePage = () => {

    const [data, setData] = useState()

    async function getApi(){
        setData(await fetch("https://jsonplaceholder.typicode.com/users").then((x) => x.json()))
        
    }

    useEffect(() =>{
        getApi()
    },[])


    return (
        <>
            <div className={style.container}>
                {data?.map((element) => (<ItemCard name = {element.name} description = {element.email}/>))}
            </div>
        </>
    );
};

export default StorePage;