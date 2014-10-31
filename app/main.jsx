var React = require("react");
var faker = require("faker");
var _ = require("lodash");

var generatePerson = function (n) {
  return {
    name: faker.name.findName(),
    avatar: faker.image.avatar(),
    id: n
    }
};

var people = _.times(10, generatePerson)

var Card = React.createClass({
  render: function () {
    return (
      <div style={{border: '1px solid gray'}}>
        <img src={this.props.avatar}/>
        <h2>{this.props.name}</h2>
        <button onClick={this.props.removeCard.bind(null, this.props.id)}>Remove Person</button>
      </div>
    )
  }
})


var App = React.createClass({

  removeCard: function (id) {
    _.remove(people, function (person) {
      return person.id == id;
    })

    this.setState();
  },

  render: function () {
    var self = this;
    return (
      <div>
      {this.props.people.map(function (person) {
        return (
          <Card removeCard={self.removeCard} avatar={person.avatar} name={person.name} id={person.id}/>
        )
      })}
      </div>
    )
  }
})


React.render(<App people={people}/>, document.body);
