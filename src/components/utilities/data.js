const productos = [

    {
        id: "top1",
        nombre: "Top Pink",
        precio: 7000,
        stock: 15,
        imagen: "/img/top1.png",
        categoria: "top",
        detalle: "Color rosa"
    },  
    {   
        id: "top2",
        nombre: "Top Crystal",
        precio: 7500,
        stock: 20,
        imagen: "/img/top2.png",
        categoria: "top",
        detalle: "Color negro"
    },  
    {   
        id: "top3",
        nombre: "Top Shadow",
        precio: 7300,
        stock: 12,
        imagen: "/img/top3.png",
        categoria: "top",
        detalle: "Color gris"
    },  
    {   
        id: "calzas1",
        nombre: "Calza Body",
        precio: 10500,
        stock: 7,
        imagen: "/img/calza1.png",
        categoria: "calza",
        detalle: "Color gris"
    },  
    {   
        id: "calzas2",
        nombre: "Calza Black",
        precio: 12500,
        stock: 13,
        imagen: "/img/calza2.png",
        categoria: "calza",
        detalle: "Color negro"
    },  
    {   
        id: "calzas3",
        nombre: "Calza Panther",
        precio: 11300,
        stock: 10,
        imagen: "/img/calza3.png",
        categoria: "calza",
        detalle: "Color rojo"
    },  
    {   
        id: "polleras1",
        nombre: "Pollera Clasic",
        precio: 8200,
        stock: 8,
        imagen: "/img/pollera1.png",
        categoria: "pollera",
        detalle: "Color negro"
    },  
    {   
        id: "polleras2",
        nombre: "Pollera White",
        precio: 8900,
        stock: 7,
        imagen: "/img/pollera2.png",
        categoria: "pollera",
        detalle: "Color blanco"
    },  
    {   
        id: "polleras3",
        nombre: "Pollera Sassy",
        precio: 9300,
        stock: 11,
        imagen: "/img/pollera3.png",
        categoria: "pollera",
        detalle: "Color rojo"
    },      
    {   
        id: "buzos1",
        nombre: "Buzo Cumbre",
        precio: 15700,
        stock: 20,
        imagen: "/img/buzo1.png",
        categoria: "buzo",
        detalle: "Color rosa"
    },      
    {   
        id: "buzos2",
        nombre: "Buzo Mountain",
        precio: 20700,
        stock: 7,
        imagen: "/img/buzo2.png",
        categoria: "buzo",
        detalle: "Color gris claro"

    },      
    {  
        id: "buzos3",
        nombre: "Buzo Training",
        precio: 16900,
        stock: 14,
        imagen: "/img/buzo3.png",
        categoria: "buzo",
        detalle: "Color negro"
    },      
    {   
        id: "elasticos1",
        nombre: "Elastico Fit",
        precio: 2200,
        stock: 8,
        imagen: "/img/elastico1.png",
        categoria: "elastico",
        detalle: "Dificultad moderada"
    },      
    {   
        id: "elasticos2",
        nombre: "Elastico Sweat",
        precio: 3200,
        stock: 5,
        imagen: "/img/elastico2.png",
        categoria: "elastico",
        detalle: "Dificultad dificil"
    },      
    {   
        id: "mancuernas1",
        nombre: "Mancuernas 2k",
        precio: 3000,
        stock: 14,
        imagen: "/img/mancuernas1.png",
        categoria: "mancuerna",
        detalle: "2 kg"
    },      
    {   
        id: "mancuernas2",
        nombre: "Mancuernas 5k",
        precio: 3600,
        stock: 16,
        imagen: "/img/mancuernas2.png",
        categoria: "mancuerna",
        detalle: "5 kg"
    },      
    {   
        id: "mancuernas3",
        nombre: "Mancuernas 3k",
        precio: 4500,
        stock: 16,
        imagen: "/img/mancuernas3.png",
        categoria: "mancuerna",
        detalle: "3 kg"
    },      
    {   
        id: "tobillera1",
        nombre: "Tobilleras Nivel1",
        precio: 3100,
        stock: 10,
        imagen: "/img/tobilleras1.png",
        categoria: "tobillera",
        detalle: "2 kg"
    },      
    {   
        id: "tobillera2",
        nombre: "Tobilleras Nivel2",
        precio: 3900,
        stock: 8,
        imagen: "/img/tobilleras2.png",
        categoria: "tobillera",
        detalle: "3 kg"
    },      
    {   
        id: "tobillera3",
        nombre: "Tobilleras Nivel3",
        precio: 4300,
        stock: 12,
        imagen: "/img/tobilleras3.png",
        categoria: "tobillera",
        detalle: "5 kg"
    },  
    {   
        id: "colchoneta1",
        nombre: "Colchoneta Gym",
        precio: 7000,
        stock: 6,
        imagen: "/img/colchoneta1.png",
        categoria: "colchoneta",
        detalle: "Grosor intermedio"
    },
    {
        id: "colchoneta2",
        nombre: "Colchoneta Yoga",
        precio: 8300,
        stock: 7,
        imagen: "/img/colchoneta3.png",
        categoria: "colchoneta",
        detalle: "Para yoga"
    },
    
];

const obtenerProductos = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(productos);
    }, 1000);
});

export default obtenerProductos