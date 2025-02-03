

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-black bg-cover bg-center text-white px-6 scroll-smooth"
      style={{ backgroundImage: "url('/images/boy.png')" }} // Replace with actual background image
    >
      {/* Heading Section */}
      <motion.div
        className="text-center mb-10 mt-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-[44px] italic font-extrabold text-gray-300">
          Meet the Magic Behind the Designs
        </h2>
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#d1d1d1] via-[#aeaeae] to-[#000d5a] bg-clip-text text-transparent">
          Welcome to Design Genie
        </h1>
      </motion.div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row mr-64 items-center justify-between w-full max-w-5xl">
        {/* Left Side (Text) */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-2xl ml-7 text-gray-300 leading-relaxed">
            Where imagination meets craftsmanship! We turn your ideas into reality with 
            personalized designs for hoodies, t-shirts, mugs, and more. Whether it’s 
            creating unique merchandise for your brand or gifts that stand out, we’re 
            here to make every design meaningful and memorable.
          </p>

          <p className="text-2xl ml-7 text-gray-300 leading-relaxed">
            At Design Genie, we believe every design tells a story. Our passionate team 
            combines creativity and precision to deliver high-quality, custom products 
            that reflect your style and vision. Let us bring a little magic to your 
            designs and help you make an unforgettable impression!
          </p>
        </motion.div>

        {/* Right Side (Image) */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-6 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/images/img1.png" // Replace with actual image path
            alt="Design Genie"
            width={500}
            height={500}
            className="rounded-sm shadow-lg ml-[500px]"
          />
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div
        className="mt-10 text-center max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#d1d1d1] via-[#aeaeae] to-[#000d5a] bg-clip-text text-transparent">
          Your Design, Your Rules – Create Effortlessly!
        </h2>

        {/* Added Points */}
        <div className="mt-6 space-y-3 text-2xl text-gray-300">
          <p>From Idea to Reality – Upload, Adjust, Done!</p>
          <p>Customize with Ease – Design That Fits You!</p>
          <p>Simple Steps to Stunning Designs!</p>
          <p>Transform Ideas into Products – Your Way!</p>
          <p>Upload. Adjust. Create Magic.</p>
          <p>Bring Your Vision to Life – Effortlessly!</p>
          <p>Design Made Simple – Just Upload and Perfect!</p>
        </div>

        {/* Create Design Button */}
        <motion.button
  className="mt-14 mb-20 px-28 py-6 text-3xl font-extrabold text-white bg-[#001534] shadow-2xl hover:bg-gray-700 transition duration-300 tracking-widest"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 1 }}
>
  CREATE DESIGN
</motion.button>


      </motion.div>
    </div>
  );
};

export default AboutPage;
