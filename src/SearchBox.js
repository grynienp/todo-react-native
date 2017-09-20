import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { View} from 'react-native';
import TodoModel from './TodoModel';
import { Divider, Button } from 'react-native-elements';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onAddPress = this.onAddPress.bind(this);
  }

  componentWillMount() {
    this.setState({
      newValue: ''
    });
  }

  onChange(event){
    var title = event.nativeEvent.text;
    var dataList = this.props.data.filter((item) => item.title.match(new RegExp('.*' + title +'.*', 'gi')));

    this.setState({
      newValue: title
    });
    this.props.onFilterList(dataList);
  }

  onAddPress(event){
    this.setState({
      newValue: ''
    });
    this.props.onAddNewItem(new TodoModel(this.state.newValue));
  }

  render() {
    return (
      <View style={{ marginBottom: 16}}>
        <TextInput style={{ height: 36, padding: 8, marginBottom: 16, marginTop: 16, fontSize: 16, borderWidth: 1, borderColor: '#eee', borderRadius: 8, backgroundColor: '#fff' }}
          placeholder='Add a todo or Search'
          underlineColorAndroid='transparent'
          blurOnSubmit={false}
          value={this.state.newValue}
          onChange={this.onChange}>
        </TextInput>
        <Button
            title="Add"
            icon={{name: 'add'}}
            backgroundColor='#0bb710'
            onPress={this.onAddPress}
          />
      </View>
    );
  }
}

module.exports = SearchBox;
