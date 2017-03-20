select *
from cart  
 Join products on productid = products.id;
--  where id = $1;