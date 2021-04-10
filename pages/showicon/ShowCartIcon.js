// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// const useStyles = makeStyles({
//     list: {
//       width: 250,
//     },
//     fullList: {
//       width: 'auto',
//     },
//   });

// export default function ShowCartIcon() {
//     const classes = useStyles();

//     const [state, setState] = React.useState({
//         top: false,
//         left: false,
//         bottom: false,
//         right: false,
//       });
//       const toggleDrawer = (anchor, open) => (event) => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//           return;
//         }
    
//         setState({ ...state, [anchor]: open });
//       };
//       const list = (anchor) => (
//         <div
//           className={clsx(classes.list, {
//             [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//           })}
//           role="presentation"
//           onClick={toggleDrawer(anchor, false)}
//           onKeyDown={toggleDrawer(anchor, false)}
//         >
//           <List>
//             {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//               <ListItem button key={text}>
//                 <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//           <List>
//             {['All mail', 'Trash', 'Spam'].map((text, index) => (
//               <ListItem button key={text}>
//                 <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </div>
//       );


//     return (
//         <>
//             <span id="card">
//                         <ul>
//                         <li class="nav-item">  
//                           {['right'].map((anchor) => (
//                                 <React.Fragment key={anchor}>
//                                 <Button onClick={toggleDrawer(anchor, true)}>
//                                 <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
//                                 {/* <img src="/images/carticon.jpg" /> */}
//                                 <ShoppingCartIcon style={{color:'#fff'}}/>
//                                 {/* <i class="fa fa-shopping-cart" aria-hidden="true" style={{width:'200px',height:'200px'}}></i> */}
//                                 </a>  
//                                 </Button>
//                                 <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//                                     {list(anchor)}
//                                 </Drawer>
//                                 </React.Fragment>
//                             ))}
                            
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">SingUp</a>
//                         </li>
//                         </ul>
//                     </span>
//         </>
//     )
// }
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import {useSelector} from 'react-redux';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();

  const cart = useSelector(state=>state.cart);

    console.log(cart)
  var cartItems = Object.values(cart);

  

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <h3>Your Cart</h3>
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      <Divider />

    {
        cartItems.map(item => console.log(item))
    }

      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
