INSERT INTO cart (orderid, productid) VALUES (1,$1);
-- insert into person (name) values (500);
-- select *
-- from products   
--  Join cart on products.id = productid
-- --  where id = $1; 
-- INSERT INTO  cart (orderid, productid, qty)
-- VALUES (1, $1, 1)
-- ON DUPLICATE KEY UPDATE qty = qty + VALUES(qty), price = VALUES(price);

-- INSERT INTO cart (orderid, productid, qty) VALUES (1, $1, 1)
--   ON DUPLICATE KEY UPDATE qty = qty+1;

-- UPDATE cart SET c=c+1 WHERE a=1;