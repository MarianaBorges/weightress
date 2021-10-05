import { database } from ".";
import { Weigth } from "./model/weight";

export type WeightProps = {
    createdAt?: Date;
    weight: string | number;
    note: string | undefined;
}

const weights = database.collections.get<Weigth>('weights');

export const obserWeights = () => weights.query().observe();
export const saveWeight = async ({weight, note}: WeightProps)=>{
    await database.write(async()=>{
        await weights.create((post)=>{
            post.weight = Number(weight);
            post.note = note;
        })
    });
}