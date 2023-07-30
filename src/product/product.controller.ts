import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ProductModel } from './product.model';
import { FindDtoProduct } from './dto/find-product.dto';

@Controller('product')
export class ProductController {
  @Post('create')
  async create(@Body() dto: Omit<ProductModel, '_id'>) {}

  @Get(':id')
  async get(@Param('id') id: Pick<ProductModel, '_id'>) {}

  @Delete(':id')
  async delete(@Param('id') id: Pick<ProductModel, '_id'>) {}

  @Patch(':id')
  async patch(@Param('id') id: Pick<ProductModel, '_id'>, @Body() dto: ProductModel) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindDtoProduct) {}
}
