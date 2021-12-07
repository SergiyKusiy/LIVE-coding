const createLogger = () => {
   const messages = [];
 
   // input : str;
   // output : unndef
   const warn = message => {
      messages.push({
         message,
         dateTime: new Date(),
         type: 'warn',
      });
   }
   const error = message => {
      messages.push({
         message,
         dateTime: new Date(),
         type: 'error',
      });
   }
   const log = message => {
      messages.push({
         message,
         dateTime: new Date(),
         type: 'log',
      });
   }
   
 //  input: string
 //  output: sarrays of obj
   const getRecords = (str) => {
      let filtered = str ? arr.filter(elem => elem.type === str) : arr;
     return filtered.sort((a,b) => b.dateTime - a.dateTime)
   };
 
   return { warn, log, error, getRecords };
};
 
 
 
 
 // test data
 
 const logger = createLogger();
 logger.log('User logged in');
 logger.warn('User try to restricted page');
 logger.log('User logged out');
 logger.error('Unexpected error on the site');
 
 logger.log('User logged in');
 console.log(logger.getRecords());
 console.log(logger.getRecords('warn'));

// setTimeout(() => {
 
// }, 2000)

//  console.log(logger.getRecords('error'));
//  console.log(logger.getRecords('warn'));
//  console.log(logger.getRecords('warnc'));
//  console.log(logger.getRecords('log'));
//  console.log(logger.getRecords('log'));

function makeCounter() {
   let count = 0;
 
   return () => {
     return count++;
   };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());