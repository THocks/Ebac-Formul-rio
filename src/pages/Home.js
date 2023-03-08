import React, { useState } from 'react';
import { useForm } from '../hooks/useForm/useForm';

const Home = () => {
  const { form, onChangeForm,resetForm} = useForm({
    nome: '',
    idade: '',
    genero: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      console.log('Enviando', form);
      setFormData(form);
      setIsLoading(false);
      resetForm();
    }, 3000);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              id="nome"
              name="nome"
              value={form.nome}
              onChange={onChangeForm}
              required
            />
          </label>
          <label>
            Idade:
            <input
              type="number"
              id="idade"
              name="idade"
              value={form.idade}
              onChange={onChangeForm}
              required
            />
          </label>
          <label>
            Gênero: M
            <input
              type="radio"
              id="genero"
              name="genero"
              value="masculino"
              checked={form.genero === 'masculino'}
              onChange={onChangeForm}
              required
            />
            F
            <input
              type="radio"
              id="genero"
              name="genero"
              value="feminino"
              checked={form.genero === 'feminino'}
              onChange={onChangeForm}
              required
            />
          </label>
         
          {isLoading ? <p>Enviando formulário...</p> : <button>Enviar</button>}
        </form>
        {formData && (
          <div className='resposta'>
            <p>Nome: {formData.nome}</p>
            <p>Idade: {formData.idade}</p>
            <p>Gênero: {formData.genero}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
