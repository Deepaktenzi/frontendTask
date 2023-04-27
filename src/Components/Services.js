import { portfolio, profit, promotion } from '../Images';

const Services = () => {
  return (
    <>
      <div className="container-fluid hero-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center mt-5">
              <h1>Our Services</h1>
              <div className="underline"></div>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, voluptatem?
              </p>
            </div>
          </div>

          <div className="row cards-group mt-2">
            <div className="col-lg-4 cards py-5">
              <div className="service_icons">
                <img src={profit} alt="profit" />
              </div>

              <h2>Financial Consulting</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                sequi possimus ea tempora est impedit dicta nesciunt quasi eius
                consequatur!
              </p>
            </div>
            <div className="col-lg-4 cards card-border py-5">
              <div className="service_icons">
                <img src={promotion} alt="" srcset="" />
              </div>
              <h2>Content Marketing</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                sequi possimus ea tempora est impedit dicta nesciunt quasi eius
                consequatur!
              </p>
            </div>
            <div className="col-lg-4 cards py-5">
              <div className="service_icons">
                <img src={portfolio} alt="portfolio" />
              </div>
              <h2>Finance Advice</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                sequi possimus ea tempora est impedit dicta nesciunt quasi eius
                consequatur!
              </p>
            </div>
          </div>
          <div className="service-btn">
            <button className="btn text-white mt-5 mb-4">All Services</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
