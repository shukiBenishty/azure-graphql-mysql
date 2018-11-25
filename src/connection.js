const Sequelize = require('sequelize')
const DayModel = require("./models/Day");
const GroupModel = require("./models/Group");
const ReportModel = require("./models/Report");
const ScheduleModel = require("./models/Schedule");
const EmployeeModel = require("./models/Employee");
const StationModel = require("./models/Station");


const sequelize = new Sequelize('test', 'test@dbmysqlersver', 'q1w2e3r4T%Y^', {
    host: 'dbmysqlersver.mysql.database.azure.com',
    dialect: 'mysql',
    operatorsAliases: false
  });

const Day = DayModel(sequelize, Sequelize);
const Report = ReportModel(sequelize, Sequelize);
const Group = GroupModel(sequelize, Sequelize);
const Employee = EmployeeModel(sequelize, Sequelize);
const Schedule = ScheduleModel(sequelize, Sequelize);
const Station = StationModel(sequelize, Sequelize);

// const Day_Report = sequelize.define('Day_Report', {})
// const Day_Schedule = sequelize.define('Day_Schedule', {})

Schedule.belongsTo(Day);
Schedule.belongsTo(Employee);
Schedule.belongsTo(Station);

Report.belongsTo(Day) 
Report.belongsTo(Employee);
Report.belongsTo(Station);

Station.belongsTo(Group)

// Day.belongsToMany(Schedule, { through: Day_Schedule, unique: true })
// Day.belongsToMany(Report, { through: Day_Report, unique: true })

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
    Day,
    Report,
    Schedule,
    Group,
    Employee,
    Station
}



export default sequelize;