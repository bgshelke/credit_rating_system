import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function ShowMortgage() {

    const [data,setData]=useState([]);

    async function fetchData()
        {
            const result =await axios.get('http://127.0.0.1:8000/api/mortgage/');
            console.log('result--->',result.data);
              setData(result.data);
        }

    useEffect(()=>{fetchData(),[]})
  return (
   <>
   <div className='container border border-dark border-5 mt-3 rounded bg-info'>
   <center><h1><u>Mortgage Data</u></h1></center>

   <table className='table table-secondary border border-dark rounded-pill'>
        <thead>
                    <tr>
                        <th>Credit Score</th>
                        <th>Loan Amount</th>
                        <th>Property Value</th>
                        <th>Actions</th>
                    </tr>
        </thead>
        <tbody>
            {
                data.map((obj)=>{
                    return(
                        <tr>
                            <td>{obj.credit_score}</td>
                            <td>{obj.loan_amount}</td>
                            <td>{obj.property_value}</td>
                           <td><NavLink to={`/update/${obj.id}`}><button className='btn btn-warning mx-2'>Edit</button></NavLink>
                           <NavLink to={`/delete/${obj.id}`}><button className='btn btn-danger '>Delete</button></NavLink></td>
                        </tr>
                    )
                })
            }
        </tbody>
   </table>
   </div>

   
   </>
  )
}

export default ShowMortgage
