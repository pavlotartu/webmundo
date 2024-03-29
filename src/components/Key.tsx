import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
/* credenciales */
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

    articlesData.sort((a, b) => a.name.localeCompare(b.name));

    return articlesData;
};