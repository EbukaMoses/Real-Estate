import React from 'react'
import img from "/images/about.jpg";
import Back from '../Common/Back/Back'
import Recent from './../Home/Recent/Recent';

const Blog = () => {
  return (
    <>
      <div className="blog">
        <Back name="Blog" title="Blog Grid - Our Blogs" cover={img} />
        <div className="recent">
          <Recent />
        </div>
      </div>
    </>
  );
}

export default Blog