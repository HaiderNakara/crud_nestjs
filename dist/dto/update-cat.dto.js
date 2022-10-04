"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCatDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const app_entity_1 = require("../entities/app.entity");
class UpdateCatDto extends (0, swagger_1.PartialType)(app_entity_1.Cat) {
}
exports.UpdateCatDto = UpdateCatDto;
//# sourceMappingURL=update-cat.dto.js.map