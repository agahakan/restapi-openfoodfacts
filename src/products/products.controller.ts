import { Controller, Get, UseGuards, Param } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { ProductsService } from './products.service';

@UseGuards(JwtGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':barcode')
  async getProductByBarcode(@Param('barcode') barcode: string) {
    const product = await this.productsService.getProductByBarcode(barcode);
    return product;
  }
}