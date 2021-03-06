import { HttpServer, RequestHandler } from '@nestjs/common/interfaces';
import { ServeStaticOptions } from '@nestjs/common/interfaces/external/serve-static-options.interface';
export declare class ExpressAdapter implements HttpServer {
    private readonly instance;
    constructor(instance: any);
    use(...args: any[]): any;
    get(handler: RequestHandler): any;
    get(path: any, handler: RequestHandler): any;
    post(handler: RequestHandler): any;
    post(path: any, handler: RequestHandler): any;
    head(handler: RequestHandler): any;
    head(path: any, handler: RequestHandler): any;
    delete(handler: RequestHandler): any;
    delete(path: any, handler: RequestHandler): any;
    put(handler: RequestHandler): any;
    put(path: any, handler: RequestHandler): any;
    patch(handler: RequestHandler): any;
    patch(path: any, handler: RequestHandler): any;
    options(handler: RequestHandler): any;
    options(path: any, handler: RequestHandler): any;
    listen(port: string | number, callback?: () => void): any;
    listen(port: string | number, hostname: string, callback?: () => void): any;
    reply(response: any, body: any, statusCode: number): any;
    render(response: any, view: string, options: any): any;
    setErrorHandler(handler: Function): any;
    setNotFoundHandler(handler: Function): any;
    setHeader(response: any, name: string, value: string): any;
    getHttpServer(): any;
    getInstance(): any;
    close(): any;
    set(...args: any[]): any;
    enable(...args: any[]): any;
    disable(...args: any[]): any;
    engine(...args: any[]): any;
    useStaticAssets(path: string, options: ServeStaticOptions): any;
    setBaseViewsDir(path: string): any;
    setViewEngine(engine: string): any;
    getRequestMethod(request: any): string;
    getRequestUrl(request: any): string;
}
