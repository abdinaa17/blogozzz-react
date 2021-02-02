import { Link } from "react-router-dom"

const Bloglist = ({blogs, title}) => {

    return ( 
    <div className="Bloglist">
        <h2>{title}</h2>
        {blogs.map((blog) => (
            <div key={blog.id} >
                <Link to={`/blogs/${blog.id}`} >
                <h3>{blog.title}</h3>
                <p>Written by <b><em>{blog.author}</em></b></p>
                <hr/>
                </Link>
                </div>
        ))}

    </div> 
    );
}
 
export default Bloglist;