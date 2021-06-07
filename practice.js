
var firebaseConfig = {
    apiKey: "AIzaSyCf6sOddpp1fIoYDCpQf_DQC2e30X0wWC4",
    authDomain: "kwitter-54276.firebaseapp.com",
    databaseURL: "https://kwitter-54276-default-rtdb.firebaseio.com",
    projectId: "kwitter-54276",
    storageBucket: "kwitter-54276.appspot.com",
    messagingSenderId: "1010891336878",
    appId: "1:1010891336878:web:690b31a69932f8876e113f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }