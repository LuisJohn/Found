import MobileView from "@/components/MobileView";
import DesktopView from "@/components/DesktopView";

const page = () => {
  return (
    <>
    {/* Mobile View */}
    <MobileView/>

    {/* For Larger Screens */}
    <DesktopView />
    </>
  )
}

export default page