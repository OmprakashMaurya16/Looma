import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewLetterBox from "../components/NewLetterBox";

const AboutPage = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Looma was created with a vision to blend creativity, technology, and
            everyday convenience into a seamless shopping experience. What began
            as a simple idea to make online shopping more intuitive, enjoyable,
            and personalized quickly evolved into a mission to redefine how
            people discover and connect with the products they love.
          </p>
          <p>
            From the very beginning, we have focused on curating a vibrant
            collection that reflects both quality and individuality. Whether
            it’s fashion, lifestyle essentials, home décor, or cutting-edge
            gadgets, Looma brings together a diverse range of products sourced
            from reliable brands and passionate artisans. Our goal is to offer
            something for everyone, ensuring that every customer finds pieces
            that truly resonate with their style and needs.
          </p>
          <p>
            Beyond just a marketplace, Looma is a community where innovation At
            Looma, we don’t just offer products we craft experiences.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Looma, our mission is to enrich everyday life by offering
            products that blend style, quality, and value. We’re committed to
            delivering an effortless shopping experience where customers feel
            inspired, supported, and confident in every purchase—from discovery
            to doorstep.
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p>
            At Looma, we handpick and rigorously evaluate every product to
            ensure it meets our high standards of craftsmanship, durability, and
            reliability.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p>
            Our intuitive platform and seamless ordering experience make
            shopping effortless—from browsing to checkout.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p>
            Our dedicated support team is always here to guide you, ensuring
            your needs are met with care and your satisfaction remains our top
            priority.
          </p>
        </div>
      </div>

      <NewLetterBox />
    </div>
  );
};

export default AboutPage;
