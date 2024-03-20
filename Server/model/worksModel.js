import { model, Schema } from "mongoose";

const WorkSchema = new Schema({
    imageWorks: [{
        img: String,
    }],
    nameWork: String,
    description: String,
    nameArch: String,
    clientName: String,
    termWork: String,
    typeProj: String,
    strategyWork: String,
    dateWork: {
        type: String,
        default: () => new Date().toISOString(),
    }
})

const workModel = model('works', WorkSchema);

export default workModel;