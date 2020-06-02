import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class LoggingInterseptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log("Outgoing Request to:", req.url)
        return next.handle(req)
    }
}