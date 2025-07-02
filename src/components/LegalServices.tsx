import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "FileText",
    title: "Договорное право",
    description:
      "Составление, анализ и сопровождение договоров любой сложности",
  },
  {
    icon: "Home",
    title: "Недвижимость",
    description: "Сделки с недвижимостью, оформление права собственности",
  },
  {
    icon: "Users",
    title: "Семейное право",
    description: "Развод, раздел имущества, вопросы опеки и алиментов",
  },
  {
    icon: "Building",
    title: "Корпоративное право",
    description: "Регистрация бизнеса, корпоративные споры, реорганизация",
  },
  {
    icon: "Scale",
    title: "Судебное представительство",
    description: "Защита интересов в судах всех инстанций",
  },
  {
    icon: "FileWarning",
    title: "Банкротство",
    description: "Процедуры банкротства физических и юридических лиц",
  },
];

const LegalServices = () => {
  return (
    <section className="py-16 bg-legal-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold text-legal-primary mb-4">
            Наши услуги
          </h2>
          <p className="font-body text-lg text-legal-text max-w-2xl mx-auto">
            Предоставляем полный спектр юридических услуг для физических и
            юридических лиц
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-legal-secondary/10 p-3 rounded-lg mr-4">
                    <Icon
                      name={service.icon as any}
                      size={24}
                      className="text-legal-secondary"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-legal-primary">
                    {service.title}
                  </h3>
                </div>
                <p className="font-body text-legal-text leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalServices;
