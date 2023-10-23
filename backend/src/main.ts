import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    Logger.log("Started listening on port: " + process.env["BACKEND_PORT"]);
    await app.listen(process.env["BACKEND_PORT"]);
}
bootstrap();
