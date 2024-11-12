const About = () => {
  return (
    <section className="c-space" id="about">
      <div className="grid xl:grid-cols-2 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
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
            <img
              src="assets/grid2.png"
              alt="Add image here"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext" style={{ textAlign: "justify" }}>
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;