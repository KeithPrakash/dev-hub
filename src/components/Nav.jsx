import { Grid } from "@mui/material";
import { useState} from "react";
import PostAddIcon from "@mui/icons-material/PostAdd";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { TypeAnimation } from "react-type-animation";
import "react-animated-term/dist/react-animated-term.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import IconButton from "@mui/material/IconButton";
// or

import { Link } from "react-router-dom";
import { sizeHeight } from "@mui/system";
const Nav = () => {
 const [change,setNav] =useState(false);
  const termLines = [
    {
      text: "Welcome To Dev Hub",
    }

  ];
    return (
      <div className="navOuter">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className="navAbout">
              {!change ? (
                <Link to="/about">
                  <IconButton
                    onClick={() => setNav(!change)}
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      size: "large",
                    }}
                  >
                    <InfoOutlinedIcon />{" "}
                  </IconButton>{" "}
                </Link>
              ) : (
                <Link to="/">
                  <IconButton
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      size: "large",
                    }}
                    onClick={() => setNav(!change)}
                  >
                    <HomeOutlinedIcon />
                  </IconButton>
                </Link>
              )}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="navHome">
              <TypeAnimation
                sequence={[2000, "Dev-Hub"]}
                wrapper="div"
                cursor={true}
                repeat={false}
              />
            </div>
          </Grid>
          <Grid item xs={3}>
          { 
            !change?(
            <div className="navAddPost">
              <Link to="/post">
                <IconButton
                  onClick={() => setNav(!change)}
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    size: "large"
                  }}
                >
                  <PostAddIcon />
                </IconButton>
              </Link>
            </div>
            ):null
          }

          </Grid>
        </Grid>
      </div>
    );
}
 
export default Nav;