import { Grid } from "@mui/material";

const Nav = () => {
    return (
      <div className="navOuter">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className="navAbout"><p>about</p></div>
          </Grid>
          <Grid item xs={6}>
            <div className="navHome">
              <p> devHub</p>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="navRefresh"><p>refresh</p></div>
          </Grid>
        </Grid>
      </div>
    );
}
 
export default Nav;