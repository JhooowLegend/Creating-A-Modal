import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div>
        <h2>Modal</h2>
        <button
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Clicar no Modal
        </button>
        <Modal
          isOpen={openModal}
          setOpenModal={() => {
            setOpenModal(!openModal);
          }}
        >
          <h2>Teste</h2>
        </Modal>
      </div>
    </>
  );
}

export default App;
