import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Target, TrendingUp } from 'lucide-react';

const AboutFounder = () => {
  const { t } = useLanguage();

  // Removed decorative/parallax background for a clean gray background

  return (
    <section id="about" className="allow-motion relative py-24 bg-gray-100 dark:bg-gray-900 overflow-hidden">
      {/* Animated rain of soft circular particles */}
      <RainParticles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">
                {t('من نحن', 'About Us')}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('قصة نجاح بُنيت على الثقة والجودة', 'A success story built on trust and quality')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-right">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-elegant">
                  <img
                    src="/kader.png"
                    alt={t('خضر البريجي', 'Khader Al-Breiji')}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  {/* bottom darken gradient */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white/90 to-transparent" />
                  {/* bottom-centered overlay text inside image */}
                  <div className="absolute inset-x-0 bottom-4 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-1 text-[#8B2323]">
                      {t('خضر البريجي', 'Khader Al-Breiji')}
                    </h3>
                    <p className="text-sm md:text-base text-[#8B2323]">
                      {t('مؤسس الشركة', 'Company Founder')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-slide-in-left">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-foreground leading-relaxed">
                  {t(
                    'رؤية خضر البريجي بدأت من شغفٍ حقيقي لتقديم نقلٍ مريح وآمن يُراعي أدق التفاصيل لكل عميل. على مدار السنوات، تطورت الرؤية إلى منظومة عمل متكاملة تُركز على الجودة والانضباط وخدمة ما بعد الرحلة، واليوم تُعد شركة الأسطول الدولي من أبرز شركات النقل في الأردن بفضل أسطولٍ حديث وفريقٍ محترف ومعايير تشغيل واضحة.',
                    "Khader Al-Breiji's vision began with a genuine passion to deliver comfortable and safe transportation that cares about every detail for each client. Over the years, this vision evolved into an integrated operating model focused on quality, punctuality, and post‑trip care. Today, International Fleet stands among Jordan's leading transportation companies, backed by a modern fleet, a professional team, and clear operational standards."
                  )}
                </p>
                <ul className="mt-4 list-disc ps-6 text-muted-foreground space-y-1">
                  <li>
                    {t('سلامة أولاً: التزام صارم بإجراءات السلامة والصيانة الدورية.', 'Safety first: strict adherence to safety procedures and scheduled maintenance.')}
                  </li>
                  <li>
                    {t('الالتزام بالمواعيد: دقة في الانطلاق والوصول لإدارة وقت عملائنا.', 'On‑time commitment: precise departures and arrivals to respect client time.')}
                  </li>
                  <li>
                    {t('أسطول حديث: مركبات مريحة ومجهزة بتقنيات محدثة.', 'Modern fleet: comfortable vehicles equipped with up‑to‑date amenities.')}
                  </li>
                  <li>
                    {t('خدمة عملاء مركّزة: متابعة قبل الرحلة وخلالها وبعدها.', 'Client‑centric service: attentive support before, during, and after trips.')}
                  </li>
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-card p-4 md:p-6 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                  <Target className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
                  <h4 className="font-bold text-lg md:text-xl mb-2">
                    {t('خبرة واسعة', 'Extensive Experience')}
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {t('سنوات من التميز في خدمات النقل', 'Years of excellence in transportation services')}
                  </p>
                </div>

                <div className="bg-card p-4 md:p-6 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                  <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
                  <h4 className="font-bold text-lg md:text-xl mb-2">
                    {t('نمو مستمر', 'Continuous Growth')}
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {t('توسع دائم لتلبية احتياجات العملاء', 'Constant expansion to meet client needs')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;

function RainParticles() {
  // Always animate rain regardless of reduced motion preference, per request

  const SmallSet = Array.from({ length: 150 });
  const LargeSet = Array.from({ length: 120 });

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {SmallSet.map((_, i) => {
        const left = Math.random() * 100;
        const delay = (Math.random() * 4).toFixed(2);
        const dur = (3.2 + Math.random() * 3.6).toFixed(2);
        const size = Math.random() > 0.7 ? 12 : 9; // slightly bigger for visibility
        const opacity = Math.random() > 0.5 ? 0.38 : 0.32;
        return (
          <span
            key={`ball-s-${i}`}
            className={`absolute rounded-full`}
            style={{
              left: `${left}%`,
              top: '-10%',
              width: size,
              height: size,
              background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.98), rgba(139,35,35,${Math.max(opacity - 0.05, 0.25)}))`,
              boxShadow: '0 6px 18px rgba(0,0,0,0.14)',
              border: '1px solid rgba(139,35,35,0.35)',
              filter: 'blur(0.15px)',
              mixBlendMode: 'normal',
              animation: `rainFall ${dur}s linear infinite`,
              animationDelay: `${delay}s`,
              willChange: 'transform, opacity',
            }}
          />
        );
      })}
      {LargeSet.map((_, i) => {
        const left = Math.random() * 100;
        const delay = (Math.random() * 5).toFixed(2);
        const dur = (3.8 + Math.random() * 4.2).toFixed(2);
        const size = Math.random() > 0.8 ? 16 : 11; // bigger for more visibility
        const opacity = Math.random() > 0.5 ? 0.42 : 0.36;
        return (
          <span
            key={`ball-l-${i}`}
            className={`hidden md:block absolute rounded-full`}
            style={{
              left: `${left}%`,
              top: '-10%',
              width: size,
              height: size,
              background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.98), rgba(139,35,35,${Math.max(opacity - 0.04, 0.28)}))`,
              boxShadow: '0 8px 20px rgba(0,0,0,0.16)',
              border: '1px solid rgba(139,35,35,0.38)',
              filter: 'blur(0.2px)',
              mixBlendMode: 'normal',
              animation: `rainFall ${dur}s linear infinite`,
              animationDelay: `${delay}s`,
              willChange: 'transform, opacity',
            }}
          />
        );
      })}

      {/* Always-visible sample particles for assurance */}
      <span
        className="absolute rounded-full"
        style={{ left: '12%', top: '10%', width: 18, height: 18, background: 'rgba(139,35,35,0.35)', boxShadow: '0 8px 20px rgba(0,0,0,0.15)', border: '1px solid rgba(139,35,35,0.3)' }}
      />
      <span
        className="absolute rounded-full hidden sm:block"
        style={{ right: '16%', top: '22%', width: 26, height: 26, background: 'rgba(139,35,35,0.28)', boxShadow: '0 10px 24px rgba(0,0,0,0.18)', border: '1px solid rgba(139,35,35,0.28)' }}
      />
    </div>
  );
}
