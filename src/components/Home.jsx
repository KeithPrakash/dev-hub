import { Grid, LinearProgress } from '@mui/material';
import { useEffect,useState } from 'react';
import InsertLinkRoundedIcon from "@mui/icons-material/InsertLinkRounded";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import { TypeAnimation } from "react-type-animation";
import { Link } from 'react-router-dom';

const Home = () => {
  let count=0;
const [blog, setBlogs] = useState([]);
const [isPending,setIsPending]= useState(true);
const url = "http://localhost:8000/api/v1/blog/list/";


    useEffect(()=>{
          fetch(url, {})
            .then((res) => res.json())
            .then((data) => {
           console.log(data.data.value);
              setIsPending(false);
              try{
               setBlogs(data.data.value)
              }catch{err=>{
                console.log(err)
              }}

           
              console.log(blog);
            })
            .catch((error) => console.log(error));
    },[url])
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
                    <div className="preview" key={data._id}>
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
                            color: "#cddc39",
                            fontSize: 16,
                            hover: "#39ff14",
                          }}
                          href={data.link}
                          target="_blank"
                        >
                          <InsertLinkRoundedIcon />
                        </a>
                        <div className="preview-bottom">
                          <p style={{ fontSize: 12, color: "#90a4ae" }}>
                            {data.date}
                          </p>
                          <span style={{ fontSize: 12, color: "#90a4ae" }}>
                            Comments
                            <span style={{ marginLeft: 5, fontSize: 12 }}>
                              {data.comments.length}
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="comment">
                        <Link to="/comment" state={{ data: data }}>
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