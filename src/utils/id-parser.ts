import * as mongoose from 'mongoose';

export function setIDSchema(schema: mongoose.Schema): void {
    schema.methods.toJSON = function() {
        return IDParser(this.toObject());
    };
}

function IDParser(obj: { _id: any, id: any }): any {
    const id = obj._id;
    obj.id = id;
    delete obj._id;
    return { id, ...obj };
}