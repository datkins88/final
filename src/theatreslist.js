var React = require('react')

var theatres = require('../data/theatres.json')

var Place = require('./Place')

var TheatresList = React.createClass({
  render: function() {
    return (
      <div className="col-sm-12">
        <ul className="list-group">
          {theatres.map(function(place) {
            return <Place key={place.name} place={place}/>
          })}
        </ul>
      </div>
    )
  }
})

module.exports = TheatresList
