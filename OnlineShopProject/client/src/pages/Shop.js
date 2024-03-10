import React, { useEffect, useState } from 'react';
import Header from './page components/Header/Header';
import DeviceCard from './page components/DeviceCard/DeviceCard';




const Shop = () => {

    const [users, setUsers] = useState([])

    async function showUsers(){
        const responce = await fetch('https://jsonplaceholder.typicode.com/users')
        const dataUsers = await responce.json()
        setUsers(dataUsers)
       
    }

    useEffect(() => {showUsers()}, [])


    return (
        <div>
            <main>
            {users.map((user) =>(user.id >=3 ? <DeviceCard title = { user.id}/> : <DeviceCard title ='none'/> ))}
            </main>
        </div>
    );
};

export default Shop;