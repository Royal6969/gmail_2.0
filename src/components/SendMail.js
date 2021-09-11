import React from 'react';
import '../styles/SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';

function SendMail() {

    // npm install react-hook-form
    // const { register, handleSubmit, watch, errors } = useForm(); old v6.0
    const { register, handleSubmit, formState: { errors }} = useForm(); // new syntax v7.0

    const onSubmit = (formData) => {
        console.log(formData);
    };

    const dispatch = useDispatch();

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon 
                    className="sendMail__close" 
                    onClick={() => dispatch(closeSendMessage())}
                />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name="to" 
                    placeholder="To" 
                    type="email" 
                    //ref={register({ required: true })} // TypeError: path.split is not a function at C:/Users/Sergio DC/Desktop/src/utils/get.ts:12 // this happends because this syntax is for react-hook-form v6.0 and nowdays we are in v7.0 and it has several changes...
                    {...register("to", {
                        required: "Required",
                    })}
                />
                {/* {errors.message && errors.message.message} */}
                {errors.to && (
                    <p className="sendMail__error">To is required!</p>
                )}
                <input 
                    name="subject" 
                    placeholder="Subject" 
                    type="text" 
                    //ref={register({ required: true })} // TypeError: path.split is not a function at C:/Users/Sergio DC/Desktop/src/utils/get.ts:12 // this happends because this syntax is for react-hook-form v6.0 and nowdays we are in v7.0 and it has several changes...                    
                    {...register("subject", {
                        required: "Required",
                    })}
                />
                {/* {errors.message && errors.message.message} */}
                {errors.subject && (
                    <p className="sendMail__error">Subject is required!</p>
                )}
                <input 
                    name="message" 
                    placeholder="Message..." 
                    type="text" 
                    className="sendMail__message"
                    //ref={register({ required: true })} // TypeError: path.split is not a function at C:/Users/Sergio DC/Desktop/src/utils/get.ts:12 // this happends because this syntax is for react-hook-form v6.0 and nowdays we are in v7.0 and it has several changes...                    
                    {...register("message", {
                        required: "Required",
                    })}
                />
                {/* {errors.message && errors.message.message} */}
                {errors.message && (
                    <p className="sendMail__error">Message is required!</p>
                )}

                <div className="sendMail__options">
                    <Button 
                        className="sendMail__send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SendMail;
// voy por el 2:49:28