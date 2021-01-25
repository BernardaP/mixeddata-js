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