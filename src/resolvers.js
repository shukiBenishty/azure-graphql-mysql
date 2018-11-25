// @flow
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import moment from 'moment';
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

const {
  Day,
  Report,
  Schedule,
  Group,
  Employee,
  Station
} = require('./connection');


export let resolvers = {

    Query: {
        employee: (_,args) => {
            return Employee.findById(args.id);
         },
        employees: () => {
          return Employee.findAll();
        },
        group: (_,args) => {
          return Groups.findById(args.id);
       },
        groups: () => {},
        station: (_,args) => {
          return Station.findById(args.id);
       },
        stations: () => {},
        day: (_,args) => {
          return Employee.findById(args.id);
       },
        days: () => {},
        report: (_,args) => {
          return Report.findById(args.id);
       },
        reports: () => {},
        schedule: (_,args) => {
          return Schedule.findById(args.id);
       },
        schedules: () => {},
    },
    
    Employee: {
      schedules: (employee, args) => {
        return Schedule.findAll({
          where: {
            date:{
              [Op.between]: [args.from, args.till]
            },
            employeeId: employee.id
          }
        });
      },
      reports: (employee, args) => {
        return Report.findAll({
          where: {
            date:{
              [Op.between]: [args.from, args.till]
            },
            employeeId: employee.id
          }
        });
      },
    },
    Station: {
      group: (station) => {
        return Group.findById(station.groupSymbol);
      }
    },
    Day: {
      schedules: (day, args) => {
        let query = [];
        if(args.employees) {
          args.employees.forEach(element => {
            query.push({employeeId: element});
          });
        }
        if(args.stations) {
          args.stations.forEach(element => {
            query.push({stationNumber: element});
          });
        }
        return Schedule.findAll({
          where: {
            date: day.display,
            [Op.or]: query
          }
        });
      },
      reports: (day, args) => {
        let query = [];
        if(args.employees) {
          args.employees.forEach(element => {
            query.push({employeeId: element});
          });
        }
        if(args.stations) {
          args.stations.forEach(element => {
            query.push({stationNumber: element});
          });
        }
        return Report.findAll({
          where: {
            date: day.display,
            [Op.or]: query
          }
        });
      }
    },
    Schedule: {
      date:(schedule) => {
        return Day.findById(moment(schedule.date).format("YYYY-MM-DD"));
      },
      employee: (schedule) => {
        return Employee.findById(schedule.employeeId);
      },
      station: (schedule) => {
        return Station.findById(schedule.stationNumber);
      }
    },
    Report: {
      date:(report) => {
        return Day.findById(moment(report.date).format("YYYY-MM-DD"));
      },
      employee: (report) => {
        return Employee.findById(report.employeeId);
      },
      station: (report) => {
        return Station.findById(report.stationNumber);
      }
    },
}


// Date: new GraphQLScalarType({
//   name: 'Date',
//   description: 'Date custom scalar type',
//   parseValue(value) {
//     return new Date(value);
//   },
//   serialize(value) {
//     return value;// value sent to the client
//   },
//   parseLiteral(ast) {
//     if (ast.kind === Kind.INT) {
//       return parseInt(ast.value, 10); // ast value is always in string format
//     }
//     return null;
//   }
// })