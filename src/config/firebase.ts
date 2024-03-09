import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { config } from "./config";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp(config.firebase);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
