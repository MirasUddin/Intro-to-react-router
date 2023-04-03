import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './Singlepost.css'

const SinglePost = () => {
    const data = useLoaderData();
    const { title, userId,id, body } = data;

    const navigate = useNavigate()

    const handleGoBack = () =>{
        navigate(-1)
    }
    
    
    return (
        <div>
            <h2>here is details </h2>
            <div className='singlePost'>
                <h1>User ID: {id}</h1>
                <h3>Title: {title}</h3>
                <p>Description: {body}</p>
                <button onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
    );
};

export default SinglePost;