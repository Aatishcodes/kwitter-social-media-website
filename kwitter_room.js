
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCH7xZ_VNg5P8qJaxT_CkYnic_itsNhQl0",
      authDomain: "kwitter-18cf5.firebaseapp.com",
      databaseURL: "https://kwitter-18cf5-default-rtdb.firebaseio.com",
      projectId: "kwitter-18cf5",
      storageBucket: "kwitter-18cf5.appspot.com",
      messagingSenderId: "782613276548",
      appId: "1:782613276548:web:7d28d62591aa623988dfd1"
};

firebase.initializeApp(firebaseConfig);

document.getElementById("user_name").innerHTML = "Hello " + localStorage.getItem("user_name") + "!"

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name " + Room_names)
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoom(this.id)'> #" + Room_names + "</div> <hr>"
                  document.getElementById("output").innerHTML += row
                  //End code
            });
      });
}

function redirectToRoom(name) {
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"
}



getData();

function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location.replace("index.html")
}


function addroom() {
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose: "Add your room name!"
      });
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html"
}
