"use client";
import React, { useState, FormEvent } from "react";
import { createUsers } from "../sanity/actions";

const ModalForm: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newUser = { name, email };
    createUsers(newUser);

    console.log(`Name: ${name}, Email: ${email}`);
    closeModal();
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-gray-700 "
      >
        Join Now
      </button>
      {showModal && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-900 text-white p-4 rounded shadow-lg w-1/2 relative">
            <button
              className="absolute top-2 right-2 text-gray-300 hover:text-gray-200"
              onClick={closeModal}
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4">Access Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-400 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="bg-gray-800 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-100 leading-tight focus:outline-none focus:bg-gray-700"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="bg-gray-800 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-100 leading-tight focus:outline-none focus:bg-gray-700"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalForm;
