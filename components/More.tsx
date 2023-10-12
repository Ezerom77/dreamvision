import React from "react";
import Link from "next/link";

const DreamVisionText: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-xl">
      <h2 className="text-2xl font-bold mb-4">
        Crafting Dreams with AI Memories
      </h2>
      <p>
        At DreamVision, we believe in the extraordinary power of technology to
        transform lives and create lasting memories. Our mission is simple yet
        profound: to bring the world to you, no matter where you are. We
        understand that not everyone can embark on physical journeys, but that
        should never limit your capacity to dream, explore, and remember.
      </p>
      <Link href="/about">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 mt-4">
          Learn More
        </button>
      </Link>
    </div>
  );
};

export default DreamVisionText;
