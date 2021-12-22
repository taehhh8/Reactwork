import React, {useEffect, userEffect} from "react";


function User({user, onRemove, onToggle}) {
    useEffect(() => {
        // console.log('Set user value');
        console.log(user);
        // return () => {
        //     console.log('Before change user');
        //     console.log(user);
        // };
    }, [user]);
    // });
    return(
        <div>
            <b
                style={{cursor: 'pointer,',
                color: user.active ? 'green' : 'black'    
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>Delete</button>
        </div>
    );
}

export default React.memo(User);