import { FiEye } from "react-icons/fi";
import { PiCertificate } from "react-icons/pi";
import { FaGroupArrowsRotate } from "react-icons/fa6";
import { HiBarsArrowDown } from "react-icons/hi2";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSpeed } from "react-icons/md";
import { FaLeaf, FaBeer, FaIndustry, FaGraduationCap, FaBolt, FaPizzaSlice, FaCouch, FaTshirt ,  FaGem, FaTruck, FaTree, FaBook , FaRandom , FaPrint , FaRecycle ,
   FaShieldAlt , FaUserTie , FaThumbsUp , FaUsers, FaBriefcase  } from 'react-icons/fa';
import { GoShieldLock } from "react-icons/go";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { TbLayoutGridAdd } from 'react-icons/tb';

export const releavant = {
  logo: "/logo.webp",
  testimonials_bg: "/home/testimonials_bg.webp",
  Quotation_mark: "/home/Quotation_mark.webp",
  ourMission: {
    images: {
      mainImage: "/home/ourmission_img_1.webp", 
      experienceIcon: "/home/experience_img.webp",
      companyName: 'Tech Cloud ERP',
      description: `The Tech Cloud ERP solution optimises your business operations by combining important processes like finance, supply chain, human resourcesand customer relationship management into a one platform. Tech Cloud ERP solutions, designed for scalability and flexibility, increases decision-making, productivity and provides real-time access to vital company data from anywhere. With strong security, automated upgrades and easy cloud connectivity, it's an ideal option for accelerating your digital transformation and driving corporate success.`,
      missionTitle: 'Our Mission',
      missionText: `Our mission is to deliver innovative, cloud-based ERP solutions that drive efficiency, scalability and long-term success. We simplify complex business processes, empower decision-making with real-time insights and help businesses of all sizes achieve their full potential through seamless integration.`,
      experience: {
        years: '25+',
        text: 'Years of Experience'
      },
      
    },
    content: {
      companyName: 'Tech Cloud ERP',
      description: `Tech Cloud ERP is a web-based solution for small and mid-sized businesses, acting as a
        central hub for tracking and analyzing departmental activities. It offers real-time data and
        integrated processes to accelerate decision-making and support growth, claiming to be
        India's leading ERP software developer with a focus on reducing operational costs, especially for
        manufacturing companies.`,
      missionTitle: 'Our Mission',
      missionText: `Our mission is to help our clients respond faster and more efficiently to market
        dynamics. We strive to make them more agile in a competitive marketplace through high-tech
        strategies and action plans.`,
      experience: {
        years: '25+',
        text: 'Years of Experience'
      }
    }
    
  },
}

export const ctaData = {
  heading: "Call To Action",
  description:
    "Join us today and make a difference! Take action now to create significant changes in your business. Together, we can build a technology revolution. Become part of our movement today.",
  buttonText: "Call To Action",
  buttonLink: "https://api.whatsapp.com/send?phone=+918886606458&text=Hi",
  calltoaction_bg_img: "/home/cta-bg-image-one.webp",
  };

  export const cardData = {
    normal: [
      {
        icon: TbLayoutGridAdd , 
        title: 'Solutions For All',
        text: 'Tech Cloud ERP offers a wide range of top-notch Cloud-Based ERP software solutions and tools to meet your demands, regardless of how many employees you have - two or two thousand. Additionally, we offer committed support teams who are available to you around-the-clock.',
        highlights: ['Integrated CRM and ERP System', 'E-Commerce Platform', 'Workflow Automation'],
      },
      {
        icon: FaRandom  ,
        title: 'Flexibility',
        text: 'Tech Cloud ERP is committed to developing user-friendly, flexible cloud ERP software. You can use the public or private cloud, pay for just what you need, or have your ERP software procedures customized.',
        highlights: ['Modular Architecture', 'API-Based Integration', 'Continuous Improvement'],
      },
      {
        icon: GoShieldLock  ,
        title: 'Security',
        text: 'The world most innovative systems serve as the foundation for the Tech Cloud ERP platform. To keep your company and its data safe, we have teams of professionals committed to safeguarding your data, preventing hackers and staying ahead of threats.',
        highlights: ['Risk Assessment', 'Data Breach', 'Encryption'],
      },
    ],
    "Show More": [
      {
        icon: HiOutlineLightBulb  ,
        title: 'Smart And Adaptable',
        text: 'Utilize the top-notch cloud infrastructure offered by Tech Cloud ERP to manage streamlined and adaptable business operations. Get up and go fast for a minimal monthly and annual fee, wherever in the globe, at any time.',
        highlights: ['AI-Powered Analytics', 'Predictive Analytics', 'Dynamic Pricing Engines'],
      },
      {
        icon: IoSpeedometerOutline  ,
        title: 'Fast And Affordable',
        text: 'Tap into Tech Cloud ERP world class cloud infrastructure to run lean and flexible business processes. Get up and run quickly anywhere in this world at any time for a low monthly & yearly cost.',
        highlights: ['Efficient Resource Utilization', 'Optimized Workflows', 'Containerization and Microservices'],
      },
      {
        icon: FaShieldAlt ,
        title: 'Secure And Reliable',
        text: 'Our top cloud ERP software covers everything from system security to compliance. Your data is hosted on world-class servers, with global teams devoted to its security and sophisticated backup mechanisms to protect your information at all times.',
        highlights: ['Data Encryption', 'Monitoring and Logging', 'Access Controls and Authentication'],
      }
    ]
  };

  export const partnerData = [
    { link: '/products/financial-management-systems', imgSrc: "/partner/finance.png", alt: 'Finance' },
    { link: '/products/hr-managament-software', imgSrc: "/partner/HRM.png", alt: 'HRMS' },
    { link: '/products/Ecommerce-software', imgSrc: "/partner/ecomm.png", alt: 'Ecommerce' },
    { link: '/products/trading-software', imgSrc: "/partner/trading.png", alt: 'Trading' },
    { link: '/products/point-of-sale', imgSrc: "/partner/POS.png", alt: 'POS' },
    { link: '/products/customer-relationship-management', imgSrc: "/partner/CRMD.png", alt: 'CRM' },
    ];

// industries data 
export const sectionsData = {
  "agriculture-industry": {
    link: '/industries/agriculture-industry',
    heading: 'Agriculture Industry',
    subheading:'The Best ERP For Agriculture Industry',
    description: 'In order to improve yield tracking and efficiency, ERP solutions in the agriculture sector optimise supply networks, manage inventories and simplify operations.',
    top_img: '/Industries/agriculture_top_img.webp',
    bottom_img: '/Industries/agriculture_bottom_img.webp',
    alt_text1: "agriculture_top_Img",
    alt_text2: "agriculture_bottom_Img",
    top_description: "In the fast-paced world of agriculture today, accuracy and efficiency are crucial. An enterprise resource planning (ERP system made specifically for the agricultural sector aids in decision-making, cost reduction and operational efficiency. Whether you work in agribusiness distribution, livestock management or crop production . Our ERP software is designed to satisfy the particular requirements of the agriculture industry.",
    bottom_description: "Tech Cloud ERP is an best ERP for the agricultural business, optimising sales, inventory and crop management. With a scalable, cloud-based platform, it measures productivity, optimises supply chains, provides real-time data access and lowers expenses. Through improved decision-making, teamwork and operational effectiveness, Tech Cloud ERP assists agribusinesses in increasing output, cutting waste and maintaining competitiveness in a rapidly changing market.",
    similar_industries: [
      {
      title: 'Chemical Industry',
      link: '/industries/chemical-industry',
      },
  
      {
      title: 'Food Industry',
      link: '/industries/food-industry',
      },
  
      {
      title: 'Textile Industry',
      link: '/industries/textiles-industry',
      },
  
  ]
  },
  "apparel-industry": {
    link: '/industries/apparel-industry',
    heading: 'Apparel Industry',
    subheading:'The Best ERP For Apparel Industry',
    description: 'Boost the apparel brand with improved manufacturing processes, real-time data and easy inventory management.',
    top_img: '/Industries/apparel_top_img.webp',
    bottom_img: '/Industries/apparel_Bottom_img.webp',
    alt_text1: "apparel_top_Img",
    alt_text2: "apparel_bottom_Img",
    top_description: "To stay ahead in the ever-changing clothing and apparel manufacturing sector, you must maximise every facet of your company. Supply chain coordination, production scheduling, inventory management and other complicated procedures are made simpler by Tech Cloud ERP. Increase efficiency, optimise processes and obtain real-time insights while more quickly satisfying client expectations.",
    bottom_description: "Optimising every facet of your organisation is essential to remain ahead in the ever-changing clothing and textile manufacturing sector. Complex procedures like supply chain coordination, production scheduling and inventory management are made simpler with Tech Cloud ERP. Meet client requests more quickly while increasing efficiency, streamlining processes and gaining real-time insights. Increase productivity, guarantee quality and increase profitability with Tech Cloud ERP for Garment and Apparel Manufacturing—all in one cohesive system.",
    similar_industries: [
      {
      title: 'Food Industry',
      link: '/industries/food-industry',
      },
  
      {
      title: 'Bevarages Industry',
      link: '/industries/beverage-industry',
      },
  
      {
      title: 'Automative Industry',
      link: '/industries/automative-industry',
      },
  
  ]
  },
  "automative-industry": {
    link: '/industries/automative-industry',
    heading: 'Automative Industry',
    subheading:'The Best ERP For Automative Industry',
    description: 'With its advanced technology, impeccable engineering and sustainable solutions for a connected future, the automotive sector is driving innovation and revolutionising mobility.',
    top_img: '/Industries/automotive_top_img.webp',
    bottom_img: '/Industries/automotive_Bottom_img.webp',
    alt_text1: "automative_top_Img",
    alt_text2: "automative_bottom_Img",
    top_description: "The automobile industry functions under a dynamic and fiercely competitive environment. Businesses require strong tools to manage intricate supply chains, guarantee quality and deliver goods on schedule if they want to stay ahead of the competition. In order to meet their particular needs, our Automotive industry software was created especially for automakers, suppliers and dealers.",
    bottom_description: "In the competitive automobile industry, efficiency, accuracy and innovation are unavoidable. ERP for the automobile sector simplifies supply chain management, improves production planning and assures smooth departmental interaction. With real-time analytics, sophisticated inventory monitoring and compliance management, a cloud-based ERP for the Automotive Industry manufacturers to optimise operations, cut costs and offer superior goods. Stay ahead of the competition in a rapidly changing industry by leveraging technology that promotes growth and performance.",
    similar_industries: [
      {
      title: 'Electronic Industry',
      link: '/industries/electronics-industry',
      },
  
      {
      title: 'Bevarages Industry',
      link: '/industries/beverage-industry',
      },
  
      {
      title: 'Educational Industry',
      link: '/industries/educational-institutes',
      },
  
  ]
  },
  "beverage-industry": {
    link: '/industries/beverage-industry',
    heading: 'Beverage Industry',
    subheading:'The Best ERP For Beverage Industry',
    description: 'Simplify the whole beverage process, from branding to bottling. Let ERP assist you in meeting client requests more quickly, reducing waste and optimising resources. To more intelligent operations, cheers!',
    top_img: '/Industries/beverage_top_img.webp',
    bottom_img: '/Industries/beverage_bottom_img.webp',
    alt_text1: "bevarage_top_Img",
    alt_text2: "bevarage_bottom_Img",
    top_description: "The beverage industry is highly regulated, competitive and fast-paced it requires accuracy in supply chain management, distribution, inventory control and production. Businesses want an integrated solution that can optimise processes, save costs and boost customer happiness in order to tackle these challenges and stay ahead of the competition. A food and beverage ERP system built specifically for the beverage sector assists businesses in automating critical procedures, guaranteeing real-time insights, more efficient workflows and improved decision-making.",
    bottom_description: "In the fast-paced world of beverage manufacturing, efficiency and precision are paramount. Our Beverage Manufacturing ERP Software provides a cloud-based solution for optimising production, inventory, distribution and quality control. Our ERP solution assists beverage makers in lowering costs, improving operational efficiency and meeting regulatory standards by using real-time data analytics, automated processes and compliance management.",
    similar_industries: [
      {
      title: 'Electronic Industry',
      link: '/industries/electronics-industry',
      },
  
      {
      title: 'Chemical Industry',
      link: '/industries/chemical-industry',
      },
  
      {
      title: 'Educational Industry',
      link: '/industries/educational-institutes',
      },
  
  ]
  },
  "chemical-industry": {
    link: '/industries/chemical-industry',
    heading: 'Chemical Industry',
    subheading:'The Best ERP For Chemical Industry',
    description: 'With a fully integrated ERP system made specifically for the chemical industry, you can improve your production, inventory and compliance.',
    top_img: '/Industries/chemical_top_img.webp',
    bottom_img: '/Industries/chemical_bottom_img.webp',
    alt_text1: "chemical_top_Img",
    alt_text2: "chemical_bottom_Img",
    top_description: "The intricacies of raw materials, manufacturing schedules and compliance can cause delays in the chemical industry. These difficulties are made easier by an ERP system made specifically for chemicals, which provides automatic reporting, sophisticated inventory monitoring and real-time analytics. With ERP for the chemical industry , you can unleash your company's potential and produce better goods more quickly.",
    bottom_description: "Unleash the potential of cloud computing to optimise beverage sector production, distribution and sales. Inventory management, supply chain optimisation, quality control and real-time analytics may all be achieved from a single platform with a cloud-based ERP. Easily scale your business, cut expenses and remain ahead of the curve with a safe, adaptable system made specifically for beverage makers.",
    similar_industries: [
      {
      title: 'Electronic Industry',
      link: '/industries/electronics-industry',
      },
  
      {
      title: 'Agriculture Industry',
      link: '/industries/agriculture-industry',
      },
  
      {
      title: 'Educational Industry',
      link: '/industries/educational-institutes',
      },
  
  ]
  },
  
  "educational-institutes": {
    link: '/industries/educational-institutes',
    heading: 'Educational Institutes',
    subheading:'The Best ERP For Educational Institutes',
    description: 'Get ready for a more effective approach to administer your institution! Our ERP system combines all departments.',
    top_img: '/Industries/educational_top_img.webp',
    bottom_img: '/Industries/eductional_bottom_img.webp',
    alt_text1: "educational_top_Img",
    alt_text2: "educational_bottom_Img",
    top_description: "An Enterprise Resource Planning (ERP) system for educational institutions is a complete software solution that integrates numerous tasks such as administration, finance, human resources, student management and others. An ERP system guarantees that operations within the institution run smoothly and efficiently by centralising critical data and automating activities.",
    bottom_description: "Tech Cloud ERP is a complete system designed for educational institutions that will streamline operations, improve efficiency and promote academic success. Our platform unifies every process, from alumni management to admissions, guaranteeing smooth communication and data-driven decision-making. Tech Cloud ERP for education institutes revolutionises the way your organisation runs with its user-friendly features, real-time data and strong security.",
    similar_industries: [
      {
      title: 'Bevarage Industry',
      link: '/industries/beverage-industry',
      },
  
      {
      title: 'Chemical Industry',
      link: '/industries/chemical-industry',
      },
  
      {
      title: 'Apparel Industry',
      link: '/industries/apparel-industry',
      },
  ]
  },
  
  "electric-solar-industry": {
    link: '/industries/electrical-solar-industry',
    heading: 'Electrical Solar Industry',
    subheading:'The Best ERP For Electrical Solar Industry',
    description: 'Utilising cutting-edge solar energy technologies to power a sustainable future and provide everyone with affordable, dependable and clean electricity.',
    top_img: '/Industries/eletrical_top_img.webp',
    bottom_img: '/Industries/eletrical_Bottom_img.webp',
    alt_text1: "electrical_top_Img",
    alt_text2: "electrical_bottom_Img",
    top_description: "In the rapidly expanding and constantly changing solar energy industry, maintaining a competitive edge in a competitive marketplace requires effective management and smooth operations. In order to address these particular difficulties, enterprise resource planning (ERP) systems made specifically for the electrical solar sector combine all facets of your company into a single, expandable platform.",
    bottom_description: "The solar industry is quickly expanding, necessitating the development of a more effective, scalable and simplified strategy to project management, inventory, finance and customer interactions. Our Tech Cloud ERP for Solar is particularly built for solar enterprises and can handle everything from project management to financial reporting on a single, integrated platform.",
    similar_industries: [
      {
      title: 'Bevarage Industry',
      link: '/industries/beverage-industry',
      },
  
      {
      title: 'Chemical Industry',
      link: '/industries/chemical-industry',
      },
  
      {
      title: 'Apparel Industry',
      link: '/industries/apparel-industry',
      },
  ]
  },
  "electronics-industry": {
    link: '/industries/electronics-industry',
    heading: 'Electronics Industry',
    subheading:'The Best ERP For Electronics Industry',
    description: 'With the latest innovations driving everything from smartphones to smart homes, the electronics sector is driving innovation and connection and influencing the future.',
    top_img: '/Industries/eletronic_top_image.webp',
    bottom_img: '/Industries/eletronic_bottom_image.webp',
    alt_text1: "electronic_top_Img",
    alt_text2: "electronic_bottom_Img",
    top_description: "In the fast-paced and intensely competitive electronics business, operational efficiency and prompt decision-making are essential. Our ERP for electronics manufacturing connects your complete workflow, from manufacturing to distribution, allowing you to handle complicated operations easily. With our solution, you can keep ahead of market demands, streamline processes and increase profitability.",
    bottom_description: "Accelerate your electronics manufacturing process with our Tech Cloud ERP, which is made to maximise supply chain, inventory and production management. By offering real-time data, our Best ERP Software for Electronics Manufacturing Industry facilitates better decision-making and increases operational effectiveness. Ensure seamless departmental operations by integrating design, procurement and distribution.",
    similar_industries: [
      {
      title: 'Bevarage Industry',
      link: '/industries/beverage-industry',
      },
      {
      title: 'Chemical Industry',
      link: '/industries/chemical-industry',
      },
      {
      title: 'Apparel Industry',
      link: '/industries/apparel-industry',
      },
  ]
  },
  "FMCG-industry": {
    link: '/industries/FMCG-industry',
    heading: 'FMCG Industry',
    subheading:'The Best ERP For FMCG Industry',
    description: 'Our ERP solutions for FMCG streamline supply chain management, optimize inventory, improve efficiency and enable real-time decision-making.',
    top_img: '/Industries/Fmcg_top_img.webp',
    bottom_img: '/Industries/Fmcg_Bottom_img.webp',
    alt_text1: "fmcg_top_Img",
    alt_text2: "fmcg_bottom_Img",
    top_description: "In the very competitive FMCG industry, accuracy and speed are essential for success. By integrating all aspects of FMCG operations, our customized ERP system enables companies to effectively manage inventory, sales, distribution and production. The FMCG business has specific needs and our ERP software is designed to satisfy.",
    bottom_description: "Tech Cloud ERP simplifies processes from procurement to delivery, providing the best ERP solution for FMCG companies. Our cloud-based technology has an accessible interface and real-time data that help businesses maintain inventories, manage supply chains and save expenses. Tech Cloud ERP gives FMCG companies the ability to adapt quickly to changes in the market and cut down on waste.",
    similar_industries: [
      {
      title: 'Furniture Industry',
      link: '/industries/furniture-industry',
      },
      {
      title: 'Jewellery Industry',
      link: '/industries/jewellery-industry',
      },
      {
      title: 'Wood Industry',
      link: '/industries/wood-industry',
      },
  ]
  },
  
  "food-industry": {
    link: '/industries/food-industry',
    heading: 'Food Industry',
    subheading:'The Best ERP For Food Industry',
    description: 'Our ERP systems for the food sector streamline inventory, ensure quality control and improve operational efficiency to help businesses.',
    top_img: '/Industries/Food_top_img.webp',
    bottom_img: '/Industries/food_bottom_img.webp',
    alt_text1: "food_top_Img",
    alt_text2: "food_bottom_Img",
    top_description: "In the food industry, supply chain management, regulatory compliance and product quality maintenance are essential. Through resource optimization, visibility improvement and operational simplification, our ERP software is designed to meet these difficulties. Regardless of your industry, food production, packaging, or distribution our solution enables you to produce high-quality goods.",
    bottom_description: "Tech Cloud ERP is the best ERP solution for the food industry that can enhance the operations of your business from procurement to delivery. With real-time data insights from a cloud-based platform, you'll be able to optimize your supply chains, reduce waste and ensure the quality of your products. Tech Cloud ERP reduces the need for complex IT systems through flexibility and scalability.",
    similar_industries: [
      {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
      },
      {
      title: 'Leather Industry',
      link: '/industries/leather-industry',
      },
      {
      title: 'Wholesalers Industry',
      link: '/industries/wholesalers-industry',
      },
  ]
  },
  
  "furniture-industry": {
    link: '/industries/furniture-industry',
    heading: 'Furniture Industry',
    subheading:'The Best ERP For Furniture Industry',
    description: 'Our ERP solutions for the furniture industry simplify order processing, inventory and manufacturing, boosting productivity and meeting client expectations.',
    top_img: '/Industries/Furniture_top_img.webp',
    bottom_img: '/Industries/Furniture_bottom_img.webp',
    alt_text1: "furniture_top_Img",
    alt_text2: "furniture_bottom_Img",
    top_description: "Effective production, inventory and delivery management are critical in the fast-paced furniture sector. Our ERP software is designed to satisfy the particular requirements of merchants and furniture makers. Our system improves processes, shortens lead times and guarantees quality control from sourcing raw materials to order fulfillment. Additionally, it offers real-time information.",
    bottom_description: "Tech Cloud ERP is the ideal ERP solution for the furniture industry, which provides an entire system to handle everything from buying supplies to producing and delivering goods. Our cloud-based technology helps companies cut expenses and complexity while streamlining operations, optimizing inventories and raising customer happiness. ",
    similar_industries: [
      {
      title: 'Wood Industry',
      link: '/industries/wood-industry',
      },
      {
      title: 'Jewellery Industry',
      link: '/industries/jewellery-industry',
      },
      {
      title: 'Metal Fabrication Industry',
      link: '/industries/metal-fabrication-industry',
      },
  ]
  },
  
  "garment-industry": {
    link: '/industries/garment-industry',
    heading: 'Garment Industry',
    subheading:'The Best ERP For Garment Industry',
    description: 'Our ERP solutions for the garment industry simplify production, inventory and order fulfillment, boosting efficiency, cutting costs and meeting demand.',
    top_img: '/Industries/Garment_top_img.webp',
    bottom_img: '/Industries/Garment_Bottom_img.webp',
    alt_text1: "garment_top_Img",
    alt_text2: "garment_bottom_Img",
    top_description: "In the garment industry, to stay ahead of changing trends, accuracy and effectiveness are critical. Our ERP software helps merchants and garment manufacturers handle everything from getting raw materials to delivering finished goods. Throughout the production process, it ensures quality control, streamlines operations and enhances inventory management. ",
    bottom_description: "Tech Cloud ERP offers extensive features to manage production, inventory and sales, making it the ideal ERP system for the garment business. Our cloud-based platform makes complicated procedures easier, develops better teamwork and offers real-time information for more informed decisions. Tech Cloud ERP helps garment companies satisfy client needs and maintain their competitiveness.",
    similar_industries: [
      {
        title: 'Jewellery Industry',
        link: '/industries/jewellery-industry',
      
      },
      {
        title: 'Wood Industry',
        link: '/industries/wood-industry',
      },
      {
        title: 'Metal Fabrication Industry',
        link: '/industries/metal-fabrication-industry',
      },
  ]
  },
  
  "hydraulic-industry": {
    link: '/industries/hydraulic-industry',
    heading: 'Hydraulic Industry',
    subheading:'The Best ERP For Hydraulic Industry',
    description: 'Our ERP solutions for the hydraulics industry help companies reduce costs, improve efficiency and streamline supply chain, inventory and manufacturing.',
    top_img: '/Industries/Hydralic_top_img.webp',
    bottom_img: '/Industries/Hydralic_bottom_img.webp',
    alt_text1: "hydraulic_top_Img",
    alt_text2: "hydraulic_bottom_Img",
    top_description: "In the hydraulic sector, managing complex manufacturing processes and supply chains requires accuracy and speed. Our ERP software is specifically designed to satisfy the demands of hydraulic manufacturers and suppliers, allowing you to optimize operations, assure quality control and enhance resource allocation. Our technology guarantees seamless management.",
    bottom_description: "Tech Cloud ERP is a system for hydraulics businesses as it provides solutions for managing production processes and managing inventory and supply chain activities effectively in a fast-paced market environment. Our cloud-based platform enhances operational efficiency and cost effectiveness to keep businesses competitive. ",
    similar_industries: [
      {
        title: 'Jewellery Industry',
        link: '/industries/jewellery-industry',
      
      },
      {
        title: 'Wood Industry',
        link: '/industries/wood-industry',
      },
      {
        title: 'Metal Fabrication Industry',
        link: '/industries/metal-fabrication-industry',
      },
  ]
  },
  
  "jewellery-industry": {
    link: '/industries/jewellery-industry',
    heading: 'Jewellery Industry',
    subheading:'The Best ERP For Jewellery Industry',
    description: 'Our ERP systems for the jewellery industry streamline production, inventory and customer management, improving accuracy and productivity.',
    top_img: '/Industries/jewellery_top_img.webp',
    bottom_img: '/Industries/jewellery_Bottom_img.webp',
    alt_text1: "jewellery_top_Img",
    alt_text2: "jewellery_bottom_Img",
    top_description: "In the jewellery industry, accuracy, quality and customer satisfaction are critical. Our ERP software is particularly built to address the unique issues that jewellery manufacturers experience, from raw material management to final product monitoring. It assures smooth operations, improves inventory control and gives real-time data to help with decision-making with our solution.",
    bottom_description: "Tech Cloud ERP is the ideal ERP solution for the jewellery industry, including features for effectively managing production, inventory and customer relations. Our cloud-based technology helps organizations to manage resources, reduce expenses and boost profits while maintaining accuracy and quality. With real-time data and advanced features.",
    similar_industries: [
      {
        title: 'FMCG Industry',
        link: '/industries/fmcg-industry',
      
      },
      {
        title: 'Wood Industry',
        link: '/industries/wood-industry',
      },
      {
        title: 'Metal Fabrication Industry',
        link: '/industries/metal-fabrication-industry',
      },
  ]
  },
  
  "leather-industry": {
    link: '/industries/leather-industry',
    heading: 'Leather Industry',
    subheading:'The Best ERP For Leather Industry',
    description: 'Our ERP systems for the leather industry streamline production, inventory and supply chain, optimizing resources, reducing costs and meeting demands. ',
    top_img: '/Industries/leather_top_img.webp',
    bottom_img: '/Industries/leather_bottom_img.webp',
    alt_text1: "leather_top_Img",
    alt_text2: "leather_bottom_Img",
    top_description: "In the leather industry precision, efficiency and sustainability are essential to stay competitive. Our ERP software is particularly built for leather producers and suppliers to manage issues such as procurement efficiency, waste reduction and quality control. From raw material management to final product delivery, our system enables seamless operations, real-time tracking and better decision-making.",
    bottom_description: "Tech Cloud ERP is the ultimate ERP solution for the leather industry, which provides cutting-edge capabilities for smooth inventory, production and procurement management. Our cloud-based technology helps companies in reducing costs, improving collaboration and maximize resources. Tech Cloud ERP enables leather businesses to increase productivity and reduce waste.",
    similar_industries: [
      {
        title: 'FMCG Industry',
        link: '/industries/fmcg-industry',
      
      },
      {
        title: 'Wood Industry',
        link: '/industries/wood-industry',
      },
      {
        title: 'Logistics Industry',
        link: '/industries/logistics-industry',
      },
  ]
  },
  
  "logistics-industry": {
    link: '/industries/logistics-industry',
    heading: 'Logistics Industry',
    subheading:'The Best ERP For Logistics Industry',
    description: 'Optimizing logistics operations with seamless solutions for supply chain management, real-time tracking and delivery efficiency.',
    top_img: '/Industries/Logistics_top_img.webp',
    bottom_img: '/Industries/Logistics_Bottom_img.webp',
    alt_text1: "logistics_top_Img",
    alt_text2: "logistics_bottom_Img",
    top_description: "Logistics is one of the highly competitive sectors which include complex operations such as supply chain management, freight management, transportation, warehousing and storage and much other variety of functions. Implementation of ERP software for the logistic industry in India can align business operations such as Trip Management, Truck Maintenance and staff management with accounting and management systems for the logistics industry.",
    bottom_description: "Transportation in logistics is concerned with the transfer of goods from one place to another, generally moving goods between warehouses of the same company or multiple companies.Implementing Tech Cloud ERP software for the Transportation Industry in India is all about providing real-time information of all indirect costs, related to manpower, documentation, truck maintenance and their impact on profitability.",
    similar_industries: [
      {
        title: 'FMCG Industry',
        link: '/industries/fmcg-industry',
      
      },
      {
        title: 'Wood Industry',
        link: '/industries/wood-industry',
      },
      {
        title: 'Medical equipment manufacturing Industry',
        link: '/industries/medicalequipmentmanufacturing-industry',
      },
  ]
  },
  
  "medicalequipmentmanufacturing-industry": {
    link: '/industries/medicalequipmentmanufacturing-industry',
    heading: 'Medical equipment manufacturing Industry',
    subheading:'The Best ERP For Medical equipment manufacturing Industry',
    description: 'Our ERP systems help medical equipment manufacturers streamline inventory, production and quality control, ensuring efficiency and compliance.',
    top_img: '/Industries/Medical__top_img.webp',
    bottom_img: '/Industries/medical_bottom_img.webp',
    alt_text1: "medical_top_Img",
    alt_text2: "medical_bottom_Img",
    top_description: "In the medical equipment manufacturing sector, accuracy, quality and compliance with regulations are essential. These issues are addressed by our ERP software, which facilitates quality control, inventory management and smooth production process management. With its customized features and real-time analytics, our solution guarantees that companies follow strict standards and cut expenses.",
    bottom_description: "Tech Cloud ERP is the perfect ERP solution for the medical equipment manufacturing industry, offers extensive features to efficiently manage production, compliance and inventory, making it a perfect ERP system for the medical equipment manufacturing sector. In addition to reducing expenses and improving teamwork, our cloud-based platform guarantees the supply of top-notch equipment.",
    similar_industries: [
      {
        title: 'FMCG Industry',
        link: '/industries/fmcg-industry',
      },
      {
        title: 'Wood Industry',
        link: '/industries/wood-industry',
      },
      {
        title: 'Logistics Industry',
        link: '/industries/logistics-industry',
      },
  ]
  },
  
  "wood-industry": {
    link: '/industries/wood-industry',
    heading: 'Wood Industry',
    subheading:'The Best ERP For Wood Industry',
    description: 'ERP solutions for the wood industry streamline production, inventory management and supply chain processes, helping businesses enhance efficiency, reduce costs and improve profitability.',
    top_img: '/Industries/wood_top_img.webp',
    bottom_img: '/Industries/wood_bottom_img.webp',
    alt_text1: "wood_top_Img",
    alt_text2: "wood_bottom_Img",
    top_description: "In the wood industry, efficiency and resource management are crucial for maintaining quality. Our ERP software helps companies monitor inventories, maximize output and improve operations by addressing these particular concerns. Our technology helps organizations succeed in a competitive market by offering real-time information, improving decision-making and ensuring seamless integration.",
    bottom_description: "Tech Cloud ERP is the ideal solution for wood manufacturers, providing a powerful, cloud-based platform that integrates every aspect of your company. Our software assures you have the ability to maximize your operations and maintain your competitiveness, from inventory management to production monitoring. Businesses in the wood industry may increase efficiency, save expenses and make data-driven choices.",
    similar_industries: [
      {
        title: 'FMCG Industry',
        link: '/industries/fmcg-industry',
      },
      {
        title: 'Jewellery Industry',
        link: '/industries/jewellery-industry',
      },
      {
        title: 'Logistics Industry',
        link: '/industries/logistics-industry',
      },
  ]
  },
  
  "wholesalers-industry": {
    link: '/industries/wholesalers-industry',
    heading: 'Wholesalers Industry',
    subheading:'The Best ERP For Wholesalers Industry',
    description: 'ERP solutions for wholesalers streamline inventory, order processing, boosting efficiency, reducing costs and enhancing customer satisfaction.',
    top_img: '/Industries/wholesalers_top_img.webp',
    bottom_img: '/Industries/wholesalers_bottom_img.webp',
    alt_text1: "wholesalers_top_Img",
    alt_text2: "wholesalers_bottom_Img",
    top_description: "In the fast-paced wholesale industry, order management, inventory control and distribution are essential for success in the wholesale sector. To ensure seamless operations and real-time tracking across the supply chain, our ERP software is customized for wholesalers' needs. From inventory management to order-to-cash and procure-to-pay cycles.",
    bottom_description: "Tech Cloud ERP offers advanced options to efficiently manage sales, inventory, procurement and distribution, making it the ideal ERP system for wholesalers. Businesses can quickly respond to market needs because of the flexibility, scalability and cost-effectiveness of our cloud-based platform. With its integrated processes and real-time data.",
    similar_industries: [
      {
        title: 'FMCG Industry',
        link: '/industries/fmcg-industry',
      },
      {
        title: 'Jewellery Industry',
        link: '/industries/jewellery-industry',
      },
      {
        title: 'Logistics Industry',
        link: '/industries/logistics-industry',
      },
  ]
  },
  
  "metal-fabrication-industry": {
    link: '/industries/metal-fabrication-industry',
    heading: 'Metal Fabrication Industry',
    subheading:'The Best ERP For Metal Fabrication Industry',
    description: 'Our ERP solutions for metal fabrication streamline production, inventory and project management, boosting productivity and meeting deadlines.',
    top_img: '/Industries/metalfabrication_top_img.webp',
    bottom_img: '/Industries/metalfabrication_bottom_img.webp',
    alt_text1: "metalfabrication_top_Img",
    alt_text2: "metalfabrication_bottom_Img",
    top_description: "In the metal fabrication industry, accuracy, timely delivery and resource efficiency are critical for maintaining competition. Our ERP software has been designed to deal with these problems, guaranteeing seamless operations from raw material procurement to final product delivery. Our system offers advanced production planning, inventory management and real-time project monitoring capabilities to help businesses attain operational excellence and provide high-quality outcomes.",
    bottom_description: "The best ERP for the metal fabrication business is Tech Cloud ERP, which provides cutting-edge capabilities for project tracking, inventory management and production management. Our cloud-based platform promotes better teamwork, lowers operating expenses and offers flexibility to meet changing market needs. Metal fabricators can maintain quality, simplify operations and remain ahead of the competition in a competitive marketplace with Tech Cloud ERP's powerful automation and real-time data.",
    similar_industries: [
      {
        title: 'FMCG Industry',
        link: '/industries/fmcg-industry',
      },
      {
        title: 'Jewellery Industry',
        link: '/industries/jewellery-industry',
      },
      {
        title: 'Logistics Industry',
        link: '/industries/logistics-industry',
      },
  ]
  },
  
  "microfinance-industry": {
    link: '/industries/microfinance-industry',
    heading: 'Microfinance Industry',
    subheading:'The Best ERP For Microfinance Industry',
    description: 'Our ERP solutions for the microfinance sector streamline loan management, compliance and reporting, boosting efficiency and promoting financial inclusion.',
    top_img: '/Industries/Microfinance_top_img.webp',
    bottom_img: '/Industries/Microfinance_bottom_img.webp',
    alt_text1: "microfinance_top_Img",
    alt_text2: "microfinance_bottom_Img",
    top_description: "In the microfinance industry, managing loans, customer data and regulatory compliance are critical for success. Our ERP software is designed to simplify these processes, enabling businesses to automate operations, track financial transactions and provide better services to underserved communities. With real-time insights and robust tools, we help microfinance organizations scale operations, reduce costs and improve transparency.",
    bottom_description: "Tech Cloud ERP is the ideal ERP solution for the microfinance industry, which provides extensive features for managing loan portfolios, monitoring financial performance and guaranteeing regulatory compliance. Our cloud-based technology offers flexibility for expanding businesses, streamlines processes and lowers manual error rates.",
    similar_industries: [
      {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
      },
      {
      title: 'Leather Industry',
      link: '/industries/leather-industry',
      },
      {
      title: 'Wholesalers Industry',
      link: '/industries/wholesalers-industry',
      },
  ]
  },
  
  "oilandgas-industry": {
    link: '/industries/oilandgas-industry',
    heading: 'Oil and Gas Industry',
    subheading:'The Best ERP For Oil and Gas Industry',
    description: 'With our robust ERP solution, you can optimize operations, increase productivity and maintain your lead in the energy sector.',
    top_img: '/Industries/oilandgas_top_img.webp',
    bottom_img: '/Industries/oilandgas_bottom_img.webp',
    alt_text1: "oilandgas_top_Img",
    alt_text2: "oilandgas_bottom_Img",
    top_description: "The oil and gas industry operates in a dynamic, complicated environment where accuracy, efficiency and compliance are essential. With the help of our ERP software for the oil and gas industry, you can remain ahead of the competition by automating your business processes, making the most use of your resources and guaranteeing regulatory compliance.",
    bottom_description: "In the fast-paced and complex oil and gas business, operational efficiency, real-time data visibility and seamless integration across the value chain are critical to maintaining competitiveness. Tech Cloud ERP software oil and gas, is intended to meet these demands by providing a complete, cloud-based solution that enables you to simplify operations, boost collaboration and optimise resources.",
    similar_industries: [
      {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
      },
      {
      title: 'Leather Industry',
      link: '/industries/leather-industry',
      },
      {
      title: 'Wholesalers Industry',
      link: '/industries/wholesalers-industry',
      },
  ]
  },
  
  "packaging-industry": {
    link: '/industries/packaging-industry',
    heading: 'Packaging Industry',
    subheading:'The Best ERP For Packaging Industry',
    description: 'Modify your packaging operations with our intelligent ERP system, which is made to increase productivity, save waste and simplify manufacturing.',
    top_img: '/Industries/packaging_top_img.webp',
    bottom_img: '/Industries/packaging_bottom_img.webp',
    alt_text1: "packaging_top_Img",
    alt_text2: "packaging_bottom_Img",
    top_description: "The packaging industry has particular difficulties, such as strong demand for its products, volatile raw material prices, short lead times and intricate supply chain management. These issues are addressed by our ERP solution for the packaging industry, which provides extensive solutions that increase productivity, optimise processes and boost profitability.",
    bottom_description: "Managing the complexities of packaging operations needs a smart system that can increase production, reduce expenses and simplify procedures. With Tech Cloud ERP for the packaging industry, your business will have a full suite of tools to manage everything from scheduling production, quality control and logistics to acquiring raw materials.",
    similar_industries: [
      {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
      },
      {
      title: 'Leather Industry',
      link: '/industries/leather-industry',
      },
      {
      title: 'Wholesalers Industry',
      link: '/industries/wholesalers-industry',
      },
  ]
  },
  
  "paper-industry": {
    link: '/industries/paper-industry',
    heading: 'Paper Industry',
    subheading:'The Best ERP For Paper Industry',
    description: 'An ERP dedicated to the paper sector helps firms stay competitive by integrating processes, increasing transparency and allowing for data-driven choices.',
    top_img: '/Industries/paper_top_img.webp',
    bottom_img: '/Industries/paper_bottom_img.webp',
    alt_text1: "paper_top_Img",
    alt_text2: "paper_bottom_Img",
    top_description: "The paper industry confronts particular obstacles, such as changing raw material costs, rigorous quality requirements and the need for environmentally responsible operations. Enterprise Resource Planning (ERP solutions are critical in resolving these complexity since they streamline procedures and increase efficiency.",
    bottom_description: "In the highly competitive and dynamic paper business, keeping ahead necessitates accuracy, efficiency and seamless integration across all activities. Tech Cloud ERP for the paper industry provides paper mills with a bespoke, cloud-based system that streamlines operations, optimises resource management and drives growth.",
    similar_industries: [
      {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
      },
      {
      title: 'Leather Industry',
      link: '/industries/leather-industry',
      },
      {
      title: 'Wholesalers Industry',
      link: '/industries/wholesalers-industry',
      },
  ]
  },
  
  "plastic-industry": {
    link: '/industries/plastic-industry',
    heading: 'Plastic Industry',
    subheading:'The Best ERP For Plastic Industry',
    description: 'Our advanced ERP for the plastic industry boosts productivity, cuts costs and optimizes processes with real-time insights.',
    top_img: '/Industries/plastic_top_img.webp',
    bottom_img: '/Industries/plastic_bottom_img.webp',
    alt_text1: "plastic_top_Img",
    alt_text2: "plastic_bottom_Img",
    top_description: "From intricate manufacturing procedures and inventory management to stringent regulatory compliance and cost control, the plastics industry faces a distinct set of difficulties. Businesses desire a strong solution that can optimise processes and offer real-time data if they are to succeed in this cutthroat market. ERP software was developed especially to satisfy the demands of the plastics manufacturing industry, assisting businesses in improving efficiency, reducing expenses and enhancing decision-making.",
    bottom_description: "Staying ahead in the fast-paced plastics industry requires efficiency, accuracy and flexibility. With real-time data and sophisticated analytics, our Tech Cloud ERP software for the plastics manufacturing industry is made to optimise every step of your production process, from sourcing raw materials to distribution.",
    similar_industries: [
      {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
      },
      {
      title: 'Leather Industry',
      link: '/industries/leather-industry',
      },
      {
      title: 'Wholesalers Industry',
      link: '/industries/wholesalers-industry',
      },
  ]
  },
  
  "pharma-industry": {
    link: '/industries/pharma-industry',
    heading: 'Pharmaceutical Industry',
    subheading:'The Best ERP For Pharmaceutical Industry',
    description: 'Streamline operations, ensure compliance and boost efficiency with our Tech Cloud ERP solution tailored for the pharmaceutical industry.',
    top_img: '/Industries/pharmaceutical_top_img.webp',
    bottom_img: '/Industries/pharmaceutical_bottom_img.webp',
    alt_text1: "pharmaceutical_top_Img",
    alt_text2: "pharmaceutical_bottom_Img",
    top_description: "The pharmaceutical industry is liable for the creation, manufacturing and marketing of pharmaceuticals. It contributes significantly to health improvement by studying and developing medications for a variety of diseases. Pharmaceutical businesses, biotechnology corporations and regulatory authorities all work together to guarantee that medications are safe, effective and accessible.",
    bottom_description: "Through the integration of production, inventory, supply chain and compliance management, a modern cloud ERP for the pharmaceutical industry optimises operations. It guarantees regulatory compliance, effective manufacturing, smooth distribution and real-time data access. In a safe and scalable cloud environment, it also improves decision-making, lowers expenses and boosts overall operational efficiency.",
    similar_industries: [
      {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
      },
      {
      title: 'Leather Industry',
      link: '/industries/leather-industry',
      },
      {
      title: 'Wholesalers Industry',
      link: '/industries/wholesalers-industry',
      },
  ]
  },
  
  "publishing-industry": {
    link: '/industries/publishing-industry',
    heading: 'Publishing Industry',
    subheading:'The Best ERP For Publishing Industry',
    description: 'Simplify your publishing business with ERP to manage sales, inventory and workflows, boosting efficiency from manuscript to distribution.',
    top_img: '/Industries/publishing_top_img.webp',
    bottom_img: '/Industries/publishing_bottom_img.webp',
    alt_text1: "publishing_top_Img",
    alt_text2: "publishing_bottom_Img",
    top_description: "In the ever-changing publishing industry, efficiency and teamwork are critical to maintaining competitiveness. The ERP system was developed especially to simplify the intricacies of publishing, including editorial management, manuscript submission, production, distribution and sales. ERP system helps you easily manage all parts of your publishing operations with real-time data, automated workflows and seamless connection.",
    bottom_description: "In today's fast-paced publishing industry, managing enhancing workflows, production schedules, distribution and royalties requires seamless integration and real-time data. Our Tech Cloud ERP for the publishing  industry is tailored to publishers' individual needs, optimising processes, improving collaboration and accelerating company development.",
    similar_industries: [
      {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
      },
      {
      title: 'Leather Industry',
      link: '/industries/leather-industry',
      },
      {
      title: 'Wholesalers Industry',
      link: '/industries/wholesalers-industry',
      },
  ]
  },
  
  "printing-industry": {
    link: '/industries/printing-industry',
    heading: 'Printing Industry',
    subheading:'The Best ERP For Printing Industry',
    description: 'Our ERP systems for the printing sector optimize production, control inventory and boost productivity.',
    top_img: '/Industries/printing_top_img.webp',
    bottom_img: '/Industries/printing_bottom_img.webp',
    alt_text1: "printing_top_Img",
    alt_text2: "printing_bottom_Img",
    top_description: "The printing business requires accuracy, efficiency and speed. Our ERP software manages inventories, automates manufacturing processes and ensures quality control in order to meet these demands. Our ERP solution boosts profitability, streamlines processes and cuts waste from work estimating to delivery. Real-time analytics and robust reporting enable organizations to remain ahead of the competition.",
    bottom_description: "Tech Cloud ERP is the ideal ERP solution for the printing industry, which offers a smooth method of handling everything from inventory and production to client orders and delivery. Our cloud-based technology helps businesses improve operational efficiency, offers scalability and lowers manual mistakes. Tech Cloud ERP helps printing businesses to increase efficiency, improve quality and maintain their competitive edge.",
    similar_industries: [
      {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
      },
      {
      title: 'Leather Industry',
      link: '/industries/leather-industry',
      },
      {
      title: 'Wholesalers Industry',
      link: '/industries/wholesalers-industry',
      },
  ]
  },
  
  "preengineering-industry": {
    link: '/industries/preengineering-industry',
    heading: 'Pre-Engineering Industry',
    subheading:'The Best ERP For Pre-Engineering Industry',
    description: 'Tech Cloud ERP optimizes workflows, manages resources and ensures on-time delivery, streamlining operations in the pre-engineering sector.',
    top_img: '/Industries/preEngineering_top_img.webp',
    bottom_img: '/Industries/preEngineering_bottom_img.webp',
    alt_text1: "preEngineering_top_Img",
    alt_text2: "preEngineering_bottom_Img",
    top_description: "In the fast-paced pre-engineering sector, accuracy and efficiency are essential. Tech Cloud ERP is designed to meet the unique needs of pre-engineering firms by enhancing production monitoring, inventory control and project management. Our solution helps businesses automate processes, optimize resource allocation and track project progress in real time.",
    bottom_description: "Tech Cloud ERP is the ideal solution for the pre-engineering sector. It seamlessly integrates resource planning, production, tracking and delivery with other aspects of project management. Our cloud-based platform helps businesses enhance scalability, streamline workflows and reduce errors. Real-time analytics and reporting keep projects on track, boost productivity and ensure a competitive edge.",
    similar_industries: [
      {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
      },
      {
      title: 'Leather Industry',
      link: '/industries/leather-industry',
      },
      {
      title: 'Wholesalers Industry',
      link: '/industries/wholesalers-industry',
      },
  ]
  },
  
  "rubber-industry": {
    link: '/industries/rubber-industry',
    heading: 'Rubber Industry',
    subheading:'The Best ERP For Rubber Industry',
    description: 'Tech Cloud ERP simplifies rubber industry operations by managing materials, production and inventory, ensuring efficiency and cost control.',
    top_img: '/Industries/rubber_top_img.webp',
    bottom_img: '/Industries/rubber_bottom_img.webp',
    alt_text1: "rubber_top_Img",
    alt_text2: "rubber_bottom_Img",
    top_description: "The rubber industry faces unique challenges, such as fluctuating raw material prices, quality control and cost management. Tech Cloud ERP offers solutions that improve production workflows, track inventories and save waste in order to meet these demands. Whether you are an expert in the production, processing, or distribution of rubber, our ERP system guarantees more efficient operations and higher profits.",
    bottom_description: "Tech Cloud ERP is the ideal solution for rubber manufacturers. With the help of our cloud-based platform, you can manage every part of your supply chain and manufacturing from one location. The program guarantees efficient processes, reduced mistakes and appropriate resource use. You may make informed decisions that save expenses, enhance the quality of your products and keep your company competitive with real-time analytics. ",
    similar_industries: [
      {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
      },
      {
      title: 'Leather Industry',
      link: '/industries/leather-industry',
      },
      {
      title: 'Wholesalers Industry',
      link: '/industries/wholesalers-industry',
      },
  ]
  },
  
  "restaurant-industry": {
    link: '/industries/restaurant-industry',
    heading: 'Restaurant Industry',
    subheading:'The Best ERP For Restaurant Industry',
    description: 'Our ERP systems for restaurants streamline operations, improve service and enhance inventory and order management.',
    top_img: '/Industries/restaurant_top_img.webp',
    bottom_img: '/Industries/restaurant_bottom_img.webp',
    alt_text1: "restaurant_top_Img",
    alt_text2: "restaurant_bottom_Img",
    top_description: "Managing a restaurant involves effectively managing workers, inventory, orders and customer service. Our ERP software was created especially for the restaurant business to help with everyday tasks, such as controlling food inventory, staff scheduling and customer relations. With Tech Cloud ERP, we take care of the backend with real-time data and automation, allowing you to concentrate more on giving your customers excellent experiences.",
    bottom_description: "Tech Cloud ERP is a cloud-based platform that integrates every aspect of your business and is tailored to the particular requirements of restaurants. Our software streamlines your operations, lowers mistakes and assists you in making data-driven decisions that improve service quality and efficiency, from inventory management to order processing and staff scheduling. You can easily run your restaurant with Tech Cloud ERP.",
    similar_industries: [
      {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
      },
      {
      title: 'Leather Industry',
      link: '/industries/leather-industry',
      },
      {
      title: 'Wholesalers Industry',
      link: '/industries/wholesalers-industry',
      },
  ]
  },
  
  "retail-industry": {
    link: '/industries/retail-industry',
    heading: 'Retail Industry',
    subheading:'The Best ERP For Retail Industry',
    description: 'Our retail ERP systems streamline inventory, sales and customer management for seamless operations and improved customer satisfaction.',
    top_img: '/Industries/retail_top_img.webp',
    bottom_img: '/Industries/retail_bottom_img.webp',
    alt_text1: "retail_top_Img",
    alt_text2: "retail_bottom_Img",
    top_description: "Manage the retail business efficiently in all areas of inventory, billing and customer service. Tech Cloud ERP is designed especially for the retail industry; it will help businesses in optimizing stock management, bill processing and gaining customer preferences. Simplify operations, reduce errors and be able to focus on the delivery of a seamless shopping experience for your customers through Tech Cloud ERP.",
    bottom_description: "Tech Cloud ERP, a cloud-based platform that combines inventory, sales and customer management, is the best option for retail companies. With features like effective billing and real-time analytics, our ERP software allows you to maintain your competitive edge. With Tech Cloud ERP, businesses can improve operational efficiency, save manual work and offer your customers the best possible shopping experience.",
    similar_industries: [
      {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
      },
      {
      title: 'Leather Industry',
      link: '/industries/leather-industry',
      },
      {
      title: 'Wholesalers Industry',
      link: '/industries/wholesalers-industry',
      },
  ]
  },
  
  "steel-industry": {
    link: '/industries/steel-industry',
    heading: 'Steel Industry',
    subheading:'The Best ERP For Steel Industry',
    description: 'Tech Cloud ERP optimizes production, inventory and supply chain management for steel manufacturers, ensuring smooth operations.',
    top_img: '/Industries/steel_top_img.webp',
    bottom_img: '/Industries/steel_bottom_img.webp',
    alt_text1: "steel_top_Img",
    alt_text2: "steel_bottom_Img",
    top_description: "The steel industry demands precision and real-time data to manage complex operations. Tech Cloud ERP is designed to provide steel manufacturers with tools to monitor stock levels, track production capacity and manage accounts seamlessly. With our cloud-based platform, businesses can optimize their operations, improve financial tracking and make informed decisions with revenue graphs and other key insights. Tech Cloud ERP helps steel companies enhance efficiency, reduce errors and stay competitive in a fast-evolving market.",
    bottom_description: "Tech Cloud ERP is the best choice because it provides an accurate cloud-based platform that includes financial reporting, capacity tracking and stock management. With the help of our software, you can see every aspect of your business, from accounting to production and make smarter decisions based on accurate data. You can save expenses, increase operational effectiveness and maintain your competitiveness in the steel business using Tech Cloud ERP.",
    similar_industries: [
      {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
      },
      {
      title: 'Leather Industry',
      link: '/industries/leather-industry',
      },
      {
      title: 'Wholesalers Industry',
      link: '/industries/wholesalers-industry',
      },
  ]
  },
  
  "telecom-industry": {
    link: '/industries/telecom-industry',
    heading: 'Telecom Industry',
    subheading:'The Best ERP For Telecom Industry',
    description: 'We offer a cloud-based solution for the telecom industry, enabling seamless management of workforce, stock, capacity and financial performance with real-time insights.',
    top_img: '/Industries/telecom_top_img.webp',
    bottom_img: '/Industries/telecom_bottom_img.webp',
    alt_text1: "telecom_top_Img",
    alt_text2: "telecom_bottom_Img",
    top_description: "Our Tech Cloud ERP is designed to provide telecom companies with tools to monitor workforce performance, track inventory and manage financials effortlessly. The telecom industry thrives on real-time data and operational efficiency. With our cloud-based platform, businesses can optimize resource allocation, track capacity and gain insights into revenue performance through visual graphs and key metrics.",
    bottom_description: "Tech Cloud ERP is the ideal solution for telecom businesses, offering an integrated cloud platform to manage workforce, capacity, stock and financials. With real-time insights, revenue tracking and detailed performance analytics, our ERP helps telecom companies make informed decisions, reduce costs and maintain a competitive edge. Empower your telecom business with the efficiency and scalability of Tech Cloud ERP.",
    similar_industries: [
      {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
      },
      {
      title: 'Leather Industry',
      link: '/industries/leather-industry',
      },
      {
      title: 'Wholesalers Industry',
      link: '/industries/wholesalers-industry',
      },
  ]
  },
  
  "textiles-industry": {
    link: '/industries/textiles-industry',
    heading: 'Textile Industry',
    subheading:'The Best ERP For Textile Industry',
    description: 'Tech Cloud ERP provides tailored solutions for the textile industry, streamlining stock, production, finances and real-time insights for better efficiency.',
    top_img: '/Industries/textile_top_img.webp',
    bottom_img: '/Industries/textile_bottom_img.webp',
    alt_text1: "textile_top_Img",
    alt_text2: "textile_bottom_Img",
    top_description: "Our Tech Cloud ERP is designed to make it easy for textile businesses to track production capacity, manage inventory and gain financial insights. The textile industry manages complex processes with accuracy and efficient operations. Businesses can make data-driven choices and increase efficiency with the help of our cloud-based platform.",
    bottom_description: "Tech Cloud ERP is the perfect solution for textile manufacturers, providing tools to manage capacity, accounts and revenue with ease. Our cloud-based platform integrates stock management, production tracking and financial insights, empowering textile businesses to improve efficiency, optimize operations and make data-driven decisions. ",
    similar_industries: [
      {
      title: 'FMCG Industry',
      link: '/industries/fmcg-industry',
      },
      {
      title: 'Leather Industry',
      link: '/industries/leather-industry',
      },
      {
      title: 'Wholesalers Industry',
      link: '/industries/wholesalers-industry',
      },
  ]
  },
  };

  export const aboutus_data = {
    'about_content': {
      heading: "Tech Cloud ERP Software for Your Business",
      description: "Streamline your business operations with Tech Cloud ERP, a cloud-based solution. Powerful modules are available to handle anything from inventories to sales.",
    },
    'termsAndConditionscontent' :{
      heading: "Terms & Conditions",
      description: "By accessing our website or using our services, you agree to abide by our terms and conditions.",
    },
    'privacypolicycontent':{
      heading: "Privacy Policy",
      description: "We respect your privacy and are committed to safeguarding your personal information in accordance with our Privacy Policy.",
    },
    'mdsprofilecontent' :{
      heading: "MR. RAJ - FOUNDER & CEO",
      description: "Certified SAP expertise and 27 years of extensive experience, shapes our vision and strategic path.",
    },
    'pricingcontent':{
      heading: "Pricing",
      description: "Our Comprehensive solution for established businesses and enterprises.",
    },
    'featurescontent':{
      heading: "Features",
      description: "Our comprehensive solution for established businesses and enterprises.",
    },
    'productcomparison':{
      heading: "Product Comparison",
      description: "Our comprehensive solution for established businesses and enterprises.",
    },
    'OurBranches':{
      heading: "Where We Work",
      description: "Join our dynamic team and be part of an innovative company. Shape the future, grow professionally and inspire success!",
    },
    'allservices':{
      heading: "Our Services",
      description: "Our ERP services streamline business operations with integrated solutions. Enhance productivity, automate tasks and make data-driven decisions effortlessly. Transform your workflow today!",
    },
    'allindustries':{
      heading: "Industries in Tech Cloud ERP",
      description: "Our ERP services streamline business operations with integrated solutions. Enhance productivity, automate tasks and make data-driven decisions effortlessly. Transform your workflow today!",
    },
    'allproducts':{
      heading: "Tech Cloud ERP Products",
      description: "Tech Cloud ERP is an all-in-one cloud platform that integrates ERP, CRM, POS, Trading, E-commerce, HRM and Accounting Software to streamline operations, improve customer relationships and automate key business processes, all from a unified system.",
    },
  };

  export const industriesDataList = {
    header: "Agriculture to Electronic Industries",  
    agricultureList: [
      {
        id: 1,
        title: "Agriculture Industry",
        description: "Tech Cloud ERP software for Agriculture Industry in India provides a unique ERP Online Software Application.",
        icon: '/AllIndustries/agriculture.webp',
        linkText: 'Explore',
        link: '/industries/agriculture-industry', 
      },
      {
        id: 2,
        title: "Apparel Industry",
        description: "An apparel ERP system aids in analyzing customer preferences, managing inventory and achieving client goals.",
        icon: '/AllIndustries/apparel.webp',
        linkText: 'Explore',
        link: '/industries/apparel-industry', 
      },
      {
        id: 3,
        title: "Automotive Industry",
        description: "Managing interlinked processes simultaneously is a crucial skill for every automotive industry leader and manager.",
        icon: '/AllIndustries/automation.webp',
        linkText: 'Explore',
        link: '/industries/automative-industry', 
      },
      {
        id: 4,
        title: "Beverage Industry",
        description: "Tech Cloud ERP software for Beverage Industry in India is a solution that helps your company streamline operations.",
        icon: '/AllIndustries/beverage.webp',
        linkText: 'Explore',
        link: '/industries/beverage-industry', 
      },
      {
        id: 5,
        title: "Chemical Industry",
        description: "The chemical industry is vital to global economies, contributing significantly to GDP and supporting multiple sectors.",
        icon: '/AllIndustries/chemical.webp',
        linkText: 'Explore',
        link: '/industries/chemical-industry', 
      },
      {
        id: 6,
        title: "Educational Institutes",
        description: "As education evolves, there’s growing interest in the potential of Enterprise Resource Planning (ERP) systems.",
        icon: '/AllIndustries/educational.webp',
        linkText: 'Explore',
        link: '/industries/educational-institutes', 
      },
      {
        id: 7,
        title: "Electric Industry",
        description: "The electrical industry includes manufacturers of generation, transmission and related equipment. ",
        icon: '/AllIndustries/electric.webp',
        linkText: 'Explore',
        link: '/industries/electrical-solar-industry', 
      },
      {
        id: 8,
        title: "Electronics Industry",
        description: "Flexibility is key for success in electronics manufacturing, including semiconductors, capacitors and chips.",
        icon: '/AllIndustries/electronics.webp',
        linkText: 'Explore',
        link: '/industries/electronics-industry', 
      },
    ],
    header: "FMCG to Metal Fabrication Industry",  
    fmcgList:[
      {
        id: 1,
        title: "FMCG Industry",
        description: "In FMCG, timely delivery, accurate stock info and personalized experiences drive loyalty and growth.",
        icon: '/AllIndustries/fmcg.webp',
        linkText: 'Explore',
        link: '/industries/FMCG-industry', 
      },
      {
        id: 2,
        title: "Food Industry",
        description: "ERP solutions tailored to food manufacturers streamline operations and ensure compliance in India’s market.",
        icon: '/AllIndustries/food.webp',
        linkText: 'Explore',
        link: '/industries/food-industry', 
      },
      {
        id: 3,
        title: "Furniture Industry",
        description: "Furniture manufacturers combine design with function, creating beautiful and practical furniture and fixtures.",
        icon: '/AllIndustries/furniture.webp',
        linkText: 'Explore',
        link: '/industries/furniture-industry', 
      },
      {
        id: 4,
        title: "Garment Industry",
        description: "ERP for garment manufacturers standardizes processes, reduces costs and improves operational efficiency.",
        icon: '/AllIndustries/garment.webp',
        linkText: 'Explore',
        link: '/industries/garment-industry', 
      },
      {
        id: 5,
        title: "Hydrolic Cylinders Industry",
        description: "Advanced ERP analytics help hydraulic cylinder industries optimize workflows and make data-driven decisions.",
        icon: '/AllIndustries/hydraulic.webp',
        linkText: 'Explore',
        link: '/industries/hydraulic-industry', 
      },
      {
        id: 6,
        title: "Jewellery Industry",
        description: "Tech Cloud ERP Software Solutions are the rich experienced software development company for the Jewellery Industry.",
        icon: '/AllIndustries/jewellery.webp',
        linkText: 'Explore',
        link: '/industries/jewellery-industry', 
      },
      {
        id: 7,
        title: "Leather Industry",
        description: "Leather is a perishable product, making it crucial to source the right quantity at the right time.",
        icon: '/AllIndustries/leather.webp',
        linkText: 'Explore',
        link: '/industries/leather-industry', 
      },
      {
        id: 8,
        title: "Wood Industry",
        description: "The wood industry supports diverse sectors, from furniture and toy-making to paper production and crafts. ",
        icon: '/AllIndustries/wood.webp',
        linkText: 'Explore',
        link: '/industries/wood-industry', 
      },
      {
        id: 9,
        title: "Wholesalers Industry",
        description: "Global distributors need new ways to collaborate and streamline operations within networked departments. ",
        icon: '/AllIndustries/wholesaler.webp',
        linkText: 'Explore',
        link: '/industries/wholesalers-industry', 
      },
      {
        id: 10,
        title: "Metal Fabrication Industry",
        description: "Metal fabrication involves diverse processes. Many industries lack automated systems for business management.",
        icon: '/AllIndustries/fabrication.webp',
        linkText: 'Explore',
        link: '/industries/metal-fabrication-industry', 
      },
      {
        id: 11,
        title: "Micro Finance Industry",
        description: "Microfinance bridges the gap between formal financial institutions and rural populations, automating operations.",
        icon: '/AllIndustries/micro-learning.webp',
        linkText: 'Explore',
        link: '/industries/microfinance-industry', 
      },
      {
        id: 12,
        title: "Medical Equipment Manufacturing Industry",
        description: "Choosing ERP software for medical equipment is complex due to the variety of solutions and functional overlap.",
        icon: '/AllIndustries/medical-equipment.webp',
        linkText: 'Explore',
        link: '/industries/medicalequipmentmanufacturing-industry', 
      },
    ],
    header: "Oil & Gas Textile Industry",  
    oilandgasList:[
      {
        id: 1,
        title: "Oil & Gas Industry",
        description: "The oil and gas industry relies on ERP systems for precise workflow management and market analysis.",
        icon: '/AllIndustries/oil-gas.webp',
        linkText: 'Explore',
        link: '/industries/oilandgas-industry', 
      },
      {
        id: 2,
        title: "Packaging Industry",
        description: "Packaging must ensure security, protection and marketing, from bottles to pharmaceuticals, across industries. ",
        icon: '/AllIndustries/packaging.webp',
        linkText: 'Explore',
        link: '/industries/packaging-industry', 
      },
      {
        id: 3,
        title: "Paper Industry",
        description: "Paper manufacturing industries are increasingly implementing ERP software systems to enhance their processes.",
        icon: '/AllIndustries/paper.webp',
        linkText: 'Explore',
        link: '/industries/paper-industry',
      },
      {
        id: 4,
        title: "Plastic Industry",
        description: "ERP systems help manage production, waste and operations, streamlining all departments in one system.",
        icon: '/AllIndustries/plastic.webp',
        linkText: 'Explore',
        link: '/industries/plastic-industry', 
      },
      {
        id: 5,
        title: "Pharmaceutical Industry",
        description: "The Pharmaceutical industry is really doing great with very high global demand and strong export markets.",
        icon: '/AllIndustries/pharma.webp',
        linkText: 'Explore',
        link: '/industries/pharma-industry', 
      },
      {
        id: 6,
        title: "Publishing Industry",
        description: "Publishing involves content creation, design, printing and distribution of magazines, books and more.",
        icon: '/AllIndustries/publishing.webp',
        linkText: 'Explore',
        link: '/industries/publishing-industry',
      },
      {
        id: 7,
        title: "Printing Industry",
        description: "ERP supports the full print process, from sales and quoting to order management and production delivery.",
        icon: '/AllIndustries/printer.webp',
        linkText: 'Explore',
        link: '/industries/printing-industry', 
      },
      {
        id: 8,
        title: "Pre Engineering Industry",
        description: "ERP modules are tailored to meet the specific needs of the pre-engineering industry for effective project management.",
        icon: '/AllIndustries/engineer.webp',
        linkText: 'Explore',
        link: '/industries/preengineering-industry', 
      },
      {
        id: 9,
        title: "Rubber Industry",
        description: "India is a major producer of rubber products, supplying both domestic and international markets.",
        icon: '/AllIndustries/rubber.webp',
        linkText: 'Explore',
        link: '/industries/rubber-industry', 
      },
      {
        id: 10,
        title: "Restaurant Industry",
        description: "Restaurant Industry - An industry with many demands for its service and it is a start point for many business enthusiasts. ",
        icon: '/AllIndustries/restaurant.webp',
        linkText: 'Explore',
        link: '/industries/restaurant-industry', 
      },
      {
        id: 11,
        title: "Retail Industry",
        description: "ERP systems help retail businesses make quick decisions and maintain accurate, end-to-end data across stores. ",
        icon: '/AllIndustries/retail.webp',
        linkText: 'Explore',
        link: '/industries/retail-industry',
      },
      {
        id: 12,
        title: "Steel Industry",
        description: "ERP is essential for managing operations in steel manufacturing, from raw materials to finished goods.",
        icon: '/AllIndustries/steel.webp',
        linkText: 'Explore',
        link: '/industries/steel-industry', 
      },
      {
        id: 13,
        title: "Telecom Industry",
        description: "Telecom manufacturers produce a range of products, from large-scale switches to mobile phones.",
        icon: '/AllIndustries/telecom.webp',
        linkText: 'Explore',
        link: '/industries/telecom-industry', 
      },
      {
        id: 14,
        title: "Textile Industry",
        description: "ERP provides an all-in-one solution for the textile industry, managing everything from raw materials to finished garments. ",
        icon: '/AllIndustries/textile.webp',
        linkText: 'Explore',
        link: '/industries/textiles-industry', 
      },
    ],
  
  
  };