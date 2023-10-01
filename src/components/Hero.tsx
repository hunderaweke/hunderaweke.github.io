import { Container } from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import styles from "./hero.module.css";
import greating from "../assets/images/grating.png";
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className={`container my-5 my-lg-0 d-flex flex-column-reverse flex-md-row gap-5 gap-lg-5  align-items-end justify-content-center ${styles.mainContainer}`}
      >
        <div className="d-flex flex-column gap-4 my-5 py-5">
          <h1 className={` ${styles.header}`}>
            Full-Stack Web Developer{" "}
            <span>
              <img src={greating} alt="" className={``} />
            </span>
          </h1>
          <p className={`${styles.par}`}>
            Hi I'm Hundera Awoke A Fullstack Developer Based in Adama, Ethiopia.
            Ready for hiring and any kind of Job.
          </p>
        </div>
        <div className={`${styles.imgContainer}`}></div>
      </section>{" "}
      <Container
        className={`w-auto d-flex my-5 align-items-center justify-content-centers  ${styles.header}`}
      >
        <Container
          className={`${styles.techStack} d-flex text-start align-items-center gap-5 `}
        >
          <h5 className={styles.par}>Tech Stacks | </h5>
          <div className={`d-flex align-items-center gap-3`}>
            <Splide
              className={styles.splideContainer}
              options={{
                type: "loop",
                gap: "0.5rem",
                drag: "free",
                width: 500,
                perPage: 4,
                arrows: false,
                pagination: false,
                autoScroll: {
                  rewind: false,
                  speed: 0.7,
                },
              }}
              extensions={{ AutoScroll }}
            >
              <SplideSlide>
                <img src="https://skillicons.dev/icons?i=nextjs,vue" alt="" />
              </SplideSlide>
              <SplideSlide>
                <img src="https://skillicons.dev/icons?i=git,github" alt="" />
              </SplideSlide>
              <SplideSlide>
                <img src="https://skillicons.dev/icons?i=django,flask" alt="" />
              </SplideSlide>
              <SplideSlide>
                <img src="https://skillicons.dev/icons?i=figma,vue" alt="" />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://skillicons.dev/icons?i=react,tailwind"
                  alt=""
                />
              </SplideSlide>
            </Splide>
          </div>
        </Container>
      </Container>{" "}
    </>
  );
};
export default Hero;
