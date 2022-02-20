reate database pruebacodifico;

create table Client(
	ClientID INT NOT NULL UNIQUE,
	NameClient NCHAR(255) NOT NULL,
	Age INT NOT NULL,
	City NCHAR(255) NOT NULL, 
	PRIMARY KEY(ClientID),
);
create Table Orders(
	OrderID INT NOT NULL UNIQUE,
	OrderDate DATETIME NOT NULL,
	Amount FLOAT NOT NULL,
	ClientID INT NOT NULL,
	primary key(OrderId),
	CONSTRAINT FK_Oders_client FOREIGN KEY(ClientID) REFERENCES Client(ClientID)
);

insert into Client("ClientID" , "NameClient", "Age","City") VALUES( 1104934897, 'Aldemar Niño', 18, 'Ibague' );
insert into Client("ClientID" , "NameClient", "Age","City") VALUES( 1104934898, 'Juan Valdez', 35, 'Bogota' );
insert into Client("ClientID" , "NameClient", "Age","City") VALUES( 1104934899, 'Pedro Fernandez', 35, 'Medellin' );


insert into Orders(OrderID, OrderDate, Amount, ClientID )VALUES( 1, '2007-05-24', 17.500, 1104934897 );
insert into Orders(OrderID, OrderDate, Amount, ClientID )VALUES( 2, '2016-03-25', 50.200, 1104934897 );
insert into Orders(OrderID, OrderDate, Amount, ClientID )VALUES( 3, '2017-10-13', 1.500, 1104934897 );
insert into Orders(OrderID, OrderDate, Amount, ClientID )VALUES( 4, '2019-12-12', 112.300, 1104934897 );
insert into Orders(OrderID, OrderDate, Amount, ClientID )VALUES( 5, '2020-1-03', 19.300, 1104934897 );
insert into Orders(OrderID, OrderDate, Amount, ClientID )VALUES( 6, '2018-11-12', 3.200, 1104934897 );

insert into Orders(OrderID, OrderDate, Amount, ClientID )VALUES( 7, '2012-03-23', 15.500, 1104934898 );
insert into Orders(OrderID, OrderDate, Amount, ClientID )VALUES( 8, '2013-12-11', 13.200, 1104934898 );
insert into Orders(OrderID, OrderDate, Amount, ClientID )VALUES( 9, '2018-03-22', 12.500, 1104934898 );
insert into Orders(OrderID, OrderDate, Amount, ClientID )VALUES( 10, '2022-01-22', 112.500, 1104934898 );
insert into Orders(OrderID, OrderDate, Amount, ClientID )VALUES( 11, '2022-03-25', 1.000, 1104934898 );
insert into Orders(OrderID, OrderDate, Amount, ClientID )VALUES( 12, '2021-12-31', 118.000, 1104934898 );
insert into Orders(OrderID, OrderDate, Amount, ClientID )VALUES( 13, '2020-07-12', 11.220, 1104934898 );

insert into Orders(OrderID, OrderDate, Amount, ClientID )VALUES( 14, '2022-12-02', 110.000, 1104934899 );
insert into Orders(OrderID, OrderDate, Amount, ClientID )VALUES( 15, '2022-01-13', 80.000, 1104934899 );
insert into Orders(OrderID, OrderDate, Amount, ClientID )VALUES( 16, '2018-11-22', 113.000, 1104934899 );
insert into Orders(OrderID, OrderDate, Amount, ClientID )VALUES( 17, '2021-11-12', 314.000, 1104934899 );
insert into Orders(OrderID, OrderDate, Amount, ClientID )VALUES( 18, '2022-01-03', 212.000, 1104934899 );
insert into Orders(OrderID, OrderDate, Amount, ClientID )VALUES( 19, '2022-02-14', 118.000, 1104934899 );
insert into Orders(OrderID, OrderDate, Amount, ClientID )VALUES( 20, '2022-12-02', 213.000, 1104934899 );


-- busqueda en la base de datos
select CLient.ClientID, NameClient, Sum(Orders.Amount) AS SumTotal from 
Client INNER JOIN Orders on Client.ClientID = ORDERS.ClientID  where Orders.OrderDate BETWEEN '2022-01-01' and '2022-12-31' GROUP BY Client.ClientID, NameClient;  



