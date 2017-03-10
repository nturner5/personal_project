CREATE TABLE products(
   id serial PRIMARY KEY,
   name text,
   size int,
   color text, 
   collection text,
   price int,
   popularity boolean,
   description text
);

-- DELETE * FROM products;

INSERT INTO products (name, size, color, collection, price, popularity, description)  
VALUES ('watchx', 200, 'silver', 'special', 123, true, 'elegant');

-- drop table products;

CREATE TABLE products(
   id serial PRIMARY KEY,
   name text,
   price int,
   popularity boolean,
   imageurl text
);

INSERT INTO products (name, price, popularity, imageurl)  
VALUES ('Marina Rose Gold Mesh', 149.00, true, '//cdn.shopify.com/s/files/1/1653/9561/products/MARINA_-_MESH_ROSE_GOLD_copy_8a3e118d-cd93-4bb1-9e39-b0920f305ee5_large.png?v=1484417397');
INSERT INTO products (name, price, popularity, imageurl)  
VALUES ('watchx', 200, true, 'elegant');
INSERT INTO products (name, price, popularity, imageurl)  
VALUES ('watchx', 200, true, 'elegant');
INSERT INTO products (name, price, popularity, imageurl)  
VALUES ('watchx', 200, true, 'elegant');