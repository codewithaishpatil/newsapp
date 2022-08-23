import React , { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
    const[articles,setArticles]=useState([])
    const[page, setPage]=useState(1)
    const[totalResults ,setTotalResults]=useState(30)
    const[loading, setLoading]=useState(false)
    useEffect(()=> {componentDidMount()},[])
    
    
   const componentDidMount=async()=>{
    props.setProgress(20)
       let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&&apiKey=7e747be18c33457e8439de0fa89e0302&page=${page}&pagesize=${props.pagesize}`;
       setLoading(true )
       let data=await fetch(url);
       let parseData= await data.json();
     console.log(parseData);
     props.setProgress(50)
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    props.setProgress(100)
   
    };
  
  const handleOnClick=async()=>{
 
    
   
   
  //  if(page+1 > Math.ceil(totalResults/props.pagesize)){}else{
  //   setLoading(true )
  //   setPage(page+1)
  //   console.log("jijn")
  //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&&apiKey=7e747be18c33457e8439de0fa89e0302&page=${page+1}&pagesize=${props.pagesize}`;
  //   let data=await fetch(url);
  //   let parseData= await data.json();

  //  console.log(parseData);
  //  setLoading(false )
  //  setArticles(parseData.articles)
  
  //  console.log(setTotalResults(parseData.totalResults))
  //  }
  }
  const handlePrvClick=async()=>{
    // setLoading(true )
    // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&&apiKey=7e747be18c33457e8439de0fa89e0302&page=${page-1}&pagesize=${props.pagesize}`;
    //    let data=await fetch(url);
    //    let parseData= await data.json();
    //    setLoading(false )
    // console.log(parseData);
    // setArticles(parseData.articles)
    // setPage(page-1)

  
  }
  let fetchMoreData=async () => {
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&&apiKey=7e747be18c33457e8439de0fa89e0302&page=${page+1}&pagesize=${props.pagesize}`;
    setPage(page+1)
    props.setProgress(20)
    console.log("jijn")
   
    setLoading(true);
     let data=await fetch(url);
     let parseData= await data.json();
   console.log(parseData);
   props.setProgress(50)
  setArticles(articles.concat(parseData.articles))
  setTotalResults(parseData.totalResults)
  setLoading(false);
  props.setProgress(100)
 
  };
 
      return (
        <>
      
            <h2 className='text-center'>News App</h2>
            
          
          
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
           loader={<Spinner />}
          
        >
          {/* { loading==true&&<Spinner/>} */}
            <div className="container my-3 " >
           <div className='row style={{display:"flex"}}' >
          {articles.map((element)=>{ return <div className=' col-md-4' key={element.url} >
          
            <NewsItem  publishedAt={element.publishedAt}  author={element.author} name={element.source.name}
            title={element.title} description={element.description} img={element.urlToImage} newsurl={element.url}/>
            </div>})}
            </div></div>
            
            </InfiniteScroll>   

       
        {/* <div className='container d-flex justify-content-between'>
        <button disabled={page<=1} className="btn btn-dark" type="button" onClick={handlePrvClick}>&laquo; Previous</button>
        <button disabled={page+1 > Math.ceil(totalResults/props.pagesize)} className="btn btn-dark" type="button" onClick={handleOnClick}>Next &raquo;</button>
        </div> */}
       
        </>
    );
}
News.defaultProps = {
  country: 'in',
  pagesize: 5
};
News.Prototype={
  country : PropTypes.string,
  category: PropTypes.string

}
export default News;