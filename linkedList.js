/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

 //Need to set tracking, count, and null for removing \ inserting

//var node = {};
var countLength = 0;
var node = {};
// addtrack has to be set when the first node is generated, null when declaring
var addTracking = null;
var head = null;
var tail = null;

function linkedListGenerator(){
  //change to null when not using fake node


  function _getHead () {
    console.log ( node.value );
    return head;
  }

  function _getTail () {
    var nodeNextTracker = node;
    for ( var i = 1; i < countLength; i++ ){
      if ( nodeNextTracker.next === null ) {
        console.log( 'The tail is item ' + i + ', with a value of' + nodeNextTracker.value );
    return tail;
      } else {
        nodeNextTracker = nodeNextTracker.next;
      }
    }
    nodeNextTracker = node;
  }

  function _add(value) {
    var valueToBeAdded =  _promptGet ();
    if ( head === null && tail === null ) {
      node = {
        value: valueToBeAdded,
        next: null
      };
      addTracking = node;
      tail = node.value;
      head = node.value;
      countLength++;
    } else if ( node.next === null ) {
      addTracking.next = {
        value: valueToBeAdded,
        next: null
      };
      addTracking = addTracking.next;
      tail = addTracking;
      countLength++;
    } else {
      addTracking.next = {
        value: valueToBeAdded,
        next: null
      };
      addTracking = addTracking.next;
      tail = addTracking;
      countLength++;
    }
    console.log( 'Added: ' + valueToBeAdded);
  }

// add an if to check if null, make i break for (like i < 2 so i would = 10 at null)

  function _getByValue (value) {
    var valueEntered;
    if ( value === null ){
      valueEntered =  _promptGet ();
    }
    var nodeNextTracker = node;
    for ( var i = 1; i < countLength; i++ ){
      if ( nodeNextTracker.value !== valueEntered ) {
        nodeNextTracker = nodeNextTracker.next;
      } else {
        console.log ( 'it is ' + nodeNextTracker.value + ' which is item ' + i + ' in the list ');
        return nodeNextTracker;
      }
    }
  }

  function _remove (number) {
    var valueEntered = _promptGet();
    var foundEntry = _getByValue(valueEntered);
    var valueBeforeObject = node;
    var valueAfterObject = node;
    if ( typeof parseInt( valueEntered ) === "number") {
      valueEntered = parseInt( valueEntered );
      var hopsCounter = valueEntered;
      hopsCounter--;
      hopsCounter--;
      if ( hopsCounter < 1 ) {
        valueBeforeObject = node;
      } else {
        for ( hopsCounter; hopsCounter > 0; hopsCounter--) {
          valueBeforeObject = valueBeforeObject.next;
        }
      }
        hopsCounter = valueEntered;
        for ( hopsCounter; hopsCounter > 0; hopsCounter-- ) {
          valueAfterObject = valueAfterObject.next;
        }
        valueBeforeObject.next = valueAfterObject;
        console.log ( 'removed ' + valueEntered );
        countLength--;
    }
    if ( valueEntered === _getByValue(valueEntered) ) {

    } else {
      console.log( valueEntered + ' not found' );
    }
  }

  function _insert (value, number) {

  }

  function _promptGet () {
    var valueToBeFound = prompt ('what is your value or hop count?');
    return valueToBeFound;
  }

  return {
    promptGet: _promptGet,
    getHead: _getHead,
    getTail: _getTail,
    add: _add,
    getByValue: _getByValue,
    remove: _remove,
    insert: _insert
  };
}
