import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,TextInput,StyleSheet} from 'react-native'
import { addArticle,deleteArticle } from './redux/actions';
import { connect } from 'react-redux';
import { Button } from 'react-native';


class App extends Component {
  state={
    title:"",
    id:100
  }
  
  func_addArticle=()=>{
    this.props.dispatchAddArticle({
      title:this.state.title,
      id:this.state.id
    })
  }

  func_deleteArticle=(id)=>{
    this.props.dispatchDeleteArticle(id)
  }
  
  func_writeConsole=()=>{
    //console.log(this);
    console.log(this.props);
  }
  func_setTitle=(value)=>{
    debugger
    this.setState({title:value});
  }

  render() {

    return (
      <View>
        <Text> Main Page </Text>
        <TextInput 
          style={styles.input}
          onChangeText={(value)=>this.func_setTitle(value)}
          placeholder="Article Title"
          />
        <Button title="AddArticle" onPress={()=>this.func_addArticle()}>
        </Button>
        <Button title="DeleteArticle" onPress={()=>this.func_deleteArticle(100)}>
        </Button>
        <Button title="writeConsole" onPress={()=>this.func_writeConsole()}>
        </Button>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


function mapStateToProps(state,props) {
  return {
    articles:state.articles.articles
  }
}; 


function mapDispatchToProps (dispatch)  {
  return {
    dispatchAddArticle:(article)=>dispatch(addArticle(article)),
    dispatchDeleteArticle:(id)=>dispatch(deleteArticle(id))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);