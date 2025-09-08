import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center px-4 sm:px-0 mt-10 py-10   max-w-4xl mx-auto">
      <p className="text-2xl sm:text-3xl font-semibold text-gray-800">
        Join our Newsletter & Get 20% Off!
      </p>
      <p className="text-gray-600 mt-3 mb-8 text-sm sm:text-base">
        Stay updated with the latest products, exclusive offers, and special
        deals delivered straight to your inbox.
      </p>

      <form
        className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-2 w-full sm:w-3/4 mx-auto"
        onSubmit={onSubmitHandler}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 sm:px-8 py-3 rounded-md hover:bg-gray-800 transition text-sm sm:text-base w-full sm:w-auto"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
