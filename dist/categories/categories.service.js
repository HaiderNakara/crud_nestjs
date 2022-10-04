"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const products_service_1 = require("../products/products.service");
const category_entity_1 = require("./entities/category.entity");
let CategoriesService = class CategoriesService {
    constructor(categoryModel, productsService) {
        this.categoryModel = categoryModel;
        this.productsService = productsService;
    }
    create(createCategoryDto) {
        const id = Math.floor(1000 + Math.random() * 9000);
        const category = new this.categoryModel(Object.assign(Object.assign({}, createCategoryDto), { id }));
        return category.save();
    }
    update(id, updateCategoryDto) {
        return this.categoryModel.findOneAndUpdate({ id }, updateCategoryDto).exec();
    }
    findAll() {
        return this.categoryModel.find().exec();
    }
    findOne(id) {
        return this.categoryModel.findOne({ id }).exec();
    }
    async remove(id) {
        console.log(id);
        const cat = await this.categoryModel.findOne({ id }).exec();
        await this.productsService.removeByCategory(cat._id);
        return this.categoryModel.findOneAndDelete({ id }).exec();
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(category_entity_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        products_service_1.ProductsService])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map