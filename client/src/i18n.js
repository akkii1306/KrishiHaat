import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        products: 'Products',
        cart: 'Cart',
        dashboard: 'Dashboard',
        login: 'Login',
        myOrders: 'My Orders'
      },
      searchPlaceholder: 'Search...',
      auth: {
        logout: 'Logout',
        login: 'Login',
        register: 'Register',
        email: 'Email',
        password: 'Password',
        fullName: 'Full Name',
        confirmPassword: 'Confirm Password',
        pleaseWait: 'Please wait...',
        dontHaveAccount: "Don't have an account?",
        alreadyHaveAccount: 'Already have an account?',
        show: 'Show',
        hide: 'Hide',
        invalidEmail: 'Please enter a valid email',
        passwordsDontMatch: "Passwords don't match!",
        loginSuccess: 'Login successful',
        registerSuccess: 'Registration successful',
        authFailed: 'Authentication failed'
      },
      home: {
        welcome: 'Welcome to Krishi Haat',
        subtitle: 'Shop essential agricultural goods at fair prices.',
        browse: 'Browse Products',
        whatWeOffer: 'What We Offer',
        howItWorks: 'How It Works',
        servicesIntro: 'High-quality agricultural solutions.'
      },
      services: {
        farmingTools: 'Farming Tools',
        organicSeeds: 'Organic Seeds',
        pesticides: 'Pesticides',
        irrigationKits: 'Irrigation Kits',
        soilHealth: 'Soil Health Kits',
        harvestGear: 'Harvest Gear'
      },
      products: {
        title: 'Agricultural Products',
        description: 'Find high-quality seeds, tools, fertilizers and pesticides sourced for small and large farms. Use filters to narrow down by category, price and rating.',
        searchPlaceholder: 'Search products...',
        allCategories: 'All Categories',
        minPrice: 'Min Price',
        maxPrice: 'Max Price',
        minRating: 'Min Rating',
        apply: 'Apply',
        noResults: 'No products found.',
        addToCart: 'Add to Cart'
      ,
        categories: {
          all: 'All Categories',
          seeds: 'Seeds',
          tools: 'Tools',
          fertilizers: 'Fertilizers',
          pesticides: 'Pesticides'
        }
      },
      product: {
        inStock: 'In Stock',
        outOfStock: 'Out of Stock'
      },
      actions: {
        addedToCart: '{{name}} added to cart'
      },
      cart: {
        title: 'Your Cart',
        empty: 'Your cart is currently empty.',
        itemRemoved: 'Item removed from cart',
        cleared: 'Cart cleared',
        orderSummary: 'Order Summary',
        items: 'Items',
        total: 'Total',
        shippingAddress: 'Shipping Address',
        streetPlaceholder: 'Street Address',
        cityPlaceholder: 'City',
        postalPlaceholder: 'Postal Code',
        countryPlaceholder: 'Country',
        paymentMethod: 'Payment Method',
        cod: 'Cash on Delivery',
        bankTransfer: 'Bank Transfer (Mock UPI)',
        placeOrder: 'Place Order',
        clearCart: 'Clear Cart',
        mustLogin: 'You must be logged in to place an order',
        fillShipping: 'Please fill out all shipping fields',
        orderSuccess: 'Order placed successfully!',
        orderFailed: 'Order failed. Try again.'
      }
      ,
      dashboard: {
        welcome: 'Welcome, {{name}}',
        profile: 'Profile',
        quickActions: 'Quick Actions',
        browseProducts: 'Browse Products',
        viewCart: 'View Cart',
        manageOrders: 'Manage Orders'
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: 'होम',
        products: 'उत्पाद',
        cart: 'कार्ट',
        dashboard: 'डैशबोर्ड',
        login: 'लॉगिन',
        myOrders: 'मेरे ऑर्डर'
      },
      searchPlaceholder: 'खोजें...',
      auth: {
        logout: 'लॉग आउट',
        login: 'लॉगिन',
        register: 'रजिस्टर',
        email: 'ईमेल',
        password: 'पासवर्ड',
        fullName: 'पूरा नाम',
        confirmPassword: 'पासवर्ड की पुष्टि करें',
        pleaseWait: 'कृपया प्रतीक्षा करें...',
        dontHaveAccount: 'क्या आपका खाता नहीं है?',
        alreadyHaveAccount: 'क्या पहले से खाता है?',
        show: 'दिखाएँ',
        hide: 'छिपाएँ',
        invalidEmail: 'एक वैध ईमेल दर्ज करें',
        passwordsDontMatch: 'पासवर्ड मेल नहीं खाते!',
        loginSuccess: 'लॉगिन सफल हुआ',
        registerSuccess: 'रजिस्ट्रेशन सफल हुआ',
        authFailed: 'प्रमाणीकरण विफल'
      },
      home: {
        welcome: 'क्रिशि हाट में आपका स्वागत है',
        subtitle: 'न्यायसंगत कीमतों पर आवश्यक कृषि सामान खरीदें।',
        browse: 'उत्पाद देखें',
        whatWeOffer: 'हम क्या प्रदान करते हैं',
        howItWorks: 'यह कैसे काम करता है',
        servicesIntro: 'उच्च-गुणवत्ता कृषि समाधान।'
      },
      services: {
        farmingTools: 'खेती उपकरण',
        organicSeeds: 'ऑर्गेनिक बीज',
        pesticides: 'कीटनाशक',
        irrigationKits: 'सिंचाई किट',
        soilHealth: 'मिट्टी स्वास्थ्य किट',
        harvestGear: 'कटाई उपकरण'
      },
      products: {
        title: 'कृषि उत्पाद',
        description: 'उच्च-गुणवत्ता बीज, उपकरण, उर्वरक और कीटनाशक खोजें, छोटे और बड़े खेतों के लिए स्रोत। श्रेणी, कीमत और रेटिंग द्वारा फ़िल्टर करने के लिए फ़िल्टर का उपयोग करें।',
        searchPlaceholder: 'उत्पाद खोजें...',
        allCategories: 'सभी श्रेणियाँ',
        minPrice: 'न्यूनतम कीमत',
        maxPrice: 'अधिकतम कीमत',
        minRating: 'न्यूनतम रेटिंग',
        apply: 'लागू करें',
        noResults: 'कोई उत्पाद नहीं मिला।',
        addToCart: 'कार्ट में जोड़ें'
      ,
        categories: {
          all: 'सभी श्रेणियाँ',
          seeds: 'बीज',
          tools: 'उपकरण',
          fertilizers: 'उर्वरक',
          pesticides: 'कीटनाशक'
        }
      },
      actions: {
        addedToCart: '{{name}} को कार्ट में जोड़ा गया'
      },
      cart: {
        title: 'आपकी कार्ट',
        empty: 'आपकी कार्ट में फिलहाल कुछ भी नहीं है।',
        itemRemoved: 'आइटम कार्ट से हटाया गया',
        cleared: 'कार्ट साफ़ की गई',
        orderSummary: 'ऑर्डर सारांश',
        items: 'आइटम',
        total: 'कुल',
        shippingAddress: 'शिपिंग पता',
        streetPlaceholder: 'सड़क पता',
        cityPlaceholder: 'शहर',
        postalPlaceholder: 'पिन कोड',
        countryPlaceholder: 'देश',
        paymentMethod: 'भुगतान विधि',
        cod: 'कैश ऑन डिलीवरी',
        bankTransfer: 'बैंक ट्रांसफर (मॉक UPI)',
        placeOrder: 'ऑर्डर करें',
        clearCart: 'कार्ट साफ़ करें',
        mustLogin: 'ऑर्डर देने के लिए आपको लॉगिन करना ज़रूरी है',
        fillShipping: 'कृपया सभी शिपिंग फ़ील्ड भरें',
        orderSuccess: 'ऑर्डर सफलतापूर्वक रखा गया!',
        orderFailed: 'ऑर्डर विफल। पुनः प्रयास करें।'
      }
      ,
      dashboard: {
        welcome: 'स्वागत है, {{name}}',
        profile: 'प्रोफ़ाइल',
        quickActions: 'त्वरित क्रियाएँ',
        browseProducts: 'उत्पाद ब्राउज़ करें',
        viewCart: 'कार्ट देखें',
        manageOrders: 'ऑर्डर प्रबंधित करें'
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
