import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import RightImg from "./web-frst-section.png";
import leftImg from "./web-dev-second-sec.jpg";
// import { toggleList } from './serviceDesc_data';
import './serviceDesc.css';
import web from './web.jpg';
import web1 from './web1.jpg';
import web2 from './web-2.jpg';
import web3 from './web-3-rbg.png';
import ServiceTypes from './serviceTypes';
import { servicesData } from './serviceDesc_data';

import background from "./background.jpg";

const ServiceDesc = () => {
  // Initialize AOS in useEffect
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: 100, // Offset before the animation starts
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAction = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='project-container'>
      <div className="project-title flex flex-col md:flex-row items-center justify-between p-6  ">
  <div className="header-left text-center md:text-left mb-4 md:mb-0">
    <h1 className='project-headings text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-900 mb-2' data-aos="fade-right">Web Development</h1>
    <h3 className='project-headings text-lg md:text-2xl lg:text-3xl font-semibold mb-5' data-aos="fade-left">Transforming Ideas into Digital Solutions</h3>
    <button className='p-2 button w-1/2 md:w-1/4 transform transition-transform duration-300 hover:scale-105 hover:bg-blue-300 shadow-md hover:shadow-lg' data-aos="fade-right">Contact Us</button>
  </div>
  <div className="header-right ml-0 md:ml-10 w-full md:w-1/2 lg:w-1/3">
    <img src={web3} alt="Web Development" className="w-full h-auto mx-auto md:max-w-xs lg:max-w-sm" data-aos="fade-up" />
  </div>
</div>


      <div className="service-section pl-9 pt-5 mt-10">
        <div className="service-intro flex">
          <div className="left-intro w-1/2">
            <h1 className='font-bold text-5xl'>Get the Best Solutions At Minimal Cost</h1>
            <p className='font-medium mt-5'>
              In today’s digital landscape, a strong online presence is crucial for businesses of all sizes. 
              At MELE, we specialize in creating dynamic and responsive web applications that not only meet 
              your needs but also engage your audience. Our development team is dedicated to delivering 
              innovative solutions that drive growth and enhance user experience.
            </p>
          </div>
          <div className="right-intro w-1/2" data-aos="fade-down">
            <img src={web1} alt="" />
          </div>
        </div>

        <div className="service-types  pt-8 flex">
          <div className="left-service w-1/2 pl-10">
            <h1 className='font-bold text-5xl mt-10 pt-10'>Our Expertise</h1>
            <h3 className='pt-5 pb-5 font-medium text-xl'>
              We offer comprehensive web development solutions, including:
            </h3>
          </div>
          <div className="types">

          </div>
        </div>
            <div className="services-grid ">
      {servicesData.map((service) => (
        <ServiceTypes 
          key={service.id} 
          title={service.title} 
          description={service.description}
          features={service.features}
        />
      ))}
    </div>

        <div className="service-desc-2 pl-8 flex">
          <div className="second-left-sec ml-4  mt-10" data-aos="fade-right">
            <img src={RightImg} alt="" className="h-80 " />
          </div>

          <div className="second-right-sec w-1/2 mt-10 pr-9">
            <h1 className='font-bold text-5xl mt-10'>Why Choose Us?</h1>
            <p className='pt-4'>
            At MELE, we combine cutting-edge expertise with a client-centric approach to deliver high-quality, tailored web solutions that drive real business results. Our team is committed to understanding your unique needs and goals, ensuring that the solutions we provide are perfectly aligned with your vision. We don't just build websites; we create digital experiences that engage your target audience and inspire action. With a focus on scalability, performance, and the latest industry standards, we ensure that your web solutions are future-proof and ready to grow with your business. Our agile development process allows us to be flexible and adaptive, keeping you in the loop at every stage of the project. At MELE, your success is our mission, and we go above and beyond to transform your ideas into innovative digital products that stand out in today's competitive landscape.
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ServiceDesc;
