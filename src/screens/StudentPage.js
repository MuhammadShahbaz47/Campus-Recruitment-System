import React from 'react';
import {StyleSheet,Image,Alert} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

function StudentPage(props){
    const showAlert = () =>{
        Alert.alert(
           'Application Sent'
        )
     }
    return(
        <Container>
        <Container style={styles.padder}>
        <Content>
        <Card >
                <CardItem>                        
                    <Text style={{fontWeight:"bold",fontSize:20}}>
                        COMPANIES
                    </Text>
                </CardItem>
            </Card>
            <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../images/google.png')} />
                <Body>
                  <Text>Google</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('../images/googleHQ.jpg')} style={{height: 200, width: 280, flex: 1}}/>
                <Text>
                Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button onPress={showAlert} success>
                  <Text>APPLY</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
    </Container>
    </Container>
    )
}

const styles = StyleSheet.create({
    padder:{
        margin:20
    }
})

export default StudentPage;