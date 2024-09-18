import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        ProjectTitle="Kite"
        Description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo "
        Learnmore=""
        gooleplaystore=""
        appstore=""
      />
      <RightSection
        imageURL="media/images/console.png"
        ProjectTitle="Console"
        Description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
      />
      <LeftSection
        imageURL="media/images/coin.png"
        ProjectTitle="Coin"
        Description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        Learnmore=""
        gooleplaystore=""
        appstore=""
      />
      <RightSection imageURL="media/images/kiteconnect.png"
        ProjectTitle="Kite Connect API"
        Description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo="Coin"/>
      <LeftSection
        imageURL="media/images/varsity.png"
        ProjectTitle="Varsity mobile"
        Description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        Learnmore=""
        gooleplaystore=""
        appstore=""
      />
      <p className="text-center mt-5 mb-8 fs-5">Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech blog.</a></p>
      <Universe />
    </>
  );
}

export default ProductPage;
