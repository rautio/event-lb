CREATE DATABASE meeting_lb;

USE meeting_lb;

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(254) NOT NULL,
    email VARCHAR(254) NOT NULL,
    salt CHAR(64),
    hash CHAR(254),
    PRIMARY KEY(id)
);

CREATE TABLE team (
    id INT NOT NULL AUTO_INCREMENT,
    admin_id INT NOT NULL,
    name VARCHAR(254) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(admin_id) REFERENCES user(id)
);

CREATE TABLE meeting (
    id INT NOT NULL AUTO_INCREMENT,
    team_id INT NOT NULL,
    reward_points INT NOT NULL,
    name VARCHAR(254) NOT NULL,
    date DATE NOT NULL,
    time DATETIME,
    location VARCHAR(254),
    description TEXT,
    PRIMARY KEY(id),
    FOREIGN KEY(team_id) REFERENCES team(id)
);

CREATE TABLE attendee (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(254) NOT NULL,
    email VARCHAR(254) NOT NULL,
    meeting_id INT NOT NULL,
    team_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(meeting_id) REFERENCES meeting(id),
    FOREIGN KEY(team_id) REFERENCES team(id)
);
