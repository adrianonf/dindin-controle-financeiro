import closeIcon from '../../assets/closeIcon.svg';
import './style.css';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { getItem } from '../../utils/localStorage';

function EditRegisterModal({ showModal, setShowModal, currentTransaction }) {
  const [selectedButton, setSelectedButton] = useState('Entrada');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(1);

  const token = getItem('token');

  function handleCloseModal() {
    setShowModal(false);
  }

  async function handleGetTransaction() {
    try {
      const response = await api.get('/transaction', {
        valor: value,
        categoria: category,
        data: date,
        descricao: description,
        categoria_id: categoryId,
        tipo: selectedButton
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

    } catch (error) {
      console.log(error.message);
    }

  }

  async function handleChangeTransaction(e) {
    e.preventDefault();

    try {
      const response = await api.put(`/transaction/${currentTransaction.id}`, {
        valor: value,
        categoria: category,
        data: date,
        descricao: description,
        categoria_id: categoryId,
        tipo: selectedButton
      })
    } catch (error) {
      console.log(error.message); 
    }

  }

  useEffect(() => {
    handleGetTransaction();
  }, [])



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
              <form onSubmit={handleChangeTransaction}>
                <label>
                  Valor
                  <input 
                  type="text"
                  onChange={(e) => setValue(e.target.value)}
                  />
                </label>

                <label>
                  Categoria
                  <input 
                  type="text"
                  onChange={(e) => setCategory(e.target.value)}
                  />
                </label>

                <label>
                  Data
                  <input 
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  />
                </label>

                <label>
                  Descrição
                  <input 
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
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

export default EditRegisterModal;
