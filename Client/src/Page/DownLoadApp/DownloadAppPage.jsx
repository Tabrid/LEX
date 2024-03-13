import { RiArrowRightDoubleFill } from "react-icons/ri";
import Location from "../../Component/Location/Location";
import { Link } from "react-router-dom";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const DownloadAppPage = () => {
  const Data = {
    title: {
      label: "Our App",
      subLabel: null,
    },
    links: [
      { label: null, icon: null },
      {
        label: "Our App",
        icon: RiArrowRightDoubleFill,
        color: "text-[#2e3094]",
      },
    ],
  };

  return (
    <div>
      <Location {...Data} />
      <div className="container mx-40 p-5 grid grid-cols-2">
        <div>
          <img
            className="w-full h-full"
            src="https://i.ibb.co/mGknhgG/app-development-process-details-removebg-preview.png"
            alt="Movie"
          />
        </div>
        <div>
          <h1 className="text-4xl mt-10 font-bold text-center mb-5">
            Our Mobile App
          </h1>
          <div className="w-full border rounded bg-base-100 shadow-xl">
            <div className="card-body grid grid-cols-3 gap-12">
              <div className=" items-center ">
                <h1 className="text-4xl font-bold text-black">1.5M+</h1>
                <p className="ml-2">Worldwide Users!</p>
              </div>

              <div className="items-center border-l pl-4 border-gray-300">
                <div className="flex flex-row gap-3">
                 
                  <h1 className="text-4xl font-bold text-black">4.7</h1>
                  <img className="w-10" src="https://i.ibb.co/Gp80M4R/png-transparent-star-golden-stars-angle-3d-computer-graphics-symmetry-thumbnail-removebg-preview.png" />
                </div>
                <p className="ml-2">Positive Reviews</p>
              </div>

              <div className=" items-center border-l pl-4 border-gray-300">
                <h1 className="text-4xl font-bold text-black">6+</h1>
                <p className="ml-2">Helping Area</p>
              </div>
            </div>
          </div>
          <p className="mt-10 font-semibold text-lg">
            Take help the fun way with the Lex.Ai app! Download now on the App
            Store or Google Play.
          </p>
          <div className="flex flex-row gap-8 mt-10">
            <button className="flex items-center justify-center bg-gray-900 text-white px-4 py-2 rounded-md shadow-lg">
              <FaApple className="mr-2 text-white" size={32} />
              <span>
                Download on the <br />{" "}
                <span className="text-xl font-semibold">App Store</span>
              </span>
            </button>
            <button className="flex items-center justify-center bg-gray-900 text-white px-4 py-2 rounded-md shadow-lg">
              <FaGooglePlay className="mr-2 text-white" size={28} />
              <span>
                Get it on <br />{" "}
                <span className="text-xl font-semibold">Google Play</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppPage;
