import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { doc, onSnapshot } from "firebase/firestore";

export function useBalance() {
  const [balance, setBalance] = useState(5000);
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users", "userId"), (docSnap) => {
      if (docSnap.exists()) {
        setBalance(docSnap.data().balance || 5000);
        setCurrency(docSnap.data().currency || "USD");
      }
    });
    return unsub;
  }, []);

  return { balance, currency, setCurrency };
}