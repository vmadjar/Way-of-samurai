import {
    Avatar,
    Button,
    Typography,
    Grid,
  } from "@mui/material";
  import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { IUsers } from "../../features/users/postTypes";
  
  const useStyles = makeStyles({
    friend: {
       padding: "10px",
       border: "1px solid teal",
       borderRadius: "10px",
       marginBottom: "10px",
       backgroundColor: "#faf1c5"
    }
  });

  type FriendPropsType ={
    user : IUsers
  }

export const Friend = (props: FriendPropsType) => {
    const classes = useStyles();
    const [follow, setFollow] = useState<boolean>(false)
    const handleClick = () => {
        setFollow(!follow)
    }

    return (
            <div className={classes.friend}>
            <Grid container >
          <Grid item sm={2}>
          <Avatar alt="??????" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcdD37vLk-Z0pAMFWUeccnbU49vlKkIvVoQ&usqp=CAU" />
         <Button onClick={handleClick}>
             {!follow ? "Follow" : "Unfollow"}
             </Button>
          </Grid>
          <Grid item sm={6}>
          <Typography variant="h6">
              {props.user}
         </Typography>
         <Typography variant="h6">
              Ukraine, Kiev
         </Typography>
          </Grid>
        </Grid>
            </div>
    );
  };
