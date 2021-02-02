import Bloglist from "./Bloglist";
import "./Home.css";
import useFetch from "./useFetch";
const Home = () => {

    const {data:blogs, isLoading} = useFetch('http://localhost:8000/blogs')

    const welcome = "Welcome to Blogozzz"

   


    return (<div className="Home">
        <h1>{welcome}</h1>
        <p>You can create your favorite blogs so your users can read</p>

        <div>
            {isLoading && <p>Loading...</p>}
            {blogs &&  < Bloglist blogs={blogs} />}
            
        </div>

    </div>  );
}
 
export default Home;