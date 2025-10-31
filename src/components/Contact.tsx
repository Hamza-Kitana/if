import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Contact = () => {
  const { t } = useLanguage();
  const [currentIcon, setCurrentIcon] = useState(0);
  const icons = [Phone, Mail, MapPin];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: t('البريد الإلكتروني', 'Email'),
      value: 'ifbr.busrental@gmail.com',
      href: 'mailto:ifbr.busrental@gmail.com',
    },
    {
      icon: Phone,
      label: t('الهاتف', 'Phone'),
      value: '+962 78 098 9098',
      href: 'tel:+962780989098',
    },
    {
      icon: MapPin,
      label: t('الموقع', 'Location'),
      value: t('الزرقاء، الأردن', 'Zarqa, Jordan'),
      href: 'https://www.google.com/maps/place/%D8%A7%D9%84%D8%A7%D8%B3%D8%B7%D9%88%D9%84+%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A+%D9%84%D8%AA%D8%A3%D8%AC%D9%8A%D8%B1+%D8%A7%D9%84%D8%AD%D8%A7%D9%81%D9%84%D8%A7%D8%AA%E2%80%AD/@32.0155347,36.0774483,935m/data=!3m2!1e3!4b1!4m6!3m5!1s0x151b65701e2e1073:0x9df0787fea6d3864!8m2!3d32.0155347!4d36.0774483!16s%2Fg%2F11h_d77_f8?hl=en&entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D',
    },
  ];

  const CurrentIcon = icons[currentIcon];

  return (
    <section id="contact" className="relative py-24 bg-secondary/30 overflow-hidden">
      {/* Large animated background icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <CurrentIcon 
          className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] text-primary transition-all duration-1000 ease-in-out animate-pulse"
          strokeWidth={0.5}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">
              {t('تواصل معنا', 'Contact Us')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t(
              'نحن هنا للإجابة على جميع استفساراتكم',
              "We're here to answer all your inquiries"
            )}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="group animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <a
                    href={info.href}
                    target={info.icon === MapPin ? "_blank" : undefined}
                    rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                    className="block bg-card rounded-2xl p-8 md:p-10 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 border border-border text-center"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 md:mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary group-hover:animate-float" />
                    </div>
                    <h3 className="font-bold text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                      {info.label}
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground break-words">
                      {info.value}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>

          <div className="bg-card rounded-2xl p-5 md:p-8 shadow-elegant border border-border animate-fade-in-up text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">
              {t('احجز رحلتك الآن', 'Book Your Trip Now')}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-5 md:mb-6">
              {t(
                'تواصل معنا عبر واتساب للحصول على عرض سعر فوري',
                'Contact us via WhatsApp for an instant quote'
              )}
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-sm md:text-base"
              asChild
            >
              <a
                href="https://wa.me/962780989098"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('تواصل عبر واتساب', 'Contact via WhatsApp')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
