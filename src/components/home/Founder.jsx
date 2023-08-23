import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.jpg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Aditi</h3>
        <h3>Ankita</h3>
        <h3>Sudeep</h3>
        <h3>Vaibhav</h3>

        <p>
          Hey, Everyone, This is our mini project for WAD LAB
          <br />
          
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
