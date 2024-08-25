import { model, Schema } from "mongoose";

const CharacterSchema = new Schema({
  name: { type: String, required: true },
  totalEpisodes: { type: Number, required: true },
  status: { type: String, required: true },
  type: { type: String },
  userId: { type: Schema.Types.ObjectId, require: true, ref: "users" },
  createdAt: { type: Date, default: Date.now() },
});

export default model("characters", CharacterSchema);
