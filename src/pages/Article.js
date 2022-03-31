import { useParams, useHistory } from "react-router-dom"
import { useEffect } from "react"
import { useFetch } from "../hooks/useFetch"

export default function Article() {
    const {id} = useParams()
    const url = " http://localhost:3000/articles/" +id
    const {data:article, isPending, error} =useFetch(url)
    const history = useHistory()
    
    useEffect(() => {
        if(error) {
            //redirect user to homepage if page doesnt exist
       setTimeout(() =>{
        history.push("/")  
       }, 2000)
     }
    }, [error,history])

  return (
    <div>
     {isPending && <div>Loading..</div>}
     {error && <div>{error}</div>}
     {article &&  (
     <div> 
      <h2>{article.title}</h2>
     <p>By {article.author}</p>
     <p>{article.body}</p>
    </div>
  )}
  </div>
  )
}
