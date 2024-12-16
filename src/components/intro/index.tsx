import Container from "../container";
import { introIcon } from "../svgs";
import introImage from "../../images/intro.png";
import { useEffect } from "react";
import AOS from "aos";

const Intro = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div id="intro" className="w-full lg:py-[110px] py-[50px]">
      <Container>
        <div className="w-full flex flex-col lg:flex-row items-center justify-between  lg:gap-[30px] gap-[50px]  ">
          <div className="lg:hidden block" data-aos="fade-left">
            <img className="w-full" src={introImage} alt="" />
          </div>
          <div
            data-aos="fade-right"
            className="flex flex-col lg:flex-col md:flex-row items-center lg:gap-[15px] md:gap-[50px] gap-[30px] w-full lg:max-w-[540px]"
          >
            <div>
              <h2 className="md:text-[36px] text-[24px] font-medium text-[#091133] md:text-left text-center md:mb-0 mb-5">
                Light, Fast & Powerful
              </h2>
              <p className="text-[#6F7CB2]  lg:text-[18px] text-[14px] font-normal  max-w-[540px] lg:max-w-[540px] md:text-left text-center ">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
            <div className="md:mt-[45px] mt-0  flex-col lg:flex-row flex items-center  lg:gap-[30px] gap-[15px]  ">
              <div className="flex lg:flex-col flex-row lg:gap-1 gap-5 lg:items-start items-center">
                <span>{introIcon()}</span>
                <div>
                  <h3 className="text-[#091133] text-[14px] lg:text-[16px] font-medium lg:mt-2 mt-0">
                    Title Goes Here
                  </h3>
                  <p className="text-[#5D6970] text-[8px] lg:text-[12px] max-w-[200px] lg:max-w-max">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.{" "}
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-col flex-row lg:gap-1 gap-5 lg:items-start items-center">
                <span>{introIcon()}</span>
                <div>
                  <h3 className="text-[#091133] text-[14px] lg:text-[16px] font-medium lg:mt-2 mt-0">
                    Title Goes Here
                  </h3>
                  <p className="text-[#5D6970] text-[8px] lg:text-[12px] max-w-[200px] lg:max-w-max">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block" data-aos="fade-left">
            <img src={introImage} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Intro;
