drop table if exists products, users, cart, orders;

CREATE TABLE products (
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

-- update cart 
-- set qty = qty +1
-- if exists productid;

CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    orderid INTEGER,
    productid int,
    qty INT NOT NULL DEFAULT 1
);
-- DUMNMY DATA
-- INSERT INTO cart (orderid, productid, qty) VALUES 
-- (1, 1, 1),
-- (2, 2, 1),
-- (3, 3, 1);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    userid INTEGER,
    completed BOOLEAN
);

-- CREATE TABLE

INSERT INTO products (name, price, popularity, imageurl, collection, backgroundurl, description, spec, ship) VALUES 
('Marina Rose Gold Mesh', 149.00, true, '//cdn.shopify.com/s/files/1/1653/9561/products/MARINA_-_MESH_ROSE_GOLD_copy_8a3e118d-cd93-4bb1-9e39-b0920f305ee5_large.png?v=1484417397', 'Marina', 'https://cdn.shopify.com/s/files/1/1653/9561/files/marina.jpg?7955300992394463818', 'The Marina Gold Mesh combines timeless elegance with modern minimalism to make for a look that is equal parts trendy and fashionable – and classically upscale. 
Named after Los Angeles beautiful harbor-side neighborhood Marina Del Rey, the Marina Gold Mesh watch is made from rose gold-plated stainless steel and it is sophisticated, but not flashy, just like the polished Marina itself. The Marinas minimalist, ultra-thin watch case and luxury stainless steel mesh strap make it light and comfortable to wear, whether youre heading to a gala or simply going for a walk on the beach. Understated luxury at its best.', 'spec details dummy data', 'Free shipping worldwide. 
Fast and safe with DHL. Easy returns within 14 days of delivery.'),
('Marina Silver Mesh', 149.00, true, '//cdn.shopify.com/s/files/1/1653/9561/products/MARINA_-_MESH_SILVER_aa1ff7a7-9633-48f4-b6bd-01199c43dd46_large.png?v=1484417423', 'Marina', 'https://cdn.shopify.com/s/files/1/1653/9561/files/marina.jpg?7955300992394463818', 'The Marina Gold Mesh combines timeless elegance with modern minimalism to make for a look that is equal parts trendy and fashionable – and classically upscale. 
Named after Los Angeles beautiful harbor-side neighborhood Marina Del Rey, the Marina Gold Mesh watch is made from rose gold-plated stainless steel and it is sophisticated, but not flashy, just like the polished Marina itself. The Marinas minimalist, ultra-thin watch case and luxury stainless steel mesh strap make it light and comfortable to wear, whether youre heading to a gala or simply going for a walk on the beach. Understated luxury at its best.', 'spec details dummy data', 'Free shipping worldwide. 
Fast and safe with DHL. Easy returns within 14 days of delivery.'),
('Pearl Rose Gold Mesh', 149.00, true, '//cdn.shopify.com/s/files/1/1653/9561/products/PEARL_-_MESH_ROSE_GOLD_bb1a4d48-7511-4ec5-b0ab-707f78dfe1cc_large.png?v=1484417450', 'Pearl', 'https://cdn.shopify.com/s/files/1/1653/9561/files/pearl.jpg?7955300992394463818', 'The Marina Gold Mesh combines timeless elegance with modern minimalism to make for a look that is equal parts trendy and fashionable – and classically upscale. 
Named after Los Angeles beautiful harbor-side neighborhood Marina Del Rey, the Marina Gold Mesh watch is made from rose gold-plated stainless steel and it is sophisticated, but not flashy, just like the polished Marina itself. The Marinas minimalist, ultra-thin watch case and luxury stainless steel mesh strap make it light and comfortable to wear, whether youre heading to a gala or simply going for a walk on the beach. Understated luxury at its best.', 'spec details dummy data', 'Free shipping worldwide. 
Fast and safe with DHL. Easy returns within 14 days of delivery.'),
('Pearl Silver Mesh', 200, true, '//cdn.shopify.com/s/files/1/1653/9561/products/PEARL_-_SILVER_MESH_56266684-ebd4-4954-8a19-bceb69e62b64_large.png?v=1484417477', 'Pearl', 'https://cdn.shopify.com/s/files/1/1653/9561/files/pearl.jpg?7955300992394463818', 'The Marina Gold Mesh combines timeless elegance with modern minimalism to make for a look that is equal parts trendy and fashionable – and classically upscale. 
Named after Los Angeles beautiful harbor-side neighborhood Marina Del Rey, the Marina Gold Mesh watch is made from rose gold-plated stainless steel and it is sophisticated, but not flashy, just like the polished Marina itself. The Marinas minimalist, ultra-thin watch case and luxury stainless steel mesh strap make it light and comfortable to wear, whether youre heading to a gala or simply going for a walk on the beach. Understated luxury at its best.', 'spec details dummy data', 'Free shipping worldwide. 
Fast and safe with DHL. Easy returns within 14 days of delivery.'),
('Pearl Silver Mesh', 200, true, '//cdn.shopify.com/s/files/1/1653/9561/products/PEARL_-_BLACK_large.png?v=1490120505', 'Pearl', 'https://cdn.shopify.com/s/files/1/1653/9561/files/pearl.jpg?7955300992394463818', 'The Marina Gold Mesh combines timeless elegance with modern minimalism to make for a look that is equal parts trendy and fashionable – and classically upscale. 
Named after Los Angeles beautiful harbor-side neighborhood Marina Del Rey, the Marina Gold Mesh watch is made from rose gold-plated stainless steel and it is sophisticated, but not flashy, just like the polished Marina itself. The Marinas minimalist, ultra-thin watch case and luxury stainless steel mesh strap make it light and comfortable to wear, whether youre heading to a gala or simply going for a walk on the beach. Understated luxury at its best.', 'spec details dummy data', 'Free shipping worldwide. 
Fast and safe with DHL. Easy returns within 14 days of delivery.'),
('Pearl Silver Mesh', 200, true, "//cdn.shopify.com/s/files/1/1653/9561/products/FELIZ_-_MESH_BLACK_e03a0d4a-b332-403b-b97d-4f028dd40eee_large.png?v=1490120395", 'Pearl', 'https://cdn.shopify.com/s/files/1/1653/9561/files/pearl.jpg?7955300992394463818', 'The Marina Gold Mesh combines timeless elegance with modern minimalism to make for a look that is equal parts trendy and fashionable – and classically upscale. 
Named after Los Angeles beautiful harbor-side neighborhood Marina Del Rey, the Marina Gold Mesh watch is made from rose gold-plated stainless steel and it is sophisticated, but not flashy, just like the polished Marina itself. The Marinas minimalist, ultra-thin watch case and luxury stainless steel mesh strap make it light and comfortable to wear, whether youre heading to a gala or simply going for a walk on the beach. Understated luxury at its best.', 'spec details dummy data', 'Free shipping worldwide. 
Fast and safe with DHL. Easy returns within 14 days of delivery.'),('Pearl Silver Mesh', 200, true, '//cdn.shopify.com/s/files/1/1653/9561/products/PEARL_-_SILVER_MESH_56266684-ebd4-4954-8a19-bceb69e62b64_large.png?v=1484417477', 'Pearl', 'https://cdn.shopify.com/s/files/1/1653/9561/files/pearl.jpg?7955300992394463818', 'The Marina Gold Mesh combines timeless elegance with modern minimalism to make for a look that is equal parts trendy and fashionable – and classically upscale. 
Named after Los Angeles beautiful harbor-side neighborhood Marina Del Rey, the Marina Gold Mesh watch is made from rose gold-plated stainless steel and it is sophisticated, but not flashy, just like the polished Marina itself. The Marinas minimalist, ultra-thin watch case and luxury stainless steel mesh strap make it light and comfortable to wear, whether youre heading to a gala or simply going for a walk on the beach. Understated luxury at its best.', 'spec details dummy data', 'Free shipping worldwide. 
Fast and safe with DHL. Easy returns within 14 days of delivery.');

-- INSERT INTO products (name, price, popularity, imageurl, collection, backgroundurl, description, spec, ship)  
-- VALUES ('Marina Silver Mesh', 149.00, true, '//cdn.shopify.com/s/files/1/1653/9561/products/MARINA_-_MESH_SILVER_aa1ff7a7-9633-48f4-b6bd-01199c43dd46_large.png?v=1484417423', 'Marina', 'https://cdn.shopify.com/s/files/1/1653/9561/files/marina.jpg?7955300992394463818', 'The Marina Gold Mesh combines timeless elegance with modern minimalism to make for a look that is equal parts trendy and fashionable – and classically upscale. 
-- Named after Los Angeles beautiful harbor-side neighborhood Marina Del Rey, the Marina Gold Mesh watch is made from rose gold-plated stainless steel and it is sophisticated, but not flashy, just like the polished Marina itself. The Marinas minimalist, ultra-thin watch case and luxury stainless steel mesh strap make it light and comfortable to wear, whether youre heading to a gala or simply going for a walk on the beach. Understated luxury at its best.', 'spec details dummy data', 'Free shipping worldwide. 
-- Fast and safe with DHL. 
-- Easy returns within 14 days of delivery.');
-- INSERT INTO products (name, price, popularity, imageurl, collection, backgroundurl, description, spec, ship)  
-- VALUES ('Pearl Rose Gold Mesh', 149.00, true, '//cdn.shopify.com/s/files/1/1653/9561/products/PEARL_-_MESH_ROSE_GOLD_bb1a4d48-7511-4ec5-b0ab-707f78dfe1cc_large.png?v=1484417450', 'Pearl', 'https://cdn.shopify.com/s/files/1/1653/9561/files/pearl.jpg?7955300992394463818', 'The Marina Gold Mesh combines timeless elegance with modern minimalism to make for a look that is equal parts trendy and fashionable – and classically upscale. 
-- Named after Los Angeles beautiful harbor-side neighborhood Marina Del Rey, the Marina Gold Mesh watch is made from rose gold-plated stainless steel and it is sophisticated, but not flashy, just like the polished Marina itself. The Marinas minimalist, ultra-thin watch case and luxury stainless steel mesh strap make it light and comfortable to wear, whether youre heading to a gala or simply going for a walk on the beach. Understated luxury at its best.', 'spec details dummy data', 'Free shipping worldwide. 
-- Fast and safe with DHL. 
-- Easy returns within 14 days of delivery.');
-- INSERT INTO products (name, price, popularity, imageurl, collection, backgroundurl, description, spec, ship)  
-- VALUES ('Pearl Silver Mesh', 200, true, '//cdn.shopify.com/s/files/1/1653/9561/products/PEARL_-_SILVER_MESH_56266684-ebd4-4954-8a19-bceb69e62b64_large.png?v=1484417477', 'Pearl', 'https://cdn.shopify.com/s/files/1/1653/9561/files/pearl.jpg?7955300992394463818', 'The Marina Gold Mesh combines timeless elegance with modern minimalism to make for a look that is equal parts trendy and fashionable – and classically upscale. 
-- Named after Los Angeles beautiful harbor-side neighborhood Marina Del Rey, the Marina Gold Mesh watch is made from rose gold-plated stainless steel and it is sophisticated, but not flashy, just like the polished Marina itself. The Marinas minimalist, ultra-thin watch case and luxury stainless steel mesh strap make it light and comfortable to wear, whether youre heading to a gala or simply going for a walk on the beach. Understated luxury at its best.', 'spec details dummy data', 'Free shipping worldwide. 
-- Fast and safe with DHL. 
-- Easy returns within 14 days of delivery.');

INSERT INTO users (first_name, last_name, username, password) VALUES
('Jon', 'Myrick', 'jon', '123'),
('nate', 'turner', 'nate', '123');


INSERT INTO orders(userid, completed) VALUES
(0, false),
(1, true);
