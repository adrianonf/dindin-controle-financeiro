import closeIcon from '../../assets/closeIcon.svg';
import './style.css';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { getItem } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';

function Modal({ showModal, setShowModal, setCurrentName }) {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [validatePassword, setValidatePassword] = useState('');
  const [email, setEmail] = useState('');
  const [currentUser, setCurrentUser] = useState('');

  const token = getItem('token');
  const navigate = useNavigate();

  function handleCloseModal() {
    setShowModal(false);
  }

  async function getUsers() {

    const getDataUsers = await api.get('/usuario', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const { nome, email } = getDataUsers.data;
    console.log(nome, email);
    setName(nome);
    setEmail(email);
    setCurrentName(nome);
  }


  useEffect(() => {   
    getUsers();
  }, [])


  async function handleEditProfile(e) {
    e.preventDefault();

    if (password !== validatePassword) {
      return;
    }

    try {
      const dataUsers = {
        nome: name,
        email: email,
        senha: password
      }
      const updatedUser = await api.put('/usuario',
        {
          ...dataUsers
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      setCurrentUser(updatedUser.data);
      
      handleCloseModal(false)
      navigate('/main');
      getUsers();

    } catch (error) {
      console.log(error.message);
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
              <form onSubmit={handleEditProfile}>
                <label>
                  Nome
                  <input
                    type="text"
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>

                <label>
                  E-mail
                  <input
                    type="text"
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>

                <label>
                  Senha
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Digite sua senha'
                  />
                </label>

                <label>
                  Confirmação de senha
                  <input
                    type="password"
                    onChange={(e) => setValidatePassword(e.target.value)}
                    placeholder='Confirme sua senha'
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
