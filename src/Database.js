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
}

export default database;



