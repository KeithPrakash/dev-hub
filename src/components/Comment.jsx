import{Form, Link, useLocation} from "react-router-dom";
import React from "react";
import InsertLinkRoundedIcon from "@mui/icons-material/InsertLinkRounded";
import ReplyIcon from "@mui/icons-material/Reply";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { LineStyle } from "@mui/icons-material";
import { Button } from "@mui/material";
const Comment = (props) => {
    const location =useLocation(props);
    console.log(props, " props");
    console.log(location, " useLocation Hook");
    const data = location.state?.data;
    return (
      <div className="commnetContainer">
        <div className="postTitle">
          <Link to="/">
            <ArrowBackIosIcon fontSize="small" />
          </Link>
          <p>{data ? data.title : "Go to Home"} </p>
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
        </div>
        <div className="comment-post-outer">
        <form>
        <TextareaAutosize
          className="textArea"
        /> 
        <Button>Post</Button></form></div>
        <div className="commentListOuter">
          {data.comments.map((comment) => (
            <div className="comment-preview">
              <p>
                <ReplyIcon fontSize="small" />
              </p>
              <p>{comment}</p>
            </div>
          ))}
        </div>
      </div>
    );
}
 
export default Comment;