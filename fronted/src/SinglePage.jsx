import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import "./style/happyday.css"

function SinglePage(props) {
    
    const {id} = useParams();

    const [post,setPost] = useState([{id:null,year:null,month:null,events:null,description:null}]);


  useEffect(() => {
    fetch('/postbd')
    .then(response=>response.json())
    .then(response=>setPost(response.message))
  },
  [id,props,post])


  return (
    <div className='happyday'>
      <div className='list1'>
      <div className='list2'>
        <div>
        </div>
        <div>
        <p>{post[id].day} {post[id].month} {post[id].year}</p>
        <p>{post[id].place}</p>
        </div>
      </div>
      <div className='list3'>
        <p>{post[id].description}</p>
        <p>{post[id].description2}</p>
      </div>
      </div>
    </div>
  )
}

export {SinglePage}