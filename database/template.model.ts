import { model, models, Schema } from "mongoose";

export interface IModel {}

const QuestionSchema = new Schema({}, { timestamps: true });

const Model = models?.Model || model<IModel>("Question", QuestionSchema);

export default Model;
