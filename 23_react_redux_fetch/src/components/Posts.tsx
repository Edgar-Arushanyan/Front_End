import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { DataState, setCurrentPagePosts} from "../reducer/reducers";


const Posts: React.FC = () => {

    const dispatch = useDispatch();

    // DRY - Don't repeat yourself
   //const posts =  useSelector((state: {data: DataState}) => state.data.posts);
  // const currentPage =  useSelector((state: {data: DataState}) => state.data.currentPagePosts);
   //const postsPerPage =  useSelector((state: {data: DataState}) => state.data.postsPerPage);

    const {posts, currentPagePosts, postsPerPage} = useSelector((state: {data: DataState}) => state.data);

   const indexOfLastPost = currentPagePosts * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

   const previousPage = () => {
        dispatch(setCurrentPagePosts(currentPage - 1));
   }
   const nextPage = () => {
    dispatch(setCurrentPagePosts(currentPage + 1));
}

    return (
        <>
            <h2>Posts</h2>
            {/* Отображаем полученную выще часть постов в качестве элементов списка*/}
            <ul>
                { currentPosts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            {/* атрибут disabled делает кнопку не кликабельную когда выражение переданное в данный атрибкт является true*/}
            <button disabled={currentPage === 1} onClick={previousPage}>Previous page</button>
            <button disabled={indexOfLastPost >= posts.length} onClick={nextPage}>Next Page</button>

        </>
    ); 
};

export default Posts;