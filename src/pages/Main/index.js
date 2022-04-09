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
import { clearAll } from '../../utils/localStorage';
import api from '../../services/api';
import EditRegister from '../../components/EditRegisterModal';

function Main() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setDeleteModal] = useState(false);
  const [addRegisterModal, setAddRegisterModal] = useState(false);
  const [editRegisterModal, setEditRegisterModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [userInfo, setUserInfo] = useState({ nome: '', email: '', senha: '', senhaRepetida: '' });
  
  async function handleGetInfo() {
    const response = await api.get('/usuario', {

    })
  }

  useEffect(() => {
    
  }, [])

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
          <span>Nome</span>
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
              <tr>
                <td>22/02/2022</td>
                <td>Segunda</td>
                <td>Qualquer coisa</td>
                <td>Cabelo</td>
                <td>500</td>
                <td className='table-icons'>
                  <img
                    src={editIcon}
                    alt="edit icon"
                    onClick={() => setEditRegisterModal(true)}
                  />
                  <img
                    src={trashIcon}
                    alt="trash icon"
                    onClick={() => setDeleteModal(true)}
                  />
                </td>
              </tr>
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
      />
      <AddRegister
        showModal={addRegisterModal}
        setShowModal={setAddRegisterModal}
      />
      <EditRegister
        showModal={editRegisterModal}
        setShowModal={setEditRegisterModal}
      />


    </div>
  );
}

export default Main;
