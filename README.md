# FinalSubmission
Assignment submission (node implementation plus API spec)

This submission consists of API spec using Swagger and its node implementation. As per instructions an API spec is created for
Product API. The Product API is implemented so as to display all the live products that are already in the database (int this case 
a list has been used).

API SPEC (Guidlines and Explanation)

Products have been divided into categories - books, home_and_kitchen, FoodItems, Fashion, Software/Ebooks, 
Beauty_and_personal_care depending upon how the products can be defined. Books will return all kinds of books, FoodItems - Packed Food items (e.g - Maggi Noodles, Amul Milk etc.)
, Fashion - Clothing and latest_trends, Software/Ebooks - Any licenced software or an ebook (e.g. anti-virus, any ebook), 
Beauty_and_personal_care - same as the name suggests.

All these products when on a website like Amazon, Flipkart etc. have some common properties which has been documented in 
GeneralProductSchema and some specific properties which puts the product in a different category. e.g. - If there are two products 
a Book and a Clothing , then both should have a product id or both should have a property stating whether it is delivered online or offline 
but book will have what kind of binding the book is delivered in and a T-shirt should have the sizes in which the it is available.

So there is a specific section of the schema which is differentiating it from the rest of the product types. Thus for each category
a different schema is defined and is extended with the GeneralProductSchema using the allOf functionality of swagger. Which means
that all the properties (that of GeneralProductSchema and a category wise defined schema e.g. Books_Schema) should be present in 
tthe products that are being returned when a particular end point is being called. 

So the specific schema (say Books_Schema) is being extended by GeneralProductSchema by referencing GeneralProductSchema in allOf
functionality in specific schema thus giving us 6 different schemas in this case.

For each category an end point is defined and the schema for that category is being referenced.

Node Implementaion 

Due to lack of data only 3 of the end points are implemented but if more products are added to  the data all the end points should
work perfectly fine in providing the response as per defined in the API Spec.
