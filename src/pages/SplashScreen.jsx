import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SplashScreen = () => {
  const navigate = useNavigate();

  const videoRef = useRef(null);

  const [isExiting, setIsExiting] = useState(false);

  const goToHome = () => {
    setIsExiting(true);

    setTimeout(() => {
      navigate("/home");
    }, 900);
  };
console.log('haaai');
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Force play for mobile devices
    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.log("Autoplay prevented:", err);
      }
    };


    playVideo();

    // Fallback redirect if video event fails
    const fallbackTimeout = setTimeout(() => {
      goToHome();
    }, 7000);

    return () => clearTimeout(fallbackTimeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className="
        fixed inset-0
        bg-black
        z-[9999]
        overflow-hidden
        flex items-center justify-center
      "
    >
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={goToHome}
        className="
          w-full h-full
          object-cover

          object-center
          sm:object-center
          md:object-center
        "
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Dark Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/40
          via-transparent
          to-black/70
          pointer-events-none
        "
      />

      {/* Red Ambient Glow */}
      <div
        className="
          absolute
          w-[220px] h-[220px]
          sm:w-[320px] sm:h-[320px]
          md:w-[420px] md:h-[420px]

          rounded-full
          bg-accent/20

          blur-[100px]
          opacity-70

          pointer-events-none
        "
      />

      {/* Fade In Overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 bg-black pointer-events-none"
      />

      {/* Fade Out Overlay */}
      {isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-black pointer-events-none"
        />
      )}
    </motion.div>
  );
};

export default SplashScreen;