import {Database} from "@nozbe/watermelondb";
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { Weigth } from "./model/weight";
import { schema } from "./schema";

const adapter = new SQLiteAdapter({
    schema: schema,
});

export const database = new Database({
    adapter,
    modelClasses: [Weigth]
})