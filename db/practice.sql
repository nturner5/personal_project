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

drop table products;

CREATE TABLE products(
   id serial PRIMARY KEY,
   name text,
   price int,
   popularity boolean,
   imageurl text,
   collection text
);

INSERT INTO products (name, price, popularity, imageurl, collection)  
VALUES ('Marina Rose Gold Mesh', 149.00, true, '//cdn.shopify.com/s/files/1/1653/9561/products/MARINA_-_MESH_ROSE_GOLD_copy_8a3e118d-cd93-4bb1-9e39-b0920f305ee5_large.png?v=1484417397', 'Marina');
INSERT INTO products (name, price, popularity, imageurl, collection)  
VALUES ('Marina Silver Mesh', 149.00, true, '//cdn.shopify.com/s/files/1/1653/9561/products/MARINA_-_MESH_SILVER_aa1ff7a7-9633-48f4-b6bd-01199c43dd46_large.png?v=1484417423', 'Marina');
INSERT INTO products (name, price, popularity, imageurl, collection)  
VALUES ('Pearl Rose Gold Mesh', 149.00, true, '//cdn.shopify.com/s/files/1/1653/9561/products/PEARL_-_MESH_ROSE_GOLD_bb1a4d48-7511-4ec5-b0ab-707f78dfe1cc_large.png?v=1484417450', 'Pearl');
INSERT INTO products (name, price, popularity, imageurl, collection)  
VALUES ('Pearl Silver Mesh', 200, true, '//cdn.shopify.com/s/files/1/1653/9561/products/PEARL_-_SILVER_MESH_56266684-ebd4-4954-8a19-bceb69e62b64_large.png?v=1484417477', 'Pearl');