import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAENsnEK89lcpj-j-ZWvkbILfyjsPG6kRc",
    authDomain: "cotillonmundo-6d4bf.firebaseapp.com",
    projectId: "cotillonmundo-6d4bf",
    storageBucket: "cotillonmundo-6d4bf.appspot.com",
    messagingSenderId: "776917138415",
    appId: "1:776917138415:web:5d1f1f22192759161e141a",
    measurementId: "G-90D6BPV03Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export interface Article {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    quantity: number;
  }
   

export const getArticlesData = async () => {
    const querySnapshot = await getDocs(collection(db, "articles"));
    const articlesData: Article[] = [];

    querySnapshot.forEach((doc) => {
        const articleData = doc.data();
        if (articleData.category) {
            const articleId = articleData._id;
            const article: Article = {
                id: articleId,
                image: articleData.image,
                name: articleData.name,
                price: articleData.price,
                category: articleData.category,
                quantity: 0,
            };
            articlesData.push(article);
        }
    });

    return articlesData;
};

