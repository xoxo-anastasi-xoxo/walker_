import React, {Component} from 'react';
import "./LogIn.css"
import SocialNetworkList from "../../components/LogIn/SocialNetworkList/SocialNetworkList"
import {connect} from 'react-redux'
import $ from "jquery";

class LogIn extends Component {
  handleLogin() {
    console.log("зашли");
    console.log(this);

    return (function () {
      console.log("даже функцию запустили");

      this.props.loginRequest();
      // dispatch({
      //   type: 'LOGIN_REQUEST'
      // });

      VK.Auth.login((r) => { // eslint-disable-line no-undef
        if (r.session) {
          console.log("то что искали" +
            "");

          console.log(r);
          let username = r.session.user.first_name;

          this.props.createAccount(username);
        } else {
          this.props.accountError()
        }
      }, 6); // запрос прав на доступ к photo

      console.log(this);
    }).bind(this)

  }

  componentDidMount() {
    // console.log("входим");
    // fetch('https://oauth.vk.com/authorize?client_id=6278299&display=page&redirect_uri=localhost:3000/&scope=friends&response_type=token&v=5.69&state=123456',
    //   {
    //     //credentials: "same-origin",
    //     mode: "same-origin"
    //   })
    //   .then(res => {
    //     console.log("глубже");
    //     console.log(res);
    //     if (res.status !== 200) {
    //       console.log("status");
    //       console.log(res.status);
    //
    //       return;
    //     }
    //     res.json()
    //       .then(function (res) {
    //         console.log("result");
    //         console.log(res);
    //       });
    //   })
  }

  render() {
    //return <a href={this.uri}>mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</a>;
    // return(<div>
    //   <div id="example-1">Click to update</div>
    //   </div>)
    // ;
    //  <script src="https://oauth.vk.com/authorize?client_id=6278299&display=popup&redirect_uri=localhost:3000/account/12345&scope=friends&response_type=token&v=5.69&state=123456"></script>
    // console.log( document.cookie );
    // const { name, error } = this.props;
    // let template;
    //
    // if (name) {
    //   template = <p>Привет, {name}!</p>
    // } else {
    //
    //   template = <button className='btn' onClick={this.handleLogin.call(this)}>Войти</button>
    // }
    //
    // return <div className='ib user'>
    //   {template}
    //   {error ? <p className='error'> {error}. <br /> Попробуйте еще раз.</p> : ''}
    // </div>

    return (
      <div className="login">
        <h1 className="login__header">Hi,&nbsp;I'm&nbsp;Walker!</h1>
        <p className="login__tagline">Let's&nbsp;go&nbsp;with&nbsp;me!</p>
        <SocialNetworkList/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.user.name,
  error: state.user.error
});

const mapDispatchToProps = dispatch => ({
  createAccount: (username) => dispatch({
    type: 'LOGIN_SUCCES',
    payload: username
  }),
  accountError: () => dispatch({
    type: 'LOGIN_FAIL',
    error: true,
    payload: new Error('Ошибка авторизации')
  }),
  loginRequest: () => dispatch({
    type: 'LOGIN_REQUEST'
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

