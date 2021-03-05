export default {
    Query: {
        getUser: (parent, args, context, info) => {
            let _business = {}
            return _business
        }
    },
    Mutation: {
        //User
        addUser : async (parent, args, context, info) => {
            let newUser = new context.models.User();
            let clientKeys = Object.keys(args.user);
            if (!clientKeys)
                console.log("Error User keys")
            let i = 0;
            while (i < clientKeys.length) {
                if (clientKeys[i] in newUser) {
                    newUser[clientKeys[i]] = args.user[clientKeys[i]]
                }
                i++
            }

            newUser = await newUser.save();
            console.log("newUser Created : ", newUser)

            return newUser
        },
        updateUser : async (parent, args, context, info) => {
            let updateObj = { $set: {} };
            for (var param in args.user) {
                updateObj.$set[param] = args.user[param];
            }            
            const resultUser = await context.models.User.findOneAndUpdate({ _id: args.userID }, updateObj, { new: true });

            console.log("resultUser created : ", resultUser)

            return resultUser
        },
        deleteUser : async (parent, args, context, info) => {
            args = args.userID;
            const deleteStatus = false;
            let updateObj = { status: deleteStatus }
            
            let resultUser = await context.models.User.findOneAndUpdate({ _id: args }, updateObj, { new: true });
            if (resultUser) {
                return resultUser;
            } else {
                console.log("Error Delet User")
            }
            return resultUser            
        }
        //Timing
        // addTimings : (parent, args, context, info) => {
        //     let _timing = {}
        //     return _timing
        // },
        // updateTimings : (parent, args, context, info) => {
        //     let _timing = {}
        //     return _timing            
        // },
        // deleteTimings : (parent, args, context, info) => {
        //     let _timing = {}
        //     return true            
        // },
        // //BreakTime
        // addBreakTime : (parent, args, context, info) => {
        //     let _breakTime = {}
        //     return _breakTime
        // },
        // updateBreakTime : (parent, args, context, info) => {
        //     let _breakTime = {}
        //     return _breakTime            
        // },
        // deleteBreakTime : (parent, args, context, info) => {
        //     let _breakTime = {}
        //     return true            
        // }
    }
}