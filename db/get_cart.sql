-- select *
-- from cart  
--  Join products on productid = products.id;
--  where id = $1;

SELECT MIN(productid) AS id, products.name, products.collection, products.price, products.imageurl 
FROM cart
Join products on productid = products.id
GROUP BY products.name, products.collection, products.price, products.imageurl;