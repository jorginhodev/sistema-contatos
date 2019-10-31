import React, { useState } from 'react';
import Modal from 'react-modal';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Header from '../../components/Header';
import { Container, Actions } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Por favor preencha o nome!'),
  email: Yup.string()
    .email('Email inválido')
    .required('Por favor preencha o email!'),
  phone: Yup.number()
    .typeError('Preencha um telefone válido!')
    .positive('Não pode conter número negativo!')
    // .integer('Somente números inteiros. Exemplo: 993114786!')
    .required('Por favor preencha o telefone!'),
  company: Yup.string().required('Por favor preencha o nome da empresa!'),
  role: Yup.string().required('Por favor preencha o cargo!'),
  type: Yup.string().required('Por favor preencha o tipo de empresa!'),
  subject: Yup.string().required('Por favor preencha o assunto!'),
});

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export default function New() {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  // cadastrar novo contato
  const handleSubmit = async data => {
    try {
      await api.post('/', data);
      openModal();
    } catch (err) {
      console.log('Erro ao cadastrar contato');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <h1>Cadastrar contato</h1>
        <Form
          schema={schema}
          onSubmit={handleSubmit}
          className="formNewContact"
        >
          <Input name="name" type="text" placeholder="Nome completo *" />
          <Input name="email" type="email" placeholder="E-mail *" />
          <Input name="phone" type="tel" placeholder="Telefone *" />
          <Input name="company" type="text" placeholder="Empresa *" />
          <Input name="role" type="text" placeholder="Cargo *" />
          <Input name="type" type="text" placeholder="Tipo de empresa *" />
          <Input name="subject" type="text" placeholder="Assunto *" />

          <Actions>
            <Link to="/">Cancelar</Link>
            <button type="submit">Cadastrar</button>
          </Actions>
        </Form>
      </Container>

      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Cadastro Efetuado"
      >
        <p>Contato cadastrado com sucesso</p>
        <Link to="/">Voltar para a lista</Link>
      </Modal>
    </>
  );
}
