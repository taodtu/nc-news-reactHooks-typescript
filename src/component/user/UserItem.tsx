import * as React from 'react';
import Style from './User.module.css';
import { IUser } from '../types/index';

const UserItem: React.FunctionComponent<IUser> = ({ avatar_url, username, name }) => {
    return (

        <div className={Style.user}>
            <img src={avatar_url} alt="avatar_img" className={Style.img} />
            <div className={Style.description}>
                <p> Username: {username}</p>
                <p>Name: {name}</p>
            </div>
        </div>

    );
};

export default UserItem;
