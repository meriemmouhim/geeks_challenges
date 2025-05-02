const date_fns = require('date-fns');

async function date(){
    try{
        const today = new Date();
        const newdate = date_fns.addDays(today, 5).toDateString();
        console.log(`today is: ${today}`);
        console.log(`new date is: ${newdate}`);
    }catch (error){
        return { error : true, message: error.message}
    }
}

module.exports = date;