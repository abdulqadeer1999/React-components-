  
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// Components


function MediaCard ({title,body,imageUrl}){
  return <div className= {"body"}>
  
    <h1 className= {"titl"}> {title}</h1>
    <p> {body}</p>
    <img className= {"post"} src={imageUrl}/>
   </div>
 
}

ReactDOM.render (
  <div>
    <MediaCard 
    title = "Profile"
    body = "A beautiful picture A beautiful picture A beautiful picture A beautiful picture A beautiful picture A beautiful picture"
    imageUrl = "https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg"/>

    <MediaCard 
    title = "Profile2"
    body = "A beautiful picture A beautiful picture A beautiful picture A beautiful picture A beautiful picture A beautiful picture"
    imageUrl = "https://i.ytimg.com/vi/dVydxnsVVxQ/maxresdefault.jpg"/>

    <MediaCard 
    title = 'Profile3'
    body = 'PA beautiful picture A beautiful picture A beautiful picture A beautiful picture A beautiful picture A beautiful picture '
    imageUrl = "https://mightifier.com/wp-content/uploads/2017/07/paijanne3453.jpg"/>
   
  </div>,
  document.getElementById("root")
  
)


