import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './styles';


const CustomizeSnackbar = ({open,setOpen}) => {
    const classes=useStyles();
    const handleClose=(event,reason)=>{
        if(reason=='clickaway'){return;
    }
    setOpen(false);
};   
  return (
    <div className={classes.root}>
        <Snackbar anchorOrigin={{vertical:'top',horizontal:'right'}}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled">
        Transaction successfully added.
        </MuiAlert>

        </Snackbar>
    </div>
  );
};

export default CustomizeSnackbar