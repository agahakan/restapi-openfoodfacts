import { Controller, Get, UseGuards, Param, NotFoundException } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { ProductsService } from './products.service';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@UseGuards(JwtGuard)
@ApiBearerAuth('UserToken')
@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':barcode')
  @ApiOperation({ summary: 'Get product by barcode' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  async getProductByBarcode(@Param('barcode') barcode: string) {
    const product = await this.productsService.getProductByBarcode(barcode);
    if (!product) {
      throw new NotFoundException('NotFoundException');
    }
    return product;
  }
}
