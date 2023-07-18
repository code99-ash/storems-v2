export default {
    methods: {
        parseError(err) {
            console.log(err)
            return err.code == "ERR_NETWORK"? 'An error occured, failed to connect.' : err.response.data ?? 'An error occured, please try again'
        }
    }
}