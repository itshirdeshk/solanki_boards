import { Button } from "./ui/button";
import video from "../assets/videos/introVideo.mp4";
import { Link } from "react-router-dom";

const IntroVideo = () => {
  return (
    <div className="relative w-full h-[80vh] sm:h-[70vh] md:h-[55vw] overflow-hidden">
      {/* Video container */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text overlay centered */}
      <div className="relative h-full z-10 flex items-center justify-center">
        <div className="text-center px-4 py-6 mx-4 max-w-4xl text-white bg-blue-900/40 backdrop-blur-sm rounded-md">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-bold tracking-tight">
            SOLANKI BROTHERS COUNCIL FOR OPEN AND DISTANCE LEARNING (SBCODL)
          </h1>
          <p className="text-sm sm:text-base md:text-lg mt-3 md:mt-4 mx-auto">
            The Solanki Brothers Council for Open and Distance Learning (SBCODL) is dedicated to nurturing lifelong learners who excel in their chosen paths while upholding the highest standards of quality. Established in 2022 as a non-governmental, non-profit educational council under the Government of India, SBCODL serves as an independent body for accreditation, evaluation, and quality assurance at both national and international levels. We are committed to advancing accessible, equitable, and high-quality education across open, distance, hybrid, and campus-based systems worldwide—fostering purpose-driven learning that shapes individuals and contributes to creating a more inclusive, just, and better world.
          </p>
      </div>
    </div>
  );
};

export default IntroVideo;