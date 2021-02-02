import {useState} from 'react'
import {useHistory} from 'react-router-dom'





const Create = () => {
    const [title, setTitle] = useState('')
     const [body, setBody] = useState('')
      const [author, setAuthor] = useState('')
      const history = useHistory()

      const handleSubmit = (e) => {
          e.preventDefault();
          const newBlog = {title, body, author}
        

          fetch('http://localhost:8000/blogs', {
              method: 'POST',
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(newBlog)
          }).then(()=>{
                history.push('/')
          })
      }
    return ( 
        <div className="Create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit} >
                <div className="form-control">
                    <label >Blog Title</label>
                    <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}

                    />
                </div>
                <div className="form-control">
                    <label >Blog Body</label>
                    <textarea 
                    type="text"
                    required
                    value={body}
                    onChange={(e)=>{
                        setBody(e.target.value)
                    }}
                    ></textarea>
                </div>
                <div className="form-control">
                    <label >Blog Author</label>
                       <input type="text"
                        value={author}
                    onChange={(e)=>{
                        setAuthor(e.target.value)
                    }} 
                       />

                </div>
                <button>Add Blog</button>
            </form>

            <div className="output">
                
            </div>
        </div>
     );
}
 
export default Create;