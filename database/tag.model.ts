import { model, models, Schema } from "mongoose";

export interface ITag {
  name: string;
  questions: number;
}

const QuestionSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    questions: {type: Number, default: 0}
  },
  { timestamps: true }
);

const Tag = models?.Tag || model<ITag>("Tag", QuestionSchema);

export default Tag;
