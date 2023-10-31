import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";

async function bootstrap() {
    // Check if required environment variables are assigned
    const required_envs = [
        "PORT",
        "DB_HOST",
        "DB_PORT",
        "DB_NAME",
        "DB_USERNAME",
        "DB_PASSWORD"
    ];
    let has_undefined = false;

    for (const e of required_envs) {
        if (process.env[e] == undefined) {
            Logger.error("Undefined enviroment variable: " + e);
            has_undefined = true;
        }
    }
    if (has_undefined) return;

    const app = await NestFactory.create(AppModule);
    Logger.log("Started listening on port: " + process.env.PORT);
    await app.listen(process.env.PORT);
}

bootstrap();
