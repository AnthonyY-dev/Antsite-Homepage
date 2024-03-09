import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { config } from "./config";

const app = initializeApp(config.firebase);
const analytics = getAnalytics(app);
