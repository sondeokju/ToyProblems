/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
    //fill me in!
    this.head = null;
    this.tail = null;
  };
  
  //write methods here!
  
  LinkedList.prototype.addToTail = function( 
  ){
    var newNode = this.makeNode(val);
    
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };
  
  LinkedList.prototype.removeHead = function(){
    if (!this.head) {
      return null
    } else {
      var removed = this.head.value;
      this.head = this.head.next;
      return removed;
    }
  };
  
  LinkedList.prototype.contains = function(val){
    if (!this.head) {
      return false;
    }
    
    var currentNode = this.head;
    
    while (currentNode) {
      if (currentNode.value === val || this.tail.value === val) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    
    return false;
  };
  
  LinkedList.prototype.makeNode = function(val){
    var node = {};
    
    node.value = val;
    node.next = null;
    
    return node;
  };
  
  
  // EXAMPLE USAGE:
  var list = new LinkedList();
  list.tail;         //yields 'null'
  list.addToTail(4);
  list.addToTail(5);
  list.head.value;   //yields '4';
  list.contains(5);  //yields 'true';
  list.contains(6);  //yields 'false';
  list.removeHead(); //yields '4'
  list.tail.value;   //yields '5';