import { Grid, LinearProgress } from '@mui/material';
import { useEffect,useState } from 'react';
// import InsertLinkRoundedIcon from "@mui/icons-material/InsertLinkRounded";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

// import { TypeAnimation } from "react-type-animation";
// import { Link } from 'react-router-dom';
const Home = () => {
const [blog, setBlogs] = useState(null);
const [isPending,setIsPending]= useState(true);
const url = "http://localhost:8000/api/v1/blog/list";


    useEffect(()=>{
          fetch(url, {})
            .then((res) => res.json())
            .then((res) => {
              setIsPending(false);
               setBlogs(res);
              console.log(res);
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
                  <p>`${data.title}</p>
                    {/* <div className="preview" key={data._id}>
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
                        <Link to="/comment" state={{ data: data }}>
                          <ChatBubbleOutlineIcon />
                        </Link>
                      </div>
                    </div> */}
                  </Grid>
                </Grid>
              ))
            : null}
        </div>
       
      </div>
    );
}
 
export default Home;  