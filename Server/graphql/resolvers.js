import WorkModel from "../model/worksModel.js";

const resolvers = {
  Query: {
      getWork: async (_, { id }) => {
          try {
              return await WorkModel.findById(id);
          } catch (error) {
              throw new Error(`Failed to fetch work: ${error.message}`);
          }
      },
      getAllWorks: async () => {
          try {
              return await WorkModel.find();
          } catch (error) {
              throw new Error(`Failed to fetch works: ${error.message}`);
          }
      },
  },
  Mutation: {
      createWork: async (_, { input }) => {
          try {
              const newWork = await WorkModel.create(input);
              return newWork;
          } catch (error) {
              throw new Error(`Failed to create work: ${error.message}`);
          }
      },
      updateWork: async (_, { id, input }) => {
          try {
              const updatedWork = await WorkModel.findById(id);
              if (!updatedWork) {
                  throw new Error("Work not found");
              }
              
              updatedWork.imageWorks = input.imageWorks;
              updatedWork.nameWork = input.nameWork;
              updatedWork.description = input.description;
              updatedWork.nameArch = input.nameArch;
              updatedWork.clientName = input.clientName;
              updatedWork.termWork = input.termWork;
              updatedWork.typeProj = input.typeProj;
              updatedWork.strategyWork = input.strategyWork;
              updatedWork.dateWork = input.dateWork;
             
              const savedWork = await updatedWork.save();
              return savedWork;
          } catch (error) {
              throw new Error(`Failed to update work: ${error.message}`);
          }
      }
  }
};

export default resolvers;

  