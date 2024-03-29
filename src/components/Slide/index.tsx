import React from "react";
type Props = {
  data: any;
};

const Slide: React.FC<Props> = ({ }) => {
  return (
    <div
      className="v-window hidden-sm-and-down v-item-group theme--dark v-window--show-arrows-on-hover v-carousel v-carousel--hide-delimiter-background"
      style={{ height: "auto" }}
    >
      <div className="v-window__container" style={{ height: "auto" }}>
        <div className="v-window-item">
          <div
            className="v-image v-responsive v-carousel__item theme--light"
            style={{ height: "auto" }}
          >
            <div className="v-responsive__content">
              <a href="#" className="no-underline">
                <div className="v-image v-responsive theme--light">
                  <div
                    className="v-responsive__sizer"
                    style={{ paddingBottom: "31.25%" }}
                  />
                  <div
                    className="v-image__image v-image__image--cover"
                    style={{
                      backgroundImage:
                        'url("https://muathecao.vn/index/public//assets_2/image/banner-giang-sinh-muathecao.jpg")',
                      backgroundPosition: "center center",
                    }}
                  />
                  <div className="v-responsive__content" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="v-window__prev">
          <button
            type="button"
            aria-label="Previous visual"
            className="v-btn v-btn--icon v-btn--round theme--dark v-size--default"
          >
            <span className="v-btn__content">
              <i
                aria-hidden="true"
                className="v-icon notranslate mdi mdi-chevron-left theme--dark"
                style={{ fontSize: 36 }}
              />
            </span>
          </button>
        </div>
        <div className="v-window__next">
          <button
            type="button"
            aria-label="Next visual"
            className="v-btn v-btn--icon v-btn--round theme--dark v-size--default"
          >
            <span className="v-btn__content">
              <i
                aria-hidden="true"
                className="v-icon notranslate mdi mdi-chevron-right theme--dark"
                style={{ fontSize: 36 }}
              />
            </span>
          </button>
        </div>
      </div>
      <div
        className="v-carousel__controls"
        style={{ left: "auto", right: "auto" }}
      >
        <div className="v-item-group theme--dark">
          <button
            type="button"
            value={0}
            className="v-carousel__controls__item v-btn v-item--active v-btn--active v-btn--icon v-btn--round theme--dark v-size--small"
            aria-label="Carousel slide 1 of 1"
          >
            <span className="v-btn__content">
              <i
                aria-hidden="true"
                className="v-icon notranslate mdi mdi-circle theme--dark"
                style={{ fontSize: 18 }}
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
