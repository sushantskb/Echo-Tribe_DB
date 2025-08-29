import mongoose from "mongoose";

const snapshotSchema = new mongoose.Schema({
  snapshot: [
    {
      type: String,
      required: true,
    },
  ],
});

const Snapshot = mongoose.model("Snapshot", snapshotSchema);
export default Snapshot;
