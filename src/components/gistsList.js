import React from "react";
import {postsApi} from "../api";
import {useRequestApi} from "../hooks/api/useRequestApi";
import { CircularProgress } from '@material-ui/core';


const GistsList = () => {
    
    const getPostsState = useRequestApi({
        api: postsApi.getPosts,
        isAutoRun: true
      })
    /*
      const  getPostState = useRequestApi({
        api: postsApi.getPost,
      })
      const  getCommentsState = useRequestApi({
        api: postsApi.getComments,
      })
    */



    return (
        <div>
            {
                getPostsState.isLoading && <CircularProgress />
            }
            {
                getPostsState.isError && <div>error</div>
            }
    
            <button onClick={getPostsState.request}>
                run
            </button>
            {
               Array.isArray(getPostsState.data) && getPostsState.data.map(({title, id}, index) => <div key={id}>
               {index}. {title} 
               </div>)
            }

        </div> 
        
        
        






    )

  





    //console.log({postsApi})
  
    

 
};

export default GistsList