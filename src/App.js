import React,{useRef,useEffect} from 'react'
import { Grid } from '@material-ui/core';
import { PushToTalkButton,PushToTalkButtonContainer} from '@speechly/react-ui';
import {SpeechState,useSpeechContext} from '@speechly/react-client';

import Main from './components/Main/Main';
import Details from './components/Details/Details'; 
import useStyles from './styles'
const App = () => {
    const classes=useStyles();
    const{speechState,listening}=useSpeechContext();
    const main=useRef(null);
    const executeScroll=()=>main.current.scrollIntoView();

    useEffect(()=>{
      if(listening)
      {
        executeScroll();
      }
    },[listening]);
  return (
    <div>
        <Grid  className={classes.grid} container spacing={0} alignItems='center' justifyContent="center" style={{height:'60vh'}} >
        <Grid item xs={12} sm={3} className={classes.mobile}><Details title="Income"/>
        </Grid>
        <Grid ref={main} item xs={12} sm={4} className={classes.main} >
        <Main/>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.desktop}><Details title="Income"/>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.last}>
        <Details title="Expense"/> 
        </Grid>

        
       </Grid>
       
       
        <PushToTalkButtonContainer >
          <PushToTalkButton/>
        </PushToTalkButtonContainer>
        
       
    </div>
  )
}

export default App;