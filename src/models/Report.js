
// class Report {

//     constructor(id,  date, employee, station, in, out) { 
        
//         this.id = id;
//         this.date = date;
//         this.employee = employee;
//         this.station = station;
//         this.in = in;
//         this.out = out;

//     }
  
//   };

  
// export default Report;
  

module.exports = (sequelize, Sequelize) => {
    return sequelize.define('Report', {
        in: { type: Sequelize.DATE, allowNull: true },
        out: { type: Sequelize.DATE, allowNull: true }
    })
  }
  