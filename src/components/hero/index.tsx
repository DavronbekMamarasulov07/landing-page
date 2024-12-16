import { useEffect } from "react";
import Container from "../container";
import { Button } from "../ui/button";
import "./index.css";
import AOS from "aos";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-full flex items-center justify-between hero ">
      <Container>
        <div className="w-full flex items-center lg:justify-between justify-center lg:text-left text-center">
          <div
            data-aos="zoom-in"
            className="w-full max-w-[540px] flex flex-col  gap-[20px]"
          >
            <h2 className="text-[#091133] text-[32px] md:text-[50px] font-medium">
              Introduce Your Product Quickly & Effectively
            </h2>
            <p className="text-[#505F98] md:text-[18px] text-[14px] font-normal ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <div className="flex items-center lg:justify-start justify-center gap-[20px] lg:gap-[30px] mt:[70px] lg:mt-[50px]">
              <Button className="bg-[#111B47] w-full h-0 max-w-[160px] py-4 rounded-sm">
                Purchase UI Kit
              </Button>
              <Button className="border border-[#091133] bg-[#fff] w-full h-0 max-w-[160px] py-4 rounded-sm text-[#091133]  hover:bg-[#111B47] hover:text-[#fff]">
                <a href="#advantages"> Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
