# BAMAZON-MySQL-App:
Geoffry Aezos's Bamazon Welcomes You!

BAMAZON is like AMAZON. However, while AMAZON is owned by Jeff Bezos,BAMAZON is owned by his lesser know twin brother Geoff Aezos. BAMAZON is a command line node and mysql app that takes in parameters and gives you back data. The app has three views: Customer, Store Manager and District Supervior!

# BAMAZON uses the following list of example commands:
    * Customer:
        The customer view is all about adding items to a shopping cart and receiving an order total.
    * Store Manager:
        This view helps the store manager assess low inventory, available products, adding new products to the store and reordering products.
    * District Supervisor:
        This view is all about meeting sales goals. The district supervisor has to know if products are selling and if the store is profitable!

# Technologies used:
    * Node.js
    * Javascript
    * MySQL

# NPM Packages:
    * mysql - A package that connects to MySQL databases and tables.
    * console.table - A package that improves table views.
    * inquirer - A simple NPM package that allows questions to be asked through the command line.
    * colors - adding a bit of flare when separating the commands above.

# How to Run BAMAZON:
bamazonCustomer: node bamazonCustomer.js will display products available for purchase through the Bamazon site:

    This will show the following information about the products listed in your terminal/bash window:

        Product ID
        Product Name
        Department
        Price

    The user will be directed to adding a 'Product ID' and 'Quantity' to their cart.

    The app will check to see if the product selected is in stock and if it is, it will total the order and remove the quantity from the store. 

    IF the product is not in stock, the customer will be notified and returned to the store front.

bamazonManager: node bamazonManager.js will display a series of questions: 

        Available Products
        Low Inventory
        Add to Inventory
        Add New Product

    Each of these questions will display different information.

    Available Products: This view will display a table of all of the available products within the store.

    Low Inventory: This view will display only products with a low inventory under 5 items.

    Add to Inventory: This view will request a 'Product ID' and 'Quantity' to reorder.
        IF the quantity to reorder is over 5000 items, the manager will receive a statement that the products cannot be ordered at this time.
    
    Add New Product: This view will display a series of questions to add new products to the store.

bamazonSupervisor: node bamazonSupervisor.js will display the district supervisor view. 

    This section is incomplete as of 12/16/19.

![BAMAZON DEMO](/images/BAMAZON_Customer_&_Manager.mov)

# Author
Caitlan Jeffrey

# Special Thanks
Thanks to my Tutor (Isabel) and TA's (Austin and Leah) for helping me through my project!