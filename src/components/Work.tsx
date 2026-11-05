import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`,
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="work-flex">
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>01</h3>
                  <div>
                    <h4>Credit Keeper</h4>
                    <p>Personal Finance Tracker</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Python, Data Management, Local Storage, CLI Interface, Smart Due Tracking</p>
              </div>
              <WorkImage 
                image="/images/proj1.png" 
                alt="Credit Keeper" 
                link="https://play.google.com/store/apps/details?id=com.creditkeeper.credit_keeper&hl=en_IN"
              />
            </div>
            
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>02</h3>
                  <div>
                    <h4>Vyron AI Assistant</h4>
                    <p>AI Assistant Ecosystem</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Python, LLMs, Prompt Engineering, Subagent Architecture, Computer Vision</p>
              </div>
              <WorkImage 
                image="/images/proj2.png" 
                alt="Vyron AI Assistant" 
                link="https://vyron-nu.vercel.app/"
              />
            </div>
            
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>03</h3>
                  <div>
                    <h4>AWS Portfolio</h4>
                    <p>Cloud-Deployed 3D WebGL Site</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>AWS Amplify, Three.js, GSAP, React, CloudFront CDN, CI/CD</p>
              </div>
              <WorkImage 
                image="/images/proj3.png" 
                alt="AWS Portfolio" 
                link="https://github.com/khushaltechofficial"
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
