import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), ArticleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
