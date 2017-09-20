import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

class ListViewItem extends Component {
    constructor(props) {
        super(props);
        this._onCheckBoxPressed = this._onCheckBoxPressed.bind(this);
        this._onDeleteButtonPressed = this._onDeleteButtonPressed.bind(this);
        this.state = {
            data: this.props.data
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            data: props.data
        })
    }

    _onDeleteButtonPressed = (id) => {
        var data = this.state.data;
        data.deleted = true;

        this.props.onItemDeleted(data, this.props.dataIndex);
    };

    _onCheckBoxPressed() {
        var data = this.state.data;
        data.completed = !data.completed;
        this.setState({
            data: data
        });

        this.props.onCompletedChange(data, this.props.dataIndex);
    }

    render() {
        let data = this.state.data;
        let color = data.completed ? '#C5C8C9' : '#000';
        let textDecorationLine = data.completed ? 'line-through' : 'none';
        return (

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                    checked={data.completed}
                    onPress={this._onCheckBoxPressed}
                    title={data.title}
                    onLongPress={this._onDeleteButtonPressed}
                    textStyle={{textDecorationLine: textDecorationLine, color: color}}
                />
            </View>

        )
    }
}

module.exports = ListViewItem;
