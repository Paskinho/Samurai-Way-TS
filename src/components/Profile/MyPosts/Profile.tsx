import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts";
import {Post} from "./Post/Post";


export const Profile = () => {
    return (
        <div>
    <div>
        <img src="https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2021-06/placeholder.jpg?itok=nhe1dpvk"/>
    </div>
    <div>
        ava+description
    </div>
    <MyPosts />
</div>
)
}

