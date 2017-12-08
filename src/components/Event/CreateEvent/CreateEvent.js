import React from 'react';

import Button from './Button/Button';
import FormField from "./FormField/FormField";
import FormText from "./FormText/FormText";
import Form from "./Form/Form";
import Coordinates from "./Coordinates/Coordinates";
import DateForm from "./Date/DateForm";
import {connect} from 'react-redux'

import './CreateEvent.css'
import UserAvatar from "../../User/UserAvatar/UserAvatar";

const validateRequire = value => !value;

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);

    let image = "/img/events/RoundIcons_FreeSet-" + (Math.floor(Math.random() * (60 + 1))) + ".svg";
    props.updateEvent({logo: image});
    this.state = {
      title: '',
      description: '',
      image: image,
      lat: props.lat,
      lng: props.lng
    };
  }

  formClear() {
    this.setState({
      title: '',
      description: ''
    });
  }

  validationsForm() {
   return this.state.title;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.validationsForm()) {
      return;
    }

this.props.create({
  name: this.state.title,
  logo: this.state.image,
  lat: this.state.lat,
  lng: this.state.lng,
  description: this.state.description
});

    this.formClear();
    this.props.exit();
  };

  handleInputChange = (event) => {
    this.props.updateEvent({logo: this.state.image});

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    // console.log("state:");
    // console.log(this.state);
    return (<div className="create-event-form">
      <img onClick={()=> this.props.exit()} className="create-event-form__exit" alt="Закрыть" src="/img/exit.svg"/>
      <h2>Создать событие</h2>
      <div className="create-event-form__info">
        <div className="create-event-form__info__img" onClick={()=>this.setState({image:"/img/events/RoundIcons_FreeSet-" + (Math.floor(Math.random() * (60 + 1))) + ".svg"})}>
          <UserAvatar className="create-event-form__info__img" ava={this.state.image}/>
        </div>

        <div className="create-event-form__info__cd">
          <div className="create-event-form__info__coo">
            <p>lat:</p>
            <Coordinates>{this.props.lat.toFixed(5)}</Coordinates>
            <p>lng:</p>
              <Coordinates>{this.props.lng.toFixed(5)}</Coordinates>
          </div>
          <DateForm/>
        </div>

      </div>

      <Form onSubmit={this.handleSubmit}>
        <FormField label='Название' name='title'>
          <FormText value={this.state.title} name='title' onChange={this.handleInputChange}/>
        </FormField>

        <FormField label='Описание' name='description'>
          <FormText value={this.state.description} name='description' onChange={this.handleInputChange}/>
        </FormField>


        <br/>
        <Button type='submit'>😄 Создать!</Button>
      </Form>
    </div>);
  }
  }

const mapDispatchToProps = dispatch => ({
  create: (data) => dispatch({
    type: 'CREATE_EVENT',
    data: data
  }),
  exit: () => dispatch({
    type: 'PREVENT_CREATING'
  }),
  updateEvent: (data) => dispatch({
    type: 'CONTINUE_CREATE_EVENT',
    data: data
  })
});

export default connect(undefined, mapDispatchToProps)(CreateEvent);