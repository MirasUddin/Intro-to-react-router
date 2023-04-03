import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const id = post.id;

    const navigate = useNavigate()

    const handleNavigation = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <p>{post.id}</p>
            <h3>{post.title}</h3>
            <p><Link to={`/post/${id}`}>Show More Details</Link></p>
            <Link to={`/post/${id}`}><button>Show More Details</button></Link>
            <button onClick={handleNavigation}>With Button Handler</button>
        </div>
    );
};

export default Post;