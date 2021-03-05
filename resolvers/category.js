export default {
    Query: {
        getCategory: async (parent, args, context, info) => {
            let category = await context.models.Category.find({})            
            return category
        }
    },
    Mutation: {
        addCategory : async (parent, args, context, info) => {
            let newcategory = new context.models.Category();
            let clientKeys = Object.keys(args.category);
            if (!clientKeys)
                console.log("Error category keys")
            let i = 0;
            while (i < clientKeys.length) {
                if (clientKeys[i] in newcategory) {
                    newcategory[clientKeys[i]] = args.category[clientKeys[i]]
                }
                i++
            }

            newcategory = await newcategory.save();
            console.log("newcategory created : ", newcategory)

            return newcategory
        },
        updateCategory : async (parent, args, context, info) => {
            let updateObj = { $set: {} };
            for (var param in args.category) {
                updateObj.$set[param] = args.category[param];
            }            
            const resultCategory = await context.models.Category.findOneAndUpdate({ _id: args.categoryID }, updateObj, { new: true });

            console.log("resultCategory created : ", resultCategory)

            return resultCategory
        },
        deleteCategory : async (parent, args, context, info) => {
            args = args.categoryID;
            const deleteStatus = false;
            let updateObj = { status: deleteStatus }
            
            let resultcategory = await context.models.Category.findOneAndUpdate({ _id: args }, updateObj, { new: true });
            if (resultcategory) {
                return resultcategory;
            } else {
                console.log("Error deletecategory")
            }
            return resultcategory            
        },    
    }
}