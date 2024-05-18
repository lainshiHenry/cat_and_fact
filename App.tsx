import React, {useState, useEffect, Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Button, Alert } from 'react-native';
import { appStyles } from './styles/app_styles';
import { ImageController } from './controller/getNetworkImage';
import { TextController } from './controller/getNetworkText';


export default function App() {
  const [mainImg, setMainImg] = useState('./assets/icon.png');
  const [data, setData] = useState([]);
  const [mainText, setMainText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const imgController = new ImageController();
  const txtController = new TextController();

  function getInfo(){
    Alert.alert('you pressed a new button');

    setIsLoading(true);
  }

  function init(){
    setMainImg(imgController.getImageURL());
    setMainText(txtController.getTextURL());
  }

  useEffect(() => {
    init();
  }, [])

  useEffect(() => {
    fetch(txtController.apiURL)
      .then((response) => response.json())
      .then((json) => {
        setMainText(json.data[0]);
      })

    fetch(imgController.apiURL)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json[0].url);
        setMainImg(json[0].url);
      })

    setIsLoading(false);
  }, [isLoading === true])

  return (
    <View style={appStyles.container}>
      <Image 
        style={{width: 250, height: 250}} 
        source={{uri: mainImg}}
      ></Image>
      <Text style={appStyles.boldText}>{mainText !== '' ? mainText : 'No Text to show'}</Text>
      <Button 
        title='Get Another Fact'
        onPress={() => {getInfo()}}
      ></Button>
    </View>
  );
}


