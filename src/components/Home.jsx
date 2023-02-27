import { Grid } from '@mui/material';
import { useEffect,useState } from 'react';
import Icon from "@mui/material/Icon";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
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
                <Grid container>
                  <Grid item xs={12}>
                    <div className="preview" key={data.id}>
                      <div className="num">
                        <p>{(count += 1)}</p>
                      </div>
                      <div className="story">
                        {" "}
                        <p style={{ color: "white" }}>{data.title}</p>
                        <a
                          style={{
                            color: "#464AB5",
                            fontSize: 12,
                            hover: "green",
                          }}
                          href={data.link}
                        >
                          Read Me
                        </a>{" "}
                        <p style={{ fontSize: 12 }}>{data.date}</p>
                      </div>
                      <div className="like">
                        <ChatBubbleOutlineIcon />
                      </div>
                    </div>
                  </Grid>
                </Grid>
              ))
            : null}
        </div>
      </div>
    );
}
 
export default Home;  