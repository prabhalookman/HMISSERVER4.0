export default {
    Query: {
        getPassword : async (parent, args, context, info) => {
            let password = await context.models.Password.find({})            
            return password
        }
    },
    Mutation: {
        addPassword : async (parent, args, context, info) => {
            let newPassword = new context.models.Password();
            let clientKeys = Object.keys(args.password);
            if (!clientKeys)
                console.log("Error Password keys")
            let i = 0;
            while (i < clientKeys.length) {
                if (clientKeys[i] in newPassword) {
                    newPassword[clientKeys[i]] = args.password[clientKeys[i]]
                }
                i++
            }

            newPassword = await newPassword.save();
            console.log("newPassword created : ", newPassword)

            return newPassword
        },
        updatePassword : async (parent, args, context, info) => {
            let updateObj = { $set: {} };
            for (var param in args.password) {
                updateObj.$set[param] = args.password[param];
            }            
            const resultPassword = await context.models.Password.findOneAndUpdate({ _id: args.passwordID }, updateObj, { new: true });

            console.log("resultPassword created : ", resultPassword)

            return resultPassword
        },
        deletePassword : async (parent, args, context, info) => {
            args = args.passwordID;
            const deleteStatus = false;
            let updateObj = { status: deleteStatus }
            
            let resultPassword = await context.models.Password.findOneAndUpdate({ _id: args }, updateObj, { new: true });
            if (resultPassword) {
                return resultPassword;
            } else {
                console.log("Error deletepassword")
            }
            return resultPassword            
        },    
    }
}