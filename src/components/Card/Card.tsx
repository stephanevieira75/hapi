import React, { useEffect, useState } from 'react';
import './card.css';
import PostServices from '../../services/PostServices';

import { Link, useParams } from 'react-router-dom';

function Card(props) {
    const param = useParams('id');
    const [post, setPost] = useState({});
    console.log(param.id)

    useEffect(() => {
        PostServices.getPostById(parseInt(param.id), user => setPost(user))
    },
    [param]);

    function displayPost(post: any) {
        return (
            <div className="post">
                <img src={post.image} alt="this is post" />
                <div >
                    <Link to={`/dashboard/post/${post.userId}`} className="title">{post.title}</Link>
                    <div className="text post-body">{post.body}</div>
                </div>
            </div>
        );

    }
    return <div className="container">
    <Link to={`/dashboard/${props.loggedUser.id}`}>Back to the list</Link>
        {displayPost(post)}
    </div>;
}

export default Card;