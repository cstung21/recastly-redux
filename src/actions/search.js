import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  console.log(YOUTUBE_API_KEY)

  return (dispatch) => {
    searchYouTube({key: YOUTUBE_API_KEY, query: q}, (items) => {
    dispatch(changeVideoList(items));
});
  };
  }




  // var options = {
  //     key: YOUTUBE_API_KEY,
  //     query: q
  // };

  // return dispatch({

  //   return searchYouTube({key: YOUTUBE_API_KEY, query: q}, () =>
  //   dispatch(changeVideo)
  //   dispatch(changeVideoList)
  //   ) 
  // };
   

 
 // return ({ dispatch, getState }) => next => action => {
 //    if (typeof action === 'function') {
 //      return action(dispatch, getState, q);
 //    }

 //    return next(action);
 //  }
 
  //TODO:  Write an asynchronous action to handle a video search!
  


export default handleVideoSearch;
