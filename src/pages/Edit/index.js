import React, { useState, useEffect } from 'react';
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

// eslint-disable-next-line react/prop-types
export default function Edit({ match }) {
  const [modal, setModal] = useState(false);
  const [infoContact, setInfoContact] = useState({});
  // eslint-disable-next-line react/prop-types
  const idContact = match.params.id;

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  const loadInfoContact = async () => {
    try {
      const response = await api.get(`/${idContact}`);
      setInfoContact(response.data);
    } catch (err) {
      console.log('Erro ao atualizar contato');
    }
  };

  useEffect(() => {
    loadInfoContact();
  }, []);

  // atualizar contato
  const handleSubmit = async data => {
    try {
      await api.put(`/${idContact}`, data);
      openModal();
    } catch (err) {
      console.log('Erro ao atualizar contato');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <h1>Atualizar contato</h1>
        <Form
          schema={schema}
          onSubmit={handleSubmit}
          className="formUpdateContact"
        >
          <Input
            value={infoContact.name}
            onChange={e => setInfoContact({ name: e.target.value })}
            name="name"
            type="text"
            placeholder="Nome completo *"
          />
          <Input
            value={infoContact.email}
            onChange={e => setInfoContact({ email: e.target.value })}
            name="email"
            type="email"
            placeholder="E-mail *"
          />
          <Input
            value={infoContact.phone}
            onChange={e => setInfoContact({ phone: e.target.value })}
            name="phone"
            type="tel"
            placeholder="Telefone *"
          />
          <Input
            value={infoContact.company}
            onChange={e => setInfoContact({ company: e.target.value })}
            name="company"
            type="text"
            placeholder="Empresa *"
          />
          <Input
            value={infoContact.role}
            onChange={e => setInfoContact({ role: e.target.value })}
            name="role"
            type="text"
            placeholder="Cargo *"
          />
          <Input
            value={infoContact.type}
            onChange={e => setInfoContact({ type: e.target.value })}
            name="type"
            type="text"
            placeholder="Tipo de empresa *"
          />
          <Input
            value={infoContact.subject}
            onChange={e => setInfoContact({ subject: e.target.value })}
            name="subject"
            type="text"
            placeholder="Assunto *"
          />

          <Actions>
            <Link to="/">Cancelar</Link>
            <button type="submit">Atualizar</button>
          </Actions>
        </Form>
      </Container>

      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Atualização de Cadastro"
      >
        <p>Contato atualizado com sucesso</p>
        <Link to="/">Voltar para a lista</Link>
      </Modal>
    </>
  );
}
