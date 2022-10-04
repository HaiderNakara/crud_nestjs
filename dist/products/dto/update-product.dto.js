"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const product_entity_1 = require("../entities/product.entity");
class UpdateProductDto extends (0, swagger_1.PartialType)(product_entity_1.Product) {
}
exports.UpdateProductDto = UpdateProductDto;
//# sourceMappingURL=update-product.dto.js.map