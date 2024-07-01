import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
  nome: '',
  email: '',
  telefone: ''
};

const onSubmit = (values: any) => {
  console.log('Dados do formulário:', values);
};

const validate = (values: any) => {
  const errors: any = {};

  if (!values.nome) {
    errors.nome = 'O nome é obrigatório';
  }

  if (!values.email) {
    errors.email = 'O email é obrigatório';
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Email inválido';
  }

  if (!values.telefone) {
    errors.telefone = 'O telefone é obrigatório';
  }

  return errors;
};

const Formulario: React.FC = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#8a2be2' }}>
    <div style={{ width: '400px', padding: '20px', borderRadius: '5px', backgroundColor: 'white' }}>
      <h2 style={{ textAlign: 'center' }}>Formulário</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        <Form>
          <div style={{ marginBottom: '10px' }}>
            <Field type="text" name="nome" placeholder="Nome" className="form-control" />
            <ErrorMessage name="nome" component="div" style={{ color: 'red' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <Field type="email" name="email" placeholder="Email" className="form-control" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <Field type="tel" name="telefone" placeholder="Telefone" className="form-control" />
            <ErrorMessage name="telefone" component="div" style={{ color: 'red' }} />
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </Form>
      </Formik>
    </div>
  </div>
);

export default Formulario;
