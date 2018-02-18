FROM mysql:latest
MAINTAINER Oskari Rautiainen <oskari@oskari.me>

ENV MYSQL_USER=mysql \
    MYSQL_ROOT_PASSWORD=root \
    MYSQL_DATA_DIR=/var/lib/mysql \
    MYSQL_RUN_DIR=/run/mysqld \
    MYSQL_LOG_DIR=/var/log/mysql

COPY setup.sql /docker-entrypoint-initdb.d/db.sql

CMD ["mysqld"]