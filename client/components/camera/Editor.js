import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
  View
} from 'react-native';

export default function Editor(props) {
  let { height, width } = Dimensions.get('window');
  return (
      <ScrollView contentContainerStyle={{flex: 1, justifyContent: "flex-start", alignItems: "center"}}>
        <Image 
          style={{width: width * 2 / 3, height: width * 2 / 3 }} 
          resizeMode="contain"
          source={props.uri}/>
        <TextInput
          style={{width, height: width / 4, color: 'black', borderColor: 'gray', marginLeft: height / 30, marginTop: height / 60}}
          onChangeText={(text) => props.onChange(text)}
          value={props.text}
          placeholder={'Enter your caption!'}
          multiline={true}
        />
        <View style={{borderBottomColor: 'gray', borderBottomWidth: 1, margin: height / 60}}/>
        {props.canUpdate ? <Button title="UPDATE" onPress={props.handleSubmit}/>
        : <Button 
          title="SUBMIT"
          onPress={props.handleSubmit}/>}
        {props.canUpdate ? <Button title="DELETE" onPress={props.handleDelete}/> : null}
        {props.canUpdate ? <Button title="CANCEL" onPress={props.handleCancel}/> : null}
      </ScrollView>
  )
}
