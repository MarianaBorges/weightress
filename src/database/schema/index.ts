import { appSchema } from "@nozbe/watermelondb"; 
import { weightsSchema } from "./weightsSchema";

const schema = appSchema({
    version: 1,
    tables: [
        weightsSchema
    ]
});

export {schema}