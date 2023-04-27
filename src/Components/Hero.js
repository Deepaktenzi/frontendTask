import hero from '../Images/hero.jpg';
const Hero = () => {
  return (
    <>
      <section className="container-fluid hero-bg">
        <div className="container py-5 ">
          <div className="row flex-wrap-reverse">
            <div className="col-lg-6 py-5">
              <div className="hero-sm-text">
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <div className="hero-heading lh-1">
                We Are Consulting For Your Business Finances
              </div>
              <div className="hero-desc mt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
                quam voluptas animi nemo? Excepturi, nulla veritatis nobis esse
                repellendus quae explicabo, pariatur soluta modi .
              </div>
              <button className="btn btn-primary mt-3">Start Now</button>
            </div>
            <div className="col-lg-6">
              <img
                src={hero}
                className="w-100"
                id="hero_img"
                alt="Hero_Image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
