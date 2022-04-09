import handleCloseModal from '../../utils/functions';
import closeIcon from '../../assets/closeIcon.svg';
import './style.css';

function RegisterModal({ showModal, setShowModal }) {

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <>
      {showModal &&
        <div className="container-modal">
          <div className="modal">
            <h1>Nome Modal</h1>
            <img
              src={closeIcon}
              alt="close icon"
              onClick={handleCloseModal}
            />

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

export default RegisterModal;
