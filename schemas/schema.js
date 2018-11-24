const { gql } = require('apollo-server');

export let typeDefs = gql`

  interface INode  {
    id: ID!
  }

  scalar Date

  enum Role {
    MANAGER,
    WORKER
  }

  type Employee implements INode{
    id: ID!

    firstName: String!
    lastName: String!
    birthday: Date!
    registrationDate: Date!
    phone: String!

    schedules(from: Date!, till: Date!): [Schedule]
    reports(from: Date!, till: Date!): [Report]
  }

  type Group implements INode {
    id: ID!

    symbole: Int!
    name: String!

    schedules(from: Date!, till: Date!): [Schedule]
    reports(from: Date!, till: Date!): [Report]
  }

  type Station implements INode {
    id: ID!

    StationNumber: Int!
    role: Role!
    group: Group!

    schedules(from: Date!, till: Date!): [Schedule]
    reports(from: Date!, till: Date!): [Report] 
  }


  type Day implements INode {
    id: ID!
    
    year: String!
    dayOfYear: Int!
    dayOfWeek: Int!
    display: String!
    display_he: String!
    isHoliday: Int!
    holidayName: String!

    schedules(employees: [Int], stations: [Int]): [Schedule]
    reports(employees: [Int], stations: [Int]): [Report]
  }

  type Schedule implements INode {
    id: ID!
  
    date: Day!
    employee: Employee!
    station: Station!
    in: Date!
    out: Date!
  }

  type Report implements INode {
    id: ID!

    date: Day!
    employee: Employee!
    station: Station!
    in: Date
    out: Date
  }


  type Query {
    employee(id: Int!): Employee
    employees: [Employee]
    group(symbole: Int!): Group
    groups: [Group]
    station(StationNumber: Int!): Station
    stations(group: Int): [Station]
    day(data: Date!): Day
    days(from: Date, till: Date): [Day]
    report(data: Date!): Report
    reports(from: Date!, till: Date!): [Report]
    schedule(data: Date!): Schedule
    schedules(from: Date!, till: Date!): [Schedule]
  }

`;


