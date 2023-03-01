import { Grid, LinearProgress } from '@mui/material';
import { useEffect,useState } from 'react';
import InsertLinkRoundedIcon from "@mui/icons-material/InsertLinkRounded";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import { TypeAnimation } from "react-type-animation";
import { Link } from 'react-router-dom';
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
          {isPending ? (
            <div className="loading">
              <LinearProgress color="success" />
            </div>
          ) : null}
          {blog
            ? blog.map((data) => (
                <Grid container>
                  <Grid item xs={12}>
                    <div className="preview" key={data.id}>
                      <div className="num">
                        <p>{(count += 1)}</p>
                      </div>
                      <div className="story">
                        <p style={{ color: "white" }}>
                          <TypeAnimation
                            sequence={[`${data.title}`, 500]}
                            wrapper="div"
                            cursor={false}
                            repeat={false}
                          />
                        </p>
                        <a
                          style={{
                            color: "#39ff14 ",
                            fontSize: 16,
                            hover: "#39ff14",
                          }}
                          href={data.link}
                          target="_blank"
                        >
                          <InsertLinkRoundedIcon />
                        </a>
                        <p style={{ fontSize: 12 }}>{data.date}</p>
                      </div>
                      <div className="comment">
                        <Link to="/comment">
                          <ChatBubbleOutlineIcon />
                        </Link>
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