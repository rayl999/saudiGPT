const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const summarizationSchema = new Schema({
  audio: { type: String, required: false },
  summary: { type: String, required: false },
  bullits: { type: String, required: false },
  effectiveness : { type: String, required: false },
  pdf: { type: String, required: false },

},
{ timestamps: true });

// caseSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Summarization', summarizationSchema);
