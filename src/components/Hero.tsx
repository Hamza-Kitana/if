import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image + subtle animated shapes */}
      <div className="absolute inset-0 z-0">
        <img
          src="/buss.png"
          alt="Buses background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
        />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center pt-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <div className="inline-block">
            <div className="text-sm md:text-base text-primary font-semibold mb-4 animate-fade-in">
              {t('مرحباً بكم في', 'Welcome to')}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            <span className="text-gradient">
              {t('شركة الأسطول الدولي', 'International Fleet')}
            </span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">
              {t('لتأجير الباصات', 'Bus Rental Company')}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t(
              'الراحة في الرحلة تبدأ معنا',
              'Quality Transport, Every Mile'
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-lg px-8 py-6"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('استكشف خدماتنا', 'Explore Our Services')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 text-lg px-8 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('تواصل معنا', 'Contact Us')}
            </Button>
          </div>

          <div className="pt-16 animate-bounce">
            <ArrowDown className="w-8 h-8 mx-auto text-primary" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />

      {/* Bus image enters from right and settles on the left */}
      <div className="pointer-events-none absolute bottom-16 md:bottom-20 left-4 z-0 animate-enter-rtl">
        <img
          src="/bus.png"
          alt="Bus"
          className="w-[26rem] md:w-[36rem] lg:w-[48rem] h-auto drop-shadow"
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default Hero;
