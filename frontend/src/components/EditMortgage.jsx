import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

function EditMortgage() {
    const {Id}=useParams();
    const [data,setData] = useState({});
    const {register,handleSubmit,setValue}=useForm();
    const navigate=useNavigate();

    async function fetchData()
        {
            const result =await axios.get(`http://127.0.0.1:8000/api/mortgage/${Id}`);
            console.log(result.data);
            setValue('credit_score',result.data.credit_score);
            setValue('loan_amount',result.data.loan_amount);
            setValue('property_value',result.data.property_value);
            setValue('annual_income',result.data.annual_income);
            setValue('debt_amount',result.data.debt_amount);
            setValue('loan_type',result.data.loan_type);
            setValue('property_type',result.data.property_type);
            

        }

    function updateData(data)
        {
            const response=axios.put(`http://127.0.0.1:8000/api/mortgage/${Id}/`,data);
            console.log(response);
            navigate('/show')
        }

    useEffect(()=>{fetchData()},[]);
  return (
    <>

    <div className='container border mx-auto mt-2 bg-success-subtle'>
    <div>
           
            <form className='mt-5' onSubmit={handleSubmit(updateData)}>
                <center><h1><u>Update Mortgage Form</u></h1></center>
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

export default EditMortgage
