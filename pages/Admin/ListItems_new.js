import React, {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
const useStyles = makeStyles(theme=>({

}));
export default function ListItems(props){
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [brand, setBrand] = React.useState(false);
  const [outlate, setOutlate] = React.useState(false);
  const [modle, setModle] = React.useState(false);
  //  const [category, setCategory]=React.useState(false)

   const handleClickOpen=(listData)=>{
     if(listData == 'Console_type'){
      setOpen(!open);
     }
      else if(listData == 'Consol_product'){
        setBrand(!brand);
      }
      else if(listData == 'Games'){
        setOutlate(!outlate);
      }
      else if(listData == 'accessories'){
        setModle(!modle);
      }
      
   }


  const handleClick=(showData)=>{
  props.handle_Components(showData);
  }

return (
  <div>
    <ListItem button  onClick={()=>handleClick(0)}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button onClick={()=>handleClickOpen('Console_type')}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Console Type" />
        {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={()=>handleClick(1)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Console type " />
          </ListItem>

          <ListItem button className={classes.nested} onClick={()=>handleClick(2)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Display All Consoltype" />
          </ListItem>
        </List>
    </Collapse>

    <ListItem button onClick={()=>handleClickOpen('Consol_product')}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Product" />
        {brand ? <ExpandLess /> : <ExpandMore />}
    </ListItem> 
    <Collapse in={brand} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={()=>handleClick(3)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Console Product" />
          </ListItem>

          <ListItem button className={classes.nested} onClick={()=>handleClick(4)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Display All Product" />
          </ListItem>

        </List>
    </Collapse>

     <ListItem button onClick={()=>handleClickOpen('Games')}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Games" />
        {outlate ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={outlate} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={()=>handleClick(5)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Add Games" />
          </ListItem>

          <ListItem button className={classes.nested} onClick={()=>handleClick(6)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Display All Games"  />
          </ListItem>

        </List>
    </Collapse>

    <ListItem button onClick={()=>handleClickOpen('accessories')}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Accessories" />
        {modle ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={modle} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={()=>handleClick(7)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Add Accessories" />
          </ListItem>

          <ListItem button className={classes.nested} onClick={()=>handleClick(8)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Display All Accessories" />
          </ListItem>
        </List>
    </Collapse> 
       {/* <ListItem button className={classes.nested} onClick={()=>handleClick(9)}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Logout"/>
        </ListItem> */}


    {/* <ListItem button onClick={()=>handleClick(2)}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Brand" />
    </ListItem>
    <ListItem button onClick={()=>handleClick(3)}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Outlet" />
    </ListItem>
    <ListItem button onClick={()=>handleClick(4)}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Modle" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" onClick={()=>handleClick(5)} />
    </ListItem> */}
  </div>
);
}

