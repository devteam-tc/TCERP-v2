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
import { FaArrowsRotate } from "react-icons/fa6"; // Corrected FaGroupArrowsRotate

export const releavant = {
  
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
    top_img: '/industries/agriculture_top_img.webp',
    bottom_img: '/industries/agriculture_bottom_img.webp',
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
    top_img: '/industries/apparel_top_img.webp',
    bottom_img: '/industries/apparel_Bottom_img.webp',
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
    top_img: '/industries/automotive_top_img.webp',
    bottom_img: '/industries/automotive_Bottom_img.webp',
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
    top_img: '/industries/beverage_top_img.webp',
    bottom_img: '/industries/beverage_bottom_img.webp',
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
    top_img: '/industries/chemical_top_img.webp',
    bottom_img: '/industries/chemical_bottom_img.webp',
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
    top_img: '/industries/educational_top_img.webp',
    bottom_img: '/industries/eductional_bottom_img.webp',
    alt_text1: "educational_top_Img",
    alt_text2: "educational_bottom_Img",
    top_description: "An Enterprise Resource Planning (ERP system for educational institutions is a complete software solution that integrates numerous tasks such as administration, finance, human resources, student management and others. An ERP system guarantees that operations within the institution run smoothly and efficiently by centralising critical data and automating activities.",
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
    top_img: '/industries/eletrical_top_img.webp',
    bottom_img: '/industries/eletrical_Bottom_img.webp',
    alt_text1: "electrical_top_Img",
    alt_text2: "electrical_bottom_Img",
    top_description: "In the rapidly expanding and constantly changing solar energy industry, maintaining a competitive edge in a competitive marketplace requires effective management and smooth operations. In order to address these particular difficulties, enterprise resource planning (ERP systems made specifically for the electrical solar sector combine all facets of your company into a single, expandable platform.",
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
    top_img: '/industries/eletronic_top_image.webp',
    bottom_img: '/industries/eletronic_bottom_image.webp',
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
  "fmcg-industry": {
    link: '/industries/fmcg-industry',
    heading: 'FMCG Industry',
    subheading:'The Best ERP For FMCG Industry',
    description: 'Our ERP solutions for FMCG streamline supply chain management, optimize inventory, improve efficiency and enable real-time decision-making.',
    top_img: '/industries/Fmcg_top_img.webp',
    bottom_img: '/industries/Fmcg_Bottom_img.webp',
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
    top_img: '/industries/Food_top_img.webp',
    bottom_img: '/industries/food_bottom_img.webp',
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
    top_img: '/industries/Furniture_top_img.webp',
    bottom_img: '/industries/Furniture_bottom_img.webp',
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
    top_img: '/industries/Garment_top_img.webp',
    bottom_img: '/industries/Garment_Bottom_img.webp',
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
    top_img: '/industries/Hydralic_top_img.webp',
    bottom_img: '/industries/Hydralic_bottom_img.webp',
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
    top_img: '/industries/jewellery_top_img.webp',
    bottom_img: '/industries/jewellery_Bottom_img.webp',
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
    top_img: '/industries/leather_top_img.webp',
    bottom_img: '/industries/leather_bottom_img.webp',
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
    top_img: '/industries/Logistics_top_img.webp',
    bottom_img: '/industries/Logistics_Bottom_img.webp',
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
    top_img: '/industries/Medical__top_img.webp',
    bottom_img: '/industries/medical_bottom_img.webp',
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
    top_img: '/industries/wood_top_img.webp',
    bottom_img: '/industries/wood_bottom_img.webp',
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
    top_img: '/industries/wholesalers_top_img.webp',
    bottom_img: '/industries/wholesalers_bottom_img.webp',
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
    top_img: '/industries/metalfabrication_top_img.webp',
    bottom_img: '/industries/metalfabrication_bottom_img.webp',
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
    top_img: '/industries/Microfinance_top_img.webp',
    bottom_img: '/industries/Microfinance_bottom_img.webp',
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
    top_img: '/industries/oilandgas_top_img.webp',
    bottom_img: '/industries/oilandgas_bottom_img.webp',
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
    top_img: '/industries/packaging_top_img.webp',
    bottom_img: '/industries/packaging_bottom_img.webp',
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
    top_img: '/industries/paper_top_img.webp',
    bottom_img: '/industries/paper_bottom_img.webp',
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
    top_img: '/industries/plastic_top_img.webp',
    bottom_img: '/industries/plastic_bottom_img.webp',
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
    top_img: '/industries/pharmaceutical_top_img.webp',
    bottom_img: '/industries/pharmaceutical_bottom_img.webp',
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
    top_img: '/industries/publishing_top_img.webp',
    bottom_img: '/industries/publishing_bottom_img.webp',
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
    top_img: '/industries/printing_top_img.webp',
    bottom_img: '/industries/printing_bottom_img.webp',
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
    top_img: '/industries/preEngineering_top_img.webp',
    bottom_img: '/industries/preEngineering_bottom_img.webp',
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
    top_img: '/industries/rubber_top_img.webp',
    bottom_img: '/industries/rubber_bottom_img.webp',
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
    top_img: '/industries/restaurant_top_img.webp',
    bottom_img: '/industries/restaurant_bottom_img.webp',
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
    top_img: '/industries/retail_top_img.webp',
    bottom_img: '/industries/retail_bottom_img.webp',
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
    top_img: '/industries/steel_top_img.webp',
    bottom_img: '/industries/steel_bottom_img.webp',
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
    top_img: '/industries/telecom_top_img.webp',
    bottom_img: '/industries/telecom_bottom_img.webp',
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
    top_img: '/industries/textile_top_img.webp',
    bottom_img: '/industries/textile_bottom_img.webp',
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
    'ContactUs_content':{
      heading: "Contact us",
      description :"Connect with our team today to discover how our expert ERP guidance can streamline your business operations and drive growth. Get in touch now to unlock your business potential.",
      },
      'businessData' :{
        heading: "ERP Insights Drive Business Growth",
        description: "Increase growth and decision-making using BI for ERP. Get access to data, analytics and insights in real time to maximise performance and stimulate strategic possibilities.",
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
        description: "As education evolves, there’s growing interest in the potential of Enterprise Resource Planning (ERP systems.",
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

  export const productData = {
    'tech-cloud-erp': {
      productTitle: 'Tech Cloud Enterprise Resource Planning',
      heading: "ERP Solutions",
      description: "Our ERP solutions are designed to streamline and optimize operations.",
      imageSrc : "/products/products_main_img.webp",
      mainTitle : "Our ERP Solutions Overview",
      title : "Cloud Based ERP Software",
      productDescription: [
        "Tech Cloud ERP offers secure and scalable cloud-based ERP software to streamline business operations. Our solution integrates key functions like sales, inventory, accounting and HR into a unified platform, providing real-time insights and enhanced flexibility. Tailored for industries such as manufacturing, retail and logistics, our ERP software helps businesses improve efficiency, reduce costs and drive growth.",
        "To get a clearer view on ERP software solutions and what it does to change the fortune of an enterprise, understand what ERP is. This is Enterprise Resource Planning, where all main company functions, such as sales, marketing, inventory, production, accounting and human resources, are joined together in a single program. Cloud-based ERP software that we have here in Hyderabad, India, helps operate more efficiently by centralising and streamlining operations at all levels within the business.Thank you for your understanding and support."
      ],
      cards: [
        {
          image: "/products/tcerp/sale.png",
          title: "Sales & Marketing",
          text: "Integrating sales and marketing with ERP systems enhances customer engagement, streamlining processes for improved efficiency and business growth.",
          items: [
            "Manages pre-sales and sales activities.",
            "Tracks the entire sales order process from start to finish.",
            "Keeps a detailed database of customers, business partners and dealers.",
          ]
        },
        {
          image: "/products/tcerp/purchase.png",
          title: "Purchase Management",
          text: "Simplify procurement, from requisition to payment, with our ERP’s powerful purchase management module.",
          items: [
            "Manages supplier invoices and payments.",
            "Handles enquiries with multiple vendors.",
            "Customizable terms and conditions.",
          ]
        },
        {
          image: "/products/tcerp/stores.png",
          title: "Stores & Inventory",
          text: "Effectively manage inventory across multiple stores with our ERP's all-in-one stores and inventory management solution.",
          items: [
            "Real-time tracking of item quantities.",
            "Multiple classification levels for items.",
            "Expiry control and warranty tracking.",
          ]
        },
        {
          image: "/products/tcerp/production.png",
          title: "Production",
          text: "Enhance production workflows and resource management with our ERP's advanced production capabilities.",
          items: [
            "Supports batch, discrete, made-to-order and made-to-stock production types.",
            "Multi-level bill of materials.",
            "Material requirement planning based on sales orders and production plans.",
          ]
        },
        {
          image: "/products/tcerp/quality.png",
          title: "Quality Check",
          text: "Ensure product quality and compliance with our ERP's advanced quality management tools.",
          items: [
            "Create inspection plans and checklists.",
            "Assign inventory with custom QC statuses.",
            "Generate personalized Certificates of Analysis.",
          ]
        },
        {
          image: "/products/tcerp/plantmain.png",
          title: "Plant Maintenance",
          text: "Keep your plant running efficiently with our ERP's plant maintenance module, offering easy scheduling and tracking of maintenance tasks.",
          items: [
            "Manage equipment details.",
            "Track preventive maintenance.",
            "Monitor utility details and maintenance.",
          ]
        },
        {
          image: "/products/tcerp/finance.png",
          title: "Finance",
          text: "Achieve complete financial control and insights with our ERP's robust finance module, ensuring smooth processes and regulatory compliance.",
          items: [
            "Track cash, bank flow and expenditures.",
            "Manage bank account transfers.",
            "Access general ledger inquiries.",
          ]
        },
        {
          image: "/products/tcerp/humanresouce.png",
          title: "Human Resources",
          text: "Simplify HR processes and foster talent with our ERP's user-friendly human resource module, enabling efficient employee data management and development.",
          items: [
            "Maintain an employee database.",
            "Use dynamic HR letter templates.",
            "Track attendance efficiently.",
          ]
        },
        {
          image: "/products/tcerp/assetmange.png",
          title: "Asset Management",
          text: "Maximize asset performance and reduce downtime with our ERP's asset management module, providing efficient tracking, maintenance and optimization tools.",
          items: [
            "Manage depreciable and non-depreciable assets with customizable depreciation.",
            "Import and export asset records.",
            "Assign vision units to track asset billing value.",
          ]
        }
      ],
      tabData: {
        requirement: {
          image: "/products/tcerp/requiregath.webp",
          content: [
            { title: 'Identify Client Needs:', description: "Deeply understand the client's business objectives, pain points and opportunities." },
            { title: 'Stakeholder Collaboration:', description: 'Engage with key decision-makers to ensure all requirements are well-documented.' },
            { title: 'Customized Solutions:', description: 'Shape solutions tailored to the unique needs of the business.' },
          ],
        },
        implementation: {
          image: "/products/tcerp/impletrain.webp", 
          content: [
            { title: 'System Setup:', description: 'Install, configure and customize the ERP system.' },
            { title: 'Training:', description: 'Train the client’s team on how to use the system efficiently.' },
            { title: 'Documentation:', description: 'Create and provide all necessary documentation for future reference.' },
          ],
        },
        goLive: {
          image: "/products/tcerp/golive.webp", 
          content: [
            { title: 'Live System Activation:', description: 'Transition from the legacy system to the new ERP system.' },
            { title: 'Monitoring:', description: 'Monitor the system for issues and ensure smooth operation.' },
            { title: 'User Support:', description: 'Provide on-site and remote support during the go-live phase.' },
          ],
        },
        postGoLive: {
          image: "/products/tcerp/pogostlive.webp" ,
          content: [
            { title: 'Ongoing Support:', description: 'Provide continued support to resolve any post-go-live issues.' },
            { title: 'System Optimization:', description: 'Fine-tune the system based on real-world usage.' },
            { title: 'Upgrades & Maintenance:', description: 'Ensure the system stays updated with the latest features and security patches.' },
          ],
        },
      },
      tabsHeadings: {
        requirement: "Requirement Gathering",
        implementation: "Implementation & Training",
        goLive: "Go Live & Onboarding",
        postGoLive: "Post-Go-Live Support",
      }
    },
    'customer-relationship-management': {
      productTitle: 'Tech Cloud Customer Relationship Management',
      heading: "CRM Solutions",
      description: "Elevate customer interactions with our CRM for personalized growth solutions.",
      imageSrc : "/products/crm-pdt.webp",
      mainTitle : "Our CRM Solutions Overview",
      title : "Cloud Based CRM Software",
      productDescription: [
        "Tech Cloud ERP gives you a cloud CRM solution that improves your internal processes and builds strong relationships with customers while increasing growth. Live-stream Customer Data, Sales & Marketing Activity – With the CRM Consultants you take all data Live as per inputs and get every functionality in sync by leaving your mind in it. We enable businesses to streamline workflows and improve productivity, with features like sales & marketing integration, invoicing & order management and purchase management. ",
        "In one single shippable software, we have integrated various features like quality check and project management tools alongside handling assets with our CRM platform. Find big and custom tailored solutions that scale with your business, making sure everyone in your team works efficiently as part of one network."
      ],
      cards: [
        {
          image: "/products/CRM/contact.png",
          title: "Contact Management",
          text: "Streamline contact organization, lead creation and imports for effective client communication and marketing campaigns, improving efficiency by reducing duplication.",
          items: [
            "Organize and import contacts for smooth communication.",
            "Create and manage leads to enhance marketing.",
            "Duplicate contact details to save time and boost efficiency.",
          ]
        },
        {
          image: "/products/CRM/target customers.png",
          title: "Target Customers",
          text: "Segment customers using contact database info to craft targeted marketing campaigns, enhancing product/service appeal to your ideal audience.",
          items: [
            "Segment customers for personalized marketing campaigns.",
            "Enhance product and service appeal to your target audience.",
            "Leverage contact database insights to drive engagement.",
          ]
        },
        {
          image: "/products/CRM/organise.png",
          title: "Organise Meetings",
          text: "Streamline meeting scheduling and management to enhance productivity and communication with your team and clients.",
          items: [
            "Schedule meetings and send invites effortlessly.",
            "Track meeting notes for efficient follow-up.",
            "Set meeting durations and reminders for better organization.",
          ]
        },
        {
          image: "/products/CRM/manage.png",
          title: "Manage Opportunities",
          text: "Track potential sales and boost your bottom line by managing opportunities, recording expected revenue and close dates to generate precise sales pipeline reports.",
          items: [
            "Track opportunities by expected revenue and close dates.",
            "Generate accurate sales pipeline reports for better forecasting.",
            "Combine emails, calls, tasks and documents to drive action.",
          ]
        },
        {
          image: "/products/CRM/Streamline workflow.png",
          title: "Streamline Workflow",
          text: "Generate leads from referrals, emails and webinars. Assign tasks, quotes and calls to sales teams for quick follow-up and faster deal closures.",
          items: [
            "Capture leads through referrals, email and webinars.",
            "Assign tasks and quotes to sales for efficient follow-up.",
            "Streamline workflow to close deals faster.",
          ]
        },
        {
          image: "/products/CRM/Invoicing & Order Management.png",
          title: "Invoicing & Order Management",
          text: "Quickly create quotes from won opportunities and convert them into orders with our CRM, streamlining sales for a competitive edge.",
          items: [
            "Generate quotes from won opportunities with ease.",
            "Convert quotes into orders upon client confirmation.",
            "Streamline sales processes for better efficiency.",
          ]
        },
        {
          image: "/products/CRM/Case Management.png",
          title: "Case Management",
          text: "Efficiently manage and resolve customer issues with our CRM to improve satisfaction and loyalty. Prioritize tasks for timely resolution.",
          items: [
            "Track and resolve customer issues to improve satisfaction.",
            "Prioritize and delegate tasks for quick issue resolution.",
            "Enhance service efficiency with streamlined case management.",
          ]
        },
        {
          image: "/products/CRM/projectmanage.png",
          title: "Project Management",
          text: "Easily manage projects with our CRM by creating tasks and integrating documents. Optimize timelines with effective allocation of hours and days.",
          items: [
            "Create tasks and integrate documents for smooth management.",
            "Optimize timelines by allocating hours and days efficiently.",
            "Streamline workflows for better project execution.",
          ]
        },
        {
          image: "/products/CRM/email marketing.png",
          title: "Email Marketing",
          text: "Leverage our CRM for targeted campaigns to promote new products and services, engaging customers with personalized content.",
          items: [
            "Launch targeted campaigns for new products and services.",
            "Engage customers with relevant, personalized content.",
            "Prioritize high-value customers to boost sales.",
          ]
        }
      ],
      tabData: {
        requirement: {
          image: "/products/CRM/crmrequire.webp",
          content: [
            { title: 'Identify CRM Needs:', description: "Understand the organization's goals for managing customer relationships." },
            { title: 'Team Collaboration:', description: 'Work with sales, marketing and support teams to define specific CRM requirements.' },
            { title: 'Tailored CRM Approach:', description: 'Design a CRM solution tailored to your business processes and customer journey.' },
          ],
        },
        implementation: {
          image: "/products/CRM/crmimplementation.webp",
          content: [
            { title: 'CRM System Setup:', description: 'Install, configure and customize the CRM system to meet your business needs.' },
            { title: 'Training & Enablement:', description: 'Train employees on how to efficiently use the CRM system for their roles.' },
            { title: 'Data Import & Migration:', description: 'Seamlessly migrate customer and business data into the new CRM system.' },
          ],
        },
        goLive: {
          image: "/products/CRM/crmgolive.webp",
          content: [
            { title: 'Go Live Activation:', description: 'Make the CRM system live and accessible for all users.' },
            { title: 'Real-time Monitoring:', description: 'Monitor system performance and address issues during the go-live phase.' },
            { title: 'User Support:', description: 'Provide on-site and remote support to ensure smooth adoption.' },
          ],
        },
        postGoLive: {
          image: "/products/CRM/crmpostgolive.webp",
          content: [
            { title: 'Continuous Support:', description: 'Offer ongoing support to resolve any post-launch challenges.' },
            { title: 'CRM Optimization:', description: 'Optimize the CRM system based on user feedback and business requirements.' },
            { title: 'Regular Updates:', description: 'Ensure the CRM system stays up-to-date with new features and security patches.' },
          ],
        },
      },
      tabsHeadings: {
        requirement: "CRM Requirement Analysis",
        implementation: "CRM Implementation",
        goLive: "Go Live & User Adoption",
        postGoLive: "Post-Go-Live CRM Optimization",
      }
    },
    'point-of-sale':{
        productTitle: 'Tech Cloud Point of Sale',
        heading: "Point of Sale",
        description: "Unlock growth and increase profits with our efficient, advanced POS system.",
        imageSrc : "/products/pos-pdt.webp",
        mainTitle : "Popular Tech Cloud POS",
        title : "Advanced Cloud-Based POS for Retail Stores",
        productDescription: [
          " Another smarter cloud-based POS software for retail stores. Offering our solution that brings together the sales processes, inventory management and customer engagements on one single roof. Our POS system provides near real-time data synchronization between both the systems, allowing seamless transactions that minimize errors and also improves operational efficiency making it a perfect solution for such retail businesses interested in boosting customer experience and growth.",
          "Cloud-based POS system with functionality including inventory management, sales tracking and customer data. It also helps you in multi-store retailing to control your stores from anywhere at any time. Our software is here to handle sales, stock management and even process sales analytics, ensuring you have all the tools at your disposal to not only streamline retail but to also maintain a competitive edge."
        ],
        cards: [
            {
              image: "/products/POS/webdevelopment.png",
              title: "Web Based CRM",
              text: "Unlock real-time insights into customer behavior and sales trends with Tech Cloud CRM’s web-based analytics. Access crucial data anytime, from anywhere, to optimize your business strategies.",
              items: [
                "Gain real-time insights into customer behavior. ",
                "Access data anytime, anywhere, with ease.",
                "Optimize business strategies using powerful cloud analytics.",
              ]
            },
            {
              image: "/products/POS/customerunderstanding.png",
              title: "Customer Understanding",
              text: "Enhance customer engagement and satisfaction by deeply analyzing preferences and feedback with Tech Cloud CRM.",
              items: [
                "Analyze customer preferences and behaviors.",
                "Leverage feedback to improve engagement.",
                "Tailor offerings to boost customer satisfaction.",
              ]
            },
            {
              image: "/products/POS/discount.png",
              title: "Discounts",
              text: "Boost sales and foster customer loyalty by implementing effective discount strategies with Tech Cloud CRM.",
              items: [
                "Drive sales with targeted discount promotions.",
                "Enhance loyalty with strategic offers.",
                "Encourage repeat purchases through enticing deals.",
              ]
            },
            {
              image: "/products/POS/inventory.png",
              title: "Inventory Optimization",
              text: "Optimize inventory management with Tech Cloud CRM to track stock levels and forecast demand, improving efficiency and reducing costs.",
              items: [
                "Monitor stock levels for effective management.",
                "Forecast demand to minimize excess inventory.",
                "Streamline operations to reduce costs.",
              ]
            },
            {
              image: "/products/POS/cashmanage.png",
              title: "Cash Management",
              text: "Ensure financial stability and smooth operations with effective cash management using Tech Cloud CRM. Monitor cash flow and forecast expenses to maintain control.",
              items: [
                "Monitor cash flow for better financial oversight.",
                "Forecast expenses to avoid financial shortfalls.",
                "Manage receivables and payables efficiently.",
              ]
            },
            {
              image: "/products/POS/customreceipts.png",
              title: "Custom Receipts",
              text: "Enhance the customer experience with personalized receipts using Tech Cloud CRM. Tailor receipts with relevant details and custom designs to strengthen your brand identity.",
              items: [
                "Personalize receipts for improved customer experience.",
                "Include relevant details to boost engagement.",
                "Strengthen brand identity with custom designs.",
              ]
            },
            {
              image: "/products/POS/fasttraining.png",
              title: "Fast Staff Training",
              text: "Ensure rapid staff onboarding and operational efficiency with Tech Cloud CRM. Our system allows new team members to quickly learn and utilize features effectively.",
              items: [
                "Quick onboarding for new staff.",
                "Minimize downtime during training.",
                "Boost productivity with efficient learning.",
              ]
            },
            {
              image: "/products/POS/useraccount.png",
              title: "User Accounts",
              text: "Efficiently manage user accounts with Tech Cloud CRM, ensuring personalized experiences and secure access. Control permissions to protect sensitive information and enhance security.",
              items: [
                "Securely manage user accounts for personalized access.",
                "Control permissions to enhance security.",
                "Customize experiences for each user.",
              ]
            },
            {
              image: "/products/POS/data-analysis.png",
              title: "Data Analysis",
              text: "Leverage Tech Cloud CRM to analyze data and uncover valuable insights that drive informed decision-making. Turn raw data into actionable strategies for business growth.",
              items: [
                "Uncover insights to guide business decisions.",
                "Identify trends for effective strategic planning.",
                "Identify trends for effective strategic planning.",
              ]
            }
          ],
          tabData: {
            requirement: {
              image: "/products/POS/posrequirement.webp",
              content: [
                { title: 'Understand Retail Needs:', description: "Identify the specific POS requirements based on store size, transaction volume and customer experience goals." },
                { title: 'Stakeholder Collaboration:', description: 'Engage with store managers and decision-makers to gather comprehensive requirements.' },
                { title: 'Tailored POS Solutions:', description: 'Design a POS system that meets the unique needs of your retail operations.' },
              ],
            },
            implementation: {
              image: "/products/POS/posimple.webp", 
              content: [
                { title: 'POS System Setup:', description: 'Install, configure and customize the POS system to match store operations.' },
                { title: 'Staff Training:', description: 'Train staff to use the POS system efficiently, covering transactions, inventory and reporting.' },
                { title: 'Documentation & Support:', description: 'Provide user guides and ongoing support for staff during the implementation phase.' },
              ],
            },
            goLive: {
              image: "/products/POS/posgolive.webp",
              content: [
                { title: 'POS Go-Live:', description: 'Launch the POS system in your store and ensure all staff are comfortable with its usage.' },
                { title: 'Monitoring Performance:', description: 'Monitor system performance, address any issues and ensure smooth operations post-launch.' },
                { title: 'Live Support:', description: 'Provide real-time support for any operational challenges during the go-live phase.' },
              ],
            },
            postGoLive: {
              image: "/products/POS/postgolive.webp",
              content: [
                { title: 'Ongoing Support & Maintenance:', description: 'Offer continued support to resolve any post-launch challenges and ensure system stability.' },
                { title: 'POS Optimization:', description: 'Optimize the POS system based on feedback and real-time performance data.' },
                { title: 'System Updates:', description: 'Keep the system up-to-date with new features and security improvements.' },
              ],
            },
          },
          tabsHeadings: {
            requirement: "POS Requirement Gathering",
            implementation: "POS Implementation & Training",
            goLive: "Go Live & Monitoring",
            postGoLive: "Post-Go-Live Support & Optimization",
          }
      
    },
    'trading-software': {
      productTitle: 'Tech Cloud Trading Software',
        heading: "Trading software",
        description: "Enhance customer relationships and streamline operations with our trading software.",
        imageSrc : "/products/trading-pdt.webp",
        mainTitle : "Why Choose Tech Cloud ERP",
        title : "A Perfect Software for Traders",
        productDescription: [
          " At Tech Cloud ERP, we offer a comprehensive solution designed specifically for traders. Our software simplifies inventory management, order tracking and financial processes, enabling traders to operate efficiently and stay competitive. With powerful tools for real-time insights and seamless automation, managing trade activities has never been easier.",
          "Whether you're handling procurement, sales, or logistics, Tech Cloud ERP provides the flexibility and control you need. Our customizable platform adapts to your unique trading requirements, helping you reduce costs, optimize workflows and drive business growth effortlessly."
        ],
          cards: [
            {
              image: "/products/trading/newcustomer.png",
              title: "New Customers",
              text: "We help you generate leads with valuable content that encourages potential customers to share their contact details.",
              items: [
                "Capture leads via word of mouth, emails and webinars.",
                "Assign leads to your sales team for follow-ups and deal closure.",
                "Schedule calls or send emails to convert leads into customers.",
              ]
            },
            {
              image: "/products/trading/customermanage.png",
              title: "Customer Management",
              text: "We provide solutions to simplify customer management by tracking interactions, resolving issues quickly and building strong relationships to boost satisfaction and loyalty.",
              items: [
                "Essential for collecting and organizing customer data.",
                "Beneficial for both small and large businesses.",
                "Helps analyze customer behavior, preferences and demographics effectively.",
              ]
            },
            {
              image: "/products/trading/purchase.png",
              title: "Purchase Management",
              text: "We offer solutions to streamline purchase management, ensuring efficient sourcing, procurement and inventory tracking for cost-effective operations.",
              items: [
                "A vital part of materials management in any company.",
                "Helps address competition, market demands and resource scarcity.",
                "Covers supplier verification, timely delivery and quality checks.",
              ]
            },
            {
              image: "/products/trading/streamline.png",
              title: "Streamline Warehouse Management",
              text: "We provide efficient warehouse management solutions with optimized inventory control, streamlined workflows and advanced technology.",
              items: [
                "Subscription-based system with no upfront costs.",
                "Monthly payments ensure the latest updates and no technical issues.",
                "Designed with a user-friendly approach for a seamless experience.",
              ]
            },
            {
              image: "/products/trading/shipping.png",
              title: "Reduced Shipping Costs",
              text: "We help reduce shipping costs by optimizing logistics routes, negotiating with carriers and improving packaging efficiency.",
              items: [
                "Build strong connections with shipping representatives.",
                "Use flat-rate shipping options.",
                "Negotiate better shipping rates.",
              ]
            },
            {
              image: "/products/trading/accounts.png",
              title: "Accounts Maintenance",
              text: "We ensure smooth account maintenance by updating details, tracking transactions and addressing inquiries to build trust and satisfaction.",
              items: [
                "Manage investment accounts with securities and cash.",
                "Support frequent trading under applicable regulations.",
                "Provide secure handling of various investment assets.",
              ]
            }
          ],
          tabData: {
            discovery: {
              image: "/products/trading/discovery.webp", 
              alt: "Alt text for discovery image",
              content: [
                { title: 'Understand Business Goals:', description: "Gain insights into the business's trading objectives, pain points and market opportunities." },
                { title: 'Stakeholder Engagement:', description: 'Collaborate with key team members to understand expectations and priorities for the software.' },
                { title: 'Identify Key Challenges:', description: 'Focus on understanding trading cycles, bottlenecks and competitive pressures.' },
              ],
            },
            implementation: {
              image: "/products/trading/implemenattion.webp",
              alt: "Alt text for implementation image",
              content: [
                { title: 'System Configuration:', description: 'Install and configure ERP software to meet trading-specific needs.' },
                { title: 'Team Training:', description: 'Ensure that all users are trained to handle trading workflows, inventory and customer management effectively.' },
                { title: 'Documentation Creation:', description: 'Create comprehensive user guides and process documentation for reference.' },
              ],
            },
            goLive: {
              image: "/products/trading/tradinggolive.webp",
              alt: "Alt text for go live image", 
              content: [
                { title: 'System Launch:', description: 'Officially activate the trading ERP system, transitioning from legacy solutions.' },
                { title: 'Monitoring & Adjustment:', description: 'Track system performance and make any necessary real-time adjustments.' },
                { title: 'Support & Guidance:', description: 'Provide ongoing support during the initial go-live phase to resolve any user issues.' },
              ],
            },
            optimization: {
              image: "/products/trading/tradingpostlive.webp",
              alt: "Alt text for optimization image", 
              content: [
                { title: 'System Enhancements:', description: 'Identify areas for improvement based on user feedback and operational performance.' },
                { title: 'Continuous Support:', description: 'Provide continuous support to resolve emerging issues and optimize trading operations.' },
                { title: 'Upgrades & Features:', description: 'Ensure the system is equipped with the latest trading tools and capabilities.' },
              ],
            },
          },
          tabsHeadings: {
            discovery: "Discovery & Planning",
            implementation: "Implementation & Training",
            goLive: "Go Live & Support",
            optimization: "Post-Go-Live Optimization",
          }
  
    },
    'Ecommerce-software': {
      productTitle: 'Tech Cloud E-Commerce Software',
        heading: "E-Commerce Solutions",
        description: "With our expert implementation, training and support services, we enable seamless integration between your e-commerce platform and ERP system for optimal efficiency.",
        imageSrc : "/products/ecommerce-pdt.webp",
        mainTitle : "Our E-Commerce Overview",
        title : "Tech Cloud E-Commerce",
        productDescription: [
          "At Tech Cloud ERP, We offer a complete e-commerce solution so you can run your online business seamlessly. Our cloud solution enables you to manage inventory, process orders and automate important business functions easily. Our software is deployed with little or no friction into your existing configuration, it makes operational efficiency better and enhances customer experience, thereby helping you stay competitive.",
          "Our powerful analytics and actionable insights help you to make data driven decisions, optimize for best possible e commerce strategy. Tech Cloud ERP makes sure that your e-commerce operations are running seamlessly, regardless of whether you are managing a small business or scaling new heights in the industry, so you can focus on growing the business. Let us help you transform your online store into a successful and efficient business."
        ],
          cards: [
            {
              image: "/products/ecommerce/automation.png",
              title: "Automation",
              text: "Simplify your operations with Tech Cloud ERP’s advanced automation, ensuring accurate pricing and smooth transactions from start to finish. Our system automates everything from taxes to shipping, providing your customers with instant clarity and a seamless experience.",
              items: [
                "Enjoy clear, transparent pricing for all costs.",
                "Streamline the shopping process with automated calculations.",
                "Enhance customer satisfaction with smooth, hassle-free transactions.",
              ]
            },
            {
              image: "/products/ecommerce/website-builder.png",
              title: "Website Builder",
              text: "Create your perfect website the easy way, with Tech Cloud ERP’s website builder that’s perfect for everyone. Our design platform integrate intuitive tools and powerful features, assures that you’ll have a professional website in no time.",
              items: [
                "Easy to use tools that make building a website a snap.",
                "Flexible and customisable templates and features.",
                "Seamless integration for a successful creation process.",
              ]
            },
            {
              image: "/products/ecommerce/database.png",
              title: "Central Database",
              text: "Simplify your business operations with our centralized database, offering a secure and efficient way to store and access all your essential data anytime, from anywhere.",
              items: [
                "Centralize your data for seamless operations.",
                "Access important information anytime, from anywhere.",
                "Boost efficiency with a reliable and secure data hub.",
              ]
            },
            {
              image: "/products/ecommerce/search.png",
              title: "Search Function",
              text: "Quickly find what you're looking for with our advanced search, making it easy to access the right information in seconds.",
              items: [
                "Find what you need instantly.",
                "Navigate large data effortlessly.",
                "Boost productivity with fast, accurate results.",
              ]
            },
            {
              image: "/products/ecommerce/integration.png",
              title: "Integration",
              text: "Easily connect your tools and systems with our integration solutions, making your business operations smoother and more efficient.",
              items: [
                "Connect tools for better efficiency.",
                "Sync processes to boost agility.",
                "Simplify operations with seamless integrations.",
              ]
            },
            {
              image: "/products/ecommerce/data-visualization.png",
              title: "Marketing data visualization",
              text: "We provide advanced tools and detailed reports to help you visualize marketing data, unlocking valuable insights for better decision-making.",
              items: [
                "Visualize marketing data with our advanced tools.",
                "Access detailed reports for deeper insights.",
                "Make informed decisions to improve your marketing strategy.",
              ]
            }
          ],
          tabData: {
            marketAnalysis: {
                image: "/products/ecommerce/marketanalaysis.webp",
                alt: "Ecommerce Market Analysis Image",
                content: [
                    { title: 'Market Trends:', description: "Identify current trends in the ecommerce landscape to stay competitive." },
                    { title: 'Customer Insights:', description: 'Gather insights into customer behavior and preferences.' },
                    { title: 'Competitor Analysis:', description: 'Analyze competitors to understand their strengths and weaknesses.' }
                ]
            },
            productManagement: {
                image: "/products/ecommerce/productmanagement.webp",
                alt: "Ecommerce Product Management Image",
                content: [
                    { title: 'Catalog Creation:', description: 'Efficiently create and manage your product catalog.' },
                    { title: 'Inventory Tracking:', description: 'Monitor stock levels in real-time to avoid shortages.' },
                    { title: 'Product Variants:', description: 'Easily manage different product variations and options.' }
                ]
            },
            orderFulfillment: {
                image: "/products/ecommerce/orderfulfilment.webp",
                alt: "Ecommerce Order Fulfillment Image",
                content: [
                    { title: 'Order Processing:', description: 'Streamline the order processing workflow for faster delivery.' },
                    { title: 'Shipping Integration:', description: 'Integrate with shipping carriers for real-time tracking.' },
                    { title: 'Returns Management:', description: 'Simplify returns processing to enhance customer satisfaction.' }
                ]
            },
            customerEngagement: {
                image: "/products/ecommerce/customerengage.webp",
                alt: "Ecommerce Customer Engagement Image",
                content: [
                    { title: 'Personalized Marketing:', description: 'Use customer data to create targeted marketing campaigns.' },
                    { title: 'Customer Feedback:', description: 'Gather feedback to improve products and services.' },
                    { title: 'Loyalty Programs:', description: 'Implement loyalty programs to increase customer retention.' }
                ]
            }
        },
        tabsHeadings: {
            marketAnalysis: "Market Analysis",
            productManagement: "Product Management",
            orderFulfillment: "Order Fulfillment",
            customerEngagement: "Customer Engagement"
        }
    },
    'hr-managament-software': {
      productTitle: 'Tech Cloud HRMS Management Software',
        heading: "HR management Solutions",
        description: "Our expert team delivers top support, empowering your HR department with confidence.",
        imageSrc : "/products/hrms-pdt.webp",
        mainTitle : "Our HR Management Solutions",
        title : "Tech Cloud HRMS",
        productDescription: [
          "At Tech Cloud, we provide the leading edge HRMS solution that could simplify and streamline the mechanism of management for the workforce for you. Our software offers an integrated platform to handle everything from recruitment, onboarding, payroll, leave and attendance management, all integrated within one single platform for an organization. Offer in real dashboards, automated processes and self-service features with the purpose of promoting employee engagement and ensuring operational efficiency among businesses.",
          "We offer a user-friendly system that adapts to your organization's unique needs, enabling seamless collaboration and accurate data handling. Whether it’s performance tracking or welfare management, our HRMS ensures you stay ahead with efficient and comprehensive tools, allowing you to focus on what matters most—growing your business. Let us help you transform your HR processes with Tech Cloud HRMS."
        ],
        cards: [
            {
              image: "/products/Hr/recruitment.png",
              title: "Recruitment",
              text: " Our Recruitment module streamlines hiring by managing job positions, screening candidates and optimizing workflows to secure top talent efficiently.",
              items: [
                "Manage job positions and screen applicants seamlessly.",
                "Optimize your hiring process for the best talent.",
                "Drive business success by streamlining recruitment.",
              ]
            },
            {
              image: "/products/Hr/onboarding.png",
              title: "On-boarding",
              text: "Our onboarding module simplifies integrating new hires, ensuring engagement, productivity and business success from day one.",
              items: [
                "Simplify onboarding new hires to ensure seamless transfers.",
                "Make sure that workers are highly engaged and doing well.",
                "Boost organizational performance with effective onboarding.",
              ]
            },
            {
              image: "/products/Hr/welfare.png",
              title: "Welfare Management",
              text: "Our module empowers employees to manage profiles, access business updates and enhance engagement and satisfaction.",
              items: [
                "Allow employees to update and maintain their own profiles.",
                "Keep employees informed with essential business updates.",
                "Enhance engagement and satisfaction with self-service features.",
              ]
            },
            {
              image: "/products/Hr/training.png",
              title: "Training and Development",
              text: "Enhance employee performance with targeted training and skill-building for continuous growth and development.",
              items: [
                "We offer focused training to boost employee performance.",
                "We help enhance skills through ongoing education.",
                "We support organizational growth with skill-building initiatives.",
              ]
            },
            {
              image: "/products/Hr/leave.png",
              title: "Leave and Time Management",
              text: "Efficiently track and manage employee leave and working hours with our seamless time management system.",
              items: [
                "We simplify leave and time tracking for better management.",
                "We offer tools for accurate employee time and leave records.",
                "We ensure smooth and efficient operations with precise management.",
              ]
            },
            {
              image: "/products/Hr/payroll.png",
              title: "Payroll Management",
              text: "Ensure accurate salary calculations, timely payments and effective handling of bonuses and deductions.",
              items: [
                "Ensure precise salary calculations and timely payouts.",
                "Manage bonuses, deductions and other payroll components efficiently.",
                "Streamline payroll processes for seamless and accurate operations.",
              ]
            },
            {
              image: "/products/Hr/dashboard.png",
              title: "Dynamic Dashboard",
              text: "Gain real-time insights with our dynamic HR dashboard, enabling quick, informed decision-making.",
              items: [
                "Gain real-time insights into key HR metrics.",
                "Make faster decisions with visual data analysis.",
                "Simplify HR data tracking with user-friendly dashboards.",
              ]
            },
            {
              image: "/products/Hr/versatility.png",
              title: "Versatile Calendar",
              text: " Easily manage events, public holidays and important dates with our versatile ERP HRM calendar.",
              items: [
                "Create and manage events with ease.",
                "Modify or cancel events anytime.",
                "Plan public holidays using a preset list.",
              ]
            },
            {
              image: "/products/Hr/real-time.png",
              title: "Real-time Collaboration",
              text: "Tech Cloud Performance Management automate evaluations and feedback cycles for efficient performance appraisals.",
              items: [
                "Automate performance evaluations for efficiency.",
                "Replace manual processes with real-time collaboration.",
                "Promote continuous feedback and improvement.",
              ]
            }
          ],
          tabData: {
            employeeManagement: {
                image: "/products/Hr/emplyeemange.webp",
                alt: "HR Employee Management Image",
                content: [
                    { title: 'Employee Profiles:', description: "Maintain detailed profiles for all employees, including personal information and performance history." },
                    { title: 'Attendance Tracking:', description: 'Efficiently monitor employee attendance and punctuality.' },
                    { title: 'Performance Reviews:', description: 'Conduct regular performance reviews to assess employee growth and areas for improvement.' }
                ]
            },
            complianceManagement: {
                image: "/products/Hr/compliance.webp",
                alt: "HR Compliance Management Image",
                content: [
                    { title: 'Regulatory Compliance:', description: 'Ensure compliance with labor laws and regulations to avoid legal issues.' },
                    { title: 'Policy Management:', description: 'Develop and maintain organizational policies that align with legal requirements.' },
                    { title: 'Audit Readiness:', description: 'Prepare for audits with organized records and documentation.' }
                ]
            },
            employeeEngagement: {
                image: "/products/Hr/emplayeenage.webp",
                alt: "HR Employee Engagement Image",
                content: [
                    { title: 'Feedback Mechanisms:', description: 'Implement systems for collecting employee feedback and suggestions.' },
                    { title: 'Recognition Programs:', description: 'Establish programs to recognize and reward employee achievements.' },
                    { title: 'Engagement Surveys:', description: 'Conduct surveys to gauge employee satisfaction and engagement levels.' }
                ]
            },
            analyticsAndReporting: {
                image: "/products/Hr/analytics.png",
                alt: "HR Analytics and Reporting Image",
                content: [
                    { title: 'HR Metrics Analysis:', description: 'Analyze key HR metrics to assess organizational health.' },
                    { title: 'Custom Reports:', description: 'Generate customized reports to meet specific business needs.' },
                    { title: 'Predictive Analytics:', description: 'Use data analytics to predict workforce trends and challenges.' }
                ]
            }
        },
        tabsHeadings: {
            employeeManagement: "Employee Management",
            complianceManagement: "Compliance Management",
            employeeEngagement: "Employee Engagement",
            analyticsAndReporting: "Analytics & Reporting"
        }
    },
    'financial-management-systems': {
      productTitle: 'Tech Cloud Financial Management Systems',
      heading: "Financial Management Solutions",
      description: "Accelerate financial success with our ERP finance module—real-time insights and automation for growth.",
      imageSrc : "/products/Finance-pdt.webp",
      mainTitle : "Finance provide you best services",
      title : "Tech Cloud Finance",
      productDescription: [
        "Tech Cloud Finance ERP is designed to help companies in streamlining complex financial procedures, such as creating revenue graphs and keeping track of accounts. In addition to giving real-time data on capacity, employee performance and overall financial health, our cloud-based software integrates seamlessly.",
        "Tech Cloud Finance ERP offers a robust, cloud-based platform tailored to streamline financial operations. With features like revenue tracking, account management and real-time data insights, our software is designed to empower businesses with the tools they need for financial success."
      ],
      cards: [
        {
          image: "/products/Finance/functionalities.png",
          title: "Functionalities",
          text: "We provide tools to optimize financial operations, with real-time reporting, automated billing and seamless data integration for enhanced efficiency.",
          items: [
            "Real-time reporting for accurate insights.",
            "Automated billing for efficiency.",
            "Integrated data for informed decisions.",
          ]
        },
        {
          image: "/products/Finance/report.png",
          title: "Inquiries & Reports",
          text: "We provide tools to simplify inquiries and generate detailed reports, delivering insights to support informed financial decisions.",
          items: [
            "Comprehensive inquiries for valuable insights.",
            "Detailed reports to guide decisions.",
            "Accurate data for better financial strategies.",
          ]
        },
        {
          image: "/products/Finance/features.png",
          title: "Advanced Features",
          text: "We offer advanced tools that elevate financial management, tailoring solutions to meet your business needs for optimized operations.",
          items: [
            "Advanced tools for superior financial management.",
            "Customizable features to fit business requirements.",
            "Leverage cutting-edge technology for efficiency."
          ]
        },
        {
          image: "/products/Finance/report.png",
          title: "Multi-currency",
          text: "We provide robust multi-currency support, enabling smooth management of global transactions with accuracy and seamless international operations.",
          items: [
            "Manage global transactions with ease.",
            "Ensure precise financial reporting across markets.",
            "Streamline international operations for smooth business workflows.",
          ]
        }
      ],
      tabData: {
        requirement: {
            image: "/products/Finance/financerequire.webp",
            content: [
                { title: 'Identify Financial Objectives:', description: "Understand the client's financial goals, challenges and needs." },
                { title: 'Compliance Review:', description: 'Engage with stakeholders to assess regulatory requirements and compliance needs.' },
                { title: 'Tailored Solutions Design:', description: 'Develop solutions that cater to the specific financial management needs of the business.' }
            ],
        },
        implementation: {
            image: "/products/Finance/financeimplementatiin.webp",
            content: [
                { title: 'System Configuration:', description: 'Install and set up the financial management system according to specifications.' },
                { title: 'User Training:', description: 'Provide comprehensive training to ensure users are proficient in using the system.' },
                { title: 'Documentation Development:', description: 'Create detailed documentation for system processes and user guidelines.' }
            ],
        },
        goLive: {
            image: "/products/Finance/onboarding.webp",
            content: [
                { title: 'System Activation:', description: 'Activate the new financial management system for live operations.' },
                { title: 'Performance Monitoring:', description: 'Monitor system performance to identify any issues during the initial phase.' },
                { title: 'Support Availability:', description: 'Ensure on-site and remote support for users during the go-live period.' }
            ],
        },
        postGoLive: {
            image: "/products/Finance/financepostlive.webp",
            content: [
                { title: 'Continuous Support:', description: 'Provide ongoing support to address any post-implementation issues.' },
                { title: 'System Optimization:', description: 'Fine-tune system features based on user feedback and performance metrics.' },
                { title: 'Updates & Maintenance:', description: 'Regularly update the system to include new features and maintain security standards.' }
            ],
        }
    },
    tabsHeadings: {
        requirement: "Requirement Gathering",
        implementation: "Implementation & Training",
        goLive: "Go Live & Onboarding",
        postGoLive: "Post-Go-Live Support"
    }
    },
    'integrated-erp-software': {
        productTitle: 'Tech Cloud Integrated ERP Software',
        heading: "Integrated ERP Solutions",
        description: "Enhance your business with integrated ERP, CRM and E- Commerce solutions.",
        imageSrc : "/products/integrated-pdt.webp",
        mainTitle : "Comprehensive Tech Cloud ERP Solutions",
        title : "Tech Cloud Integrated Cloud Based ERP",
        productDescription: [
          "Our integrated cloud-based ERP solutions at Tech Cloud are made to optimize your company's departmental business operations. Our solution provides a single platform for managing sales, inventories, human resources, financing and more, facilitating easy collaboration and remote access to real-time data. With the help of our cloud-based ERP, you can increase productivity.",
          "We offer an ERP solution that is completely adaptable to your particular business requirements. Our integrated solution guarantees data consistency across all corporate operations, streamlines intricate workflows and automates repetitive chores. Tech Cloud ERP gives you a scalable, secure and future-ready platform so business can concentrate on expansion while we manage your backend operations."
        ],
        cards: [
          {
            image: "/products/integrated/crm.png",
            title: "CRM",
            text: "We provide an integrated CRM with Tech Cloud ERP to enhance customer relationships, manage interactions and improve satisfaction and loyalty.",
            items: [
              "Access unified customer data for better insights.",
              "Automate customer notifications and follow-ups.",
              "Track customer interactions and purchase history seamlessly.",
            ]
          },
          {
            image: "/products/integrated/point.png",
            title: "Point of Sale (POS",
            text: "Our POS solution integrates with Tech Cloud ERP to optimize sales, capture client info, handle transactions and manage real-time inventory.",
            items: [
              "Real-time inventory management ensures precise stock levels.",
              "Complete transactions in a timely and effective manner.",
              "Create thorough analytics and sales reports to gain understanding.",
            ]
          },
          {
            image: "/products/integrated/ecommerce.png",
            title: "E-Commerce Integration",
            text: "We offer seamless eCommerce integration with Tech Cloud ERP, automating order management and real-time product updates.",
            items: [
              "Automatically sync orders and inventory across platforms.",
              "Keep products updated in real-time for accurate listings.",
              "Enhance customer experience with timely notifications and updates.",
            ]
          }
        ],
        tabData: {
            requirement: {
                image: "/products/integrated/integration.webp",
                content: [
                    { title: 'Define Integrated Needs:', description: "Assess client requirements for integrating various systems into a unified ERP solution." },
                    { title: 'Collaboration with Teams:', description: 'Work with different departments to gather input and ensure comprehensive requirements.' },
                    { title: 'Scalable Solutions Design:', description: 'Develop flexible solutions that can scale with the business needs.' }
                ],
            },
            implementation: {
                image: "/products/integrated/system.webp",
                content: [
                    { title: 'ERP Customization:', description: 'Customize the ERP system to align with business processes and workflows.' },
                    { title: 'Cross-Department Training:', description: 'Train all relevant teams on the integrated system for a smooth transition.' },
                    { title: 'User Documentation:', description: 'Provide detailed manuals and guidelines for users to reference post-implementation.' }
                ],
            },
            goLive: {
                image: "/products/integrated/integrationlaunch.webp",
                content: [
                    { title: 'Integrated System Launch:', description: 'Execute the launch of the integrated ERP system across all departments.' },
                    { title: 'System Performance Monitoring:', description: 'Continuously monitor the system for performance and user feedback during the initial phase.' },
                    { title: 'Immediate User Assistance:', description: 'Offer on-the-spot support to resolve any issues that arise during go-live.' }
                ],
            },
            postGoLive: {
                image: "/products/integrated/postinte.webp",
                content: [
                    { title: 'Continuous Improvement:', description: 'Implement changes based on user feedback to enhance system performance.' },
                    { title: 'System Audits:', description: 'Regularly audit the system to ensure compliance and effectiveness.' },
                    { title: 'Future Upgrades Planning:', description: 'Plan and implement updates to maintain system relevance and security.' }
                ],
            }
        },
        tabsHeadings: {
            requirement: "Integration Needs Analysis",
            implementation: "System Integration Implementation",
            goLive: "Integration Launch & Monitoring",
            postGoLive: "Post-Integration Support"
        }
    },
    'erp-for-restaraunt': {
        productTitle: 'Tech Cloud ERP For Restaraunt Business',
        heading: "Restaraunt ERP Solutions",
        description: "Our expert team ensures seamless expansion with restaurant management software.",
        imageSrc : "/products/resturant-pdt.webp",
        mainTitle : "Streamlined Restaurant Management Solutions",
        title : "Tech Cloud Restaurant ERP",
        productDescription: [
          "We offer Tech Cloud Restaurant ERP, a complete software program made to make restaurant management easier in every way. Our ERP solution gives restaurant owners a single platform to handle all of their management needs, including inventory control, order processing, staff scheduling and customer relationship management. By using our solution, you can guarantee more efficient operations, cut down on waste, maximize stock levels and boost service effectiveness—all of which will improve the general client experience.",
          "Our restaurant enterprise resource planning software is made to specifically address the demands of the hospitality sector. We help you increase profitability, reduce errors and save time by automating important procedures. Whether you manage a small cafe or a large chain with multiple locations, Tech Cloud Restaurant ERP makes sure everything goes smoothly. Give your customers an outstanding dining experience by letting us help you take charge of your operations with data-driven decisions and real-time information."
        ],
          cards: [
            {
              image: "/products/restaurant/point-of-service.png",
              title: "POS",
              text: "Our user-friendly POS system streamlines shop operations, managing transactions and inventory to improve customer experiences.",
              items: [
                "Manage billing, updates and reservations.",
                "Monitor real-time visitor status and table allocation.",
                "Simplify cancellations and reservations for efficient service.",
              ]
            },
            {
              image: "/products/restaurant/purchase.png",
              title: "Purchase Management",
              text: " We provide a complete solution to streamline procurement, from inventory tracking to vendor selection, boosting productivity and reducing costs.",
              items: [
                "Handle purchase requests and approvals easily.",
                "Monitor receipts against requests.",
                "Simplify interpersonal purchase requests.",
              ]
            },
            {
              image: "/products/restaurant/inventory-management.png",
              title: "Inventory Management",
              text: "Our advanced inventory management solution optimizes your supply chain, helping you effectively track and manage goods for smooth operations.",
              items: [
                "Track material flows in and out.",
                "Monitor scrap or returns.",
                "Automatically generate requisition slips.",
              ]
            },
            {
              image: "/products/restaurant/receipe.png",
              title: "Recipe Preparation",
              text: "Simplify cooking procedures with our recipe preparation software, making it easy to create and maintain recipes for consistent, delicious results.",
              items: [
                "Feed recipes with standard quantities.",
                "Automatically generate multi-quantity requests.",
                "Convert quantities with ease.",
              ]
            },
            {
              image: "/products/restaurant/time-management.png",
              title: "Reservation Management",
              text: "Streamline reservations with our easy-to-use system, enhancing customer satisfaction from booking to guest check-in.",
              items: [
                "Manage guests and availability promptly.",
                "Prevent overbooking with online booking.",
                "Send confirmation and reservation number to guests.",
              ]
            },
            {
              image: "/products/restaurant/payroll.png",
              title: "HR & Payroll Management",
              text: "Our integrated HR and payroll solutions streamline processes, saving time and money on payroll processing and employee onboarding.",
              items: [
                "Administration of employee rosters, holidays and shifts.",
                "Management of Employee Detail Information.",
                "Deduction management and time.",
              ]
            }
          ],
          tabData: {
            requirement: {
                image:"/products/restaurant/resturantassesment.webp",
                alt: "Requirement Gathering Image",
                content: [
                    { title: 'Understanding Restaurant Needs:', description: "Assess the unique operational challenges and goals specific to the restaurant." },
                    { title: 'Collaborative Requirement Gathering:', description: 'Work closely with restaurant staff to document detailed requirements.' },
                    { title: 'Customized ERP Solutions:', description: 'Tailor the ERP system to fit the specific workflow of the restaurant.' }
                ],
            },
            implementation: {
                image: "/products/restaurant/resturantimple.webp",
                alt: "Implementation Image",
                content: [
                    { title: 'ERP Setup and Configuration:', description: 'Install and configure the ERP system tailored for restaurant operations.' },
                    { title: 'Hands-On Staff Training:', description: 'Conduct training sessions for staff to ensure effective system usage.' },
                    { title: 'Comprehensive User Documentation:', description: 'Provide detailed documentation for reference during and after implementation.' }
                ],
            },
            goLive: {
                image: "/products/restaurant/resturantgolive.webp",
                alt: "Go Live Image",
                content: [
                    { title: 'System Go Live Activation:', description: 'Officially transition to the new ERP system for restaurant management.' },
                    { title: 'Real-Time Operational Monitoring:', description: 'Closely monitor system performance to address any immediate issues.' },
                    { title: 'Dedicated User Support:', description: 'Offer support to restaurant staff during the transition period to ensure smooth operations.' }
                ],
            },
            postGoLive: {
                image: "/products/restaurant/resturantpostlive.webp",
                alt: "Post Go Live Image",
                content: [
                    { title: 'Continued Technical Support:', description: 'Provide ongoing assistance to resolve any post-launch challenges.' },
                    { title: 'Feedback Collection and Adaptation:', description: 'Gather feedback from users for continuous improvement of the ERP system.' },
                    { title: 'Regular System Updates:', description: 'Schedule updates to keep the ERP system aligned with the latest industry practices.' }
                ],
            },
        },
        tabsHeadings: {
            requirement: "Restaurant Needs Assessment",
            implementation: "Implementation Process",
            goLive: "Go Live Transition",
            postGoLive: "Post-Go-Live Support"
        }
    },
    'erp-for-accounting-software':{
        productTitle: 'Tech Cloud ERP for Accounting Software',
        heading: "ERP for Accounting Software",
        description: "Our ERP accounting software streamlines finances with automation, real-time insights and seamless integration.",
        imageSrc : "/products/accounting-pdt.webp",
        mainTitle : "Reliable, efficient delivery",
        title : "Tech Cloud Accounting Software",
        productDescription: [
          "We at Tech Cloud ERP offer a powerful accounting software program that makes financial management easier for companies of all kinds. Real-time, accurate tracking of income, expenses and transactions is made possible by our software. Businesses can make wise decisions to guarantee development and sustainability with the help of advanced bookkeeping, tax compliance and financial reporting systems.",
          "Our cloud-based solution provides easy access to financial data anytime and anywhere, all with top-notch security. Be it a small business or an organization big in all respects, our accounting software streamlines the process, reduces errors and ensures compliance, helping you focus on achieving your own business goals."
        ],
          cards: [
            {
              image: "/products/Accouting/module.png",
              title: "Modules",
              text: "Our ERP modules help streamline operations, boosting efficiency and success by managing sales, purchasing, inventory and finance.",
              items: [
                "Easily handle inventory, purchases and sales.",
                "Improve financial processes to achieve better results.",
                "Utilize integrated management technologies to streamline procedures.",
              ]
            },
            {
              image: "/products/Accouting/feature.png",
              title: "Features",
              text: " We offer web-based software with advanced features to streamline your operations and ensure efficiency.",
              items: [
                "Enjoy cloud computing with mobile and tablet compatibility.",
                "Automatic data backups for security.",
                "Seamlessly manage GST with flexible incorporation.",
              ]
            },
            {
              image: "/products/Accouting/support.png",
              title: "Support",
              text: " We provide training, 24/7 support, quick responses and quick updates.",
              items: [
                "24/7 support with quick response times.",
                "Comprehensive training for seamless onboarding.",
                "Fast updates to keep your system running smoothly.",
              ]
            },
            {
              image: "/products/Accouting/pricing.png",
              title: "Pricing",
              text: "We provide a feature-rich, fully integrated solution at a reasonable price of just Rs. 18,000 only.",
              items: [
                "Packed with features to meet your needs.",
                "Easy operations with seamless integration.",
                "Unmatched value at an affordable price.",
              ]
            }
          ],
          tabData: {
            requirement: {
                image: "/products/Accouting/accounting.webp",
                alt: "Accounting Needs Image",
                content: [
                    { title: 'Understanding Client Objectives:', description: "Identify key financial goals and accounting practices." },
                    { title: 'Compliance Requirements:', description: 'Document necessary compliance with financial regulations and standards.' },
                    { title: 'Customization Expectations:', description: 'Gather requirements for any specific accounting features needed.' },
                ],
            },
            implementation: {
                image: "/products/Accouting/implemenuser.webp",
                alt: "Implementation Image",
                content: [
                    { title: 'Setup Chart of Accounts:', description: 'Define account structures tailored to the business model.' },
                    { title: 'Training Sessions for Users:', description: 'Educate staff on new processes and software functionalities.' },
                    { title: 'Prepare System Documentation:', description: 'Create user manuals for reference and future training.' },
                ],
            },
            goLive: {
                image: "/products/Accouting/erpgolive.webp",
                alt: "Go Live Image",
                content: [
                    { title: 'Launch the ERP System:', description: 'Transition all accounting functions to the new platform.' },
                    { title: 'Data Verification Process:', description: 'Ensure accuracy of migrated financial data.' },
                    { title: 'Immediate User Assistance:', description: 'Provide support for any initial issues encountered.' },
                ],
            },
            postGoLive: {
                image: "/products/Accouting/accountingpostgo.webp",
                alt: "Post Go Live Image",
                content: [
                    { title: 'Regular System Maintenance:', description: 'Conduct periodic reviews to ensure optimal performance.' },
                    { title: 'Continuous User Support:', description: 'Offer ongoing assistance for accounting software use.' },
                    { title: 'Updates for Compliance Changes:', description: 'Keep the system aligned with evolving financial regulations.' },
                ],
            },
        },
        tabsHeadings: {
            requirement: "Accounting Needs Assessment",
            implementation: "Implementation & User Training",
            goLive: "ERP Go Live Process",
            postGoLive: "Post Go Live Support & Maintenance",
        }
    },
   
  };

  export const servicesData = {
    'web-development': {
      title: 'Web Development',
      description : 'We help web development companies track projects, manage resources and analyze finances to boost productivity and profitability.',
      mainTitle :'Core Services for Modern Web Development',
      sectionSubtitle: 'Core web development services include responsive design, front-end and back-end development, CMS integration, API implementation, database management and performance optimization for enhanced user experience and scalability.', 
      servicedescription: [
        "Web development projects require precision, collaboration and effective resource utilization. Tech Cloud ERP is designed to help web development firms manage project progress, track team capacity and oversee accounts seamlessly. We offer real-time data on worker productivity, project timelines and revenue graphs.",
        "Tech Cloud ERP is the perfect partner for web development firms, offering a powerful cloud-based platform to manage projects, track resources and gain financial insights. By integrating operations into a single system, our ERP helps businesses reduce errors, improve efficiency and boost client satisfaction."
      ],
      services: [
        {
          id: 1,
          image: ("/services/webdevelopment/Webdesign.png"),
          title: "Web Designing",
          description: "We provide visually appealing, user-friendly websites that reflect your brand and offer an engaging experience.",
        },
        {
          id: 2,
          image: ("/services/webdevelopment/webdev.png"),
          title: "Web Development",
          description: "We offer custom web development services focused on performance, speed, security and scalability.",
        },
        {
          id: 3,
          image: ("/services/webdevelopment/mobile.png"),
          title: "Mobile App Development",
          description: "We specialize in developing intuitive mobile apps for Android and iOS, enhancing user engagement and experience.",
        },
        {
          id: 4,
          image: ("/services/webdevelopment/Wordpress.png"),
          title: "WordPress Development",
          description: "We deliver secure, dynamic and easy-to-manage WordPress websites, customized to meet your business needs.",
        },
        {
          id: 5,
          image: ("/services/webdevelopment/ecommerce.png"),
          title: "E-Commerce Development",
          description: "We build scalable e-commerce platforms designed to enhance store performance, conversions and user experience.",
        },
        {
          id: 6,
          image: ("/services/webdevelopment/webhosting.png"),
          title: "Web Hosting Services",
          description: "We provide fast, secure and reliable web hosting solutions, ensuring optimal performance and uptime.",
        },
      ],
      faq: [
        {
          question: 'What is web development?',
          answer: '"Building and maintaining a website or a web application requires the process of developing the Web, which is done through coding, designing, structuring and managing content to create an interactive online presence that is functional.',
        },
        {
          question: 'Which platforms or technologies do you use for web development?',
          answer: 'We use a number of technologies, mainly depending upon the needs of the project, like HTML, CSS, JavaScript, PHP, WordPress, React, Angular and also third-party integration which will be about CMS platforms, Shopify or WordPress.',
        },
        {
          question: 'What are 3 types of web development?',
          answer: 'It’s recommended to update content regularly and redesign every few years to ensure your site remains relevant, secure and optimized for new technology.',
        },
        {
          question: 'What is the importance of website maintenance?',
          answer: 'Website maintenance involves regularly checking your website for issues, updating software and ensuring security, which keeps your site functional and secure over time.',
        },
      ],
      image: ('/services/web-app.webp'), 
      altText: 'Laptop displaying digital marketing concepts such as advertising, research, product, branding and strategy',
    },
    'mobile-application-development': {
      mainTitle :'Comprehensive Solutions for Modern Mobile App Development',
      description : 'Tech Cloud ERP for Mobile Application Development streamlines project management and resource allocation with real-time data insights. ',
      sectionSubtitle: 'We offer a comprehensive range of services to create high-quality, user-friendly and scalable mobile applications. Our focus is on delivering seamless performance and intuitive user experiences across various devices and platforms.', // Added section subtitle
      title: 'Mobile Application Development',
      servicedescription: [
        "Tech Cloud ERP for Mobile Application Development streamlines project management, resource allocation and revenue optimization with real-time data insights. We help mobile app developers manage projects, allocate resources and track performance efficiently. Our cloud-based platform provides real-time data.",
        "Tech Cloud ERP offers a cloud-based solution for mobile app developers, integrating project management, resource tracking and financial reporting. Our software provides real-time insights on revenue, project progress and team capacity, optimizing operations. We help streamline resource allocation and enhance team productivity.",
      ],
      services: [
        {
          id: 1,
          image: ("/services/mobileapp/uiux.png"),
          title: " UI/UX Design",
          description: "We design intuitive and engaging user interfaces and experiences, ensuring your app is easy to navigate and visually appealing.",
        },
        {
          id: 2,
          image:("/services/mobileapp/flutter.png"),
          title: "Flutter App Development",
          description: " We specialize in developing high-performance, cross-platform mobile apps using Flutter, providing a seamless experience on both Android and iOS.",
        },
        {
          id: 3,
          image:("/services/mobileapp/cross-platform.png"),
          title: " Cross-Platform Development",
          description: "We offer cross-platform mobile app development services that ensure your app performs flawlessly across multiple devices and operating systems.",
        },
        {
          id: 4,
          image:("/services/mobileapp/backend.png"),
          title: "Backend Development & Integration",
          description: " We provide robust backend solutions, ensuring smooth integration with databases, servers and third-party services for enhanced app functionality.",
        },
        {
          id: 5,
          image:("/services/mobileapp/api.png"),
          title: "API Development & Integration",
          description: "Our team builds secure, scalable APIs and integrates them with your app, ensuring seamless communication between your app and external services.",
        },
        {
          id: 6,
          image:("/services/mobileapp/quality.png"),
          title: "Quality Assurance & Testing",
          description: "We conduct thorough testing to identify and fix bugs, ensuring your app performs flawlessly and delivers a high-quality user experience.",
        },
      ],
      faq: [
        {
          question: 'What is mobile application development?',
          answer: 'Mobile application development is the act of designing software applications that are designed to run on the smartphone and tablet devices. Such applications can either be specific to a particular platform, for example, iOS or Android or may be developed as cross-platform to reach wider audiences.',
        },
        {
          question: 'How can an ERP mobile application help my business?',
          answer: 'An ERP mobile application will help streamline business activities by providing you with ERP functionality in viewing inventory tracking, sales and employee management on the go. It gives you access to real-time data, enhances productivity and simplifies better decision-making because you have access to your business at any given time anywhere.',
        },
        {
          question: 'What are the key features of an ERP mobile app for my business?',
          answer: 'Key features include real-time data access, inventory management, order tracking, employee performance monitoring, sales and finance management and customer relationship management (CRM). Push notifications and mobile alerts ensure that you never miss an important update.',
        },
        {
          question: 'Can mobile ERP apps be customized according to my business needs?',
          answer: 'Yes, definitely, as mobile ERP apps can be customized according to specific needs of the businesses. Custom dashboards, reports, or workflows can be created through mobile applications for matching ones business objectives and are highly flexible and scalable.',
        },
      ],
      image: ('/services/mobile-app.webp'),
      altText: 'Mobile devices displaying various application interfaces.',
    },
    'digital-marketing': {
      mainTitle :'Essential Services for Modern Digital Marketing',
      description : 'Tech Cloud ERP optimizes campaign tracking, performance monitoring and financial administration for digital marketing businesses.',
      sectionSubtitle: 'Essential digital marketing services include SEO, social media, PPC, content creation, email campaigns and analytics for growth optimization.', // Added section subtitle
      title: 'Digital Marketing',
      servicedescription: [
        "The fast-paced digital marketing industry requires real-time insights, seamless project management and data-driven decision-making. Tech Cloud ERP is designed to help agencies manage campaigns, track worker productivity and analyze revenue performance with ease. Our cloud-based platform integrates all aspects.",
        "Tech Cloud ERP provides a complete solution designed to satisfy the particular requirements of digital marketing businesses. Our platform enables companies to provide outstanding customer outcomes, improve operational effectiveness and grow with ease, through features like campaign monitoring and real-time revenue data. ",
      ],
      services: [
        {
          id: 1,
          image: ("/services/digital/SEO.png"),
          title: "Search Engine Optimization",
          description: "SEO involves optimizing your website to rank higher in search engine results, improving visibility and organic traffic. At Tech Cloud ERP, we offer expert SEO services to help businesses enhance their online presence.",
        },
        {
          id: 2,
          image: ("/services/digital/SEM.png"),
          title: "Search Engine Marketing",
          description: "SEM focuses on paid advertising strategies to improve website visibility on search engines. Our SEM services ensure targeted campaigns that drive qualified traffic and maximize ROI.",
        },
        {
          id: 3,
          image: ("/services/digital/SMO.png"),
          title: "Social Media Optimization",
          description: " SMO uses social media platforms to build your brand’s visibility and engagement. We provide tailored SMO services that enhance your social media presence and connect with your target audience.",
        },
        {
          id: 4,
          image: ("/services/digital/FBads.png"),
          title: "Facebook Ads",
          description: "Facebook Ads allow businesses to reach a broader audience with targeted advertising. We specialize in creating effective Facebook ad campaigns that drive conversions and brand awareness.",
        },
        {
          id: 5,
          image: ("/services/digital/CM.png"),
          title: "Content Marketing",
          description: "Content marketing creates and shares valuable content to attract and retain customers. At Tech Cloud ERP, we craft engaging content strategies that drive traffic and enhance customer engagement.",
        },
        {
          id: 6,
          image: ("/services/digital/EM.png"),
          title: "Email Marketing",
          description: " Email marketing is a direct communication strategy to nurture leads and keep customers engaged. Our email marketing services help you deliver personalized, impactful messages that drive results.",
        },
      ],
      faq: [
        {
          question: 'What is digital marketing?',
          answer: 'Digital marketing refers to the promotion of products or services through digital channels.',
        },
        {
          question: 'How can digital marketing increase my revenue?',
          answer: 'The targeted traffic goes on to become permanent traffic on your website, thereby boosting the conversion rate and eliciting long-term customer relationship. Strategies in this line include SEO and PPC and the results will be measurable and directly impacting your bottom line.',
        },
        {
          question: 'What are the trends in digital marketing that are on the rise?',
          answer: 'The latest trends in digital marketing, ranging from AI-driven marketing to video content, voice search optimization and interactive ads, would denote a trend in making the future. Keeping updated about trends will keep you competitive and innovative.',
        },
        {
          question: 'What makes SEO important to my business?',
          answer: 'SEO can make your website rank better; because of this, it becomes easier for you to be found by potential customers. In addition to these, the higher ranking translates into a higher organic traffic and more industry credibility for your business.',
        },
      ],
      image: ('/services/digital.webp'), 
      altText: 'The average monthly cost of digital marketing includes SEO, PPC advertising, email marketing and content marketing, with costs ranging from $1,500 to $5,000 and $2,000 to $10,000, respectively.',
    },
  };
  export const visionMissionData = {
    vision: {
      title: "Our Vision",
      text: "Tech Cloud ERP Software Private Limited was founded with a clear vision to empower the Indian market by providing tailored, efficient and cost-effective ERP solutions that contribute to increasing the GDP and overall business efficiency across the country."
    },
    mission: {
      title: "Our Mission",
      text: "Our mission is to provide innovative, cloud-based ERP solutions to businesses of all sizes and sectors, promoting efficiency, innovation, and long-term success. We strive to simplify challenging business procedures, improve decision-making with real-time insights, and help enterprises reach their full potential through effortless integration and greater scalability."
    },
    image: "/about-us/our_miss_viss_img.webp", 
  };
  export const whyTechCloudERPContent = {
    imageSrc: "/about-us/why_tech_cloud_erp_img.webp", // Ensure file extension is correct
    title: "Why Tech Cloud ERP?",
    description: [
      "The complete solution by Tech Cloud ERP will meet all your business requirements and is designed to ease your process and increase efficiency. Our system has scalability built into it, so you can expand your business without pains of migrating into a new platform.",
      "You get direct access to real-time data and enjoy some of the best reporting tools available with Tech Cloud ERP, as it drives your insights in making informed decisions. With an easy user interface, there is easy adoption and integration to any team right away with improved workflows."
    ],
  };
  export const BiIntroContent = {
    imageSrc: "/about-us/bi-img.webp", // Ensure file extension is correct
    title: "Business Intelligence",
    description: [
      "How do you organize people’s shared potential into a competitive advantage? Support them with data, solve their oddities in business and encourage their creativity. Tech Cloud ERP’s business intelligence enables your teams to do work faster and smarter by providing a seamless experience. Users can feel easy collaboration, security and governance by preparing analytics, building data fields and dashboards and publishing & sharing the data with a single click.",
      "Tech Cloud ERP’s BI Tool is a fully hosted solution, so users can run it in minutes and add users as your needs grow without configuring servers, managing software upgrades, etc."
    ],
  };
  export const servicesContent = [
    {
      title: "Digital Marketing",
      description1: "Digital marketing refers to the promotion of products or services through digital channels like search engines, social media, email and websites. It involves strategies and tactics to connect with a target audience online and achieve business objectives.",
      description2: "Digital marketing is important because it helps businesses reach a larger audience and drive engagement through online channels. It allows businesses to target specific audiences and measure the effectiveness of their marketing strategies.",
      buttonText: "Read more",
      imageUrl: '/Services/digital.webp'
    },
    {
      title: "Web Development",
      description1: "In today's digitized marketing environment, online promotion is essential. Advertisers must use digital marketing tools and techniques to enhance customer value and achieve organizational goals. At Tech Cloud ERP Software Solutions, we boost your global online visibility and profits through effective internet marketing strategies.",
      description2: "Our digital marketing experts excel with web analysis tools, live traffic and ad creation to attract customers. ",
      buttonText: "Read more",
      imageUrl: '/Services/web-app.webp'
    },
    {
      title: "Mobile Application Development",
      description1: "Mobile app development means that designing or developing an application software whose primary function or purpose will be run within a smartphone or mobile phone and tabloid. Achieve a frictionless intuitive use experience such that an app runs naturally on whatever version of either iOS or Android.",
      description2: "Cross-platform development is the development of the application using one codebase but runs on multiple platforms. This cross-platform would, thus, eliminate the need to write redundant codes on various platforms and therefore reduce development time and cost; it would mean that the same application was developed for running on iOS and Android.",
      buttonText: "Read more",
      imageUrl: '/Services/mobile-app.webp'
    }
  ];
  export const ExpertiseData = [
    {
      icon: FiEye,
      title: "Improved Visibility",
      description:
        "Improve ERP visibility for better decision-making with real-time insights and smooth data integration.",
    },
    {
      icon: MdOutlineSpeed,
      title: "Increased Efficiency",
      description:
        "Boost ERP efficiency through process simplification, workflow automation, and better data integration for more informed decision-making.",
    },
    {
      icon: TbTruckDelivery,
      title: "On-time Delivery",
      description:
        "Ensure effortless, on-time delivery with ERP systems that optimize planning, tracking, and logistics.",
    },
    {
      icon: PiCertificate,
      title: "Product Quality",
      description:
        "Accelerate procedures, assure compliance, and enable real-time monitoring with ERP to improve product quality.",
    },
    {
      icon: HiBarsArrowDown,
      title: "Reduced Costs",
      description:
        "By optimizing workflows, increasing productivity, and reducing human error, ERP implementation lowers expenses.",
    },
    {
      icon: FaArrowsRotate, // Updated the icon
      title: "Improved Collaboration",
      description:
        "With enhanced collaboration tools built into your ERP system, you can boost teamwork and expedite procedures.",
    },
  ];
  export const cardservicesData = [
    {
      title: 'User Friendly',
      imgSrc: "/about-us/user-friendly.png"
    },
    {
      title: 'Web Technologies',
      imgSrc: "/about-us/web.png"
    },
    {
      title: 'Customization',
      imgSrc: "/about-us/customization.png"
    },
    {
      title: 'Opensource',
      imgSrc: "/about-us/opensource.png"
    },
    {
      title: 'Amazing Support',
      imgSrc:" /about-us/Amazingsupport.png"
    },
    {
      title: 'Versatility',
      imgSrc: "/about-us/versatility.png"
    },
    {
      title: 'Flexible Pricing',
      imgSrc: "/about-us/flexiblepricing.png"
    },
    {
      title: 'Mobile Versions',
      imgSrc: "/about-us/Mobileversions.png"
    },
    {
      title: 'Cloud Servers',
      imgSrc: "/about-us/Cloudservers.png"
    },
    {
      title: 'Plugin Marketplace',
      imgSrc: "/about-us/Pluginmarket.png"
    },
    {
      title: 'Secure & Reliable',
      imgSrc: "/about-us/Secure & reliable.png"
    },
    {
      title: 'Language versatility',
      imgSrc: "/about-us/translate.png"
    },
  ];
  
    // coFounders Data
export const coFoundersData = [
  {
      name: "Mr. Devang Patel",
      title: "Chairman",
      description: "Mr. Devang Patel, Chairman of Tech Cloud ERP, brings over 30 years of expertise in business development and a deep understanding of diverse industries. His visionary leadership and commitment to excellence have driven advancements in enterprise resource planning systems. With a relentless focus on innovation, Mr. Patel has inspired growth and progress, positioning Tech Cloud ERP as a leader in the industry. Under his guidance, the company has set new benchmarks, consistently delivering innovative solutions and enhancing client satisfaction.",
     
  },
  {
      name: "Mr. Raja Shanmugam",
      title: "Founder & CEO",
      description: "Mr. Raj, a Mechanical Engineer and certified SAP Production Planning Consultant, brings over 30 years of expertise across sectors like Design, Chemical Processing, Manufacturing, FMCG and IT. Renowned for his dynamic personality and sharp problem-solving skills, he has guided countless professionals and businesses to success. As the Founder and CEO of Tech Cloud ERP, Mr. Raj drives strategic planning, operations and growth, leading the company with vision, dedication and unwavering commitment to excellence.",
    
  },
];




  export const recordcount = [
    { number: '25+', text: 'Experience', icon: <FaBriefcase /> },
    { number: '2K+', text: 'Happy Clients', icon: <FaThumbsUp  /> },
    { number: '10K+', text: 'Users', icon: <FaUsers /> },
    { number: '38K+', text: 'Professionals', icon: <FaUserTie  /> },
  ];

  export const contactData = {
    corporateOffice: {
      address: "Office Unit No. 705, Jain Sadguru Capital Park Madhapur, Hyderabad-500081",
      phoneNumber: "+91 8919439603",
      email: "info@techclouderp.com",
    },
    headquarters: {
      phoneNumber: "+1 (312) 766-3390",
      address: "  1101, E Bell Street, Suite-E, Bloomington, IL - 61701.",
      email: "contact@techclouderp.com",
    },
  };



  export const regions = [
    {
      title: 'India',
      cities: [
        {
          name: 'Hyderabad',
          mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2634991537893!2d78.38372387594076!3d17.44709790108069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910d8d1c4f8b%3A0x6ef1b184af90fa3f!2sCapital%20Park!5e0!3m2!1sen!2sus!4v1731043718127!5m2!1sen!2sus',
          address: 'Office Unit No. 705, Jain Sadguru Capital Park, Image Gardens Road, VIP Hills, Madhapur, Hyderabad, Telangana, India-500081.',
          email: 'info@techclouderp.com',
          phone: '+91 8919439603',
        },
        {
          name: 'Coimbatore',
          mapSrc: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.198273209867!2d77.00275377504545!3d11.0237456891404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAxJzI1LjUiTiA3N8KwMDAnMTkuMiJF!5e0!3m2!1sen!2sin!4v1731044790506!5m2!1sen!2sin',
          address: 'MayFlower Signature, Office No. 7C, 531-537 , Avinashi Road, Peelamedu, Coimbatore, Tamilnadu - 641004.', 
          email: 'info@techclouderp.com',
          phone: '+91 9159044666',
        },
        {
          name: 'Chennai',
          mapSrc: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.1930149392415!2d80.20511247507736!3d13.023377387296796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAxJzI0LjIiTiA4MMKwMTInMjcuNyJF!5e0!3m2!1sen!2sin!4v1731043909152!5m2!1sen!2sin',
          address: 'North Gate, NP 11, Developed PLot,Thiru Vi-Ka Industrial Estate,Ekkathuthangal, Chennai, TamilNadu - 600035.', 
          email: 'info@techclouderp.com',
          phone: '+91 9159044666',
        },
        {
          name: 'Indore',
          mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.367069331865!2d75.89414307603104!3d22.751755026378873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302aa5e382429%3A0xcc759bbcdf086959!2sNRK%20Business%20Park!5e0!3m2!1sen!2sus!4v1731043840362!5m2!1sen!2sus',
          address: 'Unit No 903-B, NRK Business Park, Vijay Nagar, Indore, Madhya Pradesh - 452010.', 
          email: 'info@techclouderp.com',
          phone: '+91 8919439603',
        },
      ],
    },
    {
      title: 'USA',
      cities: [
        {
          name: 'Illinois',
          mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.133293017857!2d-88.98461760985107!3d40.472316078600876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b702b59fe7f7b%3A0x70f9e298d95bd2d0!2s1101%20E%20Bell%20St%20e%2C%20Bloomington%2C%20IL%2061701!5e0!3m2!1sen!2sus!4v1731044006414!5m2!1sen!2sus',
          address: '1101, E Bell Street, Suite-E, Bloomington, IL - 61701.', 
          email: ' contact@techclouderp.com',
          phone: '+ (312) 766-3390',
        },
      ],
    },
  ];


  export const sliderData = [
    {
      title: 'ERP Software',
      description: 'Make better business decisions with the world\'s leading ERP software, optimizing operations through data and analytics.',
      linkText: 'Explore',
      link: '/products/tech-cloud-erp', 
    },
    {
      title: "CRM",
      description: "Manages customer interactions and data, enhancing sales, service and relationships for stronger customer connections.",
      image: "/products/crm-pdt.webp",
      linkText: 'Explore',
      link: '/products/customer-relationship-management', 
    },
    {
      title: "POS",
      description: "Ensures secure sales transactions, integrates with inventory and customer data and provides real-time updates for efficiency.",
      image: "/products/pos-pdt.webp",
      linkText: 'Explore',
      link: '/products/point-of-sale', 
    },
    {
      title: "Trading Software",
      description: "It helps optimize procurement, inventory and order management with real-time tracking, thus enhancing workflows automatically.",
      image: "/products/trading-pdt.webp",
      linkText: 'Explore',
      link: '/products/trading-software', 
    },
    {
      title: "E-commerce",
      description: "Online stores management with product catalogs, payment systems and real-time updates to improve customer experience.",
      image: "/products/ecommerce-pdt.webp",
      linkText: 'Explore',
      link: '/products/Ecommerce-software', 
    },
    {
      title: "HRM",
      description: "It automates payroll, attendance, recruitment and performance management for an efficient workforce while keeping track of compliance.",
      image: "/products/hrms-pdt.webp",
      linkText: 'Explore',
      link: '/products/hr-managament-software', 
    },
    {
      title: "ERP Integrated-With-CRM-Ecommerce-POS",
      description: "Sales, inventory and customer data are integrated, enabling automation and improving efficiency.",
      image: "/products/integrated-pdt.webp",
      linkText: 'Explore',
      link: '/products/integrated-erp-software', 
    },
    {
      title: "Restaurant ERP",
      description: "The integration of order management, inventory, HR and accounting automates tasks for efficient restaurant operations and service delivery.",
      image: "/products/resturant-pdt.webp",
      linkText: 'Explore',
      link: '/products/erp-for-restaraunt', 
    },
    {
      title: "Accounting Software",
      description: "Automates bookkeeping, invoicing, tax calculations and legal compliance, providing real-time financial insights and streamlined management.",
      image: "/products/accounting-pdt.webp",
      linkText: 'Explore',
      link: '/products/erp-for-accounting-software', 
    },
  ];
  export const industryData = [
    { title: "Agriculture", icon: <FaLeaf /> },
    { title: "Beverage", icon: <FaBeer /> },
    { title: "Chemical", icon: <FaIndustry /> },
    { title: "Educational", icon: <FaGraduationCap /> },
    { title: "Electric", icon: <FaBolt /> },
    { title: "Food", icon: <FaPizzaSlice /> },
    { title: "Furniture", icon: <FaCouch /> },
    { title: "Garment", icon: <FaTshirt /> },
    { title: "Jewellery", icon: <FaGem /> },
    { title: "Leather", icon: <FaBriefcase /> }, // Updated
    { title: "Logistics", icon: <FaTruck /> },
    { title: "Wood", icon: <FaTree /> },
    { title: "Paper", icon: <FaBook /> },
    { title: "Printing", icon: <FaPrint /> }, // Updated
    { title: "Plastic", icon: <FaRecycle /> }, // Updated
  ];
  
  export const ReportingSectionContent = {
    heading: 'Upgrade your reporting.',
    subText: 'End the days of emailing spreadsheets around and reviewing stale data in meetings.',
    items: [
      {
        title: 'Empower business users',
        description: 'To analyze data, making sure the right people get the right data.'
      },
      {
        title: 'Send fresh, meaningful data',
        description: 'To the people who need it, in formats they prefer.'
      },
      {
        title: 'Create alerts',
        description: 'That automatically notify teams when important data changes.'
      }
    ],
    imageSrc: ("/BI/report_img.webp"),
    imageAlt: 'Report Summary'
  };

  export const modulesData = [
    {
      title: "ERP",
      description: "Integrates finance, HR and inventory into one system, automating processes and boosting efficiency for better decision-making.",
      image: "/products/products_main_img.webp",
      linkText: 'Explore',
      link: '/products/tech-cloud-erp', 
    },
    {
      title: "CRM",
      description: "Manages customer interactions and data, enhancing sales, service and relationships for stronger customer connections.",
      image: "/products/crm-pdt.webp",
      linkText: 'Explore',
      link: '/products/customer-relationship-management', 
    },
    {
      title: "POS",
      description: "Ensures secure sales transactions, integrates with inventory and customer data and provides real-time updates for efficiency.",
      image: "/products/pos-pdt.webp",
      linkText: 'Explore',
      link: '/products/point-of-sale', 
    },
    {
      title: "Trading Software",
      description: "It helps optimize procurement, inventory and order management with real-time tracking, thus enhancing workflows automatically.",
      image: "/products/trading-pdt.webp",
      linkText: 'Explore',
      link: '/products/trading-software', 
    },
    {
      title: "E-commerce",
      description: "Online stores management with product catalogs, payment systems and real-time updates to improve customer experience.",
      image: "/products/ecommerce-pdt.webp",
      linkText: 'Explore',
      link: '/products/Ecommerce-software', 
    },
    {
      title: "HRM",
      description: "It automates payroll, attendance, recruitment and performance management for an efficient workforce while keeping track of compliance.",
      image: "/products/hrms-pdt.webp",
      linkText: 'Explore',
      link: '/products/hr-managament-software', 
    },
    {
      title: "ERP Integrated-With-CRM-Ecommerce-POS",
      description: "Sales, inventory and customer data are integrated, enabling automation and improving efficiency.",
      image: "/products/integrated-pdt.webp",
      linkText: 'Explore',
      link: '/products/integrated-erp-software', 
    },
    {
      title: "Restaurant ERP",
      description: "The integration of order management, inventory, HR and accounting automates tasks for efficient restaurant operations and service delivery.",
      image: "/products/resturant-pdt.webp",
      linkText: 'Explore',
      link: '/products/erp-for-restaraunt', 
    },
    {
      title: "Accounting Software",
      description: "Automates bookkeeping, invoicing, tax calculations and legal compliance, providing real-time financial insights and streamlined management.",
      image: "/products/accounting-pdt.webp",
      linkText: 'Explore',
      link: '/products/erp-for-accounting-software', 
    },
  ];




  export const pricingDataContent = {
    modules: [
      {
        title: "Available Modules",
        badge: "Modules",
        items: [
          "CRM",
          "Sales Management",
          "Purchase Management",
          "Inventory Management",
          "Production Management",
          "Job Work",
          "Quality Control",
          "Quality Assurance",
        ],
      },
      {
        title: "Available Modules",
        badge: "Modules",
        items: [
          "Fixed Assets",
          "Plant Maintenance",
          "Human Resources Management",
          "Finance & Accounting",
          "Imports & Exports",
          "Project Management",
          "Design",
          "Point of Sale",
         
        ],
      },
      {
        title: "Domains / Industries",
        badge: "Domains",
        items: [
          "Garment Manufacturing",
          "Garment Printing",
          "Medical Device Manufacturing",
          "Elevator / Lifts Manufacturing",
          "Fabrication Industries",
          "Construction",
          "Chemical Industries",
          "Pharma Industries",
          "Pump Manufacturing",
          "Carton Box Manufacturing",
          "Plastic Manufacturing",
          "Smart Brix Manufacturing",
          "Metal Drums Manufacturing",
        ],
      },
      {
        title: "Domains / Industries",
        badge: "Domains",
        items: [
          "Paper Manufacturing",
          "Asbestos Manufacturing",
          "Trademark - Service Industry",
          "Roadside Assistance - Service",
          "Plywood Manufacturing",
          "Fan Manufacturing",
          "Hydraulic Cylinders Manufacturing",
          "Jewellery Manufacturing",
          "Aerospace System Manufacturing",
          "Imports and Exports",
          "ERP and POS",
          "Restaurant POS",
        ],
      },
    ],
  };



  export const pricingTableData = [
    {
      tier: "1",
      turnover: "0 - 10 Crores",
      modules: "",
      users: "5 - 10",
      userCost: "Rs. 2000 / User / Month",
    },
    {
      tier: "2",
      turnover: "11 - 25 Crores",
      modules: "Customer's Choose as per their Requirements",
      users: "11 - 20",
      userCost: "Rs. 2000 / User / Month",
    },
    {
      tier: "3",
      turnover: "26 - 50 Crores",
      modules: "",
      users: "20 - 50",
      userCost: "Rs. 1500 / User / Month",
    },
    {
      tier: "4",
      turnover: "51 - 100 Crores",
      modules: "",
      users: "50 - 200",
      userCost: "Rs. 1250 / User / Month",
    },
    {
      tier: "5",
      turnover: "101 - 500 Crores",
      modules: "",
      users: "200 & Above",
      userCost: "Rs. 1000 / User / Month",
    },
  ];



  export const termsAndConditionsData = {
    title: "Terms & Conditions",
    introduction: `
      Tech Cloud ERP terms and conditions administrate your use of this website; by using this website, you
      accept these terms and conditions. In case you want to disagree with these terms and conditions, you
      must not use this website. If you endure browsing this website, you approve to obey with the following
      terms and conditions of use, which together with our privacy policy govern Tech Cloud ERP association with
      you in relation to this website. The term “Tech Cloud ERP” or “us” or “we” refer to the owner of the
      website. The term “you” refers to the user of our website.
    `,
    points: [
      "The content of the pages of this website is for your general information and use only. It is subject to change without notice.",
      "Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors fully permitted by law. Your use of any information or materials on this website is entirely at your risk, for which we shall not be liable.",
      "This website contains material which is owned by or licensed to us. This material is not limited to the design, layout, look, appearance and graphics. Reproduction or tampering of information is prohibited other than in accordance with the copyright notice.",
      "This website may also include links to other websites belonging to our business. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s).",
      "You may not create a link to this website from another website or document without our consent.",
      "Your use of this website and any dispute arising out of use of the website is subject to the Cyber Law of India."
    ],
  };
  // privacy policy
  
  export const privacyPolicyData = {
    title: "Privacy Policy",
    introduction: "As the Top ERP Software Development Company in India, Tech Cloud ERP treats its clients and visitors' privacy with high importance...",
    dataCollection: {
      title: "Data Collection",
      description: "Tech Cloud ERP collects the following types of data:",
      points: [
        "We have your consent. We require opt-in consent for the sharing of any sensitive personal information.",
        "We provide such information to our other trusted businesses or persons for the purpose of processing the information on our behalf.",
        "We have a good faith belief that access, use, preservation or disclosure of such information is reasonably necessary to...",
      ],
    },
    dataSecurity: {
      title: "Data Security",
      content: "Tech Cloud ERP provides a Customized ERP Software in India, so we take appropriate security measures to protect against unauthorized access...",
    },
    changesPolicy: {
      title: "Changes in Privacy Policy",
      content: "It shall be noted that this Privacy Policy may change later or from time to time...",
    },
    contactDetails: {
      title: "Contact Details",
      content: "Should you have any concerns regarding our cloud ERP software privacy policy, you can contact us through phone or email.",
    },
    termsConditions: {
      title: "Terms and Conditions",
      content: "Tech Cloud ERP terms and conditions govern your use of this website...",
    },
    note: "NOTE: IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE WEBSITE.",
  };

  export const ModulecardsData = [
    {
      id: 1,
      image: ('home/crmimg.webp'),
      title: 'CRM',
      description:
        'CRM stands for Customer Relationship Management. It\'s a strategy businesses use to manage interactions.',
    },
    {
      id: 2,
      image: ('home/sales.webp'),
      title: 'Sales Management',
      description:
        'Sales & Marketing Module handles all the sales activities of domestic and international operations.',
    },
    {
    id: 3,
    image: ('home/Purchasemanagement.webp'),
    title: ' Purchase Management',
    description:
    'Streamline procurement with integrated workflows, real-time inventory, and automated orders for cost-effective sourcing.',
    },
    {
      id: 4,
      image: ('home/secure.webp'),
      title: 'Inventory Management',
      description: 'Facilitating seamless coordination among departments. Automated notifications maintain optimum levels, enhancing efficiency.',
    },
    {
      id: 5,
      image: ('home/Productiomanagement.webp'),
      title: 'Production Management',
      description: 'Boost efficiency by tracking tasks, reallocating resources, and ensuring timely delivery with smart planning.',
    },
    {
      id: 6,
      image: ('home/jobwork.webp'),
      title: 'Job Work Management',
      description:
        'Easily outsource specialized tasks with our Job Work module, optimizing production and reducing workload.',
    },
    {
      id: 7,
      image: ('home/qualitycontrol.webp'),
      title: 'Quality Control',
      description: 'A process through which a business seeks to ensure that product quality is maintained perfectly.',
    },
    {
      id: 8,
      image: ('home/QualityAssurance.webp'),
      title: 'Quality Assurance',
      description: 'Achieve excellence with live quality checks, automated inspections, and compliance to reduce errors.',
    },
    {
      id: 9,
      image: ('home/assetmanagement.webp'),
      title: 'Fixed Assets',
      description: 'Streamline asset management from procurement to disposal with centralized views and seamless integration.',
    },
    {
      id: 10,
      image: ('home/plant maintenance.webp'),
      title: 'Plant Maintenance',
      description: 'Prevent downtime with predictive tools, equipment monitoring, and proactive servicing for peak performance.',
    },
    {
      id: 11,
      image: ('home/hrms.webp'),
      title: 'HRM',
      description: 'Simplify HR tasks from hiring to retirement with efficient payroll, performance insights, and compliance.',
    },
    {
      id: 12,
      image: ('home/financeaccounting.webp'),
      title: 'Finance & Accounting',
      description: 'Manages financial transactions, budgeting, and reporting, ensuring compliance and providing real-time decision-making insights.',
    },
    {
      id: 13,
      image: ('home/exportandimport.webp'),
      title: 'Imports and Exports',
      description: 'Streamline global trade with our Export and Import module. Manage logistics, documentation and more.',
    },
    {
      id: 14,
      image: ('home/projmanage.webp'),
      title: 'Project Management',
      description: 'Keep projects on track with real-time oversight of schedules, budgets, and resources for timely delivery.',
    },
    {
      id: 15,
      image: ('home/Design.webp'),
      title: 'Design',
      description: 'Streamline design workflows, collaborate in real-time, and drive efficient product development from concept to production.',
    },
    {
      id: 16,
      image: ('home/point of sale.webp'),
      title: 'POS',
      description: 'Enhance sales with integrated POS systems, offering instant inventory updates, quick checkouts, and superior service.',
    },
    ];

    export const featuresData = [
      {
          image: "/features/webbased.webp", // Use absolute path
          title: "Web Based And Cloud Computing",
          description: "Web-based and cloud computing provide scalable, flexible access to apps and data online.",
      },
      {
          image: "/features/dynamic.webp",
          title: "Dynamic Dashboards",
          description: "Dynamic dashboards offer real-time, interactive data visualization for better decision-making.",
      },
      {
          image: "/features/Whatsapp_email.webp",
          title: "Email & Whatsapp Integration",
          description: "Email and SMS integration enables seamless, efficient communication across both channels.",
      },
      {
          image: "/features/mobilenadtab.webp",
          title: "Mobile & Tab Compatibility",
          description: "Ensures a seamless user experience across devices, enhancing accessibility and usability.",
      },
      {
          image: "/features/autobackup.webp",
          title: "Data Auto Backup",
          description: "Automates secure data storage, ensuring continuity and protection against loss.",
      },
      {
          image: "/features/customisable.webp",
          title: "Customizable Software",
          description: "Allows users to tailor applications to specific needs, enhancing functionality and satisfaction.",
      },
      {
          image: "/features/payasgo.webp",
          title: "Pay As You Go",
          description: "Enables users to pay for services based on actual usage, promoting flexibility and cost-efficiency.",
      },
      {
          image: "/features/chatusers.webp",
          title: "Chat Between Users",
          description: "Facilitates real-time communication and collaboration, enhancing interaction and connectivity.",
      },
      {
          image: "/features/infiniteusers.webp",
          title: "Unlimited Users",
          description: "Accommodates an unlimited number of users, ensuring scalability and accessibility.",
      },
      {
          image: "/features/Audit_trail.webp",
          title: "Audit Trail",
          description: "Detailed log of system activities, supporting accountability, compliance and security.",
      },
      {
          image: "/features/Inventory.webp",
          title: "Multiple Inventory Location",
          description: "Centralized inventory management across multiple locations, ensuring accuracy and seamless transfers.",
      }
  ];
  

  //pricing plans
export const pricingPlans = [
  {
    price: "2000*",
    title: "Basic",
    description: "Per member, per Month.",
    coverages: [
      "1-5 Modules",
      "1-5 Users",
    ],
    note: "For all individuals and starters who want to start with domaining",
    creditCardRequired: "No credit card required",
    background: '#fff',
    color: '#000',
  },
  {
    price: "1500*",
    title: "",
    description: "Per member, per Month.",
    coverages: [
      "1-15 Modules",
      "1-25 Users",
    ],
    note: "For professional domain names investors with a big portfolio",
    creditCardRequired: "No credit card required",
    background: '#05A7CC',
    color: '#fff',
  },
  {
    price: "0*",
    title: " Ultimate",
    description: "Per member, per Month.",
    coverages: [
      "Unlimited Modules",
      "Unlimited Customization",
    ],
    note: "For all individuals and starters who want to start with domaining",
    creditCardRequired: "No credit card required",
    background: '#fff',
    color: '#000',
  }
];


export const assetsbrochure = {
  brochureLink: "/broucher-web.pdf", // Direct public URL
};
