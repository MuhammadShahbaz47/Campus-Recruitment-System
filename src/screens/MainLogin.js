import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import * as firebase from 'firebase';
import {Container,Content,Header,Form,Input,Item,Button,Label,Icon} from 'native-base';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';

var firebaseConfig = {
    apiKey: "AIzaSyBbtRkw-p6o3xX9HJy17LE-tUEYgujP7CI",
    authDomain: "campus-recruitment-syste-644d5.firebaseapp.com",
    projectId: "campus-recruitment-syste-644d5",
    storageBucket: "campus-recruitment-syste-644d5.appspot.com",
    messagingSenderId: "145310933131",
    appId: "1:145310933131:web:12499b70c46b9ad4a5b48e",
    measurementId: "G-41HR5YD2M7"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }


export default class MainLogin extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            email:"",
            password:""
        })
    }

signUp = (email,password)=>{
    try{
        if(this.state.password.length<6){
            alert("Enter Atleast Six Characters");
            return;
        }
        // alert(email)
        firebase.auth().createUserWithEmailAndPassword(email.trim(),password);
    }
    catch(error){
        console.log(error.toString())
    }
}
login = (email,password)=>{

    const nav = this.props.navigation;
      
    firebase.auth().signInWithEmailAndPassword(email,password)
            .then( user => {
                console.log(user)
                 nav.replace('LoginOptions')
            }). catch( error => {
                 console.log(error)
                 alert("Login Failed!")
           })
    }

    render(){
        return(
        <Container style={styles.main}>
            <Container style={styles.Logo}>
            <Image style={{width:150,height:150}} source={require('../images/logo.png')}/>
            <Text style={styles.LogoText}>Campus Recruitment System</Text>
            </Container>
            <Container style={styles.container}>
                <Form>
                    <Item floatingLabel>
                    <Label>Email</Label>
                    <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(email)=>this.setState({email})}
                    />
                    </Item>

                    <Item floatingLabel>
                    <Label>Password</Label>
                    <Input
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(password)=>this.setState({password})}
                    />
                    </Item>
                    <Button
                    style={{marginTop:10}}
                    full
                    rounded
                    success
                    onPress={()=>this.login(this.state.email,this.state.password)}
                    // onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <Text style={{color:"white"}}>Login</Text>
                    </Button>
                    <Button
                    style={{marginTop:10}}
                    full
                    rounded
                    primary
                    onPress={()=>this.signUp(this.state.email,this.state.password)}
                    >
                        <Text style={{color:"white"}}>Sign Up</Text>
                    </Button>
                </Form>
            </Container>
        </Container>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex:1,
        backgroundColor: 'rgb(249, 250, 252)',
        paddingBottom:150,
      },
    Logo: {
        backgroundColor: 'rgb(249, 250, 252)',
        justifyContent:"flex-end",
        alignItems:"center"
      },
    LogoText: {
        color: 'green',
        fontSize: 20,
        paddingTop:5,
        fontWeight: 'bold'
      },
    container: {
        backgroundColor: 'rgb(249, 250, 252)',
        justifyContent:"flex-start",
        padding:10
      },
    })