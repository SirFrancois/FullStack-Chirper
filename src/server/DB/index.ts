import * as mysql from 'mysql';
import chirps from './chirps';
import * as dotenv from 'dotenv';

const envFound = dotenv.config();

if (!envFound) {
    throw new Error('Cannot find a .env file!');
}



export const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "Sir",
    password: 'mysqlpassword',
    database: 'chirprapp'
});

export const Query = (query: string, value?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, value, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
};

export default { chirps }

// export default {
//     mysql:{
//         host: process.env.DB_Host,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASS,
//         database: process.env.DB_SCHEMA,

//     }
//     port: parseInt(process.env.PORT, 10)

// }