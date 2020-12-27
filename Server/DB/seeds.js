use gpwl_db;
db.dropDatabase();

db.pedal_collection.insertMany([ 
    {
        Name: "Dunlop Original Cry Baby Wah Wah Pedal",
        Manufacturer: "Dunlop",
        Type: "Wah",
        RetailPrice: 8000
    },
    {
        Name: "Blues Driver",
        Manufacturer: "Boss",
        Type: "Saturation",
        RetailPrice: 5000,
    },
    {
        Name: "DS-1 Distortion",
        Manufacturer: "Boss",
        Type: "Saturation",
        RetailPrice: 5900,
    },        
    {
        Name: "Compressor Plus",
        Manufacturer: "Keeley",
        Type: "Compressor",
        RetailPrice: 6500,
    }
]);
