import WorkModel from "../model/worksModel.js";
import userModel from "../model/userModel.js";
import crypto from 'crypto';
import { verifyLogin } from "../actionComponents/actionCom.js";
import jwt from "jsonwebtoken";

// JWT for maintaining user sessions after login

const jwtSecret = 'dgafg1536453h1355ha4135thad';

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
    // Handling Creating Work
      createWork: async (_, { input }) => {
          try {
              const newWork = await WorkModel.save(input);
              return newWork;
          } catch (error) {
              throw new Error(`Failed to create work: ${error.message}`);
          }
      },
      // Handling Update Work
      updateWork: async (_, { id, input }) => {
          try {
              const updatedWork = await WorkModel.findById(id);
              if (!updatedWork) {
                  throw new Error("Work not found");
              }

              // Set per row to update data
              
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
              return savedWork; // Save return
          } catch (error) {
              throw new Error(`Failed to update work: ${error.message}`);
          }
      },
      // Handling Login User
      loginUser: async (_, { input }) => {
        try {
            const existUser = await userModel.findOne({ username: input.username, email: input.email });
            
            if (!existUser) {
                throw new Error("Incorrect email and password");
            }
    
            if (verifyLogin(input.password, existUser.salt, existUser.password)) {
                // Generate a JWT token
                const token = jwt.sign(
                    {
                        username: existUser.username,
                        email: existUser.email,
                        id: existUser._id,
                        loginAlready: true,
                    },
                    jwtSecret,
                    { expiresIn: '1d' }
                );
    
                // Return the token along with the username
                return { username: existUser.username, email: existUser.email, password: existUser.password, token: token };
            } else {
                throw new Error("Incorrect email and password");
            }
        } catch (err) {
            throw new Error(`Failed to login user: ${err.message}`);
        }
    },
    
      // Handling Register User
      registerUser: async (_, { input }) => {
        try{
            const ExistUser = await userModel.findOne({username: input.username});
            if(ExistUser) 
            {
                throw new Error("User already exist");
            }
            const salt = crypto.randomBytes(16).toString('hex'); // Generated Salt random
            const hashedPassword = crypto.pbkdf2Sync(input.password, salt, 10000, 64, 'sha512').toString('hex'); // Hash Password

            const newUser = new userModel({
                username: input.username,
                email: input.email,
                password: hashedPassword,
                salt: salt,
              });
              
              const savedUser = await newUser.save();
              
              return savedUser;

   

        }catch(err)
        {
            throw new Error(`Failed to login user: ${err.message}`);
        }
      }
  }
};

export default resolvers;

  