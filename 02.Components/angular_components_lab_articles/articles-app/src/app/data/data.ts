import { Article } from '../models/article.model';
import { data } from './seed';

export class ArticleData {
  // add getData() method
  getData(): Article[] {
    // Instantitate data
    let articles: Article[] = [];

    for (let i = 0; i < data.length; i++) {
      articles[i] = new Article(
        data[i].title,
        data[i].description,
        data[i].author,
        data[i].imageUrl
      );
    }
    return articles;
  }
}
