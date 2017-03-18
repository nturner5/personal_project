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

drop table if exists products, users, cart, orders;

CREATE TABLE products(
   id serial PRIMARY KEY,
   name text,
   price int,
   popularity boolean,
   imageurl text,
   collection text,
   backgroundurl text,
   description text,
   spec text,
   ship text

);



CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    orderid INTEGER REFERENCES orders(id),
    productid INTEGER REFERENCES products(id)
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    userid INTEGER REFERENCES users(id),
    completed BOOLEAN
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255)
);


-- CREATE TABLE

INSERT INTO products (name, price, popularity, imageurl, collection, backgroundurl, description, spec, ship)  
VALUES ('Marina Rose Gold Mesh', 149.00, true, '//cdn.shopify.com/s/files/1/1653/9561/products/MARINA_-_MESH_ROSE_GOLD_copy_8a3e118d-cd93-4bb1-9e39-b0920f305ee5_large.png?v=1484417397', 'Marina', 'https://cdn.shopify.com/s/files/1/1653/9561/files/marina.jpg?7955300992394463818', 'The Marina Gold Mesh combines timeless elegance with modern minimalism to make for a look that is equal parts trendy and fashionable – and classically upscale. 
Named after Los Angeles beautiful harbor-side neighborhood Marina Del Rey, the Marina Gold Mesh watch is made from rose gold-plated stainless steel and it is sophisticated, but not flashy, just like the polished Marina itself. The Marinas minimalist, ultra-thin watch case and luxury stainless steel mesh strap make it light and comfortable to wear, whether youre heading to a gala or simply going for a walk on the beach. Understated luxury at its best.', 'spec details dummy data', 'Free shipping worldwide. 
Fast and safe with DHL. 
Easy returns within 14 days of delivery.');
INSERT INTO products (name, price, popularity, imageurl, collection, backgroundurl, description, spec, ship)  
VALUES ('Marina Silver Mesh', 149.00, true, '//cdn.shopify.com/s/files/1/1653/9561/products/MARINA_-_MESH_SILVER_aa1ff7a7-9633-48f4-b6bd-01199c43dd46_large.png?v=1484417423', 'Marina', 'https://cdn.shopify.com/s/files/1/1653/9561/files/marina.jpg?7955300992394463818', 'The Marina Gold Mesh combines timeless elegance with modern minimalism to make for a look that is equal parts trendy and fashionable – and classically upscale. 
Named after Los Angeles beautiful harbor-side neighborhood Marina Del Rey, the Marina Gold Mesh watch is made from rose gold-plated stainless steel and it is sophisticated, but not flashy, just like the polished Marina itself. The Marinas minimalist, ultra-thin watch case and luxury stainless steel mesh strap make it light and comfortable to wear, whether youre heading to a gala or simply going for a walk on the beach. Understated luxury at its best.', 'spec details dummy data', 'Free shipping worldwide. 
Fast and safe with DHL. 
Easy returns within 14 days of delivery.');
INSERT INTO products (name, price, popularity, imageurl, collection, backgroundurl, description, spec, ship)  
VALUES ('Pearl Rose Gold Mesh', 149.00, true, '//cdn.shopify.com/s/files/1/1653/9561/products/PEARL_-_MESH_ROSE_GOLD_bb1a4d48-7511-4ec5-b0ab-707f78dfe1cc_large.png?v=1484417450', 'Pearl', 'https://cdn.shopify.com/s/files/1/1653/9561/files/pearl.jpg?7955300992394463818', 'The Marina Gold Mesh combines timeless elegance with modern minimalism to make for a look that is equal parts trendy and fashionable – and classically upscale. 
Named after Los Angeles beautiful harbor-side neighborhood Marina Del Rey, the Marina Gold Mesh watch is made from rose gold-plated stainless steel and it is sophisticated, but not flashy, just like the polished Marina itself. The Marinas minimalist, ultra-thin watch case and luxury stainless steel mesh strap make it light and comfortable to wear, whether youre heading to a gala or simply going for a walk on the beach. Understated luxury at its best.', 'spec details dummy data', 'Free shipping worldwide. 
Fast and safe with DHL. 
Easy returns within 14 days of delivery.');
INSERT INTO products (name, price, popularity, imageurl, collection, backgroundurl, description, spec, ship)  
VALUES ('Pearl Silver Mesh', 200, true, '//cdn.shopify.com/s/files/1/1653/9561/products/PEARL_-_SILVER_MESH_56266684-ebd4-4954-8a19-bceb69e62b64_large.png?v=1484417477', 'Pearl', 'https://cdn.shopify.com/s/files/1/1653/9561/files/pearl.jpg?7955300992394463818', 'The Marina Gold Mesh combines timeless elegance with modern minimalism to make for a look that is equal parts trendy and fashionable – and classically upscale. 
Named after Los Angeles beautiful harbor-side neighborhood Marina Del Rey, the Marina Gold Mesh watch is made from rose gold-plated stainless steel and it is sophisticated, but not flashy, just like the polished Marina itself. The Marinas minimalist, ultra-thin watch case and luxury stainless steel mesh strap make it light and comfortable to wear, whether youre heading to a gala or simply going for a walk on the beach. Understated luxury at its best.', 'spec details dummy data', 'Free shipping worldwide. 
Fast and safe with DHL. 
Easy returns within 14 days of delivery.');

INSERT INTO users (first_name, last_name, username, password) VALUES
('Jon', 'Myrick', 'jon', '123'),
('nate', 'turner', 'nate', '123');


INSERT INTO orders(userid, completed) VALUES
(0, false),
(1, true);