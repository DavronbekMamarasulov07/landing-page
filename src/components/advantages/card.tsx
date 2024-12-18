import { useEffect } from "react";
import { Button } from "../ui/button";
import AOS from "aos";
import { toast } from "sonner";

const Card = ({
  cardImage,
  isButton,
}: {
  cardImage: string;
  isButton: boolean;
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="flex flex-col md:text-left text-center md:flex-row items-center justify-between gap-[30px] md:py-[100px] py-[40px]">
      <div data-aos="zoom-in" className="w-full">
        <img className="w-[80%] md:w-full mx-auto" src={cardImage} alt="" />
      </div>
      <div
        data-aos="zoom-in-left"
        className="flex flex-col gap-4 w-full max-w-[445px]"
      >
        <h2 className="text-[24px] md:text-[36px] font-medium text-[#091133]">
          Light, Fast & Powerful
        </h2>
        <p className="text-[#6F7CB2] md:text-[16px] text-[14px] font-normal ">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        {isButton && (
          <div className="w-full flex items-center justify-center md:justify-start">
            {" "}
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
              className="bg-[#111B47] mt-[20px] w-full h-0 max-w-[160px] py-4 rounded-sm "
            >
              Purchase Now
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
