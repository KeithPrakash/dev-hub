import { Grid } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { TypeAnimation } from "react-type-animation";
import "react-animated-term/dist/react-animated-term.css";
import { Link } from "react-router-dom";
const Nav = () => {
  
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
            
              <Link to="/about"><InfoOutlinedIcon/></Link>
          
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="navHome">
              <p>
                <TypeAnimation
                  sequence={[2000, "Dev-Hub"]}
                  wrapper="div"
                  cursor={true}
                  repeat={false}
                />
              </p>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="navAddPost">
              <PostAddIcon />
            </div>
          </Grid>
        </Grid>
      </div>
    );
}
 
export default Nav;