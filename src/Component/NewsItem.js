import React, { useState } from 'react';

function NewsItem(props) {


    return (
      <>  <span className="badge rounded-pill bg-danger" >{props.name}</span>
        
          <div className="card" style={{width:"100%"}}>
            
  <img src={props.img==null?" https://www.reuters.com/resizer/SF3RL4wYCDiQ98HiIIER-olZ6eM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XFTKTFGW6VI65KS2CXYZND5TBU.jpg":props.img} className="card-img-top" alt=" " />

  <div className="card-body">

    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <p className="card-text">Author : {props.author==null?"Anonnymous":props.author} < br />Time : {props.publishedAt}</p>
    <a href={props.newsurl} target="_blank"className="btn btn-sm btn-dark" >Read more</a>
  </div>
</div>
       </>
    );
}

export default NewsItem;