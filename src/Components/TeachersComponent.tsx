import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

function TeachersComponent() {
  const firebaseConfig = {
    // apiKey: "AIzaSyDVtfLgxdclgPe1GiPlN3B7_XCmU0rU9PA",
    // authDomain: "learnlingo-3372a.firebaseapp.com",
    databaseURL: "https://learnlingo-3372a-default-rtdb.firebaseio.com",
    // projectId: "learnlingo-3372a",
    // storageBucket: "learnlingo-3372a.firebasestorage.app",
    // messagingSenderId: "785126514238",
    // appId: "1:785126514238:web:104caf7fe6300187f23b6f",
    // measurementId: "G-FZMDV7WVDW",
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);
  const firstTeacher = ref(database, "/0");
  onValue(firstTeacher, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });

  return <div>TeachersComponent</div>;
}

export default TeachersComponent;
