const About = () => {
  return (
    <section>
      <div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I’m Aditya Deshpande</p>
              <p className="grid-subtext">
                React JS Front-End Developer with around 3 years of hands-on
                experience in enterprise-level projects. Experienced in
                collaborating with clients across E-Commerce, Fuel Data
                Platform, and Rewards Platform domains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
