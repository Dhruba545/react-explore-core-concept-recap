import { useEffect, useState } from "react"
import Post from "./post";

export default function Posts(){
const [posts , setPost] = useState([]);

useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPost(data))
},[])
console.log(posts);
    return(
        <div>
            <h3>Posts:{posts.length}</h3>
            {
                posts.map(post => <Post></Post>)
            }
        </div>
    )
}


/**
 * 1.Create a store  to store the data
 * 2.create use effect with no dependencies
 * 3.use fetch to load data 
 */