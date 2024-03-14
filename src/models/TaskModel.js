import mongoose from "mongoose";

const repeatSchema = mongoose.Schema({
  type: {
    type: String,
    enum: ["Daily", "Weekly", "Monthly", "Yearly"],
  },
  times: {
    type: Number,
    min: 1,
  },
  weekDays: {
    type: [String],
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    default: undefined,
  },
  monthlyOnDay: {
    type: Number,
    min: 1,
    max: 31,
  },
  monthlyOnWeekDay: {
    type: [],
    default: undefined,
  },
  occurrences: {
    type: Number,
    min: 1,
  },
  endDate: {
    type: Date,
  },
  endNever: {
    type: Boolean,
  },
  startDate: {
    type: Date,
  },
});

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    detail: {
      type: String,
      trim: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    repeat: repeatSchema,
  },
  {
    timeStamps: true,
  },
);

export default mongoose.model("Task", taskSchema);
