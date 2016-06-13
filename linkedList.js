/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

//var node = {};
var makeDynamic = 5;
var node = {
  value: 'donkey',
  next: {
    value: 'helicopter',
    next: {
      value: 'fireman',
      next: {
        value: 'telephone',
        next: null
      }
    }
  }
};
// addtrack has to be set when the first node is generated, null when declaring
var addTracking = node.next.next.next;

function linkedListGenerator(){
  //change to null when not using fake node
var head = node.value;
var tail = node.next.next.next;


  function _getHead () {
    console.log ( node.value );
    return head;
  }

  function _getTail () {
    var nodeNextTracker = node;
    for ( var i = 1; i < makeDynamic; i++ ){
      if ( nodeNextTracker.next === null ) {
        alert( 'The tail is item ' + i + ', with a value of' + nodeNextTracker.value );
    return tail;
      } else {
        nodeNextTracker = nodeNextTracker.next;
      }
    }
  }

  function _add(value) {
    var valueToBeAdded =  _promptGet ();
    if ( head === null && tail === null ) {
      node = {
        value: value,
        next: null
      };
      tail = node.value;
      head = node.value;
    }
    if ( node.tail !== null ) {
      addTracking.next = {
        value: valueToBeAdded,
        next: null
      };
      addTracking = addTracking.next;
      makeDynamic++;
    }
  }

// add an if to check if null, make i break for (like i < 2 so i would = 10 at null)

  function _getByValue (value) {
    var valueEntered =  _promptGet ();
    var nodeNextTracker = node;
    for ( var i = 1; i < makeDynamic; i++ ){
      if ( nodeNextTracker.value !== valueEntered ) {
        nodeNextTracker = nodeNextTracker.next;
      } else {
        console.log ( 'it is ' + nodeNextTracker.value + ' which is item ' + i + ' in the list ');
        return nodeNextTracker;
      }
    }
  }

  function _remove (number) {

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
