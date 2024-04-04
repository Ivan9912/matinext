interface Product {
    id: string;
    name: string;
    image: string;
    description: string;
    address: string;
    score: number;
    ratings: number;
}

const products: Product[] = [
    {
        id: "1",
        name: "Producto 1",
        description: "Este es el Producto 1 y esta es la descripción",
        address: "123 Main St. Anytown USA",
        score: 4.5,
        ratings: 100,
        image: "https://source.unsplash.com/480x300/?restaurant&random=1",
      },
      {
        id: "2",
        name: "Producto 2",
        description: "Este es el Producto 2 y esta es la descripción",
        address: "456 Oak Ave. Anytown USA",
        score: 4.2,
        ratings: 80,
        image: "https://source.unsplash.com/480x300/?restaurant&random=2",
      },
      {
        id: "3",
        name: "Producto 3",
        description: "Este es el Producto 3 y esta es la descripción",
        address: "789 Elm St. Anytown USA",
        score: 4.8,
        ratings: 120,
        image: "https://source.unsplash.com/480x300/?restaurant&random=3",
      },
      {
        id: "4",
        name: "Producto 4",
        description: "Este es el Producto 4 y esta es la descripción",
        address: "101 Forest Rd. Anytown USA",
        score: 4.0,
        ratings: 60,
        image: "https://source.unsplash.com/480x300/?restaurant&random=4",
      },
      {
        id: "5",
        name: "Producto 5",
        description: "Este es el Producto 5 y esta es la descripción",
        address: "246 Main St. Anytown USA",
        score: 4.6,
        ratings: 90,
        image: "https://source.unsplash.com/480x300/?restaurant&random=5",
      },
      {
        id: "6",
        name: "Producto 6",
        description: "Este es el Producto 6 y esta es la descripción",
        address: "369 Beach Blvd. Anytown USA",
        score: 4.3,
        ratings: 70,
        image: "https://source.unsplash.com/480x300/?restaurant&random=6",
      },
      {
        id: "7",
        name: "Producto 7",
        description: "Este es el Producto 7 y esta es la descripción",
        address: "753 Maple St. Anytown USA",
        score: 4.9,
        ratings: 150,
        image: "https://source.unsplash.com/480x300/?restaurant&random=7",
      },
      {
        id: "8",
        name: "Producto 8",
        description: "Este es el Producto 8 y esta es la descripción",
        address: "852 Oak Ave. Anytown USA",
        score: 3.9,
        ratings: 50,
        image: "https://source.unsplash.com/480x300/?restaurant&random=8",
      },
      {
        id: "9",
        name: "Producto 9",
        description: "Este es el Producto 9 y esta es la descripción",
        address: "963 Main St. Anytown USA",
        score: 4.7,
        ratings: 110,
        image: "https://source.unsplash.com/480x300/?restaurant&random=9",
      },
      {
        id: "10",
        name: "Producto 10",
        description: "Este es el Producto 10 y esta es la descripción",
        address: "1479 Elm St. Anytown USA",
        score: 4.1,
        ratings: 75,
        image: "https://source.unsplash.com/480x300/?restaurant&random=10",
      },
      {
        id: "11",
        name: "Producto 11",
        description: "Este es el Producto 11 y esta es la descripción",
        address: "753 Main St. Anytown USA",
        score: 4.4,
        ratings: 65,
        image: "https://source.unsplash.com/480x300/?restaurant&random=11",
      },
      {
        id: "12",
        name: "Producto 12",
        description: "Este es el Producto 12 y esta es la descripción",
        address: "852 Oak Ave. Anytown USA",
        score: 4.9,
        ratings: 150,
        image: "https://source.unsplash.com/480x300/?restaurant&random=12",
      },
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {

    list: async (): Promise<Product[]> => {
        await sleep(750);
        return products;
    },
    fetch: async (id: Product["id"]): Promise<Product> => {
        await sleep(750);
        const product = products.find((producto) => producto.id === id)

        if (!product) {
            throw new Error(`Restaurant with ID ${id} it Not Found (404).`);
        }

        return product;
    },
};

export default api;