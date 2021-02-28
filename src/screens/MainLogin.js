import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as firebase from 'firebase';
import {Container,Content,Header,Form,Input,Item,Button,Label} from 'native-base';
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
    try{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(function(user){
            console.log(user)
        }); 
    }
    catch(error){
        console.log(error.toString())
    }
    this.props.navigation.replace('Home')
}

    render(){
        return(
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
                    {/* <Button
                    style={{marginTop:10}}
                    full
                    rounded
                    primary
                    onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <Text style={{color:"white"}}>Navigate</Text>
                    </Button> */}
                </Form>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'rgb(249, 250, 252)',
        justifyContent:"center",
        padding:10
      },
    })