import React, { Component } from 'react'
import Saly from "/src/assets/Saly-13.png";



const About = () => {
  return (
    <section id="about" className="h-screen bg-black pt-40 ">
    
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 z-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <h5 className="mb-4 text-4xl text-white font-extrabold leading-none">
              Boundless Learning,
              <br />
              study anytime, anywhere.
            </h5>
            <p className="mb-6 text-white">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae explicabo. Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem totam rem aperiam, eaque ipsa quae explicabo.
            </p>
            <hr className="mb-5 border-gray-300" />
          </div>
          <div className="flex scale-150 justify-center z-10 pb-60">
            <img className="w-1/2" src={Saly} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
