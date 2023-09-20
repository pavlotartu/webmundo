import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
/*  aqui las credenciales */
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export interface Article {
  id: string;
  image: string;
  name: string;
  price: number;
}

export const getArticlesData = async () => {
  const querySnapshot = await getDocs(collection(db, "articles"));
  const articlesData: Article[] = [];

  querySnapshot.forEach((doc) => {
    const articleData = doc.data();
    const articleId = articleData._id;
    const article: Article = {
      id: articleId,
      image: articleData.image,
      name: articleData.name,
      price: articleData.price,
    };
    articlesData.push(article);
  });

  return articlesData;
};
