"use strict";

var React = require('react');
var TrainsGridRow = require('./TrainsGridRow');


var CallingPointsGrid = React.createClass({

  render: function() {
    console.log("rendering callingPointsGrid");
    var externalScope = this;
    return (
      <table className="callingPoints">
      {externalScope.props.callingPoints.map( function(callingPoint) {
          return (<TrainsGridRow key={callingPoint.name} train={callingPoint} isCallingPoint={true}/>);
        })
      }
      </table>
    );
  }

});

module.exports = CallingPointsGrid; 
