const Producer = require("../producer")
const producer = new Producer()

module.exports = {
    shareUserReg: async(data) => {
        await producer.publishMessage('create', data)
    }
}