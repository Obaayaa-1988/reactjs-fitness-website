const wears = [ 
    {
        "name": " Combo",
        "price": " $130",
        "image": '../img/image8.jpg',
        "number": 1

    },

    {
        "name": " Nude Inspire",
        "price": " $70",
        "image": '../img/image11.jpg',
        "number": 2

    },


    {
        "name": " Grey Anatomy",
        "price": " $180",
        "image": '../img/image12.jpg',
        "number": 3

    },

    {
        "name": " Combo Sisters",
        "price": " $140",
        "image": '../img/image15.jpg',
        "number": 4

    },

    {
        "name": " Peachy Darlin",
        "price": " $90",
        "image": '../img/image17.jpg',
        "number": 5

    },

    {
        "name": " Triple Card",
        "price": " $180",
        "image": '../img/image16.jpg',
        "number": 5

    }

     
    
]

export function getWears() {
    return wears
}

export function getWear(number){
    return wears.find((wear) => wear.number === number)
}