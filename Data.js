const pujaData = [
  {
    id: 1,
    name: "Shree Durga Puja",
    location: "Kolkata, West Bengal",
    description:
      "Join us for a grand Durga Puja celebration with traditional rituals and cultural programs.",
    likes: 1520,
    trendingPosition: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1698500034718-843a8d049781?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapLocation: "https://maps.google.com/?q=Kolkata+West+Bengal",
  },
  {
    id: 2,
    name: "Bengaluru Sarbojanin",
    location: "Bangalore, Karnataka",
    description:
      "Experience a beautiful mix of tradition and modernity at this popular Bengaluru puja.",
    likes: 1340,
    trendingPosition: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1698500034718-843a8d049781?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapLocation: "https://maps.google.com/?q=Bangalore+Karnataka",
  },
  {
    id: 3,
    name: "Mumbai Matri Mandir",
    location: "Mumbai, Maharashtra",
    description:
      "This Mumbai Durga Puja offers bhog, music, and an atmosphere of festive joy.",
    likes: 1250,
    trendingPosition: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1698500034718-843a8d049781?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapLocation: "https://maps.google.com/?q=Mumbai+Maharashtra",
  },
  {
    id: 4,
    name: "Delhi Kali Bari Puja",
    location: "New Delhi, Delhi",
    description:
      "An iconic puja with a history of over 50 years, known for its community spirit and vibrant celebrations.",
    likes: 980,
    trendingPosition: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1698500034718-843a8d049781?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapLocation: "https://maps.google.com/?q=New+Delhi+Delhi",
  },
  {
    id: 5,
    name: "Hyderabad Bengali Association Puja",
    location: "Hyderabad, Telangana",
    description:
      "Witness an immersive cultural experience with classical performances and mouth-watering bhog.",
    likes: 910,
    trendingPosition: 5,
    image:
      "https://plus.unsplash.com/premium_photo-1698500034718-843a8d049781?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapLocation: "https://maps.google.com/?q=Hyderabad+Telangana",
  },
  {
    id: 6,
    name: "Chennai Anandamela Puja",
    location: "Chennai, Tamil Nadu",
    description:
      "Enjoy the charm of this South Indian puja with unique decorations and traditional dances.",
    likes: 850,
    trendingPosition: 6,
    image:
      "https://plus.unsplash.com/premium_photo-1698500034718-843a8d049781?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapLocation: "https://maps.google.com/?q=Chennai+Tamil+Nadu",
  },
  {
    id: 7,
    name: "Lucknow Bangiya Samiti",
    location: "Lucknow, Uttar Pradesh",
    description:
      "An aesthetic blend of Bengali culture and local flavors, this puja has been a crowd favorite.",
    likes: 720,
    trendingPosition: 7,
    image:
      "https://plus.unsplash.com/premium_photo-1698500034718-843a8d049781?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapLocation: "https://maps.google.com/?q=Lucknow+Uttar+Pradesh",
  },
  {
    id: 8,
    name: "Ahmedabad Navratri Utsav",
    location: "Ahmedabad, Gujarat",
    description:
      "A fusion of Durga Puja and Navratri, featuring Garba nights and vibrant festivities.",
    likes: 670,
    trendingPosition: 8,
    image:
      "https://plus.unsplash.com/premium_photo-1698500034718-843a8d049781?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapLocation: "https://maps.google.com/?q=Ahmedabad+Gujarat",
  },
  {
    id: 9,
    name: "Pune Sarvajanik Durga Utsav",
    location: "Pune, Maharashtra",
    description:
      "A festive highlight in Pune, known for its artistic pandals and community participation.",
    likes: 590,
    trendingPosition: 9,
    image:
      "https://plus.unsplash.com/premium_photo-1698500034718-843a8d049781?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapLocation: "https://maps.google.com/?q=Pune+Maharashtra",
  },
  {
    id: 10,
    name: "Patna Sharadotsav",
    location: "Patna, Bihar",
    description:
      "A soulful celebration of Durga Puja in the heart of Bihar, offering peace and positivity.",
    likes: 550,
    trendingPosition: 10,
    image:
      "https://plus.unsplash.com/premium_photo-1698500034718-843a8d049781?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapLocation: "https://maps.google.com/?q=Patna+Bihar",
  },
];

export default pujaData;
