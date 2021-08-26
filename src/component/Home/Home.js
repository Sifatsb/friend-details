import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
    const [friend, setFriend] = useState([])
    useEffect(() => {
        const url = ('https://jsonplaceholder.typicode.com/users')
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h1>count: {friend.length}</h1>
            {
                friend.map(friend => <Friend friend={friend}></Friend>)
            }
            
        </div>
    );
};

export default Home;