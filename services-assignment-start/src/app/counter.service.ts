import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
    activeUsers: number = 0;
    inactiveUsers: number = 0;

    logActiveUser() {
        this.activeUsers+=1;
        this.inactiveUsers-=1;
        this.writeToConsole();
    }

    logInactiveUser() {
        this.inactiveUsers +=1;
        this.activeUsers -= 1;
        this.writeToConsole();
    }   

    setActiveInactiveUsers(activeUserCount: number, inactiveUserCount: number) {
        this.activeUsers = activeUserCount;
        this.inactiveUsers = inactiveUserCount;
    }

    writeToConsole() {
        console.log("Active users: " + this.activeUsers + ", Inactive users: " + this.inactiveUsers);
    }
}