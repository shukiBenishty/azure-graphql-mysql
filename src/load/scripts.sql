CREATE TABLE `groups`
(
  symboleGroup INT NOT NULL,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (symboleGroup)
);

CREATE TABLE stations
(
  StationNumber INT NOT NULL,
  role VARCHAR(25) NOT NULL,
  symboleGroup INT NOT NULL,
  PRIMARY KEY (StationNumber),
  FOREIGN KEY (symboleGroup) REFERENCES `groups`(symboleGroup)
);

CREATE TABLE employees
(
  id INT NOT NULL ,
  firstName VARCHAR(25) NOT NULL,
  lastName VARCHAR(25) NOT NULL,
  birthday DATE NOT NULL,
  registrationDate DATE NOT NULL,
  phone VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE days
(
  `year` INT NOT NULL ,
  dayOfYear INT NOT NULL,
  dayOfWeek INT NOT NULL,
  display VARCHAR(50) NOT NULL,
  display_he VARCHAR(50) NOT NULL,
  isHoliday INT NOT NULL,
  holidayName VARCHAR(100),
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id)
)AUTO_INCREMENT=2849;

CREATE TABLE schedles
(
  id INT NOT NULL AUTO_INCREMENT,
  employeeId INT NOT NULL,
  StationNumber INT NOT NULL,
  startDateId INT NOT NULL,
  endDateId INT NOT NULL,
  PRIMARY KEY (id, employeeId, StationNumber, startDateId, endDateId),
  FOREIGN KEY (employeeId) REFERENCES employees(id),
  FOREIGN KEY (StationNumber) REFERENCES stations(StationNumber),
  FOREIGN KEY (startDateId) REFERENCES days(id),
  FOREIGN KEY (endDateId) REFERENCES days(id)
)AUTO_INCREMENT=3;

CREATE TABLE reports
(
  id INT NOT NULL AUTO_INCREMENT,
  employeeId INT NOT NULL,
  StationNumber INT NOT NULL,
  inDateId INT,
  outDateId INT,
  PRIMARY KEY (id, employeeId, StationNumber, inDateId, outDateId),
  FOREIGN KEY (employeeId) REFERENCES employees(id),
  FOREIGN KEY (StationNumber) REFERENCES stations(StationNumber),
  FOREIGN KEY (inDateId) REFERENCES days(id),
  FOREIGN KEY (outDateId) REFERENCES days(id)
)AUTO_INCREMENT=3;