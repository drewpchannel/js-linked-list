var countLength = 0;
var node = {};
var addTracking = null;
var head = null;
var tail = null;

function linkedListGenerator(){
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
    console.log(tail.value);
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
    var valueEntered = value;
    if ( value === "" ) {
      valueEntered =  _promptGet ();
    }
    var nodeNextTracker = node;
    for ( var i = 1; i < countLength; i++ ) {
      if ( nodeNextTracker.value !== valueEntered ) {
        nodeNextTracker = nodeNextTracker.next;
        if ( nodeNextTracker.next === null ) {
          return nodeNextTracker;
        }
      } else {
        console.log ( 'it is ' + nodeNextTracker.value + ' which is item ' + i + ' in the list ');
        return nodeNextTracker;
      }
    }
  }

  function _remove (number) {
    var valueEntered = _promptGet ();
    var valueBeforeObject = node;
    var valueAfterObject = node;
    if ( typeof parseInt( valueEntered ) === "number" ) {
      valueEntered = parseInt( valueEntered );
      var hopsCounter = valueEntered - 2;
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
    if ( isNaN(valueEntered) ) {

    } else {
      console.log( valueEntered + ' not found' );
    }
  }
//if next = null need to ignore next
  function _insert (value, number) {
    var valueEntered = prompt ( 'Enter the value you would like save' );
    var valueToAppend = prompt ( 'Enter the value you would like to find and append' );
    var objectToAppend = _getByValue ( valueToAppend );
    var nextObjectInLine = objectToAppend;
    var newToInsert = {
      value: valueEntered,
      next: nextObjectInLine
    };
    if ( nextObjectInLine.next === undefined ) {
      console.log('Add functions can be used to add items to the end of this list.');
    }
    nextObjectInLine = nextObjectInLine.next;
    objectToAppend.next = newToInsert;
    countLength++;
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
