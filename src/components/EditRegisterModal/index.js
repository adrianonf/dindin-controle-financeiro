import handleCloseModal from '../../utils/functions';
import closeIcon from '../../assets/closeIcon.svg';
import './style.css';
import { useState } from 'react';

function EditRegisterModal({ showModal, setShowModal }) {
  const [selectedButton, setSelectedButton] = useState('Entrada');


  function handleCloseModal() {
    setShowModal(false);
  }



  return (
    <>
      {showModal &&
        <div className="container-modal">
          <div className="modal">
            <h1>Editar Registro</h1>
            <img
              src={closeIcon}
              alt="close icon"
              onClick={handleCloseModal}
            />
            <div className='register-buttons'>
              <button onClick={() => setSelectedButton('Entrada')} className={selectedButton === 'Entrada' ? 'selected-enter-btn' : 'non-selected-btn'}>Entrada</button>
              <button onClick={() => setSelectedButton('Saida')} className={selectedButton === 'Saida' ? 'selected-exit-btn' : 'non-selected-btn'}>Saída</button>
            </div>

            <div className="modal-inputs">
              <form onSubmit=''>
                <label>
                  Nome
                  <input type="text" />
                </label>

                <label>
                  E-mail
                  <input type="text" />
                </label>

                <label>
                  Senha
                  <input type="password" />
                </label>

                <label>
                  Confirmação de senha
                  <input type="password" />
                </label>

                <button>Confirmar</button>
              </form>
            </div>
          </div>

        </div>}
    </>
  );
}

export default EditRegisterModal;
