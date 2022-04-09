import logo from '../../assets/logo.svg';
import { Link, useNavigate, navigate } from 'react-router-dom';
import './style.css';
import api from '../../services/api';
import { useState } from 'react';
import { setItem } from '../../utils/localStorage';

function SignUp() {
  const [form, setForm] = useState({ nome: '', email: '', senha: '', senhaRepetida: '' });
  
 

  async function handleAddItem(e) {
    e.preventDefault();
    
    if (form.senha !== form.senhaRepetida) {
      return;
    }

    try {
      const response = await api.post('/usuario', {
       nome: form.nome,
       email: form.email,
       senha: form.senha,
          }
      );
      setItem(response.data);
      setForm({ name: '', email: '', senha: '', senhaRepetida: '' });
    } catch (error) {

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
                value={form.nome}
                onChange={(e) => setForm({...form, nome: e.target.value})}
              />
            </label>

            <label>
              E-mail
              <input
                type="text"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
              />
            </label>

            <label>
              Senha
              <input
                type="password"
                value={form.senha}
                onChange={(e) => setForm({...form, senha: e.target.value})}
              />
            </label>

            <label>
              Confirmação de senha
              <input
                type="password"
                value={form.senhaRepetida}
                onChange={(e) => setForm({...form, senhaRepetida: e.target.value})}
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
