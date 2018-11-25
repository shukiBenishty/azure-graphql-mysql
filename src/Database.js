const Day = require("./models/Day");
const Group = require("./models/Group");
const Report = require("./models/Report");
const Schedule = require("./models/Schedule");
const Employee = require("./models/Employee");
const Station = require("./models/Station");


let database = {
    Employees: [
        {
            id: "ID",
        
            firstName: "String",
            lastName: "String",
            birthday: "Date",
            registrationDate: "Date",
            phone: "String",
        
            schedules: [],
            reports: []
        }
    ],
    
    Groups: [
        {
        id: "ID",
    
        symbole: "Int",
        name: "String",
    
        schedules: [],
        reports: []
      }
    ],
    
    Stations: [
        {
            id: "ID",
        
            StationNumber: "Int",
            role: {},
            group: {},
        
            schedules: [],
            reports: []
      }
    ],
    
    Days: [
        {
            id: "ID",
            
            year: "String",
            dayOfYear: "Int",
            dayOfWeek: "Int",
            display: "String",
            display_he: "String",
            isHoliday: "Int",
            holidayName: "String",
        
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
            in: "Date",
            out: "Date",
      }
    ],
     
    Reports: [
        {
            id: "ID",
        
            date: {},
            employee: {},
            station: {},
            in: "Date",
            out: "Date",
      }
    ],

    sync: () => {
        // force: true will drop the table if it already exists
        Employee.sync({force: true}).then(() => {
            // Table created
            return Employee.create({
            firstName: 'John',
            lastName: 'Hancock',
            birthday: Date.now(),
            phone: "123456789"
            });
        });
        Group.sync({force: true}).then(() => {
            console.log("sync Groups");    
        });
        Station.sync({force: true}).then(() => {
            console.log("sync Stations");   
        });
        Day.sync({force: true}).then(() => {
            console.log("sync Day");    
        });
        Report.sync({force: true}).then(() => {
            console.log("sync Reports");   
        });
        Schedule.sync({force: true}).then(() => {
            console.log("sync Schedules");   
        });
    }
}

export default database;



