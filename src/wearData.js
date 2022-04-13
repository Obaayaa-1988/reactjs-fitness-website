const wears = [ 
    {
        "name": " Combo",
        "price": " $130",
        "image": '../img/image8.jpg'
    },

    {
        "name": " Nude Inspire",
        "price": " $70",
        "image": '../img/image11.jpg'
    },


    {
        "name": " Grey Anatomy",
        "price": " $180",
        "image": '../img/image12.jpg'
    },

    {
        "name": " Combo Sisters",
        "price": " $140",
        "image": '../img/image15.jpg'
    },

    {
        "name": " Peachy Darlin",
        "price": " $90",
        "image": '../img/image17.jpg'
    },

    {
        "name": " Triple Babes",
        "price": " $210",
        "image": '../img/image16.jpg'
    }

     
    
]

export function getWears() {
    return wears
}

export function getWear(name){
    return wears.find((wear) => wear.name === name)
}