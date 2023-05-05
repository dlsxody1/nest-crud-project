import { Injectable, NotFoundException } from '@nestjs/common';
import { ArticleRepository } from './repository/article.repository';
import { ArticleDTO } from './dto/article.dto';
import { Article } from './entity/article.entity';

@Injectable()
export class ArticleService {
  constructor(private articleRepository: ArticleRepository) {}

  async getAllArticle() {
    return this.articleRepository.find({});
  }

  async getArticleById(id: number) {
    //typeorm의 메소드인 findOne을 사용해서 db에서 꺼내오는구나!
    const article = await this.articleRepository.findOneBy({ id });

    if (!article) {
      throw new NotFoundException(`${id} 이 글은 없는 글입니다.`);
    }
    return article;
  }

  async deleteArticle(id: number) {
    const article = await this.articleRepository.delete({ id });

    //affectd => id가 일치하는 레코드의 수를 반환
    //이값이 0이면 noFOundException 발생.
    if (article.affected === 0) {
      throw new NotFoundException(`${id} 이 글은 지울수 없습니다.`);
    }
  }

  async createArticle(articleDTO: ArticleDTO): Promise<Article> {
    return this.articleRepository.createArticle(articleDTO);
  }

  async updateArticle(id: number, articleDTO: ArticleDTO) {
    const article = await this.articleRepository.update(id, articleDTO);
    if (article.affected === 0) {
      throw new NotFoundException(`${id} 이 글은 수정 할 수 없습니다.`);
    }
    return 'success';
  }
}
