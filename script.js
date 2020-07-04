    let pantenes = ["dettol", "Life buoy", "lux"];
        

    function logger() {
    for(let pantene of pantenes) {
    console.log(pantene);
    }
    }


            logger();


            let degrees = [29, 35, 46, 50]


            function hottestDays(ply, number) {
            for(let ply of degrees) {
            if (ply > number) {
            console.log(ply)
            }
            }
            }


    hottestDays(degrees, 37);


    function getBookById(bookId, book) {
    for(let sema of books) {
    if(sema.id == book) {
    console.log (sema.name);
    break;
    }else{
    console.log(undefined)
    }
    }
    }


        let books = [ {name: "The Bamboo Stalk", id: 261}, {name: "Heroes Beneath the Waves", id: 346}, {name: "Chasing Space", id: 132}, {name: "Danny andthe Dinosaur", id: 564}]


        getBookById(books, 346)








    let item = prompt("ما هي السلعة؟ - اكتب انتهيت عندما تنتهي");
    let boom = [];


    while (item != "انتهيت") {
    let quantity = prompt("ما هي الكمية التي تريدها؟");
    let price = prompt("كم سعر المنتج؟");
    boom.push({ item: item, price: price, quantity: quantity });
    item = prompt("ما هي السلعة؟ - اكتب انتهيت عندما تنتهي");
    }


        console.log("-------");


        console.log("الفاتورة");


        console.log("-------");


    let total = 0;


    for (let bill of boom) {
    console.log(
    bill.quantity + " " + bill.item + " " + bill.price + " KD"
    );
    total = total + bill.price * bill.quantity;
    }


        console.log("-------");
        console.log("الاجمالي : ", total);

