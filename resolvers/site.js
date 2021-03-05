export default {
    Query: {
        getSite : async (parent, args, context, info) => {
            let site = await context.models.Site.find({})            
            return site
        }
    },
    Mutation: {
        addSite : async (parent, args, context, info) => {
            let newSite = new context.models.Site();
            let clientKeys = Object.keys(args.site);
            if (!clientKeys)
                console.log("Error Site keys")
            let i = 0;
            while (i < clientKeys.length) {
                if (clientKeys[i] in newSite) {
                    newSite[clientKeys[i]] = args.site[clientKeys[i]]
                }
                i++
            }

            newSite = await newSite.save();
            console.log("newSite Created : ", newSite)

            return newSite
        },
        updateSite : async (parent, args, context, info) => {
            let updateObj = { $set: {} };
            for (var param in args.site) {
                updateObj.$set[param] = args.site[param];
            }            
            const resultSite = await context.models.Site.findOneAndUpdate({ _id: args.siteID }, updateObj, { new: true });

            console.log("resultSite created : ", resultSite)

            return resultSite
        },
        deleteSite : async (parent, args, context, info) => {
            args = args.siteID;
            const deleteStatus = false;
            let updateObj = { status: deleteStatus }
            
            let resultSite = await context.models.Site.findOneAndUpdate({ _id: args }, updateObj, { new: true });
            if (resultSite) {
                return resultSite;
            } else {
                console.log("Error Delet Site")
            }
            return resultSite            
        },    
    }
}