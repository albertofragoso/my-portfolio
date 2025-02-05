"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <Image
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&h=200"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8 border-4 border-primary"
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
              Juan Pérez
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Desarrollador Full Stack
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project, index) => (
              <motion.div
                key={project}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden group">
                  <div className="overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop`}
                      alt={`Project ${project}`}
                      width={500}
                      height={300}
                      className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Proyecto {project}</h3>
                    <p className="text-muted-foreground mb-4">
                      Una breve descripción del proyecto y las tecnologías utilizadas.
                    </p>
                    <Button variant="outline" className="w-full">
                      Ver Proyecto <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Habilidades
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Tailwind CSS",
              "PostgreSQL",
              "Docker",
              "AWS",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:border-primary transition-colors">
                  <p className="font-medium">{skill}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              ¿Interesado en trabajar juntos?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Estoy siempre abierto a discutir nuevos proyectos y oportunidades de colaboración.
            </p>
            <Button size="lg">
              Contáctame <Mail className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container px-4 mx-auto text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Juan Pérez. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}