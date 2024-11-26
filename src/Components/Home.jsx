import React from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowGoForwardFill } from "react-icons/ri";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 shadow-lg rounded-lg">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to My Doctor Time
        </h1>
        <p className="text-gray-700 text-lg">
          Your trusted platform for managing doctor appointments and more.
        </p>
      </header>

      {/* Image Section */}
      <div className="mb-8 flex justify-center">
        <img
          src="https://i.ytimg.com/vi/fQzi503caus/maxresdefault.jpg"
          alt="Doctor consultation representation"
          className="rounded-lg shadow-md w-full max-w-xl"
        />
      </div>

      {/* Description Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Description
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-600">
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
            nesciunt quo dicta. Itaque temporibus sit cumque, ea in maiores
            quia.
          </li>
          <li>
            Nemo nesciunt quo dicta. Itaque temporibus sit cumque, ea in maiores
            quia ipsa mollitia voluptatum. Nihil ad libero officiis.
          </li>
          <li>
            Perferendis laboriosam id repellendus, hic cumque consequatur iusto
            delectus numquam laudantium iure neque molestiae reiciendis.
          </li>
          <li>
            Harum voluptatem eum voluptatibus eligendi, doloremque libero,
            aliquam quidem ipsa debitis expedita dolorem.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            incidunt reprehenderit nesciunt minus! Eveniet dignissimos.
          </li>
        </ul>
      </section>

      {/* Call-to-Action Button */}
      <div className="text-center">
        <button
          onClick={() => navigate("/apply")}
          className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          <RiArrowGoForwardFill size={24} /> Get an Appointment
        </button>
      </div>
    </div>
  );
};

export default Home;
