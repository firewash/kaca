var React = require('react');
var ReactDOM = require('react-dom');
var data = {};

class Grid extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data:{}
    }
  }

  render() {
    var data = this.state.data;
    var keys = Object.keys(data);
    console.log('keys:', keys);
    if(keys.length === 0){
      return <p>nothing</p>
    }else{
      var lines = keys.map(function(key,index){
        return <GridLine key={key} data={data[key]}></GridLine>
      });
      return <table className="table table-striped">
        <tbody>
        {lines}
        </tbody>
      </table>;
    }

  }
}

function rnd256(){
  return parseInt(Math.random()*255);
}
class GridLine extends React.Component {
  render() {
    var data = this.props.data;
    var style = {
      background : 'rgba('+rnd256()+','+rnd256()+','+rnd256()+','+rnd256()+')'
    }
    return <tr style={style} key={data.taskinfo._id} >
      <td>{data.taskinfo._id}</td>
      <td>{data.expired+''}</td>
      <td>{data.taskinfo.url}</td>
    </tr>;
  }
}

var gridIns;
function refresh(){
  fetch('/api/task/queue').then(function(response){
    return response.json();
  }).then(function(json){
    data = json.data;
    console.log('fetch:', data);
    console.log('gridIns.setState:',gridIns);
    gridIns.setState({
      data
    });
  });
}

window.onload = function(){
  gridIns = ReactDOM.render(
    <Grid />,
    document.getElementById('app')
  );
  setInterval(function(){
    refresh();
  },1000)
}