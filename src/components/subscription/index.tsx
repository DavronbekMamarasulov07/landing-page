import { useEffect } from "react";
import Container from "../container";
import { Button } from "../ui/button";
import "./index.css";
import AOS from "aos";
import { toast } from "sonner";

const Subscription = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      id="subscription"
      className="bg-image md:mt-[50px] mt-[0px] flex items-center justify-center w-full"
    >
      <Container>
        <div
          data-aos="zoom-in"
          className="flex flex-col items-center gap-[30px] justify-center  text-center  w-full"
        >
          <div className="flex flex-col gap-4  max-w-[600px]">
            <h2 className="text-[#091133] text-[28px] md:text-[36px] font-medium">
              A Price To Suit Everyone
            </h2>
            <p className="text-[#6F7CB2] text-[14px] md:text-[18px] font-normal ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
            </p>
          </div>
          <div className="flex flex-col mt-[10px] md:mt-[30px]">
            <strong className="text-[#222F65] text-[40px] md:text-[50px] font-medium">
              $40
            </strong>
            <span className="text-[#37447E] text-base font-normal">
              UI Design Kit
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-[#5D6970] text-[14px]">
              See, One price. Simple.
            </span>
            <Button
              onClick={() => {
                toast("Purchase Successful", {
                  style: {
                    color: "#fff",
                    backgroundColor: "#172047",
                    border: "1px solid #111B47",
                    padding: "20px",
                  },
                  description:
                    "Your order has been placed successfully. Thank you for shopping with us!",
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo Purchase"),
                  },
                  position: "top-center",
                  dismissible: true,
                  duration: 1500,
                });
              }}
              className="bg-[#111B47] w-full h-0 max-w-[160px] py-4 rounded-sm"
            >
              Purchase Now
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Subscription;
