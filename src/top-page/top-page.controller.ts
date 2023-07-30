import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { ConfigService } from '@nestjs/config';

@Controller('top-page')
export class TopPageController {
  constructor(private readonly configService: ConfigService) {}

  @Get(':id')
  async get(@Param('id') id: Omit<TopPageModel, '_id'>, @Body() dto: TopPageModel) {
    // this.configService.get('TEST');
  }

  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {}

  @Delete(':id')
  async delete(@Param(':id') id: Omit<TopPageModel, '_id'>) {}

  @Patch(':id')
  async patch(@Param(':id') id: Omit<TopPageModel, '_id'>, @Body() dto: TopPageModel) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto) {}
}
