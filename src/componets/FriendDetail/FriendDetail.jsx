import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    const {name, email, phone} = friend;
    
    return (
        <div>
            <h3>Everything about this person is here</h3>
            <h4>Name: {name}</h4>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default FriendDetail;