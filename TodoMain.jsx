import React, { useState } from 'react';
 import Box from '@mui/material/Box';
import A from '../../Components/Interviewss/A.css';
 import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { SettingsRemoteSharp } from '@material-ui/icons';
const TodoMain=()=>{
        const[inputList,setInputList]=useState(" ");
        const[items,setItem]=useState([]);
    
        const textEvent=(event)=>{
        setInputList(event.target.value)
        }
    const ClickEvent=()=>{
        setItem((oldItems)=>{
            return[...oldItems,inputList]
        });
        setInputList(" ");
    }
    const[del,setDel]=useState();

         const Delete=(id)=>{
            setDel(id);
            const updateItems=items.filter((elem,index)=>{
                return index != id;
            });
            setItem(updateItems);
         }
         const[check,setCheck]=useState();

         const Check= (index)=>{
            let elements=document.getElementById(index);
            console.log(elements);
            elements.style.textDecoration = "line-through";
            
            
         }


        
    return(
        <>
            <Box className="container">
                <Box className="headerBox">
                   <h1 className="heading"> Todo List</h1>
                        <Box className="middleBox">
                            <br />   
                            <h1 className='addtitle'>Add tiitle</h1> 
                              <input type="text" placeholder="Enter the text" name="enter the text" 
                             
                              onChange={textEvent}  value={inputList} />
                              <br/>
                             
                            <button className="btn" onClick={ClickEvent}>Submit</button>
                        </Box>


                        
                        <div className='lastBox'>
                            { items.map((items,index)=>
                                {
                                return (
                                    <div className="eachItem" key={index}>
                                        <h3 className="iconBox"  id={index}>{items} <span onClick={()=>Check(index)}><CheckCircleIcon  /> </span> </h3>
                                        <div className='icon'>
                                                <icon  onClick={()=>Delete(index)}> <DeleteIcon /> </icon>
                                        </div>
                                  </div>
                                )
                                        
                             
                            }
                            ) 
                            }
                        </div>
                        
                </Box>
            </Box>
           

        </>
    )
}
export default TodoMain;