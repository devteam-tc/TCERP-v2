export const menuData = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About Us',
      href: '/about-us',
    },
    {
      label: 'Industries',
      href: '/all-industries',
      children: [
        {
          heading: 'Agriculture to Electronic Industries',
          submenu: [
            { label: 'Agriculture Industry', 
              href: '/industries/agriculture-industry' 
            },
            {
              label: 'Apparel Industry',
              href: '/industries/apparel-industry',
            },
            { label: 'Automative Industry', 
              href: '/industries/automative-industry' 
            },
            { label: 'Beverage Industry', 
              href: '/industries/beverage-industry' 
            },
            {
              label: 'Chemical Industry',
              href: '/industries/chemical-industry',
            },
            { label: 'Educational Institutes', 
              href: '/industries/educational-institutes' 
            },
            {
              label: 'Electric Industry',
              href: '/industries/electrical-solar-industry',
            },
            { label: 'Electronics Industry', 
              href: '/industries/electronics-industry' 
            },
          ],
        },
        {
          heading: 'FMCG to Metal Fabrication Industry',
          submenu: [
            {
              label: 'FMCG Industry',
              href: '/industries/FMCG-industry',
            },
            { label: 'Food Industry', 
              href: '/industries/food-industry' },
            {
              label: 'Furniture Industry',
              href: '/industries/furniture-industry',
            },
            {
              label: 'Garment Industry',
              href: '/industries/garment-industry',
            },
            { label: 'Hydrolic Cylinders Industry', 
              href: '/industries/hydraulic-industry' },
            { label: 'Jewellery Industry', 
              href: '/industries/jewellery-industry' },
            { label: 'Leather Industry', href: '/industries/leather-industry' },
            { title: 'Logistics Industry ', href: '/industries/logistics-industry' },
  
          { label: 'Medical Equipment Manufacturing Industry', href: '/industries/medicalequipmentmanufacturing-industry' },
          { label: 'Wood Industry', href: '/industries/wood-industry' },
          { label: 'Wholesalers Industry', href: '/industries/wholesalers-industry' },
          { label: 'Metal Fabrication Industry', href: '/industries/metal-fabrication-industry' },
          { label: 'Micro Finance Industry', href: '/industries/microfinance-industry' },
          ],
        },
        {
          heading: 'Oil & Gas Textile Industry',
          submenu: [
          { label: 'Oil & Gas Industry', href: '/industries/oilandgas-industry' },
          { label: 'Packaging Industry', href: '/industries/packaging-industry' },
          { label: 'Paper Industry', href: '/industries/paper-industry' },
          { label: 'Plastic Industry', href: '/industries/plastic-industry' },
          { label: 'Pharmaceutical Industry', href: '/industries/pharma-industry' }, 
          { label: 'Publishing Industry', href: '/industries/publishing-industry' },
          { label: 'Printing Industry', href: '/industries/printing-industry' },
          { label: 'Pre Engineering Industry', href: '/industries/preengineering-industry' },
          { label: 'Rubber Industry', href: '/industries/rubber-industry' },
          { label: 'Restaurant Industry', href: '/industries/restaurant-industry' },
          { label: 'Retail Industry', href: '/industries/retail-industry' },
          { label: 'Steel Industry', href: '/industries/steel-industry' },
          { label: 'Telecom Industry', href: '/industries/telecom-industry' },
          { label: 'Textile Industry', href: '/industries/textiles-industry' },
          ],
        },
      ],
    },
    
    {
      label: 'Products',
      href: '/all-products',
      children: [
        {
          submenu: [
            { label: 'Tech Cloud ERP', href: '/products/tech-cloud-erp' },
            { label: 'Tech Cloud CRM', href: '/products/customer-relationship-management' },
            { label: 'Tech Cloud POS', href: '/products/point-of-sale' },
            { label: 'Tech Cloud Trading Software', href: '/products/trading-software' },
            { label: 'Tech Cloud Ecommerce', href: '/products/Ecommerce-software' },
            { label: 'Tech Cloud HRM',  href: '/products/hr-managament-software'},
            { label: 'Tech Cloud Finance', href: '/products/financial-management-systems' },
            { label: 'Tech Cloud ERP Integrated-With-CRM-Ecommerce-POS', href: '/products/integrated-erp-software' },
            { label: 'Tech Cloud Restaurant ERP', href: '/products/erp-for-restaraunt' },
            { label: 'Accounting Software', href: '/products/erp-for-accounting-software' },
          ],
        },
      ],
    },
    { label: 'BI', 
      href: '/business-intelligence' },
    {
      label: 'Services',
      href: '/all-services',
      children: [
        {
          submenu: [
            { label: 'Digital Marketing', href: 'services/digital-marketing' },
            { label: 'Web Development', href: 'services/web-development' },
            { label: 'Mobile Application Development', href: 'services/mobile-application-development' },
          ],
        }
      ],
    },
    { label: 'Pricing', 
      href: '/pricing' },
    { label: 'Contact Us', 
      href: '/contact-us' },
    { label: 'Demo', 
      href: '/scheduledemo',
      isDemo: true,
     },
  ];
  