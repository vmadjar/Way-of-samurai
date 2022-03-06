import {
  Container,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useGetPostsQuery } from "../../features/users/usersApi";
import { Friend } from "./Friend";

const useStyles = makeStyles({
  container: {
    marginTop: 75,
    paddingTop: 25,
  },
  friend: {
     padding: "10px",
     border: "1px solid teal",
     borderRadius: "10px"
  }
});

export const FriendsList = () => {
  const classes = useStyles();
  const {data, isLoading, error} = useGetPostsQuery(4)
  
    console.log(data?.items)
  
  return (
      <Container className={classes.container}>
          {data?.items.map(() => (
            <div>Hello</div>
          // <Friend />
          ))}
    </Container>
      
    
  );
};
