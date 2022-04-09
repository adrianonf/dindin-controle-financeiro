import handleCloseModal from '../../utils/functions';
import closeIcon from '../../assets/closeIcon.svg';
import './style.css';
import { useState } from 'react';
import api from '../../services/api';

function Modal({ showModal, setShowModal }) {
  const [form, setForm] = useState({ nome: '', email: '', senha: '', senhaRepetida: '' });

  function handleCloseModal() {
    setShowModal(false);
  }


  async function handleEditItem(e) {
    e.preventDefault();
    
    if (form.senha !== form.senhaRepetida) {
      return;
    }
    
    try {
      const response = await api.put('/usuario', {
       nome: form.nome,
       email: form.email,
       senha: form.senha,
       senhaRepetida: form.senhaRepetida
      });

      
      setForm({ name: '', email: '', senha: '', senhaRepetida: '' });
    } catch (error) {

    }
  }

  return (
    <>
      {showModal &&
        <div className="container-modal">
          <div className="modal">
            <h1>Editar Perfil</h1>
            <img
              src={closeIcon}
              alt="close icon"
              onClick={handleCloseModal}
            />

            <div className="modal-inputs">
              <form onSubmit=''>
                <label>
                  Nome
                  <input 
                  type="text" 
                  value={form.nome}
                  />
                </label>

                <label>
                  E-mail
                  <input 
                  type="text"
                  value={form.email}
                  />
                </label>

                <label>
                  Senha
                  <input 
                  type="password"
                  value={form.senha}
                  />
                </label>

                <label>
                  Confirmação de senha
                  <input 
                  type="password"
                  value={form.senhaRepetida}
                  />
                </label>

                <button>Confirmar</button>
              </form>
            </div>
          </div>

        </div>}
    </>
  );
}

export default Modal;
