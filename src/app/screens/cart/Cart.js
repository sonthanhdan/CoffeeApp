import React, { Component } from 'react';
import { 
    View, Text,TouchableOpacity,StyleSheet

} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import MapView from 'react-native-maps';
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });

export default class Cart extends Component {
    static navigationOptions = ({navigation})=>({
        title: 'THE COFFEE APP',
        headerTitleStyle : {
            color: '#FFF'
        },
        headerStyle: {
            backgroundColor: '#FF00B1'
        },
       
        tabBarIcon:  <Icon name='shopping-basket' size={30} color='#FF03B1'/>,
        headerLeft:  <TouchableOpacity
                onPress={()=>{navigation.navigate('DrawerOpen')}}
                    >
                    < Icon name='menu' size={30} color='#FFF' style={{ marginLeft: 10 }}/>
                    </TouchableOpacity>
                   
                
    });
    render(){
       
        return(
            <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          style={styles.map}
          />
        );
    }
}