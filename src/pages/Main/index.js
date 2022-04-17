import logo from '../../assets/logo.svg';
import editIcon from '../../assets/editIcon.svg';
import trashIcon from '../../assets/trashIcon.svg';
import arrowUp from '../../assets/polygon.svg';
import filterIcon from '../../assets/filterIcon.svg';
import userIcon from '../../assets/userIcon.svg';
import exitIcon from '../../assets/exitIcon.svg';
import Filter from '../../components/Filter';
import './style.css';
import { useEffect, useState } from 'react';
import EditModal from '../../components/EditModal/index';
import AddRegister from '../../components/AddRegisterModal';
import { clearAll, getItem } from '../../utils/localStorage';
import api from '../../services/api';
import EditRegister from '../../components/EditRegisterModal';

function Main() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setDeleteModal] = useState(false);
  const [addRegisterModal, setAddRegisterModal] = useState(false);
  const [editRegisterModal, setEditRegisterModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [name, setName] = useState('');
  const [category, setCategory] = useState([]);
  const [userInfo, setUserInfo] = useState({ nome: '', email: '' });
  const [transaction, setTransaction] = useState([]);
  const [currentTransaction, setCurrentTransaction] = useState(null);

  const token = getItem('token');

  function getDayOfWeek(date) {
    const days = ['Domingo', 'Segunda', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const d = new Date(date);
    return days[d.getDay()];
  }

  async function handleGetTransactions() {
    try {
      const response = await api.get('/transacao', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setTransaction(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    handleGetTransactions();
  }, [])


  async function handleGetCategories() {
    try {
      const response = await api.get('/categoria', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setCategory(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleDeleteTransaction() {

    try {
      await api.delete(`/transacao/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="container-main">
      <div className="container-header">
        <img className='logo-header' src={logo} alt="logo" />
        <div>
          <img
            src={userIcon}
            alt="user icon"
            onClick={() => setShowEditModal(true)}
          />
          <span>{name}</span>
          <img
            src={exitIcon}
            alt="exit icon"
            onClick={() => clearAll()}
          />
        </div>
      </div>
      <div className="container-content">
        <div className="container-list">
          <button onClick={() => setFilterModal(filterModal ? false : true)}><img src={filterIcon} alt="filter Icon" /> Filtrar</button>
          <div className="filter">
            <Filter
              showModal={filterModal}
              setShowModal={setFilterModal}
            />
          </div>
          <div className="table-list">
            <table className='table'>
              <tr className='table-head'>
                <th>Data <img src={arrowUp} alt="arrow" /></th>
                <th>Dia da semana</th>
                <th className='table-description'>Descrição</th>
                <th>Categoria</th>
                <th>Valor</th>
                <th></th>
              </tr>
              {transaction.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.data.slice(0, 10).split('-').reverse().join('/')}</td>
                    <td>{getDayOfWeek(val.data)}</td>
                    <td>{val.descricao}</td>
                    <td>{val.categoria_nome}</td>
                    <td>{(val.valor).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</td>
                    <td
                      className='table-icons'
                    >
                      <img
                        src={editIcon}
                        alt="edit icon"
                        onClick={() => setEditRegisterModal(true) & setCurrentTransaction(val.id)}
                      />
                      <img
                        src={trashIcon}
                        alt="trash icon"
                        onClick={() => setDeleteModal(true)}
                      />
                    </td>
                  </tr>
                )
              })}
            </table>
            {showDeleteModal &&
              <div className='delete-modal'>

                <span>Apagar item?</span>
                <div>
                  <button>Sim</button>
                  <button onClick={() => setDeleteModal(false)}>Não</button>
                </div>
              </div>
            }
          </div>
        </div>

        <div className="container-resume">
          <div className='resume'>
            <h1>Resumo</h1>
            <div className='data-in'>
              <span>Entradas</span>
              <span className=''>R$ 500,00</span>
            </div>
            <div className='data-out'>
              <span>Saídas</span>
              <span className=''>R$ 200,00</span>
            </div>
            <div className='balance'>
              <span>Saldo</span>
              <span>R$ 399,00</span>
            </div>
          </div>
          <button onClick={() => setAddRegisterModal(true)}>Adicionar Registro</button>
        </div>
      </div>
      <EditModal
        showModal={showEditModal}
        setShowModal={setShowEditModal}
        userInfo={userInfo}
        setCurrentName={setName}
      />
      <AddRegister
        showModal={addRegisterModal}
        setShowModal={setAddRegisterModal}
      />
      <EditRegister
        showModal={editRegisterModal}
        setShowModal={setEditRegisterModal}
        currentTransaction={currentTransaction}
      />
    </div>
  );
}

export default Main;
