export interface Product {
    id: number;
    title: string;
    slug: string;
    image: string;
    price: number;
    category: string;
    location: "Lagos" | "Enugu" | "Abuja";
    pickupAddress: string;
}

export const products: Product[] = [
    {
        id: 1,
        title: "Silky Straight Wig",
        slug: "silky-straight-wig",
        image: "/images/event1.png",
        price: 150,
        category: "Wigs",
        location: "Lagos",
        pickupAddress: "14 Admiralty Way, Lekki Phase 1, Lagos"
    },
    {
        id: 2,
        title: "Deep Wave Bundle",
        slug: "deep-wave-bundle",
        image: "/images/event2.png",
        price: 80,
        category: "Extensions",
        location: "Abuja",
        pickupAddress: "Suite 102, Aminu Kano Crescent, Wuse 2, Abuja"
    },
    {
        id: 3,
        title: "Curly Lace Front",
        slug: "curly-lace-front",
        image: "/images/event3.png",
        price: 200,
        category: "Wigs",
        location: "Enugu",
        pickupAddress: "25 Ogui Road, Near Stadium, Enugu"
    },
    {
        id: 4,
        title: "Body Wave Clip-ins",
        slug: "body-wave-clip-ins",
        image: "/images/event4.png",
        price: 120,
        category: "Extensions",
        location: "Lagos",
        pickupAddress: "45 Allen Avenue, Ikeja, Lagos"
    },
    {
        id: 5,
        title: "Water Wave Hair",
        slug: "water-wave-hair",
        image: "/images/event5.png",
        price: 90,
        category: "Hairs",
        location: "Abuja",
        pickupAddress: "Plot 12, Gana Street, Maitama, Abuja"
    },
    {
        id: 6,
        title: "Kinky Straight Ponytail",
        slug: "kinky-straight-ponytail",
        image: "/images/event6.png",
        price: 60,
        category: "Extensions",
        location: "Enugu",
        pickupAddress: "12 Chime Avenue, New Haven, Enugu"
    }
];