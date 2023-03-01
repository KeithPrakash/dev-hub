import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
const date = new Date("2015-03-25").toJSON().split("T")[0];
import { TypeAnimation } from "react-type-animation";
console.log(date);
const Post = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
 const navigate =useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title,link,date};
    console.log(blog);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)

    }).then(() => {
      navigate("/");
    }).catch(e=>console.log(e))
  };
  
  return (
    <div className="postContainer">
      
      <div className="titlePost">
        <TypeAnimation
          sequence={["Post Your Story anonymusly", 1000]}
          wrapper="div"
          cursor={true}
          repeat={true}
          style={{color:'white'}}
        />
      </div>
      <div className="formOuter">
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            fullWidth
            placeholder="Title"
            variant="filled"
            color="secondary"
            focused
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            placeholder="Link"
            variant="filled"
            color="secondary"
            focused
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />

          <Button
            style={{ marginTop: "15px", height: "50px" }}
            margin="dense"
            color="success"
            variant="contained"
            fullWidth
            type="submit"
          >
            Post
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Post;
