import React from 'react';
import {View, Text, Button} from 'react-native';

function Home(props){
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>Home</Text>
            <Button onPress={()=>props.navigation.navigate("MainLogin")} title="Main Login"></Button>
        </View>
    )
}

export default Home;