import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import './forms.css'
import { apiPath } from '../../config'
import Container from '@material-ui/core/Container';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const DatatablePage = () => {
   const[users,setusers]=useState([])
   const[loader,setloader]=useState()
   const[deleting,setdeleting]=useState('none')
   useEffect(() => {
     setloader(true)
      axios.get(apiPath + '/findallteachers').then(users=>{
         console.log(users)
         setusers(users.data)
         setloader(false)
      })
   },[])
   function deleteUsers(id){
   setdeleting('')
     axios.delete(apiPath + '/deleteusers/' + id,
    
 ).then(res => {
  axios.get(apiPath + '/findallteachers').then(users=>{
   
    setusers(users.data)
    setdeleting('none')
 })
    
 })

   }
  const data = {
    columns: [
      {
        label: 'UserName',
        field: 'name',
        sort: 'asc',
      },
      {
        label: 'Email',
        field: 'email',
      },
     
     
    ],
   rows:[]
  };
  let a= users.map((users) =>
  data.rows.push(  
    {
      name:users.username,
      email:users.email,
      delete:<DeleteForeverIcon  color="secondary" className="btn-change" onClick={(event) => deleteUsers(users.id)}/>
  

    }
    )
  
  )
  
  // <td className=" btn-danger" onClick={(event) => deletefiles(allcourses.id)}><DeleteForeverIcon /></td>
   
  if(loader){
   return(
    <div>
            <div class="text-center">
<div className="spinner-border" role="status">
<span className="sr-only">Loading...</span>
</div>
</div>
        </div>
  );
  }
 

  return (
    
 
<Container component="main" maxWidth="s"  className="card table-hover">

<div className="spinner-border" style={{display:`${deleting}`}}role="status">

</div>

    <MDBDataTable
    responsiveLg
      data={data}
      btn={true}
      
    />
</Container>
  );
}

export default DatatablePage;