import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {

    const {num} = useParams()

    const {data:blog} = useFetch('http://localhost:8000/blogs/' + num)
     const history = useHistory()

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + num, {
            method: 'DELETE'
        }).then(()=>{
                history.push('/')
          })
    }

    return(
        <div className="blog-details">
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Writen by <b><em>{blog.author}</em></b></p>
                    <p className="p-body">{blog.body}</p>
                    <button className="btn-delete" onClick={handleDelete} >Delete Blog</button>
                </article>
            ) }
        </div>
      );
}
 
export default BlogDetails;