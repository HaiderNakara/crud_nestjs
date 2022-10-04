"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const category_entity_1 = require("../entities/category.entity");
class UpdateCategoryDto extends (0, swagger_1.PartialType)(category_entity_1.Category) {
}
exports.UpdateCategoryDto = UpdateCategoryDto;
//# sourceMappingURL=update-category.dto.js.map