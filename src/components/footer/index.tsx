import Container from "../container";
import { Button } from "../ui/button";
import { facebook, youtube, instagram, linkedIn, twitter } from "../svgs";
import { toast } from "sonner";

const Footer = () => {
  return (
    <div className="bg-[#E7ECFF]">
      <Container>
        <div className="flex flex-col gap-[20px] py-[30px] md:py-[50px]">
          <div className="flex  md:items-center items-start gap-5 justify-between">
            <p className="text-[#939EA4] text-[14px]">©2023 Yourcompany</p>
            <h2 className="text-2xl text-[#37447E] font-bold ">Landing</h2>
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
              className="hidden md:block bg-[#111B47] w-full h-0 max-w-[160px] py-4 rounded-sm"
            >
              Purchase Now
            </Button>
          </div>
          <div className="h-[1px] bg-[#CDD1D4] mt-[15px] md:mt-[25px]"></div>
          <ul className="flex justify-between items-center flex-col md:flex-row gap-[20px]">
            <li>
              <ul className=" gap-[60px] hidden md:flex">
                <li className="font-normal capitalize text-[#929ECC] hover:text-[#788ace] text-base relative group">
                  <a href="/">Home</a>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 block h-[1px] bg-[#788ace] w-0 group-hover:w-full transition-all duration-200"></span>
                </li>

                <li className="font-normal capitalize text-[#929ECC] hover:text-[#788ace] text-base relative group">
                  <a href="#intro">about</a>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 block h-[1px] bg-[#788ace] w-0 group-hover:w-full transition-all duration-200"></span>
                </li>

                <li className="font-normal capitalize text-[#929ECC] hover:text-[#788ace] text-base relative group">
                  contact
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 block h-[1px] bg-[#788ace] w-0 group-hover:w-full transition-all duration-200"></span>
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex gap-[30px] mb-[30px]">
                <li className="">{facebook()}</li>
                <li>{linkedIn()}</li>
                <li>{twitter()}</li>
                <li>{youtube()}</li>
                <li>{instagram()}</li>
              </ul>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
