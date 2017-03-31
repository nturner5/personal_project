select sum(price * qty) 
from cart  
 Join products on productid = products.id;