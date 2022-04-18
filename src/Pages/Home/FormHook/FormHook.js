import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormHook = () => {
    //form for checkout page

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const { Name, Address } = data
        toast(`Congratulation Mr.${Name}, Address: ${Address}. Your Booking For Tour is Confirmed. Let's See in Pick up Place just in Time.`)
    };

    // vanilla css is written in Checkout.css
    return (
        <div className='form-container'>
            <form className='form-component' onSubmit={handleSubmit(onSubmit)}>
                <input type='text' {...register("Name")} placeholder='Name' />
                <input type='text' {...register("Address")} placeholder='Address' />
                <input type='text' {...register("Phone Number", { required: true })} placeholder='Phone Number' />
                <select className='p-1 rounded options' {...register("Gender")}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">other</option>
                </select>
                <input type="text" {...register("Member No.", { required: true })} placeholder='Member No.' />
                <input className='btn btn-danger w-50 mx-auto d-block opacity-75' type="submit" value="Confirm Your Tour" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default FormHook;