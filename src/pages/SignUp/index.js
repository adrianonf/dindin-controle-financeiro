import logo from '../../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { setItem } from '../../utils/localStorage';

function SignUp() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [validatePassword, setValidatePassword] = useState('');
  const [email, setEmail] = useState('');

  let navigate = useNavigate();
  

  async function handleAddItem(e) {
    e.preventDefault();
    
    if (password !== validatePassword) {
      return;
    }

    try {

      const response = await api.post('/usuario', {
       nome: name,
       email: email,
       senha: password,
          }
      );
      
      // setForm({ nome: '', email: '', senha: '', senhaRepetida: '' });
      
      
      navigate('/');   
      
          
    } catch (error) {
      console.log(error);
    }
  }
 


  return (
    <div className="container-sign-up">
      <img src={logo} alt="logo" />

      <div className="main-sign-up">
        <h1>Cadastre-se</h1>
        <div className="sign-up-inputs">
          <form onSubmit={handleAddItem}>
            <label>
              Nome
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label>
              E-mail
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label>
              Senha
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <label>
              Confirmação de senha
              <input
                type="password"
                value={validatePassword}
                onChange={(e) => setValidatePassword(e.target.value)}
              />
            </label>

            <button type='submit'>Cadastrar</button>
          </form>
          <span>Já tem cadastro? <Link to='/'>Clique aqui!</Link></span>
        </div>
      </div>
    </div>

  );
}

export default SignUp;
