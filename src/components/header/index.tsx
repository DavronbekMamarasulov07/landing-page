import { RiMenu5Fill } from "react-icons/ri";
import { toast } from "sonner";
import Container from "../container";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);
  return (
    <div className="fixed w-full top-0 z-50 backdrop-blur-sm">
      <Container>
        <div className="flex justify-between items-center py-3 ">
          <ul className=" gap-[60px] lg:flex hidden">
            <li className="font-normal capitalize text-[#505F98] text-base relative group">
              <a href="/">Home</a>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 block h-[1px] bg-[#505F98] w-0 group-hover:w-full transition-all duration-200"></span>
            </li>

            <li className="font-normal capitalize text-[#505F98] text-base relative group">
              <a spellCheck href="#intro">
                About
              </a>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 block h-[1px] bg-[#505F98] w-0 group-hover:w-full transition-all duration-200"></span>
            </li>

            <li className="font-normal capitalize text-[#505F98] text-base relative group">
              <a spellCheck href="#subscription">
                Contact
              </a>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 block h-[1px] bg-[#505F98] w-0 group-hover:w-full transition-all duration-200"></span>
            </li>
          </ul>
          <h1 className="text-2xl text-[#37447E] font-bold">
            <a href="/">Landing</a>
          </h1>
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
              });
            }}
            variant="default"
            className="lg:flex hidden bg-[#111B47] w-full h-0 max-w-[160px] py-4"
          >
            Buy Now
          </Button>

          <div className="lg:hidden block">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger>
                <RiMenu5Fill
                  onClick={() => setIsOpen(true)}
                  className=" text-2xl text-[#37447E]"
                />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col items-center gap-[30px]">
                      <ul className=" gap-[20px] flex flex-col items-center justify-center pt-7">
                        <li
                          onClick={closeSheet}
                          className="font-normal capitalize text-[#505F98] text-base relative group"
                        >
                          <a href="/">Home</a>
                          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 block h-[1px] bg-[#505F98] w-0 group-hover:w-full transition-all duration-200"></span>
                        </li>

                        <li
                          onClick={closeSheet}
                          className="font-normal capitalize text-[#505F98] text-base relative group"
                        >
                          <a spellCheck href="#intro">
                            About
                          </a>
                          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 block h-[1px] bg-[#505F98] w-0 group-hover:w-full transition-all duration-200"></span>
                        </li>

                        <li
                          onClick={closeSheet}
                          className="font-normal capitalize text-[#505F98] text-base relative group"
                        >
                          Contact
                          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 block h-[1px] bg-[#505F98] w-0 group-hover:w-full transition-all duration-200"></span>
                        </li>
                      </ul>
                      <Button
                        onClick={() => {
                          closeSheet();
                        }}
                        variant="default"
                        className="flex  bg-[#111B47] w-full h-0 max-w-[160px] py-4"
                      >
                        <a spellCheck href="#subscription">
                          Buy Now
                        </a>
                      </Button>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
