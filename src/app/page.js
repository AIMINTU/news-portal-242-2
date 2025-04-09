import Latestnews from "@/components/ui/LatestNews/Latestnews";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import Image from "next/image";

//{data:[{},{},{}]}
//{meals:[{},{},{}]}
//[{},{},{}] 
export default function Home() {
  return (
    <div className="px-4 md:px-14 py-5">
      <div className="md:flex gap-5">
        <div className="md:w-2/3">
          <Latestnews></Latestnews>
        </div>
        <div className=" md:w-1/3 ">
        <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
}
