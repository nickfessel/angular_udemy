import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map, catchError, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    // send post request to server
    // Send Http request

    const postData: Post = { title: title, content: content };

    this.http
      .post<{ name: string }>(
        "*REDACTED*",
        postData,
        { observe: "response" }
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append("print", "pretty");
    searchParams = searchParams.append("custom", "key");

    return this.http
      .get<{ [key: string]: Post }>(
        "*REDACTED*",
        {
          headers: new HttpHeaders({ "Custom-Header": "Hello" }),
          params: searchParams,
          responseType: "json"
        }
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      "*REDACTED*",
      {
        observe: "events",
        responseType: "text"
      }
    ).pipe(tap(event => {console.log(event);
        if (event.type === HttpEventType.Sent) {
          console.log('sent');
        }
        if(event.type === HttpEventType.Response) {
          console.log(event.body);
        }
    }));
  }
}
