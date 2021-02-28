import React from 'react';
import {View, Text,StyleSheet,Image,Button,TouchableOpacity} from 'react-native';
import {Container, Content} from 'native-base';

function loginOptions(props){
    return(
    <Container style={styles.main}>

        <Container style={styles.Logo}>
            <Image style={{width:150,height:150}} source={require('../images/identity.png')}/>
            <Text style={styles.LogoText}>You Are?</Text>
        </Container>

        <Container style={styles.container}>
            <TouchableOpacity onPress={()=>props.navigation.navigate("AdminPage")} style={styles.SolidBtns}>
                <Text style={styles.ButtonsText}>ADMIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate("CompanyPage")} style={styles.SolidBtns}>
                <Text style={styles.ButtonsText}>COMPANY</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate("StudentPage")} style={styles.SolidBtns}>
                <Text style={styles.ButtonsText}>STUDENT</Text>
            </TouchableOpacity>
        </Container>

    </Container>
    )
}

const styles = StyleSheet.create({
    main: {
        flex:1,
        paddingBottom:"35%",
      },
    Logo: {
        justifyContent:"flex-end",
        alignItems:"center"
      },
    LogoText: {
        color: 'green',
        fontSize: 30,
        paddingTop:10,
        fontWeight: 'bold'
      },
    container: {
        justifyContent:"flex-start",
        padding:10
      },
    ButtonsText: {
        color:"white",
        fontWeight:"bold",
        fontSize:18
    },
    SolidBtns: {
        marginTop:20,
        alignItems: "center",
        backgroundColor: "green",
        padding: 20
    },
    })

export default loginOptions;