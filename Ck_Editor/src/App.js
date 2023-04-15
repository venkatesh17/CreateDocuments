import React from 'react';
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom'  
import './App.css'
import CreatTitles from './components/createTitles';
import CreateDocument from "./components/createDocument"


function App(Page, props) {
 
   return(
    <>
    <div className="linksDisplay">
    <Link
        to="/"
        className="lnv"
        style={{
          textDecoration: "none",
          fontSize: "20px",
          padding: "20px"
        }}
      >
        Create Titles
    </Link>{" "}
    <Link
        to="/create_document"
        className="lnv"
        style={{
          textDecoration: "none",
          fontSize: "20px"
        }}
      >
        Create Documents
    </Link>{" "}
    </div>
    <div>
      <Page {...props} />
    </div>
   
    </>
   )
     
}


function AppRouters(){
    return (
      <>   
      <Router>  
        <Routes>  
          <Route path="/" element={App(CreatTitles)} exact />  
          <Route path="/create_tile" element={App(CreatTitles)} />  
          <Route path="/create_document" element={App(CreateDocument)} />  
        </Routes>  
      </Router>  
      </>
    )
}

export default AppRouters;







