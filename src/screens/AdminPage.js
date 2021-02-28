import React from 'react';
import {View, Text, Button} from 'react-native';

function AdminPage(props){
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>AdminPage</Text>
            <Button onPress={()=>props.navigation.navigate("StudentPage")} title="Student Login"></Button>
        </View>
    )
}

export default AdminPage;