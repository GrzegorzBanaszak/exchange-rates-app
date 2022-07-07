import { useState } from "react";
import "./getUser.styles.scss";
import { addUser } from "../../features/user/userSlice";
import { useAppDispatch } from "../../app/hooks";
const GetUser = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useAppDispatch();

  const handleAddingUser = () => {
    if (userName) {
      dispatch(addUser(userName));
      setUserName("");
    }
  };

  return (
    <section className="user">
      <div className="user__box">
        <h3>Podaj nazwę użytkownika</h3>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Nazwa użytkownika..."
        />
        <button onClick={handleAddingUser}>Zatwierdź</button>
      </div>
    </section>
  );
};

export default GetUser;
