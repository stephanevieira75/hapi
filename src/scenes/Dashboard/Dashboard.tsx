import React, { useEffect, useState } from 'react';
import UserServices from '../../services/UserServices';
import PostServices from '../../services/PostServices';

import List from '../../components/List/List';
import { useParams } from 'react-router-dom';

function Dashboard(props) {
    const param = useParams('id');
    const [loggedUser, setLoggedUser] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        UserServices.getUserById(parseInt(param.id), user => setLoggedUser(user));
        PostServices.getPosts().then(posts => setPosts(posts));
    },
    [param]);

    return (
        <div className="dashboard-container">
            {props.posts && <List posts={posts} />}
            {props.post && <div>hello</div>}
        </div>
    );
}

export default Dashboard;