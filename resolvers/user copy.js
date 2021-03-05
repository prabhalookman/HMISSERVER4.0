export default {
    Query: {
        getBusiness: (parent, args, context, info) => {
            let _business = {}
            return _business
        }
    },
    Mutation: {
        //Business
        addBusiness : (parent, args, context, info) => {
            let _business = {}
            return _business
        },
        updateBusiness : (parent, args, context, info) => {
            let _business = {}
            return _business            
        },
        deleteBusiness : (parent, args, context, info) => {
            let _business = {}
            return true            
        },
        //Timing
        addTimings : (parent, args, context, info) => {
            let _timing = {}
            return _timing
        },
        updateTimings : (parent, args, context, info) => {
            let _timing = {}
            return _timing            
        },
        deleteTimings : (parent, args, context, info) => {
            let _timing = {}
            return true            
        },
        //BreakTime
        addBreakTime : (parent, args, context, info) => {
            let _breakTime = {}
            return _breakTime
        },
        updateBreakTime : (parent, args, context, info) => {
            let _breakTime = {}
            return _breakTime            
        },
        deleteBreakTime : (parent, args, context, info) => {
            let _breakTime = {}
            return true            
        },
    }
}