import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';

const Services = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const services = [
    {
      slug: 'corporate',
      title: t('تأجير باصات للشركات والمؤسسات', 'Corporate Bus Rental'),
      image: '/belal/IMG-20251030-WA0008.jpg',
      desc: t('حلول نقل للموظفين بعقود مرنة ومواعيد دقيقة.', 'Employee transport with flexible contracts and punctual schedules.'),
    },
    {
      slug: 'domestic',
      title: t('الرحلات الداخلية داخل الأردن', 'Domestic Trips'),
      image: '/belal/IMG-20251030-WA0013.jpg',
      desc: t('رحلات داخلية مريحة بمعايير نظافة وسلامة عالية.', 'Comfortable domestic tours with high safety and cleanliness.'),
    },
    {
      slug: 'international',
      title: t('الرحلات الدولية', 'International Trips'),
      image: '/belal/IMG-20251030-WA0023.jpg',
      desc: t('تنظيم آمن للرحلات الدولية مع متابعة ودعم.', 'Safe international trips with tracking and support.'),
    },
    {
      slug: 'private',
      title: t('تأجير باصات خاصة', 'Private Bus Rental'),
      image: '/belal/IMG-20251030-WA0029.jpg',
      desc: t('باصات خاصة فاخرة للمناسبات والعائلات.', 'Premium private buses for events and families.'),
    },
  ];

  const [selected, setSelected] = useState<string>(services[0]?.slug || 'corporate');
  const selectedService = useMemo(() => services.find(s => s.slug === selected) || services[0], [selected, services]);
  const [isHovered, setIsHovered] = useState(false);

  // Fallback online images if local /belal/*.jpg not found
  const backupImageBySlug: Record<string, string> = {
    corporate: 'https://images.unsplash.com/photo-1517940310602-85b1b058df6f?w=1000&q=70&auto=format&fit=crop',
    domestic: 'https://images.unsplash.com/photo-1517940320895-4cee6bfa5a3b?w=1000&q=70&auto=format&fit=crop',
    international: 'https://images.unsplash.com/photo-1534201597020-9f42b9dc19cc?w=1000&q=70&auto=format&fit=crop',
    private: 'https://images.unsplash.com/photo-1520975922284-9bcd51f2b1c3?w=1000&q=70&auto=format&fit=crop',
  };

  useEffect(() => {
    if (!services.length || isHovered) return;
    const interval = setInterval(() => {
      const idx = services.findIndex(s => s.slug === selected);
      const next = services[(idx + 1) % services.length];
      setSelected(next.slug);
    }, 4000);
    return () => clearInterval(interval);
  }, [selected, services, isHovered]);

  return (
    <section id="services" className="relative py-24 bg-background overflow-hidden">
      {/* Background image based on selected service */}
      <div className="absolute inset-0 z-0">
        <img
          key={selectedService.slug}
          src={selectedService.image}
          alt={selectedService.title}
          className="absolute inset-0 h-full w-full object-cover animate-fade-in"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement;
            const current = el.getAttribute('data-fallback');
            if (!current) {
              el.src = backupImageBySlug[selectedService.slug] || '/placeholder.svg';
              el.setAttribute('data-fallback', '1');
            } else {
              el.src = '/placeholder.svg';
            }
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/80" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">
              {t('خدماتنا', 'Our Services')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t(
              'نقدم مجموعة متنوعة من خدمات النقل لتلبية جميع احتياجاتكم',
              'We offer a diverse range of transportation services to meet all your needs'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-1 space-y-3 md:space-y-4">
            {services.map((s, i) => (
              <button
                key={s.slug}
                onClick={() => setSelected(s.slug)}
                className={`w-full flex items-center gap-3 md:gap-4 rounded-xl md:rounded-2xl border p-3 md:p-5 text-left transition-all duration-300 ${selected === s.slug ? 'border-primary shadow-glow bg-card translate-x-1' : 'border-border bg-card/60 hover:bg-card hover:translate-x-0.5'}`}
                style={{ animationDelay: `${i * 70}ms` }}
                aria-pressed={selected === s.slug}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-16 h-12 md:w-24 md:h-16 object-cover rounded-lg"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    const current = el.getAttribute('data-fallback');
                    if (!current) {
                      el.src = backupImageBySlug[s.slug] || '/placeholder.svg';
                      el.setAttribute('data-fallback', '1');
                    } else {
                      el.src = '/placeholder.svg';
                    }
                  }}
                />
                <div className="flex-1">
                  <div className="text-sm md:text-lg font-semibold text-foreground line-clamp-2">{s.title}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div
              className="rounded-2xl overflow-hidden border border-border bg-card shadow-elegant"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div key={selectedService.slug} className="animate-fade-in-up">
                <div className="relative h-56 md:h-96 w-full">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement;
                      const current = el.getAttribute('data-fallback');
                      if (!current) {
                        el.src = backupImageBySlug[selectedService.slug] || '/placeholder.svg';
                        el.setAttribute('data-fallback', '1');
                      } else {
                        el.src = '/placeholder.svg';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                    <h3 className="text-xl md:text-3xl font-bold text-foreground">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5 md:p-8">
                  <p className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-5">
                    {selectedService.desc}
                  </p>
                  <div className="flex justify-start">
                    <button
                      onClick={() => navigate(`/services/${selectedService.slug}`)}
                      className="inline-flex items-center justify-center px-4 md:px-5 py-2 md:py-2.5 text-sm md:text-base rounded-md bg-primary text-primary-foreground shadow-glow hover:bg-primary/90"
                    >
                      {t('تفاصيل الخدمة', 'View service')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
