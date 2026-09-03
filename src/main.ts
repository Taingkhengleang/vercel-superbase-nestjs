import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); // Enables cross-origin requests from frontends

  // Required to listen on assigned dynamic port in Vercel
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
