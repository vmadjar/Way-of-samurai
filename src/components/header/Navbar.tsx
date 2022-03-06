import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { AppBar, InputBase, Toolbar, Typography, Avatar } from "@mui/material";
import { Notifications } from "@mui/icons-material";
import { useStyles } from "./useStyles";

export const Navbar = () => {
  const classes = useStyles()
  return (
    <AppBar position="fixed" >
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">IN-CUBE</Typography>
        <div className={classes.search}>
          <InputBase className={classes.input} placeholder="Search..." />
        </div>
        <div className={classes.icons}>
          <Badge className={classes.badge} badgeContent={4} color="secondary">
            <MailIcon color="action" />
          </Badge>
          <Badge className={classes.badge} badgeContent={2} color="secondary">
            <Notifications/>
          </Badge>
          <Avatar alt="Robert Downey" src="https://s3.vcdn.biz/static/f/2312197041/image.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
};
