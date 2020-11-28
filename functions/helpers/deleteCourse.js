const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    // TODO: delete course
    try {
        const {id} = JSON.parse(event.body);
        const deletedRecord = await table.destroy(id);
        return formattedReturn(200, deletedRecord);
    } catch(err) {
        console.log(err);
    }
};
