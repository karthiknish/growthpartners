"use client";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";
import { useState, useRef, useEffect } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
export default function Home() {
  const [playing, setPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("fractional"); // For pricing tabs
  const playerRef = useRef(null);
  const [showButton, setShowButton] = useState(true);
  const handlePlayPause = () => {
    setPlaying((prev) => !prev);
  };
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToConsultation = () => {
    document
      .getElementById("consultation")
      .scrollIntoView({ behavior: "smooth" });
  };
  const scrollToGrowth = () => {
    document.getElementById("growth").scrollIntoView({ behavior: "smooth" });
  };

  const pricingData = {
    fractional: {
      title: "Fractional C-Suite",
      price: "£1,500/month",
      features: [
        "Hire a CEO, CFO, CMO at fraction of cost",
        "Monthly Business Health Check",
      ],
      link: "https://csuite.profici.co.uk",
    },
    directors: {
      title: "Directors Box",
      price: "£2,000/month",
      features: [
        "Networking & Community Events",
        "4 Business Consultancy Meetings",
        "Concierge Service",
        "Full Access to Events",
        "Min 2 C-Suite Opportunities",
      ],
      link: "https://directorsbox.profici.co.uk",
    },
    growth: {
      title: "Growth Partnership",
      price: "£10,000/month",
      features: [
        "Free Directors Box Membership + Plus 1 for Events",
        "Fractional C-Suite with Monthly Health Check",
        "Performance Marketing",
        "Organic Digital Visibility and Branding",
        "Website AMC and Snagging",
        "£2000 Ad Credits (Google & Meta)",
      ],
      link: "#growth",
    },
  };
  const testimonials = [
    {
      quote:
        "Access to experienced C-suite executives at a fraction of the cost, providing strategic leadership and guidance for sustainable growth.",
      name: "Fractional C-Suite",
      designation: "Key Growth Partner Benefit",
      src: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Comprehensive digital marketing strategy including performance marketing, organic visibility, and brand development with £2000 in ad credits.",
      name: "Marketing Excellence",
      designation: "Growth Partnership Feature",
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Regular business health checks and strategic planning sessions to identify growth opportunities and optimise operations.",
      name: "Strategic Oversight",
      designation: "Core Partnership Value",
      src: "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Exclusive access to Directors Box membership with networking events, business consultancy meetings, and concierge services.",
      name: "Elite Network Access",
      designation: "Membership Benefit",
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Complete website maintenance and optimisation services to ensure your digital presence matches your business growth.",
      name: "Digital Infrastructure",
      designation: "Technical Support",
      src: "https://images.unsplash.com/photo-1481887328591-3e277f9473dc?q=80&w=1762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Dedicated support team providing ongoing assistance and rapid response to ensure smooth business operations and growth.",
      name: "Premium Support",
      designation: "Service Excellence",
      src: "https://images.unsplash.com/photo-1495704907664-81f74a7efd9b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Access to industry-leading tools and resources to streamline operations and maximise efficiency in your business growth journey.",
      name: "Business Tools",
      designation: "Resource Access",
      src: "https://images.unsplash.com/photo-1640622308122-b1b0f3cd5a7f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="min-h-screen bg-background p-8">
      <main className="container mx-auto space-y-16">
        <motion.div
          className="flex flex-col items-center mt-24 gap-8 max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <motion.div className="text-center" variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight  text-gray-900 mb-6">
              Accelerate Your Growth With{" "}
              <span className="text-yellow-400">Experienced Leadership</span>
            </h1>
          </motion.div>

          <motion.div
            className="relative w-full "
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              {!isMobile ? (
                <ReactPlayer
                  url="https://profici.co.uk/wp-content/uploads/2024/09/Brafiti-Business-Secrets-1.mp4"
                  width="100%"
                  height="100%"
                  ref={playerRef}
                  playing={playing}
                  controls={false}
                />
              ) : (
                <ReactPlayer
                  url="https://profici.co.uk/wp-content/uploads/2024/07/Brafiti-Business-Secrets.mp4"
                  width="100%"
                  height="100%"
                  ref={playerRef}
                  playing={playing}
                  controls={false}
                />
              )}
              <button
                className={`absolute inset-0 flex items-center justify-center ${
                  playing ? "bg-black/0" : "bg-black/30"
                } hover:bg-black/40 transition-colors`}
                onClick={handlePlayPause}
              >
                {playing ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-6 max-w-2xl z-10 text-center"
            variants={fadeIn}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Join our exclusive network of growth-focused business owners and
              entrepreneurs. As a Profici Growth Partner, you'll gain access to
              proven strategies, expert guidance, and a supportive community
              dedicated to helping you scale or sell your business successfully.
              Transform your business potential into remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button
                size="lg"
                className="w-fit"
                onClick={scrollToConsultation}
              >
                Join the Waitlist
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* New Pricing Section with Tabs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Packages
            </h2>

            <div className="flex flex-col lg:items-center md:flex-row gap-8">
              {/* Left side tabs */}
              <div className="md:w-1/3">
                <div className="flex flex-col gap-2">
                  {Object.keys(pricingData).map((key) => (
                    <motion.button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`p-6 text-left rounded-lg transition-all ${
                        activeTab === key
                          ? "bg-gray-100 text-black shadow-lg"
                          : "bg-white hover:bg-gray-100"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      layout
                    >
                      <h3 className="text-xl font-semibold">
                        {pricingData[key].title}
                      </h3>
                      <p className="text-sm mt-1">{pricingData[key].price}</p>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Right side content */}
              <div className="md:w-2/3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-8 rounded-lg shadow-lg"
                  >
                    <h3 className="text-2xl font-bold mb-6">
                      {pricingData[activeTab].title}
                    </h3>
                    <p className="text-3xl font-bold mb-8">
                      {pricingData[activeTab].price}
                    </p>
                    <ul className="space-y-4">
                      {pricingData[activeTab].features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <svg
                            className="w-6 h-6 text-green-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-4 mt-8">
                      <Button className="w-full" onClick={scrollToConsultation}>
                        Join the Waitlist
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <a
                          href={pricingData[activeTab].link}
                          target={
                            pricingData[activeTab].title ===
                            "Growth Partnership"
                              ? undefined
                              : "_blank"
                          }
                          rel="noopener noreferrer"
                        >
                          More Info
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
        <section id="growth" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-3xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Growth Partnership Package Details
              </motion.h2>
              <motion.div
                className="grid md:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Dedicated Growth Team
                      </h3>
                      <p className="text-gray-600">
                        Access to a full team of C-suite executives working
                        together to accelerate your business growth
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-2">Strategic Planning</h3>
                      <p className="text-gray-600">
                        Monthly strategy sessions and quarterly business reviews
                        to ensure alignment with growth objectives
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Performance Tracking
                      </h3>
                      <p className="text-gray-600">
                        Regular KPI monitoring and data-driven insights to
                        measure and optimise business performance
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Full Implementation Support
                      </h3>
                      <p className="text-gray-600">
                        Hands-on assistance in executing strategies across
                        operations, marketing, and financial management
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-2">Priority Access</h3>
                      <p className="text-gray-600">
                        VIP access to all Profici events, networking
                        opportunities, and exclusive resources
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Strategic Marketing & Brand Growth
                      </h3>
                      <p className="text-gray-600">
                        Expert marketing guidance covering brand development,
                        digital presence, lead generation strategies and ROI
                        tracking
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <motion.section
          className="py-20 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Success Stories
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold  mb-2">125%</h3>
                <p className="text-gray-600">Average Revenue Growth</p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 mx-auto "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold  mb-2">100+</h3>
                <p className="text-gray-600">Hours of Consulting</p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 mx-auto "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold  mb-2">95%</h3>
                <p className="text-gray-600">Client Success Rate</p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold  mb-2">50+</h3>
                <p className="text-gray-600">Satisfied Clients</p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold  mb-2">25+</h3>
                <p className="text-gray-600">Industry Partners</p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold  mb-2">£10M+</h3>
                <p className="text-gray-600">Revenue Generated</p>
              </motion.div>
            </div>
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Button size="lg" onClick={scrollToConsultation}>
                Join the Waitlist
              </Button>
            </motion.div>
          </div>
        </motion.section>
        <section className="py-20 ">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Become Growth Partners of{" "}
              <span className="text-yellow-400">Profici</span>
            </h2>
          </motion.div>

          <AnimatedTestimonials
            key={testimonials.length}
            testimonials={testimonials}
          />
          <div className="flex justify-center mt-12">
            <Button size="lg" onClick={scrollToConsultation}>
              Join the Waitlist
            </Button>
          </div>
        </section>

        <motion.section
          className="py-20 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Growth Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  1. Strategic Assessment
                </h3>
                <p className="text-gray-600 mb-6">
                  We begin with a comprehensive analysis of your business,
                  identifying key growth opportunities and challenges.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  2. Customised Planning
                </h3>
                <p className="text-gray-600 mb-6">
                  Develop a tailored growth strategy aligned with your business
                  goals and market position.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  3. Implementation & Growth
                </h3>
                <p className="text-gray-600 mb-6">
                  Execute the strategy with our expert team's support and
                  monitor progress towards your goals.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="consultation"
          className="py-24 bg-black text-white rounded-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6">
              Take the first step towards elevating your business with
              world-class executive leadership. Schedule a consultation with our
              team to discuss your unique challenges and goals.
            </p>
            <p className="text-gray-400 mb-12 text-sm">
              Limited availability - Book your strategic consultation today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {showButton && (
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100"
                  onClick={() => setShowButton(false)}
                >
                  Join the Waitlist
                </Button>
              )}
            </div>
            {!showButton && (
              <div className="gfiframe bg-white border border-gray-200 rounded-xl relative">
                <iframe
                  src="//profici.co.uk/gfembed/?f=1"
                  width="100%"
                  height="600px"
                  frameBorder="0"
                  className="gfiframe"
                  onLoad={(e) => e.target.classList.add("loaded")}
                ></iframe>
                <div className="absolute inset-0 flex items-center justify-center bg-white transition-opacity duration-300 iframe-loading">
                  <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
                </div>
                <style jsx>{`
                  .iframe-loading {
                    opacity: 1;
                  }
                  .loaded + .iframe-loading {
                    opacity: 0;
                    pointer-events: none;
                  }
                `}</style>
              </div>
            )}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
