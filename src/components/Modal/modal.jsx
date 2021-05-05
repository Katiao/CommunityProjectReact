import React from 'react';
import './modal.scss';
import { FaTimes } from 'react-icons/fa';

function Modal({ isModalOpen, close, image }) {
	return (
		<div
			className={`${
				isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
			}`}>
			<div className='modal-container'>
				<img src={image} className='project-img' alt='Project' />
				<button className='close-modal-btn' onClick={close}>
					<FaTimes />
				</button>
			</div>
		</div>
	);
}

export default Modal;
