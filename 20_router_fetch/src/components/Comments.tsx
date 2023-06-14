import React from 'react';
import { IComment }from "../utils/util";


/*
interface IComment {
    id: number;
    body: string;
}
*/

const Comments: React.FC<{comments: IComment[]}> = ({ comments }) => {
    return (
        <>
            <h1>Comments</h1> 
            {comments.map(comment => (
                <div key={comment.id} className='user'>
                    <p>Body: {comment.body}</p>
                </div>
            ))}                                                                                                                                                                  
        </>
    );
};
export default Comments;
