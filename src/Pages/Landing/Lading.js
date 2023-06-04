import { ToastContainer } from "react-toastify";
import Collection from "../../Components/Collectionvideo/Collection";
import HomeCarusel from "../../Components/Home-carosel/HomeCarusel";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import Marquee from "../../Components/MarqueeText/Marquee";
import NewLaunch from "../../Components/NerLaunches/NewLaunch";
import Partners from "../../Components/Partners/Partners";
import ProductListing from "../../Components/ProductListing/ProductListing";
import TopCategory from "../../Components/TopCategory/TopCategory";
const Lading = () => {
  return (
    <div className="container">
      <HomeBanner />
      <Marquee />
      <HomeCarusel />
      <NewLaunch />
      <Collection />
      <TopCategory />
      <ProductListing />
      <Partners />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Lading;
