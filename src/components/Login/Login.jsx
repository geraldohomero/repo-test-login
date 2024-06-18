import styles from './Login.module.css'
import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // Modifica o estado para armazenar um objeto com mensagem e tipo
  const [messageInfo, setMessageInfo] = useState({ message: '', type: '' })

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageInfo({ message: '', type: '' }); // Limpa a mensagem anterior

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setMessageInfo({ message: 'E-mail inválido', type: 'error' });
      return;
    }

    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    if (!passwordRegex.test(password)) {
      setMessageInfo({ message: 'A senha deve conter pelo menos 6 caracteres, incluindo números e caracteres especiais.', type: 'error' });
      return;
    }

    // Se tudo estiver correto, exibe uma mensagem de sucesso
    setMessageInfo({ message: 'E-mail e senha válidos', type: 'success' });
  }

  return (
    <div className={styles.card}>
      <div>
        <h1 className={styles.title}>Faça seu Login</h1>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          {messageInfo.message && <div className={messageInfo.type === 'error' ? styles.error : styles.success}>{messageInfo.message}</div>}
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  )
}

export default Login