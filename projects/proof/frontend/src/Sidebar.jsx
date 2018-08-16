import { List, ListItem, ListItemText, ListItemIcon, FormLabel } from '@material-ui/core';
import { PlayCircleFilled, Fingerprint, ExposurePlus1, Redeem } from '@material-ui/icons';
import './Sidebar.css';

const Sidebar = () => (
  <div className="sideBar">
    <img alt="ProofIt" className="img" src="./ProofIt.png" />
    <List>
      <ListItem>
        <ListItemIcon>
          <PlayCircleFilled />
        </ListItemIcon>
        <ListItemText primary="Start with 100 points" secondary="Start each game with 100 free points" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Fingerprint />
        </ListItemIcon>
        <ListItemText primary="Is it Mostly True or Mostly False?" secondary="Don't forget to make up your mind before the timer runs out" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <ExposurePlus1 />
        </ListItemIcon>
        <ListItemText primary="Wager and win" secondary="The more you wager, the more you can win (or lose!)" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Redeem />
        </ListItemIcon>
        <ListItemText primary="The top 1% win Proof Rewards!" secondary="Play more, collect points and become the richest 1%" />
      </ListItem>
    </List>
    <FormLabel>
      Learn more
    </FormLabel>
  </div>
);

export default Sidebar;
