import { useEffect,useState } from 'react';


const Home = () => {
const [blog, setBlogs] = useState(null);
const [isPending,setIsPending]= useState(true);


    useEffect(()=>{
          fetch('http://localhost:8000/blogs',{}).then( (res)=>{return res.json()}).then((data)=>{
            setIsPending(false);
            setBlogs(data);
            console.log(data);
          }
          ).catch(error=>console.log(error))
    },[])
    return (
      <div className="homeContainer">
        <h1 style={{ color: "white" }}>Home page</h1>

        <div className="list">
          {blog
            ? blog.map((data) => (
                <div className="preview" key={data.id}>
                  {" "}
                  <p style={{ color: "white" }}>{data.title}</p>
                  <a style={{ color: "yellow" }} href={data.link}>{data.link}</a>
                </div>
              ))
            : null}
        </div>
      </div>
    );
}
 
export default Home;  