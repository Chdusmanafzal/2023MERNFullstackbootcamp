import React, { createContext, useState } from 'react';
import ChildComponents from './child';


export const result = createContext();

export default function Parent(){
const [displaysum,setSum] = useState('');
const [displaysub,setSub] = useState('');
const [displaydiv,setDiv] = useState('');
const value = { setDiv,setSub,setSum};

return(
<>
<div className='displaycontent'>
<div> The SUB is = {displaysub}</div>
<div> The SUM is = {displaysum}</div>
<div> The Div is = {displaydiv}</div>
</div>
<result.Provider value={value}  >
<ChildComponents sign='-'/>
<ChildComponents sign='+'/>
<ChildComponents sign='/'/>
</result.Provider>
</>
);
}