import React, { useState } from "react";
import "./works.scss";
import Modal from "../Modal/modal";

function Works({ works }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="latest-works-cards">
      {works.map((work) => {
        const { id, title, className, cssId, subtitle, img } = work;
        return (
          <div key={id} className={className}>
            <img id={cssId} src={img} alt={title} />
            <div className="overlay1 overlay">
              <i className="fas fa-search" onClick={openModal}></i>
              <h3 onClick={openModal}>{title}</h3>
              <p>{subtitle}</p>
              {/* prop drilling img prop here. To refactor using context API */}
              <Modal isModalOpen={isModalOpen} close={closeModal} image={img} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Works;
