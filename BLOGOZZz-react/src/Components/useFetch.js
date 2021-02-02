import  {useState, useEffect} from "react"
const useFetch = (url) => {
    const [data, setData] = useState(null)
    // const [isLoading, setisLoading] = useState(true)
     useEffect(async () => {
          
         const res = await fetch(url)
       const data = await res.json()
       setData(data)
      //  setisLoading(false)
       
      }, 
      [url]);
    // return {data, isLoading}
    return {data}

}
 
export default useFetch;