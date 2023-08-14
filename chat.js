// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBP4T1DJM9wur7tKbt--N3Th3GMBWj6rrM",
    authDomain: "knockofftwitter-d1ded.firebaseapp.com",
    projectId: "knockofftwitter-d1ded",
    storageBucket: "knockofftwitter-d1ded.appspot.com",
    messagingSenderId: "280379635839",
    appId: "1:280379635839:web:c85a065890e144c734a74a",
    measurementId: "G-DTZQQXFQR7"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



