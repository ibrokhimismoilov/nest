import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ReviewModel } from './review.model';
import { ProductModel } from 'src/product/product.model';

@Controller('review')
export class ReviewController {
  @Get('byProduct/:productId')
  async getByProduct(
    @Param('productId') productId: Pick<ProductModel, '_id'>,
  ) {}

  @Post()
  async create(@Body() dto: Omit<ReviewModel, '_id'>) {}

  @Delete(':id')
  async delete(@Param('id') id: Pick<ReviewModel, '_id'>) {}

  @Patch(':id')
  async patch(
    @Param('id') id: Pick<ReviewModel, '_id'>,
    @Body() dto: ReviewModel,
  ) {}
}
