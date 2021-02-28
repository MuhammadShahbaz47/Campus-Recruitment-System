import React from 'react';
import {View, Text, Button} from 'react-native';

function MainLogin(props){
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>Main Login</Text>
            <Button onPress={()=>props.navigation.navigate("Home")} title="Home"></Button>
        </View>
    )
}

export default MainLogin;