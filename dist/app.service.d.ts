import { Model } from 'mongoose';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/app.entity';
export declare class AppService {
    private readonly catModel;
    constructor(catModel: Model<Cat>);
    getHello(): string;
    createCat(cat: Cat): Promise<Cat>;
    findAllCats(): Promise<Cat[]>;
    findCatById(id: string): Promise<Cat>;
    updateCat(id: string, cat: UpdateCatDto): Promise<Cat>;
    deleteCat(id: string): Promise<Cat>;
}
