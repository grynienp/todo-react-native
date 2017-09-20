import React, { Component } from 'react';
import { View} from 'react-native';
import { connect } from 'react-redux';
import SearchBox from './SearchBox';
import SortableListView from 'react-native-sortable-listview';

import ListViewItem from './ListViewItem';
import { newArray } from './actions';


class ListView extends Component {
  constructor(props) {
    super(props);
    this._onCompletedChange = this._onCompletedChange.bind(this);
    this._onItemDeleted = this._onItemDeleted.bind(this);
    this._onItemAdded = this._onItemAdded.bind(this);
    this._onFilterList = this._onFilterList.bind(this);
    this.state = {
      filtered: null
    }
  }


  _onCompletedChange(dataItem, index) {
    const dataList = [...this.props.dataList];
    this.props.updateDataList(dataList); 
  }

  _onItemDeleted(dataItem, index) {
    const dataList = [...this.props.dataList];
    dataList[index] = dataItem;
    this.props.updateDataList(dataList.filter(e => !e.deleted)); 
  }

  _onItemAdded(dataItem) {
    const dataList =  this.props.dataList;
    dataList.push(dataItem);
    this.setState({filtered: null});
    this.props.updateDataList(dataList);
  }

  _onFilterList(dataList) {
    this.setState({filtered: dataList});
  }

  render() {
    let listView = (<View></View>);
    const dataListToDisplay = this.state.filtered !== null ? this.state.filtered : this.props.dataList;
    if (dataListToDisplay.length) {
      listView = (
        <SortableListView
          ref='listView'
          style={{flex: 1}}
          data={dataListToDisplay}
          renderRow={(dataItem, section, index) => <ListViewItem data={dataItem} dataIndex={index} onCompletedChange={this._onCompletedChange} onItemDeleted={this._onItemDeleted}/>}
        />
      );
    }

    return (
        <View style={{flex: 1, marginLeft: 10, marginRight: 10}}>
          <SearchBox
            data={this.props.dataList}
            onAddNewItem={this._onItemAdded}
            onFilterList={this._onFilterList}
            />
          {listView}
        </View>
    )
  }
};

function select(store) {
  return {
    dataList: store.todlist.todoitems,
  };
}

function actions(dispatch) {
  return {
    updateDataList: (todoitems) => dispatch(newArray(todoitems)),
  };
}

export default connect(select, actions)(ListView);
