import { IsNotEmpty } from "class-validator";

export class AddBook {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    detail: string;
}


export class DeleteById {
    @IsNotEmpty()
    id: string;
}

export class UpdateById {
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    detail: string;
}