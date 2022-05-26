import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3PO7CXM0Suko1ErN7z40ESh8tbaBQiqOKziKKB1ZaDZARQGQ1GEBKInmuxYdCSZDwaNT0hIEgCWg8EpfORRs2x00x6ocY1Bf');
const Payment = () => {
    const { id } = useParams()

    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(`http://localhost:5000/booking/${id}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(order)
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl my-8">
                <div class="card-body">
                    <h2 class="card-title">Hello {order.name}</h2>
                    <p>Please pay for : {order.email}</p>
                    <p>Please Pay: {order.price}</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl my-8">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;