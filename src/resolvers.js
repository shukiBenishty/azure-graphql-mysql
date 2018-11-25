// @flow
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import moment from 'moment';

export let resolvers = {

    Query: {
        employee: () => {},
        employees: () => {},
        group: () => {},
        groups: () => {},
        station: () => {},
        stations: () => {},
        day: () => {},
        days: () => {},
        report: () => {},
        reports: () => {},
        schedule: () => {},
        schedules: () => {},
    },
    
    Employee: {},
    Group: {},
    Station: {},
    Day: {},
    Schedule: {},
    Report: {},

    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
          return moment(value, 'DD/MM/YYYY');
        },
        serialize(value: moment) {
          return value.format('DD/MM/YYYY');// value sent to the client
        },
        parseLiteral(ast) {
          if (ast.kind === Kind.INT) {
            return parseInt(ast.value, 10); // ast value is always in string format
          }
          return null;
        }
    })
}
