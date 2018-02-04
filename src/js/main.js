var config = {
  apiKey: "AIzaSyBXW4WYmiLs3OVuq2Wxo2Qbnxwb9Y-JUpo",
  authDomain: "flatline-ccd78.firebaseapp.com",
  databaseURL: "https://flatline-ccd78.firebaseio.com",
  projectId: "flatline-ccd78",
  storageBucket: "flatline-ccd78.appspot.com",
  messagingSenderId: "371885908627"
};
firebase.initializeApp(config);

TESTER = document.getElementById('tester');


function makeAjaxCall(url, methodType){
   var xhr = new XMLHttpRequest();
   xhr.open(methodType, url, true);
   xhr.send();
   xhr.onreadystatechange = function(){
     if (xhr.readyState === 4){
        if (xhr.status === 200){
           console.log("xhr done successfully");
           var resp = xhr.responseText;
           var respJson = JSON.parse(resp);
        } else {
          console.log("xhr failed");
        }
     } else {
        console.log("xhr processing going on");
     }
  }
  console.log("request sent succesfully");
}

var ref = firebase.database().ref('data');
var count = [];
var scores = [];

var layout = {
  title: 'Sales Growth',
};

var newTrace = {
  x: count,
  y: scores,
  type: 'scatter'
};




var layout = {
  xaxis: {
    title: 'Student Number',
    showgrid: false,
    zeroline: false
  },
  yaxis: {
    title: 'Mood Value',
    showline: false
  }
};


var data = [];
var newref = firebase.database().ref('properties/Alert');


newref.on('value', function(snapshot){
  console.log("child_changed");
});



ref.on('value', function(snapshot) {
   var data = snapshot.val();
   var keys = Object.keys(data);
   var dict = [];

   for (var i=0; i < keys.length; i++) {
      var score = data[keys[i]].score;
      count.push(i);
      scores.push(score);
   }
   Plotly.purge(TESTER);
   newTrace = {
     x: count,
     y: scores,
     type: 'bar'
   };
   dict = [newTrace];
   var Min = Math.min.apply(Math, scores);
   //console.log(typeof Min);
   //console.log(Min);
   var smax = document.getElementById('smax');
   smax.innerHTML = Min.toFixed(3);

   Plotly.newPlot(TESTER, dict, layout, {displayModeBar: false});
   //Plotly.addTraces(TESTER, {y: [2,1,2]});
   count = [];
   scores = [];


   //console.log(newTrace);
});
