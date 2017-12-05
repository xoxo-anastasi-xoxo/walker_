import React from 'react';

import Button from './Button/Button';
import FormField from "./FormField/FormField";
import FormText from "./FormText/FormText";
import Form from "./Form/Form";

import './CreateEvent.css'

const validateRequire = value => !value;

export default class CreateEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      data: ''
    };
  }

  formClear() {
    this.setState({
      title: '',
      description: '',
      data: ''
    });
  }

  validationsForm() {
    let status = true;

    Object.keys(this.state).forEach(item => {
      if(validateRequire(this.state[item])) {
        status = false;
        return false;
      }
    });

    return status;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.validationsForm()) {
      return;
    }

    this.props.handleSubmit({...this.state, account: this.props.accountId });

    this.formClear();
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return <div className="create-event-form">
      <h2>Создать событие</h2>
      <Form onSubmit={this.handleSubmit}>
        <FormField label='Название' name='title'>
          <FormText value={this.state.title} name='title' onChange={this.handleInputChange} />
        </FormField>

        <FormField label='Описание' name='description'>
          <FormText value={this.state.description} name='description' onChange={this.handleInputChange} />
        </FormField>

        <FormField label='Дата' name='data'>
          <FormText value={this.state.data} name='data' onChange={this.handleInputChange} />
        </FormField>
        <br />
        <Button type='submit'>Создать!</Button>
      </Form>
    </div>
  }
}
