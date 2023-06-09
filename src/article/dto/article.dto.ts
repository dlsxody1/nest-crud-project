import { IsDate, IsNumber, IsString } from 'class-validator';

export class ArticleDTO {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsDate()
  createdAt: Date;
}
