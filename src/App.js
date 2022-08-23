
import './App.css';
import Navbar from './Component/Navbar';
import News from './Component/News';
import React ,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



function App() {
const[progress ,setProgress]=useState(15)
  
  return (
    <>

<LoadingBar
          progress={progress}
          height={3}
          color='red'
         
        />
    <BrowserRouter>
    
    <Navbar />
    
   
    <Routes>
   
    <Route exact path="/"  element={<News  setProgress={setProgress}   pagesize='5'  key={1} country='in' category='general'/>}></Route>
    <Route exact path="/general"  element={<News  setProgress={setProgress}   pagesize='5' key={2}  country='in' category='general' />} />
    <Route exact path="/business"  element={<News  setProgress={setProgress}   pagesize='5' key={3}  country='in' category='business' />} />
    <Route exact path="/entertainment"  element={<News  setProgress={setProgress}   pagesize='5' key={4}  country='in' category='entertainment' />} />
    <Route exact path="/science"  element={<News  setProgress={setProgress}   pagesize='5' key={5}  country='in' category='science' />} />
    <Route exact path="/sports"  element={<News  setProgress={setProgress}    pagesize='5' key={6}  country='in' category='sports' />} />
    <Route exact path="/technology"  element={<News  setProgress={setProgress}    pagesize='5' key={7}  country='in' category='technology' />} />
    <Route exact path="/health"  element={<News  setProgress={setProgress}    pagesize='5' key={8}  country='in' category='health' />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
