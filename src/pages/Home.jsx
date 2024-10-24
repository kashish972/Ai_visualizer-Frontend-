import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { CustomButton } from "../components";

import state from "../store";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Payments = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.current === 'home' && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                3D Visualizer <br className="xl:block hidden" />
                with AI
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-white text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination</strong>{" "}
                and define your own
              </p>
              <CustomButton
                type="filled"
                title="Customize TShirt"
                handleClick={() => {
                  state.current = 'customizer';
                  state.model = 'tshirt';
                }}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
              <CustomButton
                type="filled"
                title="Customize Box"
                handleClick={() => {
                  state.current = 'customizer';
                  state.model = 'box';
                }}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Payments;
