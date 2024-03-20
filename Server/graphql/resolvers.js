import WorkModel from "../model/worksModel.js";

const resolvers = {
    Query: {
        async getWork(_, { id }) {
            try {
              return await WorkModel.findById(id);
            } catch (error) {
              throw new Error(`Failed to fetch work: ${error.message}`);
            }
        },
        async getAllWorks() {
            try {
              return await WorkModel.find();
            } catch (error) {
              throw new Error(`Failed to fetch works: ${error.message}`);
            }
        },
    },
    Mutation: {
    async createWork(_, { input }) {
        try {
          const newWork = await WorkModel.save(input);
          return newWork;
        } catch (error) {
          throw new Error(`Failed to create work: ${error.message}`);
        }
      },
    },
    // async updtateWork(_, {input}) {
    //     try {
    //         const newWork = await WorkModel.create(input);
    //         return newWork;
    //     } catch (error) {
    //         throw new Error(`Failed to create work: ${error.message}`);
    //     }
    // }
};
  

export default resolvers;