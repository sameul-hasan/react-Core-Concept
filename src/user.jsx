import { use } from 'react';
export default function User({userData}) {

    const users = use(userData);

    console.log(users);
    return (
        <div>
            <h2>Users: {users.length}</h2>
        </div>
    )

}