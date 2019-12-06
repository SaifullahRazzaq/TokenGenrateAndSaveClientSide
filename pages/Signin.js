import React, { Component } from 'react';
import { StatusBar, AsyncStorage } from 'react-native';
import {
  Container,
  Logo,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText,
} from '../Component/style';
import { thisExpression } from '@babel/types';
export default class SignIn extends Component {
    constructor(props)
    {
        super(props);
        this.state={
          email:'',
          password:'',
          error:''

        }
        this.handleSignInPress=this.handleSignInPress.bind(this);
    }
  
    

    handleEmailChange = (email) => {
        this.setState({ email });
      };
      
      handlePasswordChange = (password) => {
        this.setState({ password });
      };
      
      handleCreateAccountPress = () => {
console.log('hello')
      };

handleSignInPress() {
       // if (this.state.email.length === 0 || this.state.password.length === 0) {
          this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false);
        //} else {
        //  try {
            fetch('http://192.168.100.23:3334/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ email:this.state.email,password:this.state.password})
          })
              .then((response) => response.json())
              .then((response) => {
             console.log("resonse==============>",response)
            AsyncStorage.setItem('token', response.token);
            AsyncStorage.getItem('token').then((value)=>{
              console.log("value=============>",value)
              })
              })
              .catch((err) => {
                  console.log(err)
              })
            //   console.log("tokensave==========>", response.token)
            // await AsyncStorage.setItem('token', response.token);
            // AsyncStorage.getItem('Token').then((value)=>{
            // })
   
          // } catch (_err) {
          //   alert('catch hora')
          //   this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!' });
          // }
      ///  }
      }

  //     handleSignInPress =  () => {
  //       console.log("email==========>",this.state.email,"password",this.state.password)
  //       fetch('http://192.168.100.23:3334/login', {
  //             method: 'POST',
  //             headers: {
  //                 'Content-Type': 'application/json'
  //             },
  //             body: JSON.stringify({ email:this.state.email,password:this.state.password})
  //         })
  //             .then((response) => response.json())
  //             .then((response) => {
  //            console.log(response)
  //           const value=await AsyncStorage.setItem('@AirBnbApp:token', response.data.token);
  // console.log("value============>",value)
  //           })
  //             .catch((err) => {
  //                 console.log(err)
  //             })

  //     }


  render() {
    return (
      <Container>
        <StatusBar hidden />
        <Logo source={require('../Asset/logo.jpg')} resizeMode="contain" />
        <Input
          placeholder="Endereço de e-mail"
          value={this.state.email}
          onChangeText={this.handleEmailChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Senha"
          value={this.state.password}
          onChangeText={this.handlePasswordChange}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        
        <Button onPress={this.handleSignInPress}>
          <ButtonText>Entrar</ButtonText>
        </Button>
        <SignUpLink onPress={this.handleCreateAccountPress}>
          <SignUpLinkText>Criar conta grátis</SignUpLinkText>
        </SignUpLink>
      </Container>
    );
  }
}