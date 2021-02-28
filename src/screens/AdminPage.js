import React from 'react';
import {StyleSheet,Alert} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

function CompanyPage(props){
    const showAlert = () =>{
        Alert.alert(
           'Deleted'
        )
     }
    return(
        <Container>
        <Container style={styles.padder}>
        <Content>
            <Card >
                <CardItem>                        
                    <Text style={{fontWeight:"bold",fontSize:20}}>
                        STUDENTS DETAILS
                    </Text>
                </CardItem>
            </Card>
            <Card >
                <CardItem>                        
                    <Text>
                    First Name: John{"\n"}
                    Last Name: Den{"\n"}
                    Batch: Fall 2019{"\n"}
                    CGPA: 3.5{"\n"}
                    Degree: Graduate
                    </Text>
                </CardItem>
            <CardItem>
                <Left>
                    <Button onPress={showAlert} danger>
                    <Text>Delete</Text>
                    </Button>
                </Left>
                <Right>
                    <Text>Updated 11h ago</Text>
                </Right>
            </CardItem>
            </Card>
            <Card >
                <CardItem>                        
                    <Text>
                    First Name: William{"\n"}
                    Last Name: Stephans{"\n"}
                    Batch: spring 2019{"\n"}
                    CGPA: 3.7{"\n"}
                    Degree: Graduate
                    </Text>
                </CardItem>
            <CardItem>
                <Left>
                    <Button onPress={showAlert} danger>
                    <Text>Delete</Text>
                    </Button>
                </Left>
                <Right>
                    <Text>Updated 11h ago</Text>
                </Right>
            </CardItem>
            </Card>
            <Card >
                <CardItem>                        
                    <Text>
                    First Name: Michael{"\n"}
                    Last Name: Smith{"\n"}
                    Batch: Fall 2017{"\n"}
                    CGPA: 2.8{"\n"}
                    Degree: Graduate
                    </Text>
                </CardItem>
            <CardItem>
                <Left>
                    <Button onPress={showAlert} danger>
                    <Text>Delete</Text>
                    </Button>
                </Left>
                <Right>
                    <Text>Updated 11h ago</Text>
                </Right>
            </CardItem>
            </Card>
            <Card >
                <CardItem>                        
                    <Text>
                    First Name: Brian{"\n"}
                    Last Name: Goldsmith{"\n"}
                    Batch: Fall 2020{"\n"}
                    CGPA: 3.8{"\n"}
                    Degree: Masters
                    </Text>
                </CardItem>
            <CardItem>
                <Left>
                    <Button onPress={showAlert} danger>
                    <Text>Delete</Text>
                    </Button>
                </Left>
                <Right>
                    <Text>Updated 11h ago</Text>
                </Right>
            </CardItem>
            </Card>
            <Card >
                <CardItem>                        
                    <Text>
                    First Name: Jan{"\n"}
                    Last Name: Beasly{"\n"}
                    Batch: Fall 2019{"\n"}
                    CGPA: 3.5{"\n"}
                    Degree: Graduate
                    </Text>
                </CardItem>
            <CardItem>
                <Left>
                    <Button onPress={showAlert} danger>
                    <Text>Delete</Text>
                    </Button>
                </Left>
                <Right>
                    <Text>Updated 11h ago</Text>
                </Right>
            </CardItem>
            </Card>
            <Card >
                <CardItem>                        
                    <Text>
                    First Name: Joe{"\n"}
                    Last Name: Tribbiani{"\n"}
                    Batch: Fall 2018{"\n"}
                    CGPA: 2{"\n"}
                    Degree: Graduate
                    </Text>
                </CardItem>
            <CardItem>
                <Left>
                    <Button onPress={showAlert} danger>
                    <Text>Delete</Text>
                    </Button>
                </Left>
                <Right>
                    <Text>Updated 11h ago</Text>
                </Right>
            </CardItem>
            </Card>
            <Card >
                <CardItem>                        
                    <Text>
                    First Name: Henry{"\n"}
                    Last Name: Brown{"\n"}
                    Batch: Fall 2019{"\n"}
                    CGPA: 2.78{"\n"}
                    Degree: Graduate
                    </Text>
                </CardItem>
            <CardItem>
                <Left>
                    <Button onPress={showAlert} danger>
                    <Text>Delete</Text>
                    </Button>
                </Left>
                <Right>
                    <Text>Updated 11h ago</Text>
                </Right>
            </CardItem>
            </Card>
            <Card >
                <CardItem>                        
                    <Text>
                    First Name: Ben{"\n"}
                    Last Name: Clarence{"\n"}
                    Batch: Spring 2018{"\n"}
                    CGPA: 3.9{"\n"}
                    Degree: Graduate
                    </Text>
                </CardItem>
            <CardItem>
                <Left>
                    <Button onPress={showAlert} danger>
                    <Text>Delete</Text>
                    </Button>
                </Left>
                <Right>
                    <Text>Updated 11h ago</Text>
                </Right>
            </CardItem>
            </Card>
            <Card >
                <CardItem>                        
                    <Text>
                    First Name: Morgan{"\n"}
                    Last Name: King{"\n"}
                    Batch: Fall 2020{"\n"}
                    CGPA: 2.13{"\n"}
                    Degree: Graduate
                    </Text>
                </CardItem>
            <CardItem>
                <Left>
                    <Button onPress = {showAlert} danger>
                    <Text>Delete</Text>
                    </Button>
                </Left>
                <Right>
                    <Text>Updated 11h ago</Text>
                </Right>
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

export default CompanyPage;