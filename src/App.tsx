import { RxPinTop } from "react-icons/rx";
import Advantages from "./components/advantages";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Intro from "./components/intro";
import Subscription from "./components/subscription";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Advantages />
      <Subscription />
      <Footer />

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="fixed  bottom-5 right-5  border-[#111B47] text-[#111B47] p-2 rounded-full "
          >
            <RxPinTop className="fill-[#111B47]" size={25} />
          </TooltipTrigger>
          <TooltipContent className="bg-[#111B47]">
            <p>Scroll to top</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

export default App;
