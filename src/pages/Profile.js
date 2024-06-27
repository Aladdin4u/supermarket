import { useContext, useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import TransactionTable from "../components/Table";

export default function Profile() {
  const { user, dispatch } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);

  const logout = async () => {
    try {
      dispatch({ type: "LOGIN_OUT" });
      await signOut(auth);
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const q = query(
          collection(db, "transaction"),
          where("user_id", "==", user.id)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const datas = doc.data();
          const newData = {
            id: `${doc.id}-${Math.random() * 8}`,
            desc: "product",
            receipt: datas.receipt_url,
            date: "2022-04-03T09:24:40.199Z",
          };
          setTransactions((prevTranasaction) => [...prevTranasaction, newData]);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getTransactions();
  }, []);

  return (
    <div>
      <h1>Welcome {user.email}</h1>
      <h2>Transaction history</h2>
      {transactions.length && <TransactionTable rows={transactions} />}
      <button onClick={logout}>Logout</button>
    </div>
  );
}
