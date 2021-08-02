import {
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Typography,
    Button
  } from "@material-ui/core";
  import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
  import React from "react";
export default function Test(){
    return(
       <>
       <Typography>
           AWS
           <IconButton aria-label="info">
              <InfoOutlinedIcon  />
            </IconButton>
       </Typography>
       <Button   style={{textTransform: 'none'}}>
   Button nona
 </Button>
       </>
    )
}