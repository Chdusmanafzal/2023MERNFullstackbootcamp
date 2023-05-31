import React, { useContext, useRef } from "react";
import {Stack, TextField, Button} from '@mui/material';
import { result } from "./parent";
export default function ChildComponents(props){
    const results = useContext(result);
    const TextFieldRef1 = useRef(null);
    const TextFieldRef2 = useRef(null);
  
   function calCulate(){
    if(props.sign==='+'){
        const value1 = Number(TextFieldRef1.current.getElementsByTagName('input')[0].value);
    const value2 = Number(TextFieldRef2.current.getElementsByTagName('input')[0].value);
    const total = value1+value2;
       

   results.setSum(total);
}
else if (props.sign==='-'){
    const value1 = Number(TextFieldRef1.current.getElementsByTagName('input')[0].value);
    const value2 = Number(TextFieldRef2.current.getElementsByTagName('input')[0].value);
  
    const total = value1-value2;
     results.setSub(total);
}
else{
    const value1 = Number(TextFieldRef1.current.getElementsByTagName('input')[0].value);
    const value2 = Number(TextFieldRef2.current.getElementsByTagName('input')[0].value);
    const total = value1/value2;

    results.setDiv(total);
   }
}
return(
    
<Stack direction={"row"} spacing={'100px'} marginTop={'40px'} justifyContent={"center"}>
    <TextField ref={TextFieldRef1} id="standard-number" label="Number" type="number" InputLabelProps={{ shrink: true, }} variant="standard" />
    <h1>{props.sign}</h1>
    
    <TextField ref={TextFieldRef2} id="standard-number" label="Number" type="number" InputLabelProps={{ shrink: true, }} variant="standard" />
    <Button variant="contained" onClick={calCulate}>Calculate</Button>
    </Stack>

);
}