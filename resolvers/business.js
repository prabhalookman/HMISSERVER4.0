export default {
    Query: {
        getBusiness: async (parent, args, context, info) => {
            let business = await context.models.Business.find({})            
            return business
        }
    },
    Mutation: {
        //Business
        addBusiness : async (parent, args, context, info) => {
            let newBusiness = new context.models.Business();
            let clientKeys = Object.keys(args.business);
            if (!clientKeys)
                console.log("Error Business keys")
            let i = 0;
            while (i < clientKeys.length) {
                if (clientKeys[i] in newBusiness) {
                    newBusiness[clientKeys[i]] = args.business[clientKeys[i]]
                }
                i++
            }

            newBusiness = await newBusiness.save();
            console.log("newBusiness Created : ", newBusiness)

            return newBusiness
        },
        updateBusiness : async (parent, args, context, info) => {
            let updateObj = { $set: {} };
            for (var param in args.business) {
                updateObj.$set[param] = args.business[param];
            }            
            const resultBusiness = await context.models.Business.findOneAndUpdate({ _id: args.businessID }, updateObj, { new: true });

            console.log("resultBusiness created : ", resultBusiness)

            return resultBusiness         
        },
        deleteBusiness : async (parent, args, context, info) => {
            args = args.businessID;
            const deleteStatus = false;
            let updateObj = { status: deleteStatus }
            
            let resultBusiness = await context.models.Business.findOneAndUpdate({ _id: args }, updateObj, { new: true });
            if (resultBusiness) {
                return resultBusiness;
            } else {
                console.log("Error Delet Business")
            }
            return resultBusiness           
        },
        //Timing
        addTimings : async (parent, args, context, info) => {            

            let query = {
                _id: args.businessID                
            }
            let resultBusiness = await context.models.Business.findOneAndUpdate(
                query,
                { $push: { "timings.timing": args.timings } }
            )
            console.log("resultBusiness : " , resultBusiness)
            return resultBusiness
        },
        updateTimings : async (parent, args, context, info) => {
            let query = {
                _id: args.businessID,
                "timings.timing": {
                    $elemMatch: {
                        _id: args.timings_id
                    }
                }
            }
            let newStaff;
            let updateObj = { $set: {} };
            let timings = args.timings;
            for (var param in timings) {
                updateObj.$set['timings.$[a].' + param] = timings[param];
            }
            console.log("query : ", JSON.stringify(query));
            console.log("updateObj : ", JSON.stringify(updateObj));
            newStaff = await context.models.Business.findOneAndUpdate(
                query,
                updateObj,
                {
                    new: true,
                    arrayFilters: [ { "a._id": args.timings_id }]
                });
            console.log("newStaff : ", newStaff)
            return newStaff
        },
        deleteTimings : async (parent, args, context, info) => {
            let _timing = {}
            return true            
        },
        //BreakTime
        addBreakTime : async (parent, args, context, info) => {
            let _breakTime = {}
            return _breakTime
        },
        updateBreakTime : async (parent, args, context, info) => {
            let _breakTime = {}
            return _breakTime            
        },
        deleteBreakTime : async (parent, args, context, info) => {
            let _breakTime = {}
            return true            
        },
    }
}