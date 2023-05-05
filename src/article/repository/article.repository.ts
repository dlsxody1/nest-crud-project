import { CustomRepository } from 'src/configs/typeorm.decorator';
import { Repository } from 'typeorm';
import { Article } from '../entity/article.entity';
import { ArticleDTO } from '../dto/article.dto';

@CustomRepository(Article)
export class ArticleRepository extends Repository<Article> {
  async createArticle(articleDTO: ArticleDTO): Promise<Article> {
    const { id, title, content, createdAt } = articleDTO;
    const article = await this.create({
      title,
      content,
      createdAt,
    });

    await this.save(article);
    return article;
  }
}
