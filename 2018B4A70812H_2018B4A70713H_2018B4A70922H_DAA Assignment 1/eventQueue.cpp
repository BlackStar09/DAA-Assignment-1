#include <bits/stdc++.h>
#include "eventQueue.h"
using namespace std;



int main()
{
    eventQueue* root = NULL;
    event newEvent;
    cout<<"Enter 1 to push, 2 to Pop, 0 to Exit"<<endl;
    int control;
    cin>>control;
    double x, y, xs, ys, xe, ye;
    int teller;
    while(control!=0){
        if(control == 1){
            cout<<"x, y, xs, ys, xe, ye, teller"<<endl;
            cin>>x>>y>>xs>>ys>>xe>>ye>>teller;
            Line l1;
            l1.upper.x = xs;
            l1.upper.y = ys;
            l1.lower.x = xe;
            l1.lower.y = ye;
            Point p;
            p.x = x;
            p.y = y;
            root = newEvent.inserti(root, p, l1, teller);
            cout<<"Inserted"<<endl;
        }else if(control == 2){
            if(root == NULL){
                cout<<"To push - 1, To pop - 2, To Exit - 0"<<endl;
                cin>>control;
                continue;
            }
            eventQueue* pop = newEvent.maxValueEvent(root);
            cout<<"Popped point: "<<pop->eventPoint.x<<" "<<pop->eventPoint.y<<endl;
            root = newEvent.deleteNode(root, pop->eventPoint.x, pop->eventPoint.y);
        }
        if(root!=NULL)
            newEvent.preOrder(root);
        cout<<"To push - 1, To pop - 2, To Exit - 0"<<endl;
        cin>>control;
    }
    return 0;
}
