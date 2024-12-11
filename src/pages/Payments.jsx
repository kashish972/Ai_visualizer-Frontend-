// In your Payments component:
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { CustomButton } from '../components';
import state from '../store';

import {
  slideAnimation,
  fadeAnimation,
} from '../config/motion';

const Payments = () => {
  const snap = useSnapshot(state);

  const handleRazorpayPayment = () => {
    const options = {
      key: 'rzp_test_mbinFkvUx9Ur9V', // Replace with your Razorpay test or live key
      amount: 500 * 100, // Amount in paise (500 INR)
      currency: 'INR',
      name: '3D Visualizer',
      description: 'Test Transaction',
      image: state.generatedImageUrl, // Optional: image URL
      handler: (response) => {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        // Handle success logic (update state, show a confirmation, etc.)
      },
      prefill: {
        name: 'John Doe', // Replace with actual user data
        email: 'johndoe@example.com', // Replace with actual user email
        contact: '9999999999', // Replace with actual user phone
      },
      theme: {
        color: '#3399cc',
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();

    razorpay.on('payment.failed', (response) => {
      console.error('Payment failed:', response.error);
      alert('Payment failed. Please try again.');
    });
  };

  return (
    <AnimatePresence>
      {snap.current === 'payment' && (
        <motion.section className="payments" {...slideAnimation('left')}>
          <div className="form-container">
            <h2>Payment Form</h2>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />

              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" />
            </form>

            <motion.div className="absolute z-10 top-5 right-5" {...fadeAnimation}>
              <CustomButton
                type="filled"
                title="Pay with Razorpay"
                handleClick={handleRazorpayPayment}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </div>

          <div className="image-container">
            <img src={state.generatedImageUrl} alt="3D Model" />
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Payments;
