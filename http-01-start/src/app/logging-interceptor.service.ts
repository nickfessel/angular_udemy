import { HttpHandler, HttpInterceptor, HttpRequest, HttpEventType } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

@Injectable()
export class LoggingInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {       
          console.log('Outgoing request');
            console.log(req.url);
        return next.handle(req).pipe(tap(event => { 
            if (event.type === HttpEventType.Response) {
                console.log('Incoming response');
                console.log(event.body);
            }

        }));

     
    }
}