import { useEffect,useState } from 'react';
const Home = () => {
const [blog, setBlogs] = useState(null);
const [isPending,setIsPending]= useState(true);
      

let count = 0;
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
        <div className="list">
          {blog
            ? blog.map((data) => (
                <div className="preview" key={data.id}>
                  {" "}
                  <div className="num">
                    {" "}
                    <p>{(count += 1)}</p>
                  </div>
                  <div className="story">
                    {" "}
                    <p style={{ color: "white" }}>{data.title}</p>
                    <a style={{ color: "yellow" }} href={data.link}>
                      {data.link}
                    </a>{" "}
                    <p>{data.date}</p>
                  </div>
                  <div className="like">
        icon
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    );
}
 
export default Home;  