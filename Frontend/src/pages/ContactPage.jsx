import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewLetterBox from "../components/NewLetterBox";

const ContactPage = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full md:max-w-[480px]"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-600">
            2278 Crescent View Plaza <br />
            Floor 2, Austin, Texas, USA
          </p>
          <p className="text-gray-600">
            Phone: (512) 555-1234 <br />
            Email: contact@looma.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Looma
          </p>
          <p className="text-gray-600">
            If you’re passionate about innovation and eager to contribute to a
            dynamic team, we’d love to hear from you. Explore current openings
            and join us in shaping the future of shopping.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Careers
          </button>
        </div>
      </div>

      <NewLetterBox />
    </div>
  );
};

export default ContactPage;
