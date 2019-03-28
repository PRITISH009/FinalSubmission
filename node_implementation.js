var data = {"products" : [
    {
        "product_name": "book1",
        "sku": "#a1",
        "brand/publication": "p1",
        "category": "books",
        "state": "live",
        "display_details": {
        "selling_type": "non-digital-material",
        "display_images": [
            "b1_img1", "b1_img2"
        ],
        "package_dimensions_details": {
            "shipping_weight_in_pounds": 2.5,
            "package_length_in_inches": 10,
            "package_width_in_inches": 5,
            "package_height_in_inches": 0.5
        },
        "price": {
            "base_price": 499.00,
            "taxes": {
            "cgst": 2.5,
            "sgst": 2.5,
            "igst": 2.5,
            "utggst": 2.5
            },
            "margin": 10
        },
        "warranty/guarantee": {
            "start_date": "2019-03-28",
            "warranty/guarantee_period": 30
        },
        "return_policy": {
            "applicable_or_not": "true",
            "return_before": "2019-04-27"
        },
        "sender": {
            "sender_skw": 1,
            "sender_address": "add1"
        },
        "offers": {
            "valid": "invalid",
            "relation": {
            "status": "Parent",
            "Parent_id":"#a1",
            "Child_id": "null"
            }
        },
        "quantity": 0,
        "reviews": [
            {
            "feedback": "Good Book",
            "ratings": 4
            }
        ]
        },
        "Author": "Auth1",
        "blurb": "Book_1_blurb",
        "binding": "HardBound"
}, 
{
    "product_name": "book2",
    "sku": "#a2",
    "brand/publication": "p1",
    "category": "books",
    "state": "live",
    "display_details": {
    "selling_type": "non-digital-material",
    "display_images": [
        "b2_img1", "b2_img2"
    ],
    "package_dimensions_details": {
        "shipping_weight_in_pounds": 2.5,
        "package_length_in_inches": 10,
        "package_width_in_inches": 5,
        "package_height_in_inches": 0.5
    },
    "price": {
        "base_price": 599.00,
        "taxes": {
        "cgst": 2.5,
        "sgst": 2.5,
        "igst": 2.5,
        "utggst": 2.5
        },
        "margin": 10
    },
    "warranty/guarantee": {
        "start_date": "2019-03-28",
        "warranty/guarantee_period": 30
    },
    "return_policy": {
        "applicable_or_not": "true",
        "return_before": "2019-04-27"
    },
    "sender": {
        "sender_skw": 1,
        "sender_address": "add1"
    },
    "offers": {
        "valid": "invalid",
        "relation": {
        "status": "Parent",
        "Parent_id" : "#a2",
        "Child_id" : "null"
        }
    },
    "quantity": 0,
    "reviews": [
        {
        "feedback": "Not Good",
        "ratings": 3
        }
    ]
    },
    "Author": "Auth1",
    "blurb": "Book_2_blurb",
    "binding": "PaperBack"
}, 
{
    "product_name": "Stove",
    "sku": "#a3",
    "brand/publication": "Prestige",
    "category": "home_and_kitchen",
    "state": "live",
    "display_details": {
      "selling_type": "non-digital-item",
      "display_images": [
        "string"
      ],
      "package_dimensions_details": {
        "shipping_weight_in_pounds": 20,
        "package_length_in_inches": 36,
        "package_width_in_inches": 24,
        "package_height_in_inches": 10
      },
      "price": {
        "base_price": 3999,
        "taxes": {
          "cgst": 2.5,
          "sgst": 2.5,
          "igst": 2.5,
          "utggst": 2.5
        },
        "margin": 15
      },
      "warranty/guarantee": {
        "start_date": "2019-03-28",
        "warranty/guarantee_period": 365
      },
      "return_policy": {
        "applicable_or_not": "true",
        "return_before": "2019-04-27"
      },
      "sender": {
        "sender_skw": 2,
        "sender_address": "add2"
      },
      "offers": {
        "valid": "valid",
        "relation": {
          "status": "Parent",
          "Parent_id": "null",
          "Child_id" : "#a4"
        }
      },
      "quantity": 1,
      "reviews": [
        {
          "feedback": "Sturdy Stove with a sleak design",
          "ratings": 4.5
        }
      ]
    },
    "model_details_and_specs": "hka_pres_slvr_blk_mod",
    "color": "Silver-black",
    "mgf_date": "2019-01-28"
  },
{
    "product_name": "Stove Lighter",
    "sku": "#a4",
    "brand/publication": "Prestige",
    "category": "home_and_kitchen",
    "state": "live",
    "display_details": {
      "selling_type": "non-digital-item",
      "display_images": [
        "img1", "img2"
      ],
      "package_dimensions_details": {
        "shipping_weight_in_pounds": 4,
        "package_length_in_inches": 8,
        "package_width_in_inches": 3,
        "package_height_in_inches": 0.3
      },
      "price": {
        "base_price": 180,
        "taxes": {
          "cgst": 2.5,
          "sgst": 2.5,
          "igst": 2.5,
          "utggst": 2.5
        },
        "margin": 0
      },
      "warranty/guarantee": {
        "start_date": "2019-03-28",
        "warranty/guarantee_period": 30
      },
      "return_policy": {
        "applicable_or_not": "true",
        "return_before": "2019-04-27"
      },
      "sender": {
        "sender_skw": 2,
        "sender_address": "add2"
      },
      "offers": {
        "valid": "valid",
        "relation": {
          "status": "Child",
          "Parent_id": "#a3",
          "Child_id" : "null"
        }
      },
      "quantity": 1,
      "reviews": [
        {
          "feedback": "Ok",
          "ratings": 4
        }
      ]
    },
    "model_details_and_specs": "hmka_lig_basic_mdl",
    "color": "Silver",
    "mgf_date": "2019-02-28"
  },
  {
    "product_name": "Hajmola",
    "sku": "#a5",
    "brand/publication": "Hajmola",
    "category": "FoodItems",
    "state": "live",
    "display_details": {
      "selling_type": "non-digital-item",
      "display_images": [
        "img1", "img2"
      ],
      "package_dimensions_details": {
        "shipping_weight_in_pounds": 2,
        "package_length_in_inches": 7,
        "package_width_in_inches": 7,
        "package_height_in_inches": 5
      },
      "price": {
        "base_price": 35,
        "taxes": {
          "cgst": 2.5,
          "sgst": 2.5,
          "igst": 2.5,
          "utggst": 2.5
        },
        "margin": 5
      },
      "warranty/guarantee": {
        "start_date": "2019-03-28",
        "warranty/guarantee_period": 365
      },
      "return_policy": {
        "applicable_or_not": "false",
        "return_before": "null"
      },
      "sender": {
        "sender_skw": 3,
        "sender_address": "add3"
      },
      "offers": {
        "valid": "invalid",
        "relation": {
          "status": "Parent",
          "Parent_id": "#a5",
          "Child_id": "null"
        }
      },
      "quantity": 1,
      "reviews": [
        {
          "feedback": "Tastes Like Shit! Its not meant to help you digest but help you DIE!!!",
          "ratings": 1
        }
      ]
    },
    "best_before": "string",
    "product_type": "Veg",
    "ingredients": [
      "shit"
    ]
  },
  {
    "product_name": "Cup Noodles",
    "sku": "#a6",
    "brand/publication": "Maggi",
    "category": "FoodItems",
    "state": "live",
    "display_details": {
      "selling_type": "non-digital-item",
      "display_images": [
        "img1", "img2"
      ],
      "package_dimensions_details": {
        "shipping_weight_in_pounds": 2,
        "package_length_in_inches": 7,
        "package_width_in_inches": 7,
        "package_height_in_inches": 5
      },
      "price": {
        "base_price": 35,
        "taxes": {
          "cgst": 2.5,
          "sgst": 2.5,
          "igst": 2.5,
          "utggst": 2.5
        },
        "margin": 5
      },
      "warranty/guarantee": {
        "start_date": "2019-03-28",
        "warranty/guarantee_period": 365
      },
      "return_policy": {
        "applicable_or_not": "false",
        "return_before": "null"
      },
      "sender": {
        "sender_skw": 3,
        "sender_address": "add3"
      },
      "offers": {
        "valid": "invalid",
        "relation": {
          "status": "Parent",
          "Parent_id": "#a6",
          "Child_id": "null"
        }
      },
      "quantity": 1,
      "reviews": [
        {
          "feedback": "Life Saver for Clg Students",
          "ratings": 5
        }
      ]
    },
    "best_before": "string",
    "product_type": "Veg",
    "ingredients": [
      "i1", "i2 and so on"
    ]
  },
  {
    "product_name": "Book3",
    "sku": "#b1",
    "brand/publication": "p1",
    "category": "books",
    "state": "draft",
    "display_details": {
      "selling_type": "non-digital-item",
      "display_images": [
        "img1" ,"img2"
      ],
      "package_dimensions_details": {
        "shipping_weight_in_pounds": 8,
        "package_length_in_inches": 7,
        "package_width_in_inches": 5,
        "package_height_in_inches": 5
      },
      "price": {
        "base_price": 1999.00,
        "taxes": {
          "cgst": 2.5,
          "sgst": 2.5,
          "igst": 2.5,
          "utggst": 2.5
        },
        "margin": 0
      },
      "warranty/guarantee": {
        "start_date": "null",
        "warranty/guarantee_period": 0
      },
      "return_policy": {
        "applicable_or_not": "true",
        "return_before": "null"
      },
      "sender": {
        "sender_skw": 0,
        "sender_address": "null"
      },
      "offers": {
        "valid": "invalid",
        "relation": {
          "status": "Parent",
          "Parent_id": "#b1",
          "Child_id": "null"
        }
      },
      "quantity": 0,
      "reviews": [
        {
          "feedback": "null",
          "ratings": 0
        }
      ]
    },
    "Author": "Auth1",
    "blurb": "null",
    "binding": "HardBound"
  }
]
}
var express = require("express");
var app = express();
const bodyparser = require('body-parser');
const path = require('path');
app.use(bodyparser.json());
app.set('views', path.join("./", "views"));
app.set('view engine', 'pug');

app.get("/", function(req, res) {
    new Promise((resolve, reject) => {
        console.log("All products are already created hence of to resolve the promise");
        resolve();
    })
    .then(() => {
        res.render("Display_page", data);
    })
    .catch(() => {
        res.status(404);
        res.send("Opps");
    })
});

app.get("/:category" , function(req, res){
    new Promise((resolve, reject) => {
        console.log("Getting All items");
        let products = [];
        for(let i=0; i<data["products"].length; i++){
            if((data["products"][i].category == req.params.category) && (data["products"][i].state=="live")){
                products.push(data["products"][i]);
            }  
        }
        data1 = {"products" : products};
        console.log(products);
        resolve(data1);
    })
    .then((data1)=>{
        res.render("Display_page",  data1);
    })
    .catch(() => {
        res.status(404);
        res.send("Opps");
    })
});

app.get("/:category/:product" , function(req, res){
    new Promise((resolve, reject) => {
        console.log("Getting All books");
        let products = [];
        console.log(req.params)
        for(let i=0; i<data["products"].length; i++){
            if((data["products"][i].category == req.params.category)&&(data["products"][i].product_name == req.params.product)){
                products.push(data.products[i]);
            }  
        }
        data1 = {"products" : products};
        console.log(data1);
        resolve(data1);
    })
    .then((data1)=>{
        res.render("Display_page",  data1);
    })
    .catch(() => {
        res.status(404);
        res.send("Opps");
    })
});
app.listen(3000);