
// class Group {

//   constructor(id, symbol, name) {
//     this.id = id;
//     this.symbol = symbol;
//     this.name = name;
//   }

// };

// export default Group;


module.exports = (sequelize, Sequelize) => {
  return sequelize.define('Group', {
    symbol: { type: Sequelize.STRING, allowNull: false,  primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false }
  })
}
