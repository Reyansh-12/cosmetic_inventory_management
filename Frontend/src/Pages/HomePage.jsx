import slider1 from "../assets/images/slider/slider1.webp";
import text1 from "../assets/images/slider/text1.webp";
import textTheme from "../assets/images/slider/text-theme.webp";
import slider2 from "../assets/images/slider/slider2.webp";
import category1 from "../assets/images/shop/category/1.webp";
import category2 from "../assets/images/shop/category/2.webp";
import category3 from "../assets/images/shop/category/3.webp";
import category4 from "../assets/images/shop/category/4.webp";
import category5 from "../assets/images/shop/category/5.webp";
import category6 from "../assets/images/shop/category/6.webp";
const Home = () => {
  return (
    <>
        <div style={{ marginRight: "200px" }}>
            <div class="d-flex row" style={{ marginRight: "200px" }}>
                <div class="col-6 w-100">
                    <div class="hero-slide-content">
                        <div class="hero-slide-text-img">
                            <img src={textTheme} width="427" height="232" alt="Image"></img>
                        </div>
                        <h2 class="hero-slide-title text-start">CLEAN FRESH</h2>
                        <p class="hero-slide-desc text-start">{" "} Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
                        <a class="btn btn-border-dark rounded-5" href="product.html">BUY NOW</a>
                    </div>
                </div>
                <div class="col-6">
                    <div class="hero-slide-thumb" style={{ marginTop: "150px" }}>
                        <img src={slider1} width="841" alt="Image"></img>
                    </div>
                </div>
            </div>
        </div>

      {/* <main class="main-content">
        <section class="hero-slider-area position-relative">
          <div class="swiper hero-slider-container position-relative">
            <div class="swiper-wrapper">
              <div class="swiper-slide hero-slide-item">
                <div class="container">
                  <div class="row align-items-center position-relative">
                    <div class="col-12 col-md-6 d-flex align-items-center">
                      <div class="hero-slide-content">
                        <div class="hero-slide-text-img align-items-center">
                          <img
                            src={textTheme}
                            width="427"
                            height="232"
                            alt="Image"
                          ></img>
                        </div>
                        <h2 class="hero-slide-title">CLEAN FRESH</h2>
                        <p class="hero-slide-desc">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit ut aliquam, purus sit amet luctus venenatis.
                        </p>
                        <a class="btn btn-border-dark" href="product.html">
                          BUY NOW
                        </a>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 align-items-center">
                      <div class="hero-slide-thumb">
                        <img
                          src={slider1}
                          width="841"
                          height="832"
                          alt="Image"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hero-slide-text-shape">
                  <img src={text1} width="70" height="955" alt="Image"></img>
                </div>
                <div class="hero-slide-social-shape"></div>
              </div>
              <div class="swiper-slide hero-slide-item">
                <div class="container">
                  <div class="row align-items-center position-relative">
                    <div class="col-12 col-md-6">
                      <div class="hero-slide-content">
                        <div class="hero-slide-text-img">
                          <img
                            src={textTheme}
                            width="427"
                            height="232"
                            alt="Image"
                          ></img>
                        </div>
                        <h2 class="hero-slide-title">Facial Cream</h2>
                        <p class="hero-slide-desc">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit ut aliquam, purus sit amet luctus venenatis.
                        </p>
                        <a class="btn btn-border-dark" href="product.html">
                          BUY NOW
                        </a>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="hero-slide-thumb">
                        <img
                          src={slider2}
                          width="841"
                          height="832"
                          alt="Image"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hero-slide-text-shape">
                  <img src={text1} width="70" height="955" alt="Image"></img>
                </div>
                <div class="hero-slide-social-shape"></div>
              </div>
            </div>

            <div class="hero-slider-pagination"></div>
          </div>
          <div class="hero-slide-social-media">
            <a href="https://www.pinterest.com/" target="_blank" rel="noopener">
              <i class="fa fa-pinterest-p"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener">
              <i class="fa fa-facebook"></i>
            </a>
          </div>
        </section>
        <section class="section-space pb-0">
          <div class="container">
            <div class="row g-3 g-sm-6">
              <div class="col-6 col-lg-4 col-lg-2 col-xl-2">
                <a href="product.html" class="product-category-item">
                  <img
                    class="icon"
                    src={category1}
                    width="70"
                    height="80"
                    alt="Image-HasTech"
                  ></img>
                  <h3 class="title">Hare care</h3>
                  <span class="flag-new">new</span>
                </a>
              </div>
              <div class="col-6 col-lg-4 col-lg-2 col-xl-2">
                <a
                  href="product.html"
                  class="product-category-item"
                  data-bg-color="#FFEDB4"
                >
                  <img
                    class="icon"
                    src={category2}
                    width="80"
                    height="80"
                    alt="Image-HasTech"
                  ></img>
                  <h3 class="title">Skin care</h3>
                </a>
              </div>
              <div class="col-6 col-lg-4 col-lg-2 col-xl-2 mt-lg-0 mt-sm-6 mt-4">
                <a
                  href="product.html"
                  class="product-category-item"
                  data-bg-color="#DFE4FF"
                >
                  <img
                    class="icon"
                    src={category3}
                    width="80"
                    height="80"
                    alt="Image-HasTech"
                  ></img>
                  <h3 class="title">Lip stick</h3>
                </a>
              </div>
              <div class="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
                <a
                  href="product.html"
                  class="product-category-item"
                  data-bg-color="#FFEACC"
                >
                  <img
                    class="icon"
                    src={category4}
                    width="80"
                    height="80"
                    alt="Image-HasTech"
                  ></img>
                  <h3 class="title">Face skin</h3>
                  <span data-bg-color="#835BF4" class="flag-new">
                    sale
                  </span>
                </a>
              </div>
              <div class="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
                <a
                  href="product.html"
                  class="product-category-item"
                  data-bg-color="#FFDAE0"
                >
                  <img
                    class="icon"
                    src={category5}
                    width="80"
                    height="80"
                    alt="Image-HasTech"
                  ></img>
                  <h3 class="title">Blusher</h3>
                </a>
              </div>
              <div class="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
                <a
                  href="product.html"
                  class="product-category-item"
                  data-bg-color="#FFF3DA"
                >
                  <img
                    class="icon"
                    src={category6}
                    width="80"
                    height="80"
                    alt="Image-HasTech"
                  ></img>
                  <h3 class="title">Natural</h3>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main> */}
    </>
  );
};

export default Home;
