var x = 5;
var y = 7;
var z = x+y;
console.log(z);

let A = "hello ";
let B = "world!";
let C = A + B;
console.log(C);

function sumPrint(x1, x2) {
  var x3 = x1+x2;
  console.log(x3);
}

sumPrint(x,y);
sumPrint(A,B);

if (C.length>z) {
  console.log(C);
} else if (z>C.length) {
  console.log(z);
} else {
  console.log("Good Job!");
}


var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findBanana(array) {
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (current == "Banana") {
      alert("FOUND THE BANANANANANANNANA!!!!!! Its in index: " + [i])
      // console.log("FOUND THE BANANA!!!!!!")
    }
  }
}

// findBanana(L1);
// findBanana(L2);

// L1.forEach(element => {
//   if(element=="Banana"){
//     alert("BANANA FOUND IN FIRST ARRAY!!!")
//   }
// });

// L2.forEach(element => {
//   if(element=="Banana"){
//     alert("BANANA FOUND IN SECOND ARRAY!!!")
//   }
// });

function greeting() { 
  // this INCLUDES the DEBUG, but doesn't use the INCLUDES method.
  //It doesn't check that it is index, but rather aborts the greeting if the returned var e is null
  //this should work fine with the correct debug method
  var date = new Date();
  var h = date.getHours();
  var e = document.getElementById("greeting");
  // if (e != null) {   //uncomment to use alternative debug
    if (h<=12) {
      e.innerHTML="Good Morning, I am Ryan Tian";
    }
    else if (h>12 && h<17) {
      e.innerHTML="Good Afternoon, I am Ryan Tian";
    }
    else if (h>=17 && h<20){
      e.innerHTML="Good Evening, I am Ryan Tian";
    }
    else if (h>=20 && h<=24) {
      e.innerHTML="Good Night, I am Ryan Tian";
    }
  // }   //uncomment to use alternative debug
}

// greeting();   //uncomment to use alternative debug

var L = window.location.href;
console.log(L);
if (L.includes("index.html")) { /* run only for index.html page */
   greeting();
}

// var e = document.getElementById("greeting");
// console.log(e);

function addYear(){
  var date = new Date();
  var year = date.getFullYear();
  var changeTarget = document.getElementById("copyYear");
  changeTarget.innerHTML+=year;
}

function showList() {
  document.getElementById("FavList").style.display = "block";
  document.getElementById("SeeMoreBTN").style.display = "none";
}

$("#readLess").click(function(){
  $("#longIntro").hide();
  $("#readLess").hide();
  $("#readMore").show();
});

 $("#readMore").click(function(){
  $("#longIntro").show();
  $("#readLess").show();
  $("#readMore").hide();
});

function validate() {
  var userName = document.getElementById("UserName");
  var userEmail = document.getElementById("UserEmail");
  var userText = document.getElementById("Usertext");
  var msg = document.getElementById("ValidateMsg");
  if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
      msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
  }
}



let map;
var locations = [
  ['CFA', 40.44154464748139, -79.94289106761512, 2],
  ['Morewood', 40.44541750825893, -79.9431652500169, 1],
];
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  // const position = { lat: 40.44154464748139, lng: -79.94289106761512};
  map = new Map(document.getElementById("map"), {
    center: { lat: 40.44154464748139, lng: -79.94289106761512},
    zoom: 15,
    mapId: "DEMO_MAP_ID",
  });
  // const marker = new AdvancedMarkerElement({
  //   map: map,
  //   position: { lat: 40.44154464748139, lng: -79.94289106761512},
  //   title: "CMU",
  // });
  for (i = 0; i < locations.length; i++) {  
    const marker = new AdvancedMarkerElement({
      map: map,
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      
      title: locations[i][0],
    });
  }
}

if (window.location.pathname.endsWith("/fun.html")) {
  initMap();
}

// var docid = document.getElementById("greeting");
// if (window.location.pathname.endsWith("/fun.html")) {
//   initMap();
// }

function activeNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}