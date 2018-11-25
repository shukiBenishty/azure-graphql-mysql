var casual = require('casual');
let roles = ["רכז", "סייעת", "גננת", "מדריכה", "מנהלת"];
let Groups = [];
for (let index = 0; index < 9; index++) {
    Groups[index] = { 
        symbole: casual.integer(111111, 999999),
        name: casual.street
    }
}
let Employees = [];
for (let index = 0; index < 50; index++) {
    Employees[index] = {
        id = casual.integer(111111111, 999999999),
        firstName: casual.first_name,
        lastName: casual.last_name,
        birthday: casual.date(format = 'YYYY-MM-DD') ,
        registrationDate: casual.date(format = 'YYYY-MM-DD') ,
        phone: casual.phone
    }
}
let Stations = [];
for (let index = 0; index < Groups.length * roles.length; index++) {
    Stations[index] = {
        StationNumber:  casual.integer(1111, 9999),
        role = roles[casual.integer(0, 4)],
        groupSymbole = Groups[casual.integer(0, Groups.length - 1)].symbole
    }
}
let Days = [];
for (let index = 0; index < 1000; index++) {
    let data = casual.date(format = 'YYYY-MM-DD');
    Days[index] = {
        data: data,
        year: casual.year,
        dayOfYear: casual.day_of_year,
        dayOfWeek: casual.day_of_week,
        display: casual.date(format = 'YYYY-MM-DD'),
        display_he: "כו' בסיוון",
        isHoliday: casual.coin_flip ,
        holidayName: casual.month_name 
    }
}
let database = {
    
    Days: [
        {
            
            data: casual.date(format = 'YYYY-MM-DD'),
            year: casual.year,
            dayOfYear: casual.day_of_year,
            dayOfWeek: casual.day_of_week,
            display: casual.date(format = 'YYYY-MM-DD'),
            display_he: "כו' בסיוון",
            isHoliday: casual.coin_flip ,
            holidayName: casual.month_name ,
        
            schedules: [],
            reports: []
      }
    ],
     
    Schedules: [
        {
            id: "ID",
        
            date: {},
            employee: {},
            station: {},
            in: casual.time(format = 'HH:mm:ss'),
            out: casual.time(format = 'HH:mm:ss'),
      }
    ],
     
    Reports: [
        {
            id: "ID",
        
            date: {},
            employee: {},
            station: {},
            in: casual.time(format = 'HH:mm:ss'),
            out: casual.time(format = 'HH:mm:ss'),
      }
    ],
}

export default database;



