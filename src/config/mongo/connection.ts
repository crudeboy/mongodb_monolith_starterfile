import mongoose, { ConnectOptions } from 'mongoose';
import environment from '../environment'

const {mongoLocalUrl} = environment

export const databaseConnection = async() => {

    try {
        await mongoose.connect(mongoLocalUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
        console.log('Db Connected');
        
    } catch (error) {
        console.log('Error ============')
        console.log(error);
        process.exit(1);
    }
 
};
