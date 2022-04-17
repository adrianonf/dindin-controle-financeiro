import './style.css';
import closeIcon from '../../assets/closeIcon.svg';
import { useEffect, useState } from 'react';
import { getItem } from '../../utils/localStorage';
import api from '../../services/api';

function RegisterModal({ showModal, setShowModal }) {
  const [selectedButton, setSelectedButton] = useState('saida');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(1);


  const token = getItem('token');

  async function handleGetAllTransactions() {

    return await api.post('/transacao', {
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
  }

  async function handleAddRegister(e) {
    e.preventDefault();

    if (Number(value) < 0) {
      return;
    }

    try {
      handleGetAllTransactions();
      handleCloseModal();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleGetCategory() {
    try {
      const categoriesRsponse = await api.get('/categoria', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      const { data } = categoriesRsponse;

      setCategory(data)
    } catch (error) {
      console.log(error.message);
    }
  }



  useEffect(() => {
    handleGetCategory();
    handleGetAllTransactions();
  }, []);

  function handleCloseModal() {
    setShowModal(false);
  }



  return (
    <>
      {showModal &&
        <div className="container-modal">
          <div className="modal">
            <h1>Adicionar Registro</h1>
            <img
              src={closeIcon}
              alt="close icon"
              onClick={handleCloseModal}
            />
            <div className='register-buttons'>
              <button onClick={() => setSelectedButton('entrada')} className={selectedButton === 'entrada' ? 'selected-enter-btn' : 'non-selected-btn'}>Entrada</button>
              <button onClick={() => setSelectedButton('saida')} className={selectedButton === 'saida' ? 'selected-exit-btn' : 'non-selected-btn'}>Saída</button>
            </div>

            <div className="modal-inputs">
              <form onSubmit={handleAddRegister}>
                <label>
                  Valor
                  <input
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                  />
                </label>

                <label>
                  Categoria
                  <select
                    id='select' onChange={(e) => setCategoryId(e.target.value)}>
                    {category.map((item) => {
                      return <option onClick={() => setCategoryId(item.id)} key={item.id} value={item.id}>{item.descricao}</option>
                    })}


                  </select>
                </label>

                <label>
                  Data
                  <input
                    placeholder="dd-mm-yyyy"
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

export default RegisterModal;
