import React from "react";
import User from "./User";


function UserList({users, onRemove, onToggle}) {
    // const users = [
    //     {
    //         id: 1,
    //         username: 'Undead',
    //         email: 'undead@undercity.com'
    //     },
    //     {
    //         id: 2,
    //         username: 'Blooelf',
    //         email: 'bloodelf@silvermoon.com'
    //     },
    //     {
    //         id: 3,
    //         username: 'Nigdhtelf',
    //         email: 'nightelf@darnasus.com'
    //     }
    // ];

    // return(
    //     <div>
    //         <div>
    //             <b>{users[0].username}</b> <span>({users[0].email})</span>
    //         </div>
    //         <div>
    //             <b>{users[1].username}</b> <span>({users[1].email})</span>
    //         </div>
    //         <div>
    //             <b>{users[2].username}</b> <span>({users[2].email})</span>
    //         </div>
    //     </div>
    // );
    // return(
    //     <div>
    //         <User user={users[0]} />
    //         <User user={users[1]} />
    //         <User user={users[2]} />
    //     </div>
    // );

    return(
        <div>
            {
                users.map(user => (
                    <User 
                        user={user} 
                        key={user.id} 
                        onRemove={onRemove} 
                        onToggle={onToggle} 
                    />
                ))
            }
        </div>
    );
}

export default React.memo(UserList);
