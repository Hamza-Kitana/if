import { useLanguage } from '@/contexts/LanguageContext';
import { Bus, Shield, Users, Calendar, Headphones, CheckCircle } from 'lucide-react';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Bus,
      title: t('أسطول حديث ومتجدد', 'Modern Fleet'),
      description: t('باصات حديثة ومجهزة بأحدث التقنيات', 'Modern buses equipped with the latest technology'),
      points: [
        t('مقاعد مريحة ومساحات واسعة', 'Comfortable seating and spacious interiors'),
        t('تكييف قوي واتصال Wi‑Fi', 'Powerful A/C and on‑board Wi‑Fi'),
      ],
    },
    {
      icon: Shield,
      title: t('معايير السلامة والنظافة', 'Safety & Cleanliness'),
      description: t('التزام تام بأعلى معايير السلامة', 'Full commitment to the highest safety standards'),
      points: [
        t('صيانة دورية وفحوصات شاملة', 'Scheduled maintenance and full inspections'),
        t('معدات سلامة متوفرة في كل رحلة', 'Safety equipment available on every trip'),
      ],
    },
    {
      icon: Users,
      title: t('فريق محترف', 'Professional Team'),
      description: t('سائقون وموظفون مدربون ومحترفون', 'Trained and professional drivers and staff'),
      points: [
        t('سائقون معتمدون وذوو خبرة', 'Licensed, experienced drivers'),
        t('خدمة عملاء سريعة الاستجابة', 'Responsive customer support'),
      ],
    },
    {
      icon: Calendar,
      title: t('نظام حجز مرن', 'Flexible Booking'),
      description: t('حجز سهل ومرن عبر الإنترنت', 'Easy and flexible online booking'),
      points: [
        t('تأكيد فوري وتحديثات حية', 'Instant confirmation and live updates'),
        t('خيارات دفع متعددة وآمنة', 'Multiple secure payment options'),
      ],
    },
    {
      icon: Headphones,
      title: t('خدمة عملاء 24/7', '24/7 Customer Service'),
      description: t('دعم مستمر على مدار الساعة', 'Continuous round-the-clock support'),
      points: [
        t('متابعة الرحلة لحظة بلحظة', 'Real‑time trip monitoring'),
        t('قنوات تواصل متعددة', 'Multiple contact channels'),
      ],
    },
    {
      icon: CheckCircle,
      title: t('جودة مضمونة', 'Guaranteed Quality'),
      description: t('التزام بالجودة والموثوقية', 'Commitment to quality and reliability'),
      points: [
        t('معايير أداء واضحة ومقاسة', 'Clear, measurable performance standards'),
        t('تقييمات دورية وتجربة عميل محسّنة', 'Regular reviews and improved CX'),
      ],
    },
  ];

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Diagonal background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900" />
        <div 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#8B2323]"
          style={{
            clipPath: 'polygon(100% 0, 0 100%, 100% 100%)',
          }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">
              {t('مميزاتنا', 'Our Features')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t(
              'ما يميزنا عن الآخرين في خدمات النقل',
              'What sets us apart in transportation services'
            )}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-card rounded-2xl p-6 md:p-7 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02] border border-border h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 md:w-9 md:h-9 text-primary group-hover:animate-float" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    {feature.points && (
                      <ul className="text-sm md:text-base text-muted-foreground space-y-1">
                        {feature.points.map((p, i2) => (
                          <li key={i2} className="flex items-center gap-2 justify-center">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
