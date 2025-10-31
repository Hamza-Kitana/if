import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, Clock, Shield, Users, Phone, ArrowRight, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

type ServiceData = {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  detailedDescriptionAr: string;
  detailedDescriptionEn: string;
  image: string;
  galleryImages: string[];
  highlightsAr: string[];
  highlightsEn: string[];
  featuresAr: { icon: string; title: string; desc: string }[];
  featuresEn: { icon: string; title: string; desc: string }[];
  whyChooseAr: string[];
  whyChooseEn: string[];
  processAr: { step: string; title: string; desc: string }[];
  processEn: { step: string; title: string; desc: string }[];
};

const SERVICES: Record<string, ServiceData> = {
  corporate: {
    titleAr: 'تأجير باصات للشركات والمؤسسات',
    titleEn: 'Corporate Bus Rental',
    descriptionAr: 'حلول نقل موثوقة للموظفين بعقود مرنة وطويلة الأمد مع أعلى معايير السلامة والراحة.',
    descriptionEn: 'Reliable employee transport solutions with flexible long-term contracts, prioritizing safety and comfort.',
    detailedDescriptionAr: 'نقدم خدمات نقل الموظفين للشركات والمؤسسات بأسطول حديث ومتنوع يلبي احتياجاتكم اليومية. نوفر عقود مرنة طويلة وقصيرة الأمد مع التزام صارم بالمواعيد والجداول الزمنية. فريقنا من السائقين المحترفين والمدربين يضمن رحلة آمنة ومريحة لموظفيكم. نقدم تقارير دورية وخدمة متابعة مستمرة لضمان أعلى مستويات الرضا. نفهم أهمية الوقت في بيئة الأعمال، لذا نضمن الدقة والاحترافية في كل رحلة. باصاتنا مجهزة بأحدث وسائل الراحة والسلامة، مع نظام تتبع GPS لمراقبة الرحلات بشكل مباشر.',
    detailedDescriptionEn: 'We provide employee transportation services for companies and institutions with a modern and diverse fleet that meets your daily needs. We offer flexible long and short-term contracts with strict adherence to schedules and timelines. Our team of professional and trained drivers ensures a safe and comfortable journey for your employees. We provide periodic reports and continuous follow-up service to ensure the highest levels of satisfaction. We understand the importance of time in the business environment, so we guarantee accuracy and professionalism in every trip. Our buses are equipped with the latest comfort and safety features, with GPS tracking system for direct trip monitoring.',
    image: '/belal/IMG-20251030-WA0008.jpg',
    galleryImages: ['/belal/IMG-20251030-WA0010.jpg', '/belal/IMG-20251030-WA0011.jpg', '/belal/IMG-20251030-WA0012.jpg'],
    highlightsAr: ['عقود مرنة طويلة وقصيرة الأمد', 'التزام صارم بالمواعيد والجداول', 'أسطول متنوع يناسب كل الاحتياجات', 'سائقون محترفون ومدربون', 'تقارير دورية ومتابعة مستمرة', 'صيانة دورية وفحوصات شاملة', 'نظام تتبع GPS للرحلات', 'خدمة عملاء مخصصة لكل شركة', 'باصات مكيفة ومريحة', 'أسعار تنافسية وشفافة'],
    highlightsEn: ['Flexible long and short-term contracts', 'Strict adherence to schedules', 'Diverse fleet for all needs', 'Professional trained drivers', 'Periodic reports and follow-up', 'Regular maintenance and inspections', 'GPS tracking system', 'Dedicated customer service for each company', 'Air-conditioned comfortable buses', 'Competitive transparent pricing'],
    featuresAr: [
      { icon: 'clock', title: 'دقة في المواعيد', desc: 'التزام تام بجداول النقل المتفق عليها مع نظام تنبيهات مسبق' },
      { icon: 'shield', title: 'سلامة مضمونة', desc: 'معايير سلامة عالية وصيانة دورية وفحوصات يومية' },
      { icon: 'users', title: 'سائقون محترفون', desc: 'فريق مدرب وذو خبرة طويلة مع رخص قيادة معتمدة' },
      { icon: 'check', title: 'عقود مرنة', desc: 'حلول تناسب احتياجات كل شركة مع إمكانية التعديل' }
    ],
    featuresEn: [
      { icon: 'clock', title: 'On-Time Precision', desc: 'Full commitment to agreed schedules with advance alert system' },
      { icon: 'shield', title: 'Guaranteed Safety', desc: 'High safety standards, regular maintenance and daily inspections' },
      { icon: 'users', title: 'Professional Drivers', desc: 'Trained team with extensive experience and certified licenses' },
      { icon: 'check', title: 'Flexible Contracts', desc: 'Solutions tailored to each company with modification options' }
    ],
    whyChooseAr: [
      'خبرة واسعة في خدمة الشركات الكبرى والمتوسطة',
      'أسطول حديث ومتجدد باستمرار',
      'فريق إدارة محترف لمتابعة العقود',
      'تغطية شاملة لجميع مناطق المملكة',
      'نظام دفع مرن يناسب الشركات',
      'تأمين شامل على جميع الرحلات'
    ],
    whyChooseEn: [
      'Extensive experience serving large and medium companies',
      'Modern fleet constantly renewed',
      'Professional management team for contract follow-up',
      'Comprehensive coverage of all Kingdom areas',
      'Flexible payment system suitable for companies',
      'Comprehensive insurance on all trips'
    ],
    processAr: [
      { step: '01', title: 'التواصل والاستشارة', desc: 'نستمع لاحتياجاتكم ونقدم استشارة مجانية لتحديد الحل الأمثل' },
      { step: '02', title: 'تصميم الخطة', desc: 'نصمم خطة نقل مخصصة تناسب عدد الموظفين والمواقع والمواعيد' },
      { step: '03', title: 'توقيع العقد', desc: 'عقد واضح وشفاف يحدد جميع التفاصيل والالتزامات' },
      { step: '04', title: 'التنفيذ والمتابعة', desc: 'بدء الخدمة مع متابعة يومية وتقارير دورية' }
    ],
    processEn: [
      { step: '01', title: 'Contact & Consultation', desc: 'We listen to your needs and provide free consultation to determine the optimal solution' },
      { step: '02', title: 'Plan Design', desc: 'We design a custom transport plan suitable for employee numbers, locations and schedules' },
      { step: '03', title: 'Contract Signing', desc: 'Clear transparent contract specifying all details and commitments' },
      { step: '04', title: 'Implementation & Follow-up', desc: 'Service start with daily follow-up and periodic reports' }
    ]
  },
  domestic: {
    titleAr: 'الرحلات الداخلية داخل الأردن',
    titleEn: 'Domestic Trips',
    descriptionAr: 'رحلات سياحية داخل الأردن بمقاعد مريحة وتكييف ومعايير نظافة وسلامة عالية.',
    descriptionEn: 'Domestic tours with comfortable seating, air conditioning, and high safety & cleanliness standards.',
    detailedDescriptionAr: 'استكشف جمال الأردن مع خدمات الرحلات الداخلية المتميزة. نوفر باصات حديثة ومكيفة مع مقاعد مريحة لرحلات سياحية ممتعة إلى البتراء، وادي رم، العقبة، جرش وكل المواقع السياحية في المملكة. نقدم برامج سياحية متكاملة مع مرشدين محترفين وجداول مرنة تناسب احتياجاتكم. سواء كانت رحلة عائلية أو مدرسية أو جماعية، نضمن تجربة لا تُنسى. نهتم بكل التفاصيل من التخطيط للتنفيذ، مع توفير وجبات ومشروبات حسب الطلب، ونقاط توقف مريحة خلال الرحلة.',
    detailedDescriptionEn: 'Explore the beauty of Jordan with our premium domestic trip services. We provide modern air-conditioned buses with comfortable seating for enjoyable tours to Petra, Wadi Rum, Aqaba, Jerash, and all tourist sites in the Kingdom. We offer comprehensive tour packages with professional guides and flexible schedules to suit your needs. Whether it\'s a family, school, or group trip, we guarantee an unforgettable experience. We care about every detail from planning to execution, providing meals and refreshments on request, and comfortable rest stops during the trip.',
    image: '/belal/IMG-20251030-WA0013.jpg',
    galleryImages: ['/belal/IMG-20251030-WA0014.jpg', '/belal/IMG-20251030-WA0015.jpg', '/belal/IMG-20251030-WA0016.jpg'],
    highlightsAr: ['رحلات لكل المواقع السياحية في الأردن', 'مرشدون سياحيون محترفون ومعتمدون', 'برامج مرنة حسب الطلب والميزانية', 'باصات حديثة ومكيفة ومريحة', 'أسعار تنافسية وعروض خاصة للمجموعات', 'تنظيم كامل للرحلة من البداية للنهاية', 'توفير وجبات ومشروبات حسب الطلب', 'تأمين شامل على الركاب', 'نقاط توقف مريحة ومنظمة', 'تصوير احترافي للرحلة (اختياري)'],
    highlightsEn: ['Tours to all tourist sites in Jordan', 'Professional certified tour guides', 'Flexible programs by request and budget', 'Modern air-conditioned comfortable buses', 'Competitive prices and group special offers', 'Complete trip organization from start to finish', 'Meals and refreshments on request', 'Comprehensive passenger insurance', 'Comfortable organized rest stops', 'Professional trip photography (optional)'],
    featuresAr: [
      { icon: 'check', title: 'مواقع سياحية متعددة', desc: 'البتراء، وادي رم، العقبة، جرش، البحر الميت، عجلون وأكثر' },
      { icon: 'users', title: 'مرشدون محترفون', desc: 'خبرة واسعة في السياحة الأردنية مع معرفة تاريخية عميقة' },
      { icon: 'clock', title: 'جداول مرنة', desc: 'برامج يومية أو متعددة الأيام تناسب وقتكم واحتياجاتكم' },
      { icon: 'shield', title: 'راحة وأمان', desc: 'باصات حديثة ومعايير سلامة عالية مع تأمين شامل' }
    ],
    featuresEn: [
      { icon: 'check', title: 'Multiple Tourist Sites', desc: 'Petra, Wadi Rum, Aqaba, Jerash, Dead Sea, Ajloun and more' },
      { icon: 'users', title: 'Professional Guides', desc: 'Extensive experience in Jordanian tourism with deep historical knowledge' },
      { icon: 'clock', title: 'Flexible Schedules', desc: 'Daily or multi-day programs that suit your time and needs' },
      { icon: 'shield', title: 'Comfort & Safety', desc: 'Modern buses and high safety standards with comprehensive insurance' }
    ],
    whyChooseAr: [
      'برامج سياحية متنوعة لكل الأعمار والاهتمامات',
      'مرشدون يتحدثون عدة لغات',
      'تنسيق مع الفنادق والمطاعم السياحية',
      'أسعار شاملة بدون تكاليف خفية',
      'خدمة التقاط من الفنادق والمنازل',
      'تجربة سياحية أردنية أصيلة'
    ],
    whyChooseEn: [
      'Diverse tour programs for all ages and interests',
      'Multilingual tour guides',
      'Coordination with hotels and tourist restaurants',
      'All-inclusive prices with no hidden costs',
      'Hotel and home pickup service',
      'Authentic Jordanian tourism experience'
    ],
    processAr: [
      { step: '01', title: 'اختيار الوجهة', desc: 'اختر من برامجنا الجاهزة أو صمم رحلتك الخاصة' },
      { step: '02', title: 'تحديد التفاصيل', desc: 'عدد الأشخاص، التاريخ، الخدمات الإضافية المطلوبة' },
      { step: '03', title: 'الحجز والدفع', desc: 'حجز مؤكد مع دفع مقدم أو كامل حسب الرغبة' },
      { step: '04', title: 'الاستمتاع بالرحلة', desc: 'رحلة منظمة ومريحة مع مرشد محترف' }
    ],
    processEn: [
      { step: '01', title: 'Choose Destination', desc: 'Select from our ready programs or design your own trip' },
      { step: '02', title: 'Set Details', desc: 'Number of people, date, additional services required' },
      { step: '03', title: 'Booking & Payment', desc: 'Confirmed booking with advance or full payment as desired' },
      { step: '04', title: 'Enjoy the Trip', desc: 'Organized comfortable trip with professional guide' }
    ]
  },
  international: {
    titleAr: 'الرحلات الدولية',
    titleEn: 'International Trips',
    descriptionAr: 'رحلات منظمة وآمنة إلى سوريا ولبنان مع متابعة لحظية للمسار وخدمة عملاء 24/7.',
    descriptionEn: 'Organized and safe trips to Syria and Lebanon with live tracking and 24/7 support.',
    detailedDescriptionAr: 'نقدم خدمات الرحلات الدولية إلى سوريا ولبنان بأعلى معايير السلامة والاحترافية. نوفر تنسيق كامل للمعابر الحدودية والأوراق المطلوبة، مع متابعة لحظية للرحلة عبر نظام GPS. فريق خدمة العملاء متوفر على مدار الساعة للرد على استفساراتكم ومساعدتكم. باصاتنا مجهزة بأحدث وسائل الراحة والسلامة لضمان رحلة سلسة وممتعة عبر الحدود. نتعامل مع جميع الإجراءات الحدودية بسلاسة، ونوفر معلومات محدثة عن الطرق والظروف الجوية. رحلاتنا الدولية مؤمنة بالكامل مع التزام صارم بالقوانين الدولية.',
    detailedDescriptionEn: 'We provide international trip services to Syria and Lebanon with the highest standards of safety and professionalism. We offer complete coordination for border crossings and required documents, with real-time trip tracking via GPS system. Customer service team is available 24/7 to answer your inquiries and assist you. Our buses are equipped with the latest comfort and safety features to ensure a smooth and enjoyable cross-border journey. We handle all border procedures smoothly, and provide updated information about routes and weather conditions. Our international trips are fully insured with strict adherence to international laws.',
    image: '/belal/IMG-20251030-WA0023.jpg',
    galleryImages: ['/belal/IMG-20251030-WA0024.jpg', '/belal/IMG-20251030-WA0025.jpg', '/belal/IMG-20251030-WA0026.jpg'],
    highlightsAr: ['رحلات منظمة إلى سوريا ولبنان والدول المجاورة', 'تنسيق كامل للمعابر الحدودية والتأشيرات', 'متابعة لحظية عبر GPS على مدار الرحلة', 'خدمة عملاء 24/7 باللغتين العربية والإنجليزية', 'سائقون ذوو خبرة واسعة في الطرق الدولية', 'باصات مجهزة بأحدث وسائل الراحة والسلامة', 'تأمين دولي شامل على الركاب والأمتعة', 'معلومات محدثة عن الطرق والظروف', 'توقفات منظمة للراحة والطعام', 'أسعار شاملة لكل التكاليف'],
    highlightsEn: ['Organized trips to Syria, Lebanon and neighboring countries', 'Complete coordination for border crossings and visas', 'Real-time GPS tracking throughout the trip', '24/7 customer service in Arabic and English', 'Drivers with extensive experience on international routes', 'Buses equipped with latest comfort and safety amenities', 'Comprehensive international insurance on passengers and luggage', 'Updated information about routes and conditions', 'Organized stops for rest and meals', 'All-inclusive prices for all costs'],
    featuresAr: [
      { icon: 'shield', title: 'سلامة وأمان', desc: 'معايير سلامة دولية ومتابعة مستمرة مع تأمين شامل' },
      { icon: 'check', title: 'تنسيق المعابر', desc: 'نهتم بكل التفاصيل الحدودية والأوراق المطلوبة' },
      { icon: 'phone', title: 'دعم 24/7', desc: 'فريق متاح طوال الرحلة للمساعدة والاستفسارات' },
      { icon: 'users', title: 'خبرة دولية', desc: 'سائقون محترفون يعرفون الطرق الدولية جيداً' }
    ],
    featuresEn: [
      { icon: 'shield', title: 'Safety & Security', desc: 'International safety standards and continuous monitoring with comprehensive insurance' },
      { icon: 'check', title: 'Border Coordination', desc: 'We handle all border details and required documents' },
      { icon: 'phone', title: '24/7 Support', desc: 'Team available throughout the trip for assistance and inquiries' },
      { icon: 'users', title: 'International Experience', desc: 'Professional drivers who know international routes well' }
    ],
    whyChooseAr: [
      'خبرة طويلة في الرحلات الدولية',
      'علاقات قوية مع السلطات الحدودية',
      'باصات مجهزة للرحلات الطويلة',
      'سائقون يتحدثون عدة لغات',
      'تنسيق مع الفنادق في الدول المقصودة',
      'خدمة طوارئ على مدار الساعة'
    ],
    whyChooseEn: [
      'Long experience in international trips',
      'Strong relationships with border authorities',
      'Buses equipped for long journeys',
      'Multilingual drivers',
      'Coordination with hotels in destination countries',
      '24/7 emergency service'
    ],
    processAr: [
      { step: '01', title: 'التخطيط والحجز', desc: 'تحديد الوجهة والتواريخ وعدد المسافرين' },
      { step: '02', title: 'الأوراق والتأشيرات', desc: 'نساعدكم في إنجاز كل الأوراق المطلوبة' },
      { step: '03', title: 'الانطلاق', desc: 'رحلة منظمة مع توقفات مريحة ومتابعة مستمرة' },
      { step: '04', title: 'الوصول والعودة', desc: 'وصول آمن مع تنسيق كامل للعودة' }
    ],
    processEn: [
      { step: '01', title: 'Planning & Booking', desc: 'Determine destination, dates and number of travelers' },
      { step: '02', title: 'Documents & Visas', desc: 'We help you complete all required documents' },
      { step: '03', title: 'Departure', desc: 'Organized trip with comfortable stops and continuous follow-up' },
      { step: '04', title: 'Arrival & Return', desc: 'Safe arrival with complete coordination for return' }
    ]
  },
  private: {
    titleAr: 'تأجير باصات خاصة',
    titleEn: 'Private Bus Rental',
    descriptionAr: 'باصات فاخرة للعائلات والمناسبات الخاصة مع خيارات مخصصة حسب الطلب.',
    descriptionEn: 'Luxury buses for families and private events with fully customizable options.',
    detailedDescriptionAr: 'استمتع برحلة خاصة فاخرة مع خدمات التأجير الخاص. نوفر باصات حديثة ومجهزة بالكامل للعائلات، الأعراس، المناسبات الخاصة والرحلات الجماعية. مقاعد مريحة وفسيحة، تكييف قوي، نظام صوتي وترفيهي متطور، واي فاي عالي السرعة، وإمكانية تقديم المشروبات والوجبات الخفيفة. نصمم الرحلة حسب احتياجاتكم الخاصة مع مرونة كاملة في المسار والجدول الزمني. خدماتنا تشمل التزيين الخاص للمناسبات، سائق محترف وودود، ونظافة عالية المستوى.',
    detailedDescriptionEn: 'Enjoy a luxurious private trip with our private rental services. We provide modern fully-equipped buses for families, weddings, special occasions, and group trips. Comfortable spacious seating, powerful air conditioning, advanced sound and entertainment system, high-speed Wi-Fi, and option to provide refreshments and snacks. We design the trip according to your specific needs with complete flexibility in route and schedule. Our services include special decoration for occasions, professional friendly driver, and high-level cleanliness.',
    image: '/belal/IMG-20251030-WA0029.jpg',
    galleryImages: ['/belal/IMG-20251030-WA0030.jpg', '/belal/IMG-20251030-WA0031.jpg', '/belal/IMG-20251030-WA0001.jpg'],
    highlightsAr: ['باصات فاخرة ومجهزة بالكامل بأحدث التقنيات', 'مقاعد مريحة وفسيحة من الجلد الفاخر', 'نظام صوتي وترفيهي متطور مع شاشات', 'واي فاي عالي السرعة ومنافذ شحن', 'إمكانية تقديم المشروبات والوجبات والحلويات', 'مرونة كاملة في المسار والجدول الزمني', 'مثالية للأعراس والمناسبات الخاصة', 'تزيين خاص حسب المناسبة', 'سائق محترف وودود', 'نظافة عالية المستوى وتعقيم دوري'],
    highlightsEn: ['Luxury buses fully equipped with latest technology', 'Comfortable spacious leather seating', 'Advanced sound and entertainment system with screens', 'High-speed Wi-Fi and charging ports', 'Option for refreshments, meals and sweets', 'Complete flexibility in route and schedule', 'Perfect for weddings and special occasions', 'Special decoration for occasions', 'Professional friendly driver', 'High-level cleanliness and regular sanitization'],
    featuresAr: [
      { icon: 'check', title: 'تجهيزات فاخرة', desc: 'مقاعد جلدية مريحة ونظام ترفيهي متطور مع شاشات' },
      { icon: 'users', title: 'خدمة مخصصة', desc: 'نصمم الرحلة والتزيين حسب مناسبتكم واحتياجاتكم' },
      { icon: 'shield', title: 'راحة تامة', desc: 'تكييف قوي ومساحات واسعة ونظافة عالية' },
      { icon: 'clock', title: 'مرونة كاملة', desc: 'جداول ومسارات حسب رغبتكم بدون قيود' }
    ],
    featuresEn: [
      { icon: 'check', title: 'Luxury Equipment', desc: 'Comfortable leather seats and advanced entertainment system with screens' },
      { icon: 'users', title: 'Customized Service', desc: 'We design the trip and decoration according to your occasion and needs' },
      { icon: 'shield', title: 'Complete Comfort', desc: 'Powerful AC, spacious areas and high cleanliness' },
      { icon: 'clock', title: 'Full Flexibility', desc: 'Schedules and routes as you wish without restrictions' }
    ],
    whyChooseAr: [
      'باصات VIP فاخرة ونظيفة',
      'تزيين خاص للأعراس والمناسبات',
      'خدمة ضيافة متكاملة حسب الطلب',
      'سائقون محترفون وودودون',
      'أسعار تنافسية وشفافة',
      'خصوصية تامة وخدمة راقية'
    ],
    whyChooseEn: [
      'Luxury clean VIP buses',
      'Special decoration for weddings and occasions',
      'Complete hospitality service on request',
      'Professional friendly drivers',
      'Competitive transparent prices',
      'Complete privacy and premium service'
    ],
    processAr: [
      { step: '01', title: 'الاستشارة', desc: 'نستمع لمتطلباتكم ونقترح الحلول المناسبة' },
      { step: '02', title: 'التخصيص', desc: 'اختيار الباص والتزيين والخدمات الإضافية' },
      { step: '03', title: 'التأكيد', desc: 'حجز مؤكد مع تحديد كل التفاصيل' },
      { step: '04', title: 'الاستمتاع', desc: 'رحلة فاخرة ومريحة حسب تصميمكم' }
    ],
    processEn: [
      { step: '01', title: 'Consultation', desc: 'We listen to your requirements and suggest suitable solutions' },
      { step: '02', title: 'Customization', desc: 'Choose bus, decoration and additional services' },
      { step: '03', title: 'Confirmation', desc: 'Confirmed booking with all details specified' },
      { step: '04', title: 'Enjoyment', desc: 'Luxurious comfortable trip according to your design' }
    ]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const data = slug ? SERVICES[slug] : undefined;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'clock': return Clock;
      case 'shield': return Shield;
      case 'users': return Users;
      case 'check': return CheckCircle;
      case 'phone': return Phone;
      default: return CheckCircle;
    }
  };

  if (!data) {
    return (
      <>
        <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-xl text-muted-foreground">{t('الخدمة غير موجودة', 'Service not found')}</p>
          <Link className="text-primary underline" to="/">{t('العودة للرئيسية', 'Back to home')}</Link>
        </div>
      </div>
        <Footer />
      </>
    );
  }

  const features = language === 'ar' ? data.featuresAr : data.featuresEn;
  const whyChoose = language === 'ar' ? data.whyChooseAr : data.whyChooseEn;
  const process = language === 'ar' ? data.processAr : data.processEn;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <img 
          src={data.image} 
          alt="cover" 
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl animate-fade-in-up">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#8B2323' }}>
                {t(data.titleAr, data.titleEn)}
            </h1>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed" style={{ color: '#A52A2A' }}>
                {t(data.descriptionAr, data.descriptionEn)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Services Strip */}
      <div className="bg-card border-y border-border py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-primary bg-primary/5 hover:bg-primary/10 transition-all duration-300 font-medium text-primary"
            >
              {language === 'ar' ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
              <span>{t('رجوع للرئيسية', 'Back to Home')}</span>
            </button>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 flex-1">
              <h3 className="text-lg font-bold text-foreground whitespace-nowrap">
                {t('خدمات أخرى:', 'Other Services:')}
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-3 flex-1">
                {Object.entries(SERVICES).filter(([key]) => key !== slug).map(([key, s]) => (
                  <Link 
                    key={key} 
                    to={`/services/${key}`} 
                    className="px-5 py-2.5 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group font-medium"
                  >
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      {t(s.titleAr, s.titleEn)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid lg:grid-cols-3 gap-6 md:gap-10">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Detailed Description */}
            <div className="bg-card border border-border rounded-2xl p-5 md:p-8 shadow-elegant animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-foreground">
                {t('نظرة عامة', 'Overview')}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t(data.detailedDescriptionAr, data.detailedDescriptionEn)}
              </p>
            </div>

            {/* Features Grid */}
            <div className="bg-card border border-border rounded-2xl p-5 md:p-8 shadow-elegant animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-foreground">
                {t('ما يميز هذه الخدمة', 'What Makes This Service Special')}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {features.map((feature, index) => {
                  const Icon = getIcon(feature.icon);
                  return (
                    <div 
                      key={index}
                      className="flex gap-4 p-4 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-base md:text-lg mb-1 text-foreground">{feature.title}</h3>
                        <p className="text-muted-foreground text-xs md:text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-card border border-border rounded-2xl p-5 md:p-8 shadow-elegant animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-foreground">
                {t('المزايا الرئيسية', 'Key Benefits')}
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {(language === 'ar' ? data.highlightsAr : data.highlightsEn).map((h, i) => (
                  <li key={i} className="flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-lg hover:bg-secondary/20 transition-colors">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery */}
            {data.galleryImages && data.galleryImages.length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-5 md:p-8 shadow-elegant animate-fade-in-up">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-foreground">
                  {t('معرض الصور', 'Photo Gallery')}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                  {data.galleryImages.map((img, i) => (
                    <div key={i} className="relative aspect-video rounded-xl overflow-hidden group">
                      <img 
                        src={img} 
                        alt={`Gallery ${i + 1}`}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Why Choose Us */}
            <div className="bg-card border border-border rounded-2xl p-5 md:p-8 shadow-elegant animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-foreground">
                {t('لماذا تختارنا؟', 'Why Choose Us?')}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {whyChoose.map((reason, i) => (
                  <div key={i} className="flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm md:text-base">{i + 1}</span>
                    </div>
                    <p className="text-sm md:text-base text-foreground leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="bg-card border border-border rounded-2xl p-5 md:p-8 shadow-elegant animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-foreground">
                {t('كيف نعمل؟', 'How We Work?')}
              </h2>
              <div className="space-y-4 md:space-y-6">
                {process.map((step, i) => (
                  <div key={i} className="flex gap-3 md:gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-glow">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1 pt-1 md:pt-2">
                      <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-foreground">{step.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <aside className="space-y-4 md:space-y-6">
            {/* Booking Card */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 rounded-2xl p-5 md:p-8 shadow-glow lg:sticky lg:top-24 animate-scale-in">
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-foreground">{t('احجز الآن', 'Book Now')}</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                {t('تواصل معنا للحصول على عرض سعر مخصص يناسب احتياجاتك.', 'Contact us for a custom quote that suits your needs.')}
              </p>
              <a
                href="https://wa.me/962780989098"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3 md:py-4 rounded-xl bg-primary text-primary-foreground shadow-glow hover:bg-primary/90 transition-all duration-300 font-semibold text-base md:text-lg"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                {t('تواصل عبر واتساب', 'Contact via WhatsApp')}
              </a>
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border">
                <p className="text-xs md:text-sm text-muted-foreground text-center">
                  {t('متوفرون على مدار الساعة للرد على استفساراتكم', 'Available 24/7 to answer your inquiries')}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiceDetail;



