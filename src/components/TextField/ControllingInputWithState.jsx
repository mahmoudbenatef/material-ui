import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
  container: { margin: 3 * 2 }
}));
export default function ControllingInputWithState() {
  const classes = useStyles();
  const [inputs, setInputs] = useState([
      {id:'first',label:'first', value:'',
      placeholder:'enter your first name'
    },
      {id:'second',label:'second', value:'',
      placeholder:'enter your second name'
    },
      {id:'third',label:'third', value:'',
      // placeholder:'enter your third name'
    },
  ])
  console.log(inputs);
  function onChange({target:{id,value}}){
    console.log("mapping");
    console.log(id);
    const newInputs = inputs.map(input =>{
      if(input.id!== id){
        return input 
      }
      else {
        return {...input,value}
      }
    })
    setInputs(newInputs)
  }
  return (
    <Grid container spacing={4} className={classes.container}>
        {
          inputs.map((input, index)=>(
            <Grid item key={index}>
            <TextField
            id={input.id}
            label={input.label}
            value={input.value}
        
            onChange={onChange}
       

               placeholder={input.placeholder}
            

       />
          </Grid>
          ))
        }
    </Grid>
  );
}