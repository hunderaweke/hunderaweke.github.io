import { Container } from "react-bootstrap";
import styles from "./hero.module.css";
import greating from "../assets/images/grating.png";
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className={`container my-5 my-lg-0 d-flex flex-column-reverse flex-md-row gap-5 gap-lg-5  align-items-end justify-content-center ${styles.mainContainer}`}
      >
        <div className="d-flex flex-column gap-4">
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
            <img src="https://skillicons.dev/icons?i=django,vue" alt="" />
            <img src="https://skillicons.dev/icons?i=figma,vue" alt="" />
            <img src="https://skillicons.dev/icons?i=react,tailwind" alt="" />
          </div>
        </Container>
      </Container>{" "}
    </>
  );
};
export default Hero;
