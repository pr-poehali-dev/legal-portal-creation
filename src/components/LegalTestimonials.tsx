import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const testimonials = [
  {
    name: "Анна Петрова",
    role: "Частный клиент",
    content:
      "Профессиональная помощь в оформлении сделки с недвижимостью. Все прошло быстро и без проблем.",
    rating: 5,
  },
  {
    name: "ООО 'ТехСтрой'",
    role: "Корпоративный клиент",
    content:
      "Отличное сопровождение корпоративных споров. Результат превзошел ожидания.",
    rating: 5,
  },
  {
    name: "Михаил Сидоров",
    role: "Частный клиент",
    content:
      "Помогли разрешить сложную семейную ситуацию. Очень благодарен за поддержку и профессионализм.",
    rating: 5,
  },
];

const LegalTestimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold text-legal-primary mb-4">
            Отзывы клиентов
          </h2>
          <p className="font-body text-lg text-legal-text max-w-2xl mx-auto">
            Более 500 довольных клиентов доверили нам решение своих правовых
            вопросов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border border-legal-light hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="font-body text-legal-text mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="bg-legal-secondary/10 p-2 rounded-full mr-3">
                    <Icon
                      name="User"
                      size={20}
                      className="text-legal-secondary"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-legal-primary">
                      {testimonial.name}
                    </h4>
                    <p className="font-body text-sm text-legal-text opacity-75">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalTestimonials;
