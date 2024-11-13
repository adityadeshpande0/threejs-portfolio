import { useRef, useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
import "./sectionStyles.scss";
import { motion } from "framer-motion";
const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const skillsData = [
    { title: "React", image: "xyz", left: "35%", top: "0%" },
    { title: "React Native", image: "xyz", left: "50%", top: "12%" },
    { title: "Azure Cloud", image: "xyz", left: "0%", top: "69%" },
    { title: "HTML", image: "xyz", left: "0%", top: "0%" },
    { title: "Redux Toolkit", image: "", left: "46%", top: "23%" },
    { title: "Hooks", image: "xyz", left: "0%", top: "34%" },
    { title: "Redux Thunk", image: "xyz", left: "0%", top: "12%" },
    { title: "React Query", image: "xyz", left: "0%", top: "45%" },
    { title: "Typescript", image: "xyz", left: "0%", top: "23%" },
    { title: "Javascript", image: "xyz", left: "52%", top: "34%" },
    { title: "Tailwind CSS", image: "xyz", left: "49%", top: "45%" },
    { title: "Bootstrap", image: "xyz", left: "0%", top: "57%" },
    { title: "Framer Motion", image: "xyz", left: "0%", top: "81%" },
    { title: "CSS", image: "xyz", left: "75%", top: "69%" },
    { title: "SCSS", image: "xyz", left: "70%", top: "0" },
    { title: "RTL", image: "xyz", left: "75%", top: "57%" },
    { title: "Jira", image: "xyz", left: "45%", top: "57%" },
  ];
  const handleCopy = () => {
    navigator.clipboard.writeText("adityadeshpande1@outlook.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  const getRandomMotion = () => {
    const getRandomValue = () => Math.floor(Math.random() * 10) - 10;
    return {
      x: [0, getRandomValue(), getRandomValue(), getRandomValue(), 0],
      y: [0, getRandomValue(), getRandomValue(), getRandomValue(), 0],
      z: [0, getRandomValue(), getRandomValue(), getRandomValue(), 0],
    };
  };
  const containerRef = useRef(null);
  return (
    <section className="c-space my-0" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
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
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div
              className="relative flex-1 w-full h-full p-20"
              ref={containerRef}
            >
              {skillsData.map((data) => (
                <motion.div
                  key={data.title}
                  style={{ left: data.left, top: data.top }}
                  className="inline-flex gap-1 px-4 sm:px-6 py-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full items-center absolute"
                  drag
                  dragConstraints={containerRef}
                  // animate={getRandomMotion()}
                  transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                >
                  <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900">
                    {data.title}
                  </span>
                </motion.div>
              ))}
            </div>
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext" style={{ textAlign: "justify" }}>
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
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
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
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
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
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
        </div>
      </div>
    </section>
  );
};
export default About;
