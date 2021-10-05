import { Model } from "@nozbe/watermelondb";
import { field, readonly, date } from "@nozbe/watermelondb/decorators";

class Weigth extends Model{
    static table = 'weights';

    @field('note') note!:string | undefined ;
    @field('weight') weight!:number;
    @readonly @date('created_at') createdAt!:number;
}

export {Weigth}