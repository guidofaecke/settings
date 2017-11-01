/**
 *
 */

var MyObject = (function () {

    // Constructor
    function MyObject (foo) {
        this._foo = foo;
    }

    function privateFun (prefix) {
        return prefix + this._foo;
    }

    MyObject.prototype.publicFun = function () {
        return privateFun.call(this, '>>');
    }

    return MyObject;
})();

var myObject = new MyObject('bar');
myObject.
myObject.publicFun();
//myObject.pre

var MYLIB = function() {
    var aPrivateProperty = true;
    var aPrivateMethod = function() {
        // some code here...
    };
    return {
        aPublicMethod : function() {
            aPrivateMethod(); // okay
            // some code here...
        },
        aPublicProperty : true
    };
}();

MYLIB.aPrivateMethod() // not okay
MYLIB.aPublicMethod() // okay


function Employee(id, name) { //Constructor
    //Public member variables
    this.id = id;
    this.name = name;
    //Private member variables
    var fName;
    var lName;
    var that = this;
    //By convention, we create a private variable 'that'. This is used to
    //make the object available to the private methods.

    //Private function
    function setFName(pfname) {
        fName = pfname;
        alert('setFName called');
    }
    //Privileged function
    this.setLName = function (plName, pfname) {
        lName = plName;  //Has access to private variables
        setFName(pfname); //Has access to private function
        alert('setLName called ' + this.id); //Has access to member variables
    }
    //Another privileged member has access to both member variables and private variables
    //Note access of this.dataOfBirth created by public member setDateOfBirth
    this.toString = function () {
        return 'toString called ' + this.id + ' ' + this.name + ' ' + fName + ' ' + lName + ' ' + this.dataOfBirth;
    }
}

var employee = new Employee(5, 'Shyam'); //Create a new object and initialize it with constructor
employee.setLName('Bhaskar', 'Ram');  //Call privileged function
employee.setDateOfBirth('1/1/2000');  //Call public function
employee.id = 9;                     //Set up member value
//employee.setFName('Ram');  //can not call Private Privileged method
alert(employee.toString());  //See the changed object


var Car = function() {
}

Car.prototype = (function() {
    var hotWire = function() {
        // Private code *with* access to public properties through 'this'
        alert( this.drive() ); // Alerts 'Vroom!'
    }

    return {
        steal: function() {
            hotWire.call( this ); // Call a private method
        },
        drive: function() {
            return 'Vroom!';
        }
    };
})();

var getAwayVechile = new Car();

hotWire(); // Not allowed
getAwayVechile.hotWire(); // Not allowed
getAwayVechile.steal(); // Alerts 'Vroom!'


var Restaurant = (function () {
    var name,
        secretSkills = {
            pizza: function () { return new Pizza() },
            sushi: function () { return new Sushi() }
        }

    function Restaurant(_name) {
        name = _name
    }
    Restaurant.prototype.getFood = function (name) {
        return name in secretSkills ? secretSkills[name]() : null
    }
    return Restaurant
})()




//---


// Abstract class
function AbstractRestaurant(skills) {
    var name;
    function Restaurant(_name) {
        name = _name;
    }
    Restaurant.prototype.getFood = function (name) {
        return skills && name in skills ? skills[name]() : null;
    }
    return Restaurant;
}

// Concrete classes
SushiRestaurant = AbstractRestaurant({
    sushi: function() { return new Sushi(); }
})

PizzaRestaurant = AbstractRestaurant({
    pizza: function() { return new Pizza(); }
})

var r1 = new SushiRestaurant('Yo! Sushi'),
    r2 = new PizzaRestaurant('Dominos Pizza');

r1.getFood('sushi');
r2.getFood('pizza');

//-----------------

function Foo(x) {
    var y = 5;
    var bar = function() {
        return y * x;
    };

    this.public = function(z) {
        return bar() + x * z;
    };
}

//--------------

function MyObject(arg1, arg2) {
    //constructor code using constructor arguments...
    //create/access public variables as
    // this.var1 = foo;

    //private variables

    var v1;
    var v2;

    //private functions
    function privateOne() {
    }

    function privateTwon() {
    }

    //public functions

    MyObject.prototype.publicOne = function () {
    };

    MyObject.prototype.publicTwo = function () {
    };
  }

//---------

var Restaurant = (function() {

    var _id = 0;
    var privateVars = [];

    function Restaurant(name) {
        this.id = ++_id;
        this.name = name;
        privateVars[this.id] = {
            cooked: []
        };
    }

    Restaurant.prototype.cook = function (food) {
        privateVars[this.id].cooked.push(food);
    }

    return Restaurant;

   })();
