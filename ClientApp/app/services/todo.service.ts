import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Todo } from '../Todo';

import { I2do } from '../components/shared/interfaces'

@Injectable()
export class TodoService {

    testdata: string[];
    private _todostUrl = './datajs/todos.json';
    baseUrl: string = '/api/todo';


    constructor(private _http:Http)  { }

    
     getTodos()
     {
        // return this._http.get(this._todostUrl);
         return this._http.get('/api/todo').map(res => res.json());
        
     }

    
     saveTodo(todo: any) {
         var headers = new Headers();
         headers.append('Content-Type', 'application/json');
         return this._http.post('/api/todo', JSON.stringify(todo), { headers: headers })
             .map(res => res.json());
     }



     updateTodo(todo: any) {
         var headers = new Headers();
         headers.append('Content-Type', 'application/json');
         return this._http.put('/api/todo/' + todo.id, JSON.stringify(todo), { headers: headers })
             .map(res => res.json());
     }



     //update2do(todo: I2do) : Observable<I2do> {
     //    return this._http.put(this.baseUrl + '/' + todo.id, todo)
     //        .map((res: Response) => {
     //            const data = res.json();
     //            console.log('updatetodo status: ' + data);
     //            return data.
     //        })
     //        .catch(this.handleError);
     //}



     //updateTodoText(event, todo) {

     //    if (event.which === 13) {


     //    }

     //}




     deleteTodo(id: any) {
         return this._http.delete('/api/todo/' + id)
             .map(res => res.json());
     }



     private handleError(error: any) {
         console.error('server error:', error);
         if (error instanceof Response) {
             let errMessage = '';
             try {
                 
             } catch (err) {
                 errMessage = error.statusText;
             }
             return Observable.throw(errMessage);
             // Use the following instead if using lite-server
             //return Observable.throw(err.text() || 'backend server error');
         }
         return Observable.throw(error || 'ASP.NET Core server error john');
     }


}

