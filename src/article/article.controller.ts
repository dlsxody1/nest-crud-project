import {
  Controller,
  Delete,
  Get,
  Post,
  Param,
  ParseIntPipe,
  Body,
  Patch,
} from '@nestjs/common';
import { Article } from './entity/article.entity';
import { ArticleService } from './article.service';
import { ArticleDTO } from './dto/article.dto';

@Controller('post')
export class ArticleController {
  constructor(private articleServie: ArticleService) {}

  @Get('')
  getAllPost(): Promise<Article[]> {
    return this.articleServie.getAllArticle();
  }

  @Get('/:id')
  //ParseIntPipe가 들어오는 값에 대해 int가 아니면 예외처리를 해준다.
  getArticleById(@Param('id', ParseIntPipe) id: number) {
    return this.articleServie.getArticleById(id);
  }

  @Post('/create')
  createArticle(@Body() articleDTO: ArticleDTO): Promise<Article> {
    return this.articleServie.createArticle(articleDTO);
  }

  @Delete('/:id')
  deleteArticle(@Param('id', ParseIntPipe) id: number) {
    return this.articleServie.deleteArticle(id);
  }

  @Patch('/:id')
  updateArticle(@Param('id', ParseIntPipe) id: number, articleDTO: ArticleDTO) {
    this.articleServie.updateArticle(id, articleDTO);
  }
}
