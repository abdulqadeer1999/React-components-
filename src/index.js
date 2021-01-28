  
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// Components



function MediaCard ({title,body,imageUrl,profile}){
  return <div className= "body">

    
    <h1> <img className="pro" src= {profile}></img>   </h1>

    <h2 className= "titl"> {title}</h2>
    <p> {body}</p>
    <img className= "post" src={imageUrl}/>
   </div>
 
}

ReactDOM.render (
  <div>
    <MediaCard 
    profile = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dahlia-1508785047.jpg"
    title = "Profile"
    body = "A beautiful picture A beautiful picture A beautiful picture A beautiful picture A beautiful picture A beautiful picture"
    imageUrl = "https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg"/>

    <MediaCard 
    
    profile = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dahlia-1508785047.jpg"
    title = "Profile2"
    body = "A beautiful picture A beautiful picture A beautiful picture A beautiful picture A beautiful picture A beautiful picture"
    imageUrl = "https://i.ytimg.com/vi/dVydxnsVVxQ/maxresdefault.jpg"/>

    <MediaCard 
 
    profile = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dahlia-1508785047.jpg"
    title = 'Profile3'
    body = 'PA beautiful picture A beautiful picture A beautiful picture A beautiful picture A beautiful picture A beautiful picture '
    imageUrl = "https://mightifier.com/wp-content/uploads/2017/07/paijanne3453.jpg"/>
   
  </div>,
  document.getElementById("root")
  
)


