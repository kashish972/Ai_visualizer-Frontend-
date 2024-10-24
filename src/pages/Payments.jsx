// In your Payments component:
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { CustomButton } from '../components';
import state from '../store';

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
    fadeAnimation
  } from "../config/motion";

const Payments = () => {
  const snap = useSnapshot(state);

  const handlePaymentSubmit = () => {
    // ... (your existing code)
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

              <motion.div
            className='absolute z-10 top-5 right-5'
            {...fadeAnimation}
          >
              <CustomButton
                type="filled"
                title="Submit"
                handleClick={() => {
                  state.current = 'home';
                  state.model = null;
                  state.generatedImageUrl = null;
                }}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
          </motion.div>
            </form>
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
