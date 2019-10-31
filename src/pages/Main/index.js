import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Header from '../../components/Header';
import { Container, Form, List, Load, SubmitButton } from './styles';

export default function Main() {
  const [render, setRender] = useState(false);
  const [filter, setFilter] = useState('none');
  const [contacts, setContacts] = useState([]);
  const [contactTidy, setContactTidy] = useState([]);

  const loadContacts = async () => {
    try {
      const response = await api.get('/');
      setContacts(response.data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('Erro ao buscar contatos');
    }
  };

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  // função para ordenar os contatos
  const order = orderBy => {
    const tidy = contacts.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return -1;
      if (a[orderBy] > b[orderBy]) return 1;
      return 0;
    });
    setContactTidy(tidy);
  };

  // ordenando os contatos
  const orderContacts = orderBy => {
    switch (orderBy) {
      case 'none':
        order('name');
        break;
      case 'type':
        order('type');
        break;
      case 'subject':
        order('subject');
        break;
      default:
        break;
    }
  };

  // pegando o valor do select para filtrar os contatos
  const handleChangeSelect = e => {
    setFilter(e.target.value);
  };

  // carregando contatos
  const handleSubmit = e => {
    e.preventDefault();
    orderContacts(filter);
    setRender(true);
  };

  // deletando usuário
  const handleDelete = async id => {
    const idForDelete = contacts.filter(contact => contact._id === id);
    await api.delete(`/${idForDelete[0]._id}`);
    const clearIdRemoved = contactTidy.filter((el, index, contact) => {
      return el._id !== id;
    });
    setContactTidy(clearIdRemoved);
  };

  const renderContacts = () => {
    return (
      <>
        <Link to="/new" className="add">
          Novo Contato
        </Link>
        <List>
          {contactTidy.map(contact => (
            // eslint-disable-next-line no-underscore-dangle
            <div key={contact._id}>
              <h1>{contact.name}</h1>
              <p>
                E-mail: <strong>{contact.email}</strong>
              </p>
              <p>
                Telefone: <strong>{contact.phone}</strong>
              </p>
              <p>
                Empresa: <strong>{contact.company}</strong>
              </p>
              <p>
                Cargo: <strong>{contact.role}</strong>
              </p>
              <p>
                Tipo de Empresa: <strong>{contact.type}</strong>
              </p>
              <p>
                Assunto: <strong>{contact.subject}</strong>
              </p>
              <Link to={`/edit/${contact._id}`}>Editar</Link>
              <button type="button" onClick={() => handleDelete(contact._id)}>
                Excluir
              </button>
            </div>
          ))}
        </List>
      </>
    );
  };

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit}>
          <div>
            <p>Filtrar contatos por:</p>
            <select name="filterContacts" onChange={handleChangeSelect}>
              <option value="none">Sem filtro</option>
              <option value="type">Tipo de Empresa</option>
              <option value="subject">Assunto</option>
            </select>
          </div>

          <SubmitButton>
            <span>Carregar</span>
          </SubmitButton>
        </Form>

        {!render ? <Load>Clique em CARREGAR</Load> : renderContacts()}
      </Container>
    </>
  );
}
