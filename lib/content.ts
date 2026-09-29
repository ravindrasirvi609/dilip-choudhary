export const candidate = {
  name:      "दिलीप चौधरी",
  role:      "सरपंच पद के उम्मीदवार",
  panchayat: "बाणियावास ग्राम पंचायत",
  state:     "राजस्थान",

  portrait:    "/dilip-choudhary-portrait.png",
  portraitAlt: "दिलीप चौधरी — बाणियावास ग्राम पंचायत के सरपंच पद के उम्मीदवार का चित्र",
  poster:      "/dilip-choudhary-poster.jpeg",
  posterAlt:   "दिलीप चौधरी, सरपंच अभियान पोस्टर",

  phone: "+916375523802",
  whatsapp: "https://wa.me/916375523802?text=नमस्ते%20दिलीप%20जी,%20मैं%20आपसे%20जुड़ना%20चाहता%2Fचाहती%20हूँ।",
  instagram: "https://www.instagram.com/iamdilipchoudhary?stkn=MTcybm95dm5jMjJ1cw==",
} as const;

export const villages = [
  "आकड़ावास पुरोहितान",
  "बाणियावास",
  "आकड़ावास कलां",
  "निम्बला खेड़ा",
  "पड़ासला खुर्द",
  "पड़ासला कलां",
] as const;

export const priorities = [
  {
    number: "01",
    title:  "स्वच्छ और सुंदर गाँव",
    body:   "साफ़-सफाई, नियमित कचरा प्रबंधन और हर गली में बेहतर व्यवस्था — क्योंकि स्वच्छता से ही स्वस्थ और गरिमामय जीवन संभव है।",
  },
  {
    number: "02",
    title:  "पानी और सड़क",
    body:   "हर घर तक स्वच्छ पानी की पहुँच और मजबूत, सुरक्षित सड़कों का विकास — ताकि आम जीवन आसान और सुरक्षित हो।",
  },
  {
    number: "03",
    title:  "युवा, खेल और शिक्षा",
    body:   "युवाओं के लिए अवसर, खेल और शिक्षा को नई दिशा — आने वाली पीढ़ी की तरक्की ही पंचायत की असली पूँजी है।",
  },
] as const;

export const navLinks = [
  { href: "#vision",     label: "हमारा विज़न"  },
  { href: "#priorities", label: "प्राथमिकताएँ" },
  { href: "#villages",   label: "हमारे गाँव"   },
  { href: "#contact",    label: "संपर्क"        },
] as const;

export const songs = [
  {
    title: "बाणियावास, एक सुर में बोल",
    file: "/बाणियावास, एक सुर में बोल.mp3",
  },
  {
    title: "बाणियावास, एक सुर में बोल — गीत 2",
    file: "/बाणियावास, एक सुर में बोल (1).mp3",
  },
  {
    title: "बाणियावास, एक सुर में बोल — गीत 3",
    file: "/बाणियावास, एक सुर में बोल (2).mp3",
  },
  {
    title: "बाणियावास, एक सुर में बोल — गीत 4",
    file: "/बाणियावास, एक सुर में बोल (3).mp3",
  },
  {
    title: "बनियावास — हमारी पहचान",
    file: "/बनियावास_हमारी_पहचान.mp3",
  },
] as const;
