  
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// Components


function MediaCard ({title,body,imageUrl}){
  return <div className= {'body'}>
  
    <h1 className= "titl"> {title}</h1>
    <p className= "bod"> {body}</p>
    <img className= {'post-img'} src={imageUrl}/>
   </div>
 
}

ReactDOM.render (
  <div>
    <MediaCard 
    title = "Profile"
    body = "Pic1"
    imageUrl = "https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg"/>

    <MediaCard 
    title = "Profile2"
    body = "Pic2"
    imageUrl = "https://i.ytimg.com/vi/dVydxnsVVxQ/maxresdefault.jpg"/>

    <MediaCard 
    title = 'Profile3'
    body = 'Pic3'
    imageUrl = "https://mightifier.com/wp-content/uploads/2017/07/paijanne3453.jpg"/>
   
  </div>,
  document.getElementById("root")
  
)


