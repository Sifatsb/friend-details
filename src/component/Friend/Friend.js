import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const {name, username, email, id} = props.friend
    const history = useHistory()

    const handleClick = (friendId) =>{
        history.push(`/friend/${friendId}`)
    }

    return (
        <div className="devider">
            <h2>Name: {name}</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            { <Link to = {`/friend/${id}`}>
                <button>Show Details</button>
            </Link> } <br />
            <button onClick = {() => handleClick(id)}>Show Details</button>
        </div>
    );
};

export default Friend;