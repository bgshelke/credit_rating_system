import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddMortgage() {

   const [userData,setUserData]= useState({});
   const {register,handleSubmit}=useForm();
   const navigate=useNavigate();


   function saveData(data)
    {
       axios.post('http://127.0.0.1:8000/api/mortgage/',data);
    //    console.log('Response--->',response);
        navigate('/show');
    }
   
  return (
    <>
    <div className='container mx-auto mt-2 bg-warning-subtle  border border-dark border-5 mb-3 p-3'>
    <div>
           
            <form className='mt-5' onSubmit={handleSubmit(saveData)}>
                <center><h1><u>Mortgage Form</u></h1></center>
                <label><b>Enter Credit Score</b></label>
                <input type="number" name="credit_score" placeholder="Credit Score"  className='form-control' required {...register('credit_score')}/><br/>
                <label><b>Enter Loan Amount</b></label>
                <input type="number" name="loan_amount" placeholder="Loan Amount" className='form-control' required {...register('loan_amount')}/><br/>
                <label><b>Enter Property Value</b></label>
                <input type="number" name="property_value" placeholder="Property Value" className='form-control' required {...register('property_value')}/><br/>
                <label><b>Enter Annual Income</b></label>
                <input type="number" name="annual_income" placeholder="Annual Income" className='form-control' required {...register('annual_income')}/><br/>
                <label><b>Enter Debt Amount</b></label>
                <input type="number" name="debt_amount" placeholder="Debt Amount"  className='form-control' required {...register('debt_amount')}/><br/>
                <label><b>Select Loan Type</b></label>
                <select name="loan_type" className='form-control' {...register('loan_type')}>
                    <option value="fixed">Fixed</option>
                    <option value="adjustable">Adjustable</option>
                </select><br/>
                <label><b>Select Property Type</b></label>
                <select name="property_type" className='form-control' {...register('property_type')}>
                    <option value="single_family">Single Family</option>
                    <option value="condo">Condo</option>
                </select><br/>
                <input type="reset" value='RESET' className='btn btn-warning col-4' />

                <input type="submit" value='SUBMIT' className='btn btn-success col-4 float-end'/>
            </form>
        </div>
    </div>
    </>
  )
}

export default AddMortgage
