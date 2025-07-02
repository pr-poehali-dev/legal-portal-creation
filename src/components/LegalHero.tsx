import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const LegalHero = () => {
  return (
    <section className="bg-gradient-to-br from-legal-primary to-legal-text text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-heading text-5xl font-bold mb-6">
          Профессиональная юридическая помощь
        </h1>
        <p className="font-body text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Защищаем ваши интересы с 2010 года. Индивидуальный подход к каждому
          клиенту и высокое качество юридических услуг.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-legal-secondary hover:bg-legal-secondary/90 text-white px-8 py-3"
          >
            <Icon name="Calendar" className="mr-2" size={20} />
            Записаться на консультацию
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-legal-primary px-8 py-3"
          >
            <Icon name="Phone" className="mr-2" size={20} />
            Связаться с нами
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LegalHero;
