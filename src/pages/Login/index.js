
import { useEffect, useState } from 'react';
import { Link, useNavigate, navigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './style.css';
import api from '../../services/api';
import { setItem, getItem } from '../../utils/localStorage';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    const token = getItem('token');

    if(token) {
      navigate('/main')
    }
  }, [])


  async function handleSubmit(e) {
    e.preventDefault();
   
    try {
      if (!email || !senha) {
        return;
      }

      const response = await api.post('/login',
        {
          email,
          senha
        }
      );

      const { token } = response.data;
      setItem('token', token);

      navigate('/main')
    } catch (error) {
        console.log(error.message);
    }
  }

  return (
    <div className="container">
      <img src={Logo} alt="logo" />
      <div className="container-general">
        <div className="container-description">
          <h1>Controle suas <strong>finanças</strong>,<br />
            sem planilha chata.
          </h1>
          <span>
            Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você tem tudo num único lugar<br /> e em um clique de distância.
          </span>
          <Link to="/sign-up"><button>Cadastre-se</button></Link>
        </div>

        <div className="container-login">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label className="label-input">
              E-mail
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="label-input">
              Password
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </label>
           <button type='submit'>Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
