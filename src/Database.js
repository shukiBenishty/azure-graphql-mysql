var casual = require("casual");
var moment = require("moment");
var fs = require("fs");

let Days = JSON.parse(fs.readFileSync("./calendar.js", "utf8"));

let roles = ["רכז", "סייעת", "גננת", "מדריכה", "מנהלת"];
let Groups = [];
for (let index = 0; index < 9; index++) {
  Groups[index] = {
    symbol: casual.integer(111111, 999999),
    name: casual.street
  };
}
let Employees = [];
for (let index = 0; index < 50; index++) {
  Employees[index] = {
    id: casual.integer(111111111, 999999999),
    firstName: casual.first_name,
    lastName: casual.last_name,
    birthday: casual.date("YYYY-MM-DD"),
    registrationDate: casual.date("YYYY-MM-DD"),
    phone: casual.phone
  };
}
let Stations = [];
for (let index = 0; index < Groups.length * roles.length; index++) {
  Stations[index] = {
    stationNumber: casual.integer(1111, 9999),
    role: roles[casual.integer(0, 4)],
    groupSymbol: Groups[casual.integer(0, Groups.length - 1)].symbol
  };
}
let Schedules = [];
for (let index = 0; index < 300; index++) {
  let _in = casual.time("HH:mm:ss");
  let _out = casual.time("HH:mm:ss");
  if (moment(_out, "HH:mm:ss").isBefore(_in, "HH:mm:ss")) {
    let temp = _in;
    _in = _out;
    _out = temp;
  }

  Schedules[index] = {
    date: Days[casual.integer(0, Days.length)].display,
    employeeId: Employees[casual.integer(0, 50 - 1)].id,
    stationNumber:
      Stations[casual.integer(0, Groups.length * roles.length - 1)]
        .stationNumber,
    in: _in,
    out: _out
  };
}
let Reports = [];
for (let index = 0; index < 300; index++) {
  let _in = casual.time("HH:mm:ss");
  let _out = casual.time("HH:mm:ss");
  if (moment(_out, "HH:mm:ss").isBefore(_in, "HH:mm:ss")) {
    let temp = _in;
    _in = _out;
    _out = temp;
  }

  Reports[index] = {
    date: Days[casual.integer(0, Days.length)].display,
    employeeId: Employees[casual.integer(0, 50 - 1)].id,
    stationNumber:
      Stations[casual.integer(0, Groups.length * roles.length - 1)]
        .stationNumber,
    in: _in,
    out: casual.coin_flip ? _out : null
  };
}

let database = {
  Days: Days,
  Employees: Employees,
  Groups: Groups,
  Stations: Stations,
  Schedules: Schedules,
  Reports: Reports
};

fs.writeFile("tempDatabase.js", JSON.stringify(database, null, 2), function(
  err
) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});

export default database;
