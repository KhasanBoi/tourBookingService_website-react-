const SHOP_DATA = [
    {
      id: 1,
      title: 'Tour for Kids',
      routeName: 'family',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: 'https://images.unsplash.com/photo-1606964727512-df0b3123d280?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ2fHxiaWtlJTIwcmlkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 25
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: 'https://images.unsplash.com/photo-1603724818045-afae2229c06a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmlrZSUyMHJpZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 18
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: 'https://images.unsplash.com/photo-1612629674926-f4ec60a3da8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJpa2UlMjByaWRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 35
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: 'https://images.unsplash.com/photo-1604413765329-4f6e824c3442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGJpa2UlMjByaWRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          price: 25
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          price: 18
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          price: 14
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          price: 18
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          price: 14
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Countryside',
      routeName: 'countryside',
      items: [
        {
          id: 10,
          name: 'Adidas NMD',
          imageUrl: ' https://images.unsplash.com/photo-1561203493-4f8985c3b44f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxiaWtlJTIwcmlkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 220
        },
        {
          id: 11,
          name: 'Adidas Yeezy',
          imageUrl: 'https://images.unsplash.com/photo-1586413114171-bcd84892d557?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGJpa2UlMjByaWRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 280
        },
        {
          id: 12,
          name: 'Black Converse',
          imageUrl: 'https://images.unsplash.com/photo-1602107275849-b117c6085652?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGJpa2UlMjByaWRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 110
        },
        {
          id: 13,
          name: 'Nike White AirForce',
          imageUrl: 'https://images.unsplash.com/photo-1601213190158-58200af5839d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGJpa2UlMjByaWRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 160
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Forest',
      routeName: 'forest',
      items: [
        {
          id: 18,
          name: 'Black Jean Shearling',
          imageUrl: 'https://images.unsplash.com/photo-1563990308267-cd6d3cc09318?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGJpa2UlMjByaWRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 125
        },
        {
          id: 19,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://images.unsplash.com/photo-1535369643553-a33e0d1ac81d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGJpa2UlMjByaWRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 90
        },
        {
          id: 20,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://images.unsplash.com/photo-1572852066176-6a955f944917?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpa2UlMjByaWRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 90
        },
        {
          id: 21,
          name: 'Brown Shearling',
          imageUrl: 'https://images.unsplash.com/photo-1586899111060-f7082d90550c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGJpa2UlMjByaWRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 165
        },
        {
          id: 22,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'City',
      routeName: 'city',
      items: [
        {
          id: 23,
          name: 'Blue Tanktop',
          imageUrl: 'https://images.unsplash.com/photo-1602517232715-c4a366f0ce1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlrZSUyMHJpZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 25
        },
        {
          id: 24,
          name: 'Floral Blouse',
          imageUrl: 'https://images.unsplash.com/photo-1604595819021-6e6e17ec550f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ2fHxiaWtlJTIwcmlkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 20
        },
        {
          id: 25,
          name: 'Floral Dress',
          imageUrl: 'https://images.unsplash.com/photo-1501354018142-3de64d837417?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxiaWtlJTIwcmlkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 80
        },
        {
          id: 26,
          name: 'Red Dots Dress',
          imageUrl: 'https://images.unsplash.com/photo-1521139551775-d656f89519d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM3fHxiaWtlJTIwcmlkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 80
        },
        {
          id: 27,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 29,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Mountain',
      routeName: 'mountain',
      items: [
        {
          id: 30,
          name: 'Camo Down Vest',
          imageUrl: 'https://images.unsplash.com/photo-1604355288256-46e6bca6a70f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxiaWtlJTIwcmlkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 325
        },
        {
          id: 31,
          name: 'Floral T-shirt',
          imageUrl: 'https://images.unsplash.com/photo-1618307147562-8b3b1b1957f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzA3fHxiaWtlJTIwcmlkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 20
        },
        {
          id: 32,
          name: 'Black & White Longsleeve',
          imageUrl: 'https://images.unsplash.com/photo-1619146601616-a56cde0fcbf4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzY5fHxiaWtlJTIwcmlkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 25
        },
        {
          id: 33,
          name: 'Pink T-shirt',
          imageUrl: 'https://images.unsplash.com/photo-1618542652078-9f8e20a33461?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE1fHxiaWtlJTIwcmlkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 25
        },
        {
          id: 34,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40
        },
        {
          id: 35,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25
        }
      ]
    }
  ];
  
  export default SHOP_DATA;

        // <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
