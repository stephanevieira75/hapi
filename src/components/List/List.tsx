import React from 'react';
import './list.css';

import { Link } from 'react-router-dom';

function List(props) {

    function displayPostsList(posts: any) {
        return posts.map((post: any, key: number) => {
            return (
                <div key={key} className="post">
                    <img src={post.image} alt="this is post" />
                    <div className="container">
                        <Link to={`/dashboard/post/${post.id}`} className="title">{post.title}</Link>
                        <div className="text post-body">{post.body}</div>
                    </div>
                </div>
            );
        });
    }
    return <div className="list-container">
        <h1>Welcome back {props.loggedUser.username || ''}!</h1>
        {displayPostsList(props.posts)}
    </div>;
}

export default List;