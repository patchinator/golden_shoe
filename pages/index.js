import Head from "next/head";

// components
import Navbar from "../components/Header/Navbar";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/UI/Carousels/Carousel";
import Footer from "../components/Footer/Footer";
import DesktopImage from "../components/DesktopImage";
import DesktopImageTwo from "../components/DesktopImageTwo";
import PromotionDesktop from "../components/UI/Promotions/PromotionDesktop";

// card images
import womensShoesImage from "../assets/womens_shoes.jpg";
import trainersImage from "../assets/trainers.jpg";
import womensBootsImage from "../assets/womens_boots.jpg";
import desktopWomensBootsImage from "../assets/desktop_image_one.jpg";
import desktopMensBootsImage from "../assets/desktop_image_two.jpg";

// carousel images
import carouselImageOne from "../assets/womens_boots_2.jpg";
import carouselImageTwo from "../assets/womens_shoes_2.jpg";
import carouselImageThree from "../assets/fancy_shoes.jpg";
import Promotion from "../components/UI/Promotions/Promotion";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Golden Shoe</title>
        <meta name="description" content="London's finest cobblers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* desktop --------------------------------------------------------- desktop */}
      <DesktopImage image={desktopWomensBootsImage} alt="Womens Shoes" />
      <PromotionDesktop
        text="10% Student Discount across the whole store"
        text_two="Click for more details"
      />
      <DesktopImageTwo image={desktopMensBootsImage} alt="Mens Boots" />
      {/* mobile ---------------------------------------------------------- mobile */}
      <Carousel
        imageOne={carouselImageOne}
        imageOneAlt="Doc Martens"
        imageOneDesc="Save 30% online"
        imageTwo={carouselImageTwo}
        imageTwoAlt="Womens Shoes"
        imageTwoDesc="Treat yourself"
        imageThree={carouselImageThree}
        imageThreeAlt="Fancy mens Shoes"
        imageThreeDesc="Suit the occassion"
      />
      <Promotion
        text="10% Student Discount across the whole store"
        text_two="Click for more details"
      />
      <ProductCard
        title="Womens Shoes"
        text="Fantastic current trends at our lowest prices. Click to find out more."
        image={womensShoesImage}
        price="64.99"
      />
      <ProductCard
        title="Running Shoes"
        text="Burn off that lockdown waistline in style! We have all the top brands stocked."
        image={trainersImage}
        price="42.50"
      />
      <ProductCard
        title="Womens Boots"
        text="Winter is here. Keep those feet snuggly with some of the finest and warmest
         boots you've ever tried."
        image={womensBootsImage}
        price="59.99"
      />
      <Footer />
    </div>
  );
}
