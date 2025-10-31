import { useLanguage } from '@/contexts/LanguageContext';
import { Bus, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border pt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-glow">
                <Bus className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {t('الأسطول الدولي', 'International Fleet')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('لتأجير الباصات', 'Bus Rental')}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('نوفّر حلول نقل احترافية للشركات والرحلات الخاصة داخل الأردن وخارجه بمعايير سلامة عالية وتجربة عميل مميزة.',
                 'We provide professional transport solutions for companies and private trips in and out of Jordan with high safety standards and great customer experience.')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('روابط سريعة', 'Quick Links')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a className="hover:text-primary transition-colors" href="#home">{t('الرئيسية', 'Home')}</a></li>
              <li><a className="hover:text-primary transition-colors" href="#about">{t('من نحن', 'About')}</a></li>
              <li><a className="hover:text-primary transition-colors" href="#services">{t('خدماتنا', 'Services')}</a></li>
              <li><a className="hover:text-primary transition-colors" href="#features">{t('مميزاتنا', 'Features')}</a></li>
              <li><a className="hover:text-primary transition-colors" href="#vision">{t('رؤيتنا ورسالتنا', 'Vision & Mission')}</a></li>
              <li><a className="hover:text-primary transition-colors" href="#contact">{t('تواصل معنا', 'Contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('خدماتنا', 'Our Services')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a className="hover:text-primary transition-colors" href="/services/corporate">{t('تأجير باصات للشركات', 'Corporate Rental')}</a></li>
              <li><a className="hover:text-primary transition-colors" href="/services/domestic">{t('رحلات داخلية', 'Domestic Trips')}</a></li>
              <li><a className="hover:text-primary transition-colors" href="/services/international">{t('رحلات دولية', 'International Trips')}</a></li>
              <li><a className="hover:text-primary transition-colors" href="/services/private">{t('باصات خاصة', 'Private Rental')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('تواصل', 'Contact')}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /><a href="tel:+962780989098" className="hover:text-primary">+962 78 098 9098</a></li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /><a href="mailto:ifbr.busrental@gmail.com" className="hover:text-primary">ifbr.busrental@gmail.com</a></li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <a 
                  href="https://www.google.com/maps/place/%D8%A7%D9%84%D8%A7%D8%B3%D8%B7%D9%88%D9%84+%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A+%D9%84%D8%AA%D8%A3%D8%AC%D9%8A%D8%B1+%D8%A7%D9%84%D8%AD%D8%A7%D9%81%D9%84%D8%A7%D8%AA%E2%80%AD/@32.0155347,36.0774483,935m/data=!3m2!1e3!4b1!4m6!3m5!1s0x151b65701e2e1073:0x9df0787fea6d3864!8m2!3d32.0155347!4d36.0774483!16s%2Fg%2F11h_d77_f8?hl=en&entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  {t('الزرقاء، الأردن', 'Zarqa, Jordan')}
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://wa.me/962780989098"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground shadow-glow hover:bg-primary/90"
              >
                {t('احجز عبر واتساب', 'Book via WhatsApp')} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border py-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {t('الأسطول الدولي لتأجير الباصات', 'International Fleet Bus Rental')}. {t('جميع الحقوق محفوظة', 'All rights reserved')}.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            {t('تم التطوير بواسطة', 'Developed by')}{' '}
            <a
              href="https://hamza-kitana.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              Hamza Kitana
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
