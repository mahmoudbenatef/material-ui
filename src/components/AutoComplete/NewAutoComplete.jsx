import React,{useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// import { useField } from "formik";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

export default function ComboBox() {
    const [users,setUsers]=useState([])
    const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  function onInputChangeHandler(value){
    (async()=>{
        const {data:apiUsers}= await   axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(apiUsers.filter(user=>user.name.indexOf(value)!==-1))
      })()
  }
    useEffect(() => {
        (async()=>{
          const {data:apiUsers}= await   axios.get('https://jsonplaceholder.typicode.com/users')
          setUsers(apiUsers)
         
        })()
        return () => {
            
        }
    }, [])
    console.log(users);
  return (
    <Autocomplete
    id="combo-box-demo"
    options={users}
    getOptionLabel={(option) => option.phone}
    onInputChange={(event, value) => {
      if (value.length >= 2) {
        onInputChangeHandler(value);
      }
    }}
    
    getOptionSelected={(option, value) =>
      option.email === value.email
    }
    renderOption={option => (
      <Grid
        container
        spacing={4}
        alignItems="center"
        style={{ backgroundColor: "white" }}
      >
        <Grid item>
          <img src={"../../logo.svg"} alt="Admin Icon" />
        </Grid>
        <Grid item xs>
          {`${option.name} ${option.username}`}
          <Typography variant="body2" color="textSecondary">
            {`${option.email || ""} - ${option.phone || ""}`}
          </Typography>
          <button onClick={()=>{console.log(option);}}>{option.email}</button>
        </Grid>
      </Grid>
    )}
    style={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
  />
  );
}