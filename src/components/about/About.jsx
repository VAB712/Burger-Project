import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";


const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>SINHGAD Burger Wala</h4>
          <p>
            We are SINHGAD Burger Wala. The place for most tasty burgers on the
            enitre earth.
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founders</h2>
          <article>
            <div>
              <h3>Aditi</h3>
              <h3>Ankita</h3>
              <h3>Sudeep</h3>
              <h3>Vaibhav</h3>
              
              

            </div>

            <p>
            Hey, Everyone, This is our mini project for WAD LAB
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
