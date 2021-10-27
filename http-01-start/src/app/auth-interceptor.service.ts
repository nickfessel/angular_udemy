import { HttpHandler, HttpInterceptor, HttpRequest, HttpEventType } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {       
         const modifiedRequest = req.clone({
            headers: req.headers.append("Auth", "xyz")            
         });
         console.log(req.headers);
       return next.handle(modifiedRequest);
    }
}