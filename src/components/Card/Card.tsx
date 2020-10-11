import React, { useEffect, useState } from 'react';
import './card.css';
import PostServices from '../../services/PostServices';

import { Link, useParams } from 'react-router-dom';

function Card(props) {
    const param = useParams('id', 'user');
    const [post, setPost] = useState({});

    useEffect(() => {
        PostServices.getPostById(parseInt(param.id), post => setPost(post))
    },
    [param]);

    function displayPost(post: any) {
        return (
            <div className="post">
                <img src={post.image} alt="this is post" />
                <div>
                    <h1>{post.title}</h1>
                    <div className="text post-body">{post.body}</div>
                </div>
            </div>
        );

    }
    return <div className="container">
        <Link to={`/dashboard/${param.user}`}>Back to the list</Link>
        {displayPost(post)}
    </div>;
}

export default Card;