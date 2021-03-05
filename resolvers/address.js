export default {
    Query: {
        getAddress: async (parent, args, context, info) => {
            let address = await context.models.Address.find({})            
            return address
        }
    },
    Mutation: {
        addAddress : async (parent, args, context, info) => {
            let newAddress = new context.models.Address();
            let clientKeys = Object.keys(args.address);
            if (!clientKeys)
                console.log("Error address keys")
            let i = 0;
            while (i < clientKeys.length) {
                if (clientKeys[i] in newAddress) {
                    newAddress[clientKeys[i]] = args.address[clientKeys[i]]
                }
                i++
            }

            newAddress = await newAddress.save();
            console.log("newAddress created : ", newAddress)

            return newAddress
        },
        updateAddress : async (parent, args, context, info) => {
            let updateObj = { $set: {} };
            for (var param in args.address) {
                updateObj.$set[param] = args.address[param];
            }            
            const resultAdress = await context.models.Address.findOneAndUpdate({ _id: args.addressID }, updateObj, { new: true });

            console.log("resultAdress created : ", resultAdress)

            return resultAdress
        },
        deleteAddress : async (parent, args, context, info) => {
            args = args.addressID;
            const deleteStatus = false;
            let updateObj = { status: deleteStatus }
            
            let resultAddress = await context.models.Address.findOneAndUpdate({ _id: args }, updateObj, { new: true });
            if (resultAddress) {
                return resultAddress;
            } else {
                console.log("Error deleteAddress")
            }
            return resultAddress            
        },    
    }
}