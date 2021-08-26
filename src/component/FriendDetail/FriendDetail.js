import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams()
    const [friend, setFriend] = useState({})
    useEffect(()=>{
        const url = (`https://jsonplaceholder.typicode.com/users/${friendId}`)
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h1>This is friend details {friendId}</h1>
            <h2>Name: {friend.name}</h2>
            <h4>UserName : {friend.username}</h4>
            <h3>Email: {friend.email}</h3>
            <p>Info: {friend.website}</p>
            <p>Contact: {friend.phone}</p>

        </div>
    );
};

export default FriendDetail;