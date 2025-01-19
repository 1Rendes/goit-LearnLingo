import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

function TeachersComponent() {
  const firebaseConfig = {
    databaseURL: "https://learnlingo-3372a-default-rtdb.firebaseio.com",
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
