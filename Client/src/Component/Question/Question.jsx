import { useState } from "react";
import Loading from "../Loading/Loading";

const Question = () => {
  const [showNumber, setShowNumber] = useState(false);
  const whatsappNumber = "+8801779625784"; // Replace this with your WhatsApp number

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, "_blank");
    };
    const facebookPageId = "163874773465514"; // Replace this with your Facebook Page ID

    const handleFacebookClick = () => {
      const facebookUrl = `https://m.me/${facebookPageId}`;
      window.open(facebookUrl, "_blank");
    };
  <Loading />;
  return (
    <div
      className="hero min-h-fit my-10 sm:hidden "
      style={{ backgroundImage: "url(https://i.ibb.co/wNhwjMK/1.jpg)" }}
    >
      <div className="hero-content flex-col gap-10 lg:flex-row-reverse md:flex-row-reverse">
        <div className="w-full md:w-1/2">
          <img src="https://i.ibb.co/WyM7qdQ/image.png" className="max-w-sm" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold text-white">Any Question?</h1>
          <p className="py-6 text-white">
            Feel free to contact with us. We are available 24/7
          </p>
          <p className="pb-6 text-2xl font-semibold text-white">
            You can reach us through:
          </p>
          <div className="flex  w-fit h-16 rounded-2xl">
            <button
              className="btn bg-transparent border-none hover:bg-transparent relative"
              onMouseEnter={() => setShowNumber(true)}
              onMouseLeave={() => setShowNumber(false)}
            >
              <img
                src="https://i.ibb.co/6BGY8XB/image.png"
                className="w-16 p-2"
                alt="Messenger Icon"
              />
              {showNumber && (
                <span className="absolute top-0 right-0 bg-white text-black rounded-md px-2 py-1">
                  01948803746
                </span>
              )}
            </button>
            <button
              className="btn bg-transparent border-none hover:bg-transparent relative"
              onClick={handleWhatsAppClick}
            >
              <img
                src="https://i.ibb.co/3znP2pC/image.png"
                className="w-16 p-2"
                alt="WhatsApp Icon"
              />
              <span className="absolute top-0 right-0 bg-white text-black rounded-md px-2 py-1 opacity-0 hover:opacity-100 transition-opacity duration-100">
                {whatsappNumber}
              </span>
            </button>
            <button
      className="btn bg-transparent border-none hover:bg-transparent relative"
      onClick={handleFacebookClick}
    >
      <img
        src="https://i.ibb.co/4YCK6hs/image.png"
        className="w-16 p-2"
        alt="Facebook Icon"
      />
      <span className="absolute top-0 right-0 bg-white text-black rounded-md px-2 py-1 opacity-0 hover:opacity-100 transition-opacity duration-150">
        Inbox
      </span>
    </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
