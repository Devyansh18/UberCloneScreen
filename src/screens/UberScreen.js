import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, ScrollView } from 'react-native';
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';

//import ImageDetail from '../components/ImageDetail';

const UberScreen = () => {

    // const cars = [

    // ]
    return (
        <ScrollView vertical>
        <View  style = {{backgroundColor : 'white'}}>
            
            <Text style={styles.titleStyle}>Uber</Text>
            <View style={styles.searchStyle}>
                <FontAwesome name='search' style={styles.searchIconStyle} />
                <TextInput style={styles.inputStyle} placeholder='Where to?' />
            </View>
            <View style={styles.containerOne}>
                <Entypo name='location-pin' style={{ fontSize: 28, marginLeft: 20, marginVertical: 30 }} />
                <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 20 }}>
                    <Text style={{ fontSize: 22, fontWeight: '700' }}>Millenium City Centre...</Text>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(102, 102, 102)' }}>Gurgaon - Delhi Expy,Sector 29...</Text>
                </View>
                <MaterialIcons name="keyboard-arrow-right" style={styles.arrowStyle} />

            </View>
            <View style={styles.separator} />
            <View style={styles.containerTwo}>
                <Entypo name='location-pin' style={{ fontSize: 28, marginLeft: 20, marginVertical: 30 }} />
                <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 20 }}>
                    <Text style={{ fontSize: 22, fontWeight: '700' }}>Gurudwara Sri Bangla...</Text>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(102, 102, 102)' }}>Hanuman Road Area, Connau...</Text>
                </View>
                <MaterialIcons name="keyboard-arrow-right" style={styles.arrowStyle} />

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.suggestionsStyle}>Suggestions</Text>
                <Text style={{ marginTop: 31, marginLeft: 170, fontSize: 16, fontWeight: '700' }}> See All </Text>
            </View>

            <View style = {{flexDirection : 'row', justifyContent : 'space-between', marginHorizontal : 15, marginTop : 15}}>

                <Image
                    source={require('../../assets/package.jpg')}
                    style={{ height: 75, width: 75 , borderRadius : 12 }}
                />

                <Image
                    source={require('../../assets/car.jpg')}
                    style={{ height: 75, width: 75 , borderRadius : 12 }}

                />

                <Image
                    source={require('../../assets/uberBus.jpg')}
                    style={{ height: 75, width: 75 , borderRadius : 12 }}

                />

                <Image
                    source={require('../../assets/uberEV.png')}
                    style={{ height: 75, width: 75 , borderRadius : 12 }}

                />

            </View>
            <View style  = {{flexDirection : 'row', justifyContent : 'space-between', marginHorizontal : 20 , marginTop : 10 }}>
                <Text>Package </Text>
                <Text>Ride </Text>
                <Text>Shuttle </Text>
                <Text>Electric </Text>

            </View>
            <View style = {styles.offerStyle}>
                <View style = {{marginHorizontal : 10}}>
                <Text style = {{color : 'white' , fontSize : 20 , marginTop : 10}}>You have multiple</Text>
                <Text style = {{color : 'white' , fontSize : 20}}>promos</Text>
                <Text style = {{color: 'white' , fontSize : 15, marginTop : 10}}>Terms apply</Text> 
                </View>
            </View>
           <Text style = {{fontSize : 19, fontWeight: 'bold', marginTop : 15, marginLeft: 15 }}>Do more by the hour</Text>
           <ScrollView horizontal >

           
           <View style = {{flexDirection : 'row' , justifyContent : 'space-between' ,  marginTop : 15}}> 
            <Image 
            source = {require('../../assets/meetOn.jpg')}
            style = {{height : 150 , width : 250 , borderRadius : 12, marginHorizontal : 15,}}
            
            />
             <Image 
            source = {require('../../assets/lostitems.png')}
            style = {{height : 150 , width : 250 , borderRadius : 12 , marginHorizontal : 10,}}
            />
        
           </View>
           </ScrollView>

        </View>
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    offerStyle : {
        height : 140,
        width : 360,
        marginHorizontal : 15, 
        backgroundColor : '#046A38',
        borderRadius : 15,
        marginTop : 15
    }
    ,
    suggestionsStyle: {
        fontSize: 20,
        marginLeft: 15,
        fontWeight: '700',
        marginTop: 30

    },
    containerOne: {
        flexDirection: 'row',

    },
    containerTwo: {
        flexDirection: 'row',
    },
    titleStyle: {
        fontSize: 40,
        marginLeft: 15,
        fontWeight: 'bold',
        marginTop: 22
    },
    searchStyle: {
        height: 55,
        borderRadius: 30,
        marginHorizontal: 15,
        marginVertical: 7,
        backgroundColor: '#D3D3D3',
        flexDirection: 'row'
    },
    searchIconStyle: {
        fontSize: 28,
        alignSelf: 'center',
        marginHorizontal: 15,
        fontWeight: '500',

    },
    inputStyle: {
        fontSize: 22,
        marginLeft: 3,
        fontWeight: '700'


    },
    arrowStyle: {
        fontSize: 28,
        alignSelf: 'center',
        marginHorizontal: 5,
        color: 'rgb(102, 102, 102)'

    },
    separator: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc', // Color of the separator line
        marginVertical: 10, // Adjust the margin as needed
        marginLeft: 70
    },
}
);

export default UberScreen;
