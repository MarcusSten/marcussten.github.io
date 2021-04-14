function myScript3(){

    var product = [
        {
            id: 0001,
            title: "Jacket",
            description: "Amazing red jacket",
            price: 250,
            count: 1,
            color: "Red",
            size: "S",
            brend: "Laconte",
            designer: "Johnny Cash",
            category: "Jackets",
            season: "Summer",
            pic: "jacket.jpg"
        },
            {
            id: 0002,
            title: "Polo",
            description: "Excellent green polo",
            price: 50,
            count: 1,
            color: "Green",
            size: "M",
            brend: "Gusi",
            designer: "Bob Dylan",
            category: "Polos",
            season: "Autumn",
            pic: "polo.jpg"
        },
        {
            id: 0003,
            title: "Short",
            description: "Luxurious black short",
            price: 100,
            count: 1,
            color: "Black",
            size: "S",
            brend: "Dolche & Gavvana",
            category: "Shorts",
            designer: "James Brown",
            season: "Summer",
            pic: "Short.jpg"
        },
        {
            id: 0004,
            title: "Sweater",
            description: "Bright white sweater",
            price: 400,
            count: 1,
            color: "White",
            size: "XL",
            brend: "Diar",
            designer: "Elton John",
            category: "Sweaters",
            season: "Autumn",
            pic: "Sweater.jpg"
        }
    ]; 

    console.table(product, ["color", "title", "price"]);

}