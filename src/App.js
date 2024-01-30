import React from "react";
import Modal from "./components/Modal";
import { useAppContext } from "./context/appContext";

function App() {
  const { isModalOpen, setModalOpen } = useAppContext();

  return (
    <div className="text-default p-5">
      {isModalOpen ? (
        <Modal />
      ) : (
        <button
          onClick={() => setModalOpen(true)}
          className="py-3 px-4 text-sm font-semibold text-green-light-2 bg-green rounded-lg"
        >
          Open Modal
        </button>
      )}
    </div>
  );
}

export default App;
