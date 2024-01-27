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
          className="px-4 py-3 rounded bg-teal-500 text-white"
        >
          Open Modal
        </button>
      )}
    </div>
  );
}

export default App;
