export default {
    Query: {
        getRole : async (parent, args, context, info) => {
            let role = await context.models.Role.find({})            
            return role
        }
    },
    Mutation: {
        addRole : async (parent, args, context, info) => {
            let newRole = new context.models.Role();
            let clientKeys = Object.keys(args.role);
            if (!clientKeys)
                console.log("Error Role keys")
            let i = 0;
            while (i < clientKeys.length) {
                if (clientKeys[i] in newRole) {
                    newRole[clientKeys[i]] = args.role[clientKeys[i]]
                }
                i++
            }

            newRole = await newRole.save();
            console.log("newRole Created : ", newRole)

            return newRole
        },
        updateRole : async (parent, args, context, info) => {
            let updateObj = { $set: {} };
            for (var param in args.role) {
                updateObj.$set[param] = args.role[param];
            }            
            const resultRole = await context.models.Role.findOneAndUpdate({ _id: args.roleID }, updateObj, { new: true });

            console.log("resultRole created : ", resultRole)

            return resultRole
        },
        deleteRole : async (parent, args, context, info) => {
            args = args.roleID;
            const deleteStatus = false;
            let updateObj = { status: deleteStatus }
            
            let resultRole = await context.models.Role.findOneAndUpdate({ _id: args }, updateObj, { new: true });
            if (resultRole) {
                return resultRole;
            } else {
                console.log("Error Delet Role")
            }
            return resultRole            
        }    
    }
}