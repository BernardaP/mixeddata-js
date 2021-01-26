console.log("Sanity Check!");
console.log("---------------------------");
console.log("-------------Q1------------");
console.log("---------------------------");

// Data types
// write which data types you would use to represent the data, 
// and then give a small example of the data structure:

// A light switch that can be either on or off.
// Data type: bolean
let lightSwitch = {
    isOn: true,
}
console.log(lightSwitch);

// A user's email address.
// Data type: string
let user = {
    email: "anemail.com",
}

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// Data type: object
let spaceship = {
    hull: "blue",
    laserTypes: "laser blasters",
    isTractorBeam: true,
    propulsionSystem: "warp drive"
}

// A list of student names from our class.
//Data type: Array
let studentsNames = ["Jim", "Carolina", "Eddy", "Robert", "Ivy"]

// A list of student names from our class, each with a location.
//Data type: array of objects
let students = [
   {
    name: "Jim",
    location: "California",
    favFood: "Hamburguers"
   },
   {
    name: "Carolina",
    location: "Chicago", 
    favFood: "Hamburguers"
   }
    //....    
]

// A list of student names from our class, each with a location and each with a list of favorite tv shows.
let studentsList = [
    {
     name: "Jim",
     location: "California",
     favFood: "Hamburguers",
     favShows: ["Amazing race", "Ozark", "60 minutes"]
    },
    {
     name: "Carolina",
     location: "Chicago", 
     favFood: "Hamburguers",
     favShows: ["The Simpsoms", "Parks & Recs", "Saturday Night Live"]
    }
     //....    
]

console.log("---------------------------");
console.log("-------------Q2------------");
console.log("---------------------------");

//1. Make an array that holds all of the colors of the rainbow.
let rainbowColors = [ 
    "Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet" 
] 

// 2. Write code that will access "blue" from the rainbow array.
console.log(rainbowColors[4]);

// 3. Make an object that is called your name and holds the information about your favorite food, 
// a hobby, the name of the town that you live in currently, and your favorite datatype.
 let bernarda = {
    favFood: "Stuff peppers",
    hobby: "reading",
    location: "Aurora",
    favDataType: "Strings"
}

// 4. Write code that will access your hobby from the object that you just created.
console.log(bernarda.hobby);

console.log("---------------------------");
console.log("-------------Q3------------");
console.log("---------------------------");

// Cazy Object
const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
      },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favourtieHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  }

// Use crazyObject to log the following:

//  "omg my mouth is burning" 
console.log(crazyObject.taco[1].salsa[5]);

// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);

// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);

// The object that contains the name funkhauser
console.log(crazyObject.larry.characters[1].name);