import{useLocation} from "react-router-dom";
import React from "react";
import InsertLinkRoundedIcon from "@mui/icons-material/InsertLinkRounded";
import ReplyIcon from "@mui/icons-material/Reply";
const Comment = (props) => {
    const location =useLocation(props);
    console.log(props, " props");
    console.log(location, " useLocation Hook");
    const data = location.state?.data;
    return (
      <div className="commnetContainer">
        <div className="postTitle">
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
        <div className="commentListOuter">

          {data.comments.map((comment) => (
            
            <div className="comment-preview">
            <p><ReplyIcon fontSize="small"/></p>
              <p>{comment}</p>
            </div>
          ))}
        </div>
      </div>
    );
}
 
export default Comment;