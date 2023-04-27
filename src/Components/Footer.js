const Footer = () => {
  return (
    <>
      <section className="container-fluid ftr-bg">
        <div className="container ">
          <div className="row py-5 flex-wrap-reverse">
            <div className="col-lg-6 ">
              <h2>Subscribe Out Newsletter For More Updates</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                fugit incidunt quisquam modi sit pariatur labore assumenda
                ratione laboriosam commodi.
              </p>
            </div>
            <div className="col-lg-6 d-flex flex-column ">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Email.."
              />
              <button className="btn text-white mt-3 mb-3">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
