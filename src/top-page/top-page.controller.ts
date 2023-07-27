import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
  @Get(':id')
  async get(
    @Param('id') id: Omit<TopPageModel, '_id'>,
    @Body() dto: TopPageModel,
  ) {}

  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {}

  @Delete(':id')
  async delete(@Param(':id') id: Omit<TopPageModel, '_id'>) {}

  @Patch(':id')
  async patch(
    @Param(':id') id: Omit<TopPageModel, '_id'>,
    @Body() dto: TopPageModel,
  ) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto) {}
}
