use gpwl_db;
db.dropDatabase();

db.pedal_collection.insertMany([ 
    {
        name: "Dunlop Original Cry Baby Wah Wah Pedal",
        manufacturer: "Dunlop",
        type: "Wah",
        rating: 3,
        image: "https://www.pmtonline.co.uk/media/catalog/product/cache/a1b28cf8fc4652b664c189b33cb20963/5/3/53027-11921-Dunlop-GCB95-Crybaby-Standard-Wah-Pedal-Top.jpg",
        retailPrice: 8000,
        width: 100,
        depth: 255
    },
    {
        name: "Blues Driver",
        manufacturer: "Boss",
        type: "Saturation",
        rating: 4,
        image: "https://proaudioland.com/media/wordpress/520c1f509160353b5d2fd559c91ad134.jpg",
        retailPrice: 5000,
        width: 73,
        depth: 129
    },
    {
        name: "DS-1 Distortion",
        manufacturer: "Boss",
        type: "Saturation",
        rating: 5,
        image: "https://cdn.mos.cms.futurecdn.net/F4yMgnhWnt4pScn9vz44tH.jpg",
        retailPrice: 5900,
        width: 73,
        depth: 129
    },        
    {
        name: "Compressor Plus",
        manufacturer: "Keeley",
        type: "Compressor",
        rating: 2,
        image: "https://images-na.ssl-images-amazon.com/images/I/6119Oix2bxL._AC_SL1200_.jpg",
        retailPrice: 6500,
        width: 60,
        depth: 110
    }
]);
