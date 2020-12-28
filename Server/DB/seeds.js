use gpwl_db;
db.dropDatabase();

db.pedal_collection.insertMany([ 
    {
        name: "Dunlop Original Cry Baby Wah Wah Pedal",
        manufacturer: "Dunlop",
        type: "Wah",
        retailPrice: 8000
    },
    {
        name: "Blues Driver",
        manufacturer: "Boss",
        type: "Saturation",
        retailPrice: 5000,
    },
    {
        name: "DS-1 Distortion",
        manufacturer: "Boss",
        type: "Saturation",
        retailPrice: 5900,
    },        
    {
        name: "Compressor Plus",
        manufacturer: "Keeley",
        type: "Compressor",
        retailPrice: 6500,
    }
]);
