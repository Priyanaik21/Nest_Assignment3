"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logging_interceptor_1 = require("./interceptors/logging.interceptor");
const logger_middleware_1 = require("./logger.middleware");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor());
    app.use((req, res, next) => new logger_middleware_1.LoggerMiddleware().use(req, res, next));
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map