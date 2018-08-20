use burgers2_db;


insert into burgers (burger_name, devoured, createdAt, updatedAt, CustomerId) values ('Bacon Cheddar Burger',false, current_timestamp(), current_timestamp(),7);
insert into burgers (burger_name, createdAt, updatedAt, CustomerId) values ('Yankee Burger', current_timestamp(), current_timestamp(),7);
insert into burgers (burger_name, createdAt, updatedAt, CustomerId) values ('Dixie Burger', current_timestamp(), current_timestamp(),7);
insert into burgers (burger_name, createdAt, updatedAt, CustomerId) values ('Cowboy Burger', current_timestamp(), current_timestamp(),7);
insert into burgers (burger_name, createdAt, updatedAt, CustomerId) values ('Salsa Burger', current_timestamp(), current_timestamp(),7);


INSERT INTO burgers2_db.customers (customer_name, createdAt, updatedAt)
VALUES ('Jenni', current_timestamp(), current_timestamp());
INSERT INTO burgers2_db.customers (customer_name, createdAt, updatedAt)
VALUES ('Bill', current_timestamp(), current_timestamp());



select * from customers;
select * from burgers;
truncate table burgers;

delete from customers where id > 0;
DELETE FROM burgers WHERE id=1;