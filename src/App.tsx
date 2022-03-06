import { Grid } from "@mui/material";
import { FC } from "react";
import { Feed } from "./components/feed/Feed";
import { Leftbar } from "./components/leftbar/Leftbar";
import { Navbar } from "./components/header/Navbar";
import { Rightbar } from "./components/rightbar/Righrbar";
import { Dialogs } from "./components/dialogs/Dialogs";
import {Routes, Route} from "react-router-dom"
import { Profile } from "./components/profile/Profile";
import { FriendsList } from "./components/friends/FriendsList";

const App: FC = () => {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7}>
            <Routes>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/posts" element={<Feed/>}/>
                <Route path="/friends" element={<FriendsList/>}/>
                <Route path="/dialogs" element={<Dialogs time="20:00"/>}/>
            </Routes>
        </Grid>
        <Grid item sm={3}>
          <Rightbar />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
