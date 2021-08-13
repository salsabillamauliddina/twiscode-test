
CREATE TABLE Transactions (
  Id int not null,
  TanggalOrder varchar(255),
  StatusPemesanan varchar(255),
  StatusPelunasan varchar(255),
  TanggalPembayaran Date,
);

INSERT INTO Transactions 
VALUES ("1","2021-08-13","pending","pending" ,null);


CREATE TABLE DetailTransactions (
  Id int,
  IdTransaction int,
  Harga int,
  Jumlah int,
  Subtotal int,
);

INSERT INTO DetailTransactions 
VALUES ("3","4","500000","7" ,"3500000");

SELECT Transactions.TanggalOrder AS tanggal_order, Transactions.StatusPelunasan AS status, DetailTransactions.IdTransaction AS id, DetailTransactions.Jumlah AS jumlah_barang, DetailTransactions.Subtotal AS total

SELECT ,
FROM Transactions