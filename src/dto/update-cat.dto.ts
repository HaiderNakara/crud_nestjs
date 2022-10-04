import { PartialType } from "@nestjs/swagger";
        import { Cat } from "src/entities/app.entity";
        
        export class UpdateCatDto extends PartialType(Cat) {}     
        