import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function DeleteMortgage() {
    const {Id}=useParams();
    const [data,setData]=useState({});
    const {handleSubmit}=useForm();
    const navigate = useNavigate();

    async function fetchData()
        {
            const result =await axios.get(`http://127.0.0.1:8000/api/mortgage/${Id}`);
            setData(result.data);
        }
    

    function deleteData()
        {
            axios.delete(`http://127.0.0.1:8000/api/mortgage/${Id}`);   
            navigate('/show');
        }

    useEffect(()=>{fetchData()},[])
  return (
   <>
   <center className='container border border-primary mt-5 rounded'>
    <div>
   <h3>Delete Confirmation</h3>
   <h2><u>Are u sure u want to delete this Data</u></h2><br></br>
        <table border='1' className='table table-stripped'>
            <tr border='1'>
            <th>Credit Score</th>
            <th>Loan Amount</th>   
            <th>Property Value</th>   
            </tr>
            <tr>
                
                <td>{data.credit_score}</td>
                <td>{data.loan_amount}</td>
                <td>{data.property_value}</td>
            </tr>

        </table>
   <form onSubmit={handleSubmit(deleteData)}>
        
   <NavLink to='/show'><button className='btn btn-outline-success col-2 text-decoration-none'>NO</button></NavLink>
        <input type='submit' value='YES' className='btn btn-outline-danger m-3 col-2'></input>
   </form>
   </div>
   </center>


   </>
  )
}

export default DeleteMortgage

