import { useRef, useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
import "./sectionStyles.scss";
import { motion } from "framer-motion";
import {
  skillsDataCloud,
  skillsDataDevelopment,
  skillsDataMisc,
  skillsDataTechnology,
} from "../commons/commonData";
const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("adityadeshpande1@outlook.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const containerRef = useRef(null);
  return (
    <section className="c-space my-0" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <motion.div
          className="col-span-1 xl:row-span-3"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.5 }}
        >
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I’m Aditya Deshpande</p>
              <p className="grid-subtext" style={{ textAlign: "justify" }}>
                React JS Front-End Developer with around 3 years of hands-on
                experience in enterprise-level projects. Experienced in
                collaborating with clients across E-Commerce, Fuel Data
                Platform, and Rewards Platform domains.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 xl:row-span-3"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.5 }}
        >
          <div className="grid-container">
            <div className="relative w-full overflow-hidden" ref={containerRef}>
              <motion.div
                className="flex gap-4 animate-scroll"
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {skillsDataTechnology.map((data) => (
                  <motion.div
                    key={`row1-${data.title}`}
                    className="inline-flex px-8 py-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-lg items-center"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900">
                      {data.title}
                    </span>
                  </motion.div>
                ))}
                {skillsDataTechnology.map((data) => (
                  <motion.div
                    key={`row1-${data.title}-duplicate`}
                    className="inline-flex px-8 py-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-lg items-center"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900">
                      {data.title}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                className="flex gap-4 mt-8 animate-scroll"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {skillsDataDevelopment.map((data) => (
                  <motion.div
                    key={`row2-${data.title}`}
                    className="inline-flex px-8 py-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-lg items-center"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900">
                      {data.title}
                    </span>
                  </motion.div>
                ))}
                {skillsDataDevelopment.map((data) => (
                  <motion.div
                    key={`row2-${data.title}-duplicate`}
                    className="inline-flex px-8 py-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-lg items-center"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900">
                      {data.title}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                className="flex gap-4 mt-8 animate-scroll"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {skillsDataMisc.map((data) => (
                  <motion.div
                    key={`row2-${data.title}`}
                    className="inline-flex px-8 py-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-lg items-center"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900">
                      {data.title}
                    </span>
                  </motion.div>
                ))}
                {skillsDataMisc.map((data) => (
                  <motion.div
                    key={`row2-${data.title}-duplicate`}
                    className="inline-flex px-8 py-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-lg items-center"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900">
                      {data.title}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                className="flex gap-4 mt-8 animate-scroll"
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{
                  duration: 22,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {skillsDataCloud.map((data) => (
                  <motion.div
                    key={`row3-${data.title}`}
                    className="inline-flex px-8 py-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-lg items-center"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900">
                      {data.title}
                    </span>
                  </motion.div>
                ))}
                {skillsDataCloud.map((data) => (
                  <motion.div
                    key={`row3-${data.title}-duplicate`}
                    className="inline-flex px-8 py-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-lg items-center"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900">
                      {data.title}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="mt-4">
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext" style={{ textAlign: "justify" }}>
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="col-span-1 xl:row-span-4"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.5 }}
        >
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: "Aditya Deshpande",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext" style={{ textAlign: "justify" }}>
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext" style={{ textAlign: "justify" }}></p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="xl:col-span-2 xl:row-span-3"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.5 }}
        >
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext" style={{ textAlign: "justify" }}>
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="xl:col-span-1 xl:row-span-2"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.5 }}
        >
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="email-id-text lg:text-sm md:text-sm font-small text-gray_gradient text-white">
                  adityadeshpande1@outlook.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
