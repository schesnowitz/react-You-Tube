import React from 'react';

const VideoDetail = (props) => {

  if (!props.video) {
    return <div>Loading...</div>;
  };

  const videoId = props.video.id.videoId;
  // const url = 'https://youtube.com/embed/' + props.videoId;
  const url = `https://youtube.com/embed/${videoId}` // using backticks
  return (
    <div className='col-ms-8 video-detail'>
      <div className="embed-responsive embed-responsive-16by9">
      <iframe className='embed-responsive-item' src={url}></iframe>
      </div>
      <div className='details'>
        <div>{props.video.snippet.title}</div>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;