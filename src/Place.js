var React = require('react')

var Place = React.createClass({
  render: function() {
    return (
      <li className="list-group-item">
        <h4 className="list-group-item-heading">{this.props.place.name}</h4>
        <p className="list-group-item-text">{this.props.place.address[0]}</p>
      </li>
    )
  }
})

module.exports = Place
