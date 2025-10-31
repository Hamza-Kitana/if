import { useLanguage } from '@/contexts/LanguageContext';
import { Eye, Target } from 'lucide-react';

const VisionMission = () => {
  const { t } = useLanguage();

  return (
    <section id="vision" className="py-24 bg-background relative overflow-hidden">
      {/* Animated Background with Icons */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <style>{`
          @keyframes moveAround {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(50px, -40px); }
            50% { transform: translate(-25px, 50px); }
            75% { transform: translate(40px, 25px); }
          }
          @keyframes moveAroundAlt {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(-40px, 50px); }
            50% { transform: translate(50px, -25px); }
            75% { transform: translate(-50px, -40px); }
          }
          @media (min-width: 768px) {
            @keyframes moveAround {
              0%, 100% { transform: translate(0, 0); }
              25% { transform: translate(100px, -80px); }
              50% { transform: translate(-50px, 100px); }
              75% { transform: translate(80px, 50px); }
            }
            @keyframes moveAroundAlt {
              0%, 100% { transform: translate(0, 0); }
              25% { transform: translate(-80px, 100px); }
              50% { transform: translate(100px, -50px); }
              75% { transform: translate(-100px, -80px); }
            }
          }
        `}</style>
        
        {/* Animated Eye Icons */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`eye-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `${i % 2 === 0 ? 'moveAround' : 'moveAroundAlt'} ${12 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <Eye className="w-8 h-8 md:w-16 md:h-16 text-primary" />
          </div>
        ))}
        
        {/* Animated Target Icons */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`target-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `${i % 2 === 0 ? 'moveAroundAlt' : 'moveAround'} ${12 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <Target className="w-8 h-8 md:w-16 md:h-16 text-accent" />
          </div>
        ))}
        
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-in-right" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-slide-in-left" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">
              {t('رؤيتنا ورسالتنا', 'Our Vision & Mission')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t(
              'نحو مستقبل أفضل في خدمات النقل',
              'Towards a better future in transportation services'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
          <div className="group animate-slide-in-right">
            <div className="bg-card rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02] border border-border h-full overflow-hidden">
              <div className="relative h-48 md:h-56 w-full">
                <img
                  src="/belal/IMG-20251030-WA0005.jpg"
                  alt={t('صورة الرؤية', 'Vision image')}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-5 md:p-12">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:animate-float">
                  <Eye className="w-6 h-6 md:w-10 md:h-10 text-primary" />
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-foreground">
                  {t('رؤيتنا', 'Our Vision')}
                </h3>
              </div>
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-3 md:mb-4">
                {t(
                  'أن نكون الشركة الأولى في النقل وتأجير الباصات من حيث الجودة والموثوقية في الأردن.',
                  'To be the number one company in transportation and bus rental in terms of quality and reliability in Jordan.'
                )}
              </p>
              <ul className="text-muted-foreground space-y-2 text-sm md:text-lg">
                <li className="flex items-start gap-2"><span className="mt-1.5 md:mt-2 inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary flex-shrink-0" />{t('ريادة في الابتكار والخدمات الذكية.', 'Leadership in innovation and smart services.')}</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 md:mt-2 inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary flex-shrink-0" />{t('تجربة عميل استثنائية ومستدامة.', 'Exceptional, sustainable customer experience.')}</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 md:mt-2 inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary flex-shrink-0" />{t('بنية تشغيلية عالية الاعتمادية.', 'Highly reliable operating backbone.')}</li>
              </ul>
              </div>
            </div>
          </div>

          <div className="group animate-slide-in-left">
            <div className="bg-card rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02] border border-border h-full overflow-hidden">
              <div className="relative h-48 md:h-56 w-full">
                <img
                  src="/belal/IMG-20251030-WA0001.jpg"
                  alt={t('صورة الرسالة', 'Mission image')}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-5 md:p-12">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-accent/10 flex items-center justify-center group-hover:animate-float">
                  <Target className="w-6 h-6 md:w-10 md:h-10 text-accent" />
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-foreground">
                  {t('رسالتنا', 'Our Mission')}
                </h3>
              </div>
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-3 md:mb-4">
                {t(
                  'تقديم حلول نقل متكاملة وآمنة تلبي احتياجات الشركات والرحلات الخاصة بأعلى معايير الجودة والاحترافية.',
                  'To provide comprehensive and safe transportation solutions that meet the needs of companies and private trips with the highest standards of quality and professionalism.'
                )}
              </p>
              <ul className="text-muted-foreground space-y-2 text-sm md:text-lg">
                <li className="flex items-start gap-2"><span className="mt-1.5 md:mt-2 inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent flex-shrink-0" />{t('التزام بالمواعيد وخطط تشغيل واضحة.', 'On‑time commitment with clear operating plans.')}</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 md:mt-2 inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent flex-shrink-0" />{t('سلامة وراحة الركاب أولوية.', 'Passenger safety and comfort first.')}</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 md:mt-2 inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent flex-shrink-0" />{t('تحسين مستمر وقياس للجودة.', 'Continuous improvement and quality measurement.')}</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
