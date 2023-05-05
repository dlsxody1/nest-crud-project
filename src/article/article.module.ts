import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { TypeOrmExModule } from 'src/configs/typeorm.module';
import { ArticleRepository } from './repository/article.repository';
import { ArticleService } from './article.service';

@Module({
  providers: [ArticleService],
  controllers: [ArticleController],
  imports: [TypeOrmExModule.forCustomRepository([ArticleRepository])],
})
export class ArticleModule {}
