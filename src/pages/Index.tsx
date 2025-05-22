import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Index = () => {
  const skills = [
    { name: "React/TypeScript", level: 95 },
    { name: "Node.js", level: 88 },
    { name: "Python", level: 85 },
    { name: "UI/UX Design", level: 78 },
    { name: "DevOps", level: 72 },
  ];

  const experience = [
    {
      year: "2023-н.в.",
      company: "TechCorp",
      position: "Senior Frontend Developer",
      description:
        "Разработка SPA приложений, менторство команды, архитектурные решения",
    },
    {
      year: "2021-2023",
      company: "StartupHub",
      position: "Fullstack Developer",
      description:
        "Создание MVP продуктов, интеграция API, работа с микросервисами",
    },
    {
      year: "2019-2021",
      company: "WebStudio",
      position: "Frontend Developer",
      description:
        "Вёрстка адаптивных интерфейсов, оптимизация производительности",
    },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Полнофункциональная платформа электронной коммерции с React и Node.js",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Интерактивная панель аналитики с визуализацией данных в реальном времени",
      tags: ["Vue.js", "D3.js", "WebSocket", "Redis"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    },
    {
      title: "Mobile Banking App",
      description:
        "Мобильное приложение для банковских операций с биометрической аутентификацией",
      tags: ["React Native", "Firebase", "Biometrics"],
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              alt="Портрет"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 font-montserrat">
            Алексей Программистов
          </h1>
          <p className="text-xl mb-6 text-purple-100 max-w-2xl mx-auto">
            Fullstack разработчик с 5+ летним опытом создания современных
            веб-приложений. Специализируюсь на React, Node.js и архитектуре
            больших систем.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge
              variant="secondary"
              className="bg-white/10 text-white border-white/20"
            >
              🚀 5+ лет опыта
            </Badge>
            <Badge
              variant="secondary"
              className="bg-white/10 text-white border-white/20"
            >
              💼 50+ проектов
            </Badge>
            <Badge
              variant="secondary"
              className="bg-white/10 text-white border-white/20"
            >
              ⭐ 4.9 рейтинг
            </Badge>
          </div>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-purple-600 hover:bg-white/90"
          >
            Связаться со мной
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 font-montserrat text-slate-800">
            Навыки и технологии
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700">
                      {skill.name}
                    </span>
                    <span className="text-purple-600 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4 text-slate-800">
                Дополнительные компетенции
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Git",
                  "Docker",
                  "AWS",
                  "MongoDB",
                  "GraphQL",
                  "Redux",
                  "Webpack",
                  "Jest",
                  "Figma",
                  "Agile",
                ].map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="bg-purple-50 border-purple-200 text-purple-700"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 font-montserrat text-slate-800">
            Опыт работы
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-purple-500 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-slate-800">
                        {exp.position}
                      </CardTitle>
                      <CardDescription className="text-purple-600 font-medium text-lg">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-purple-50 border-purple-200 text-purple-700"
                    >
                      {exp.year}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 font-montserrat text-slate-800">
            Портфолио проектов
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-purple-100 text-purple-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 font-montserrat">
            Готов к новым проектам
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Ищете надёжного разработчика для вашего проекта? Давайте обсудим
            детали!
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl mb-2">📧</div>
              <p className="font-medium">Email</p>
              <p className="text-purple-200">aleksey@example.com</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📱</div>
              <p className="font-medium">Телефон</p>
              <p className="text-purple-200">+7 (999) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">💼</div>
              <p className="font-medium">LinkedIn</p>
              <p className="text-purple-200">linkedin.com/in/aleksey</p>
            </div>
          </div>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-purple-600 hover:bg-white/90"
          >
            Написать сообщение
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
