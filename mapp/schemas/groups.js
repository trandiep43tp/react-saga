const mongoose       = require('mongoose');
const databaseConfig = require(__path_configs +'database');

const schema = new mongoose.Schema({
      name: String,
      status: String, 
      ordering: Number,
      content: String,
      group_acp: String,
      created: {
            user_id: String,
            user_name: String,
            time : Date
      },
      modified: {
            user_id: String,
            user_name: String,
            time: Date
      }
});

module.exports = mongoose.model(databaseConfig.col_group , schema)