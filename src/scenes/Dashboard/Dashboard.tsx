import React, { useEffect, useState } from 'react';
import UserServices from '../../services/UserServices';
import PostServices from '../../services/PostServices';

import List from '../../components/List/List';
import Card from '../../components/Card/Card';
import { useParams } from 'react-router-dom';

function Dashboard(props) {
    const param = useParams('id');
    const [loggedUser, setLoggedUser] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        UserServices.getUserById(parseInt(param.id), user => setLoggedUser(user));
        PostServices.getPosts().then((posts: any) => setPosts(posts));
    },
    [param]);

    return (
        <div className="dashboard-container">
            {props.posts && <List loggedUser={loggedUser} posts={posts} />}
            {props.post && <Card loggedUser={loggedUser} />}
        </div>
    );
}

export default Dashboard;