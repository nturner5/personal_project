select sum(price)
from cart  
 Join products on productid = products.id;