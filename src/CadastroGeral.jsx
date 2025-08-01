import React, { useState } from 'react';

const CadastroGeral = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome === ("")){
      setMensagem('Prencha o campo nome')
      return;
    }
  
    else if (email === ("")){
      setMensagem('Prencha o campo email')
      return;
    }
    
    else if (senha === ("")){
      setMensagem('Prencha o campo senha')
      return;
    }
    else if (email === ("@")){
      setMensagem("Coloque @ no email")
      return
    }

  
    
    setMensagem('Cadastro realizado com sucesso!');
    setNome('');
    setEmail('');
    setSenha('');
  }

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="string"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder=" "
            
          />
        </div>

        <div>
          <label>E-mail:</label>
          <input
            type="string"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            
          />
        </div>

        <div>
          <label>Senha:</label>
          <input
            type="number "
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder=" "
            
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CadastroGeral;
