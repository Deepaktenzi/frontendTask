import { info, play, logo1, logo2, logo3, logo4 } from '../Images';
const Info = () => {
  return (
    <>
      <section id="info" className="container-fluid">
        <div className="container py-5 justify-content-center">
          <div className="row flex-wrap-reverse align-items-center">
            <div className="col-lg-6 info mt-5">
              <div className="hero-heading lh-1">
                We Are Consulting For Your Business Finances
              </div>
              <div className="hero-desc mt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
                quam voluptas animi nemo? Excepturi, nulla veritatis nobis esse
                repellendus quae explicabo, pariatur soluta modi .
              </div>
              <button className="btn text-white mt-3">Know More</button>
            </div>
            <div className="col-lg-6 info-img ">
              <img src={play} className="play" alt="Play Button" />
              <img src={info} className="w-75" alt="" srcset="" />
            </div>
          </div>
          <div className="row comp-logo mt-5">
            <div className="col ">
              <ul>
                <li>
                  <img src={logo1} alt="Logo1" />
                </li>

                <li>
                  <img src={logo2} alt="Logo2" />
                </li>

                <li>
                  <img src={logo3} alt="Logo3" />
                </li>

                <li>
                  <img src={logo4} alt="Logo4" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Info;
