#ifndef EVENTQUEUE_H
#define EVENTQUEUE_H


#include <bits/stdc++.h>
#include "statusQueue.h"
using namespace std;


/*struct Point{
    int x;
    int y;
    int type;
};

struct Line{
    int index;
    Point upper;
    Point lower;
};*/

struct eventQueue{
    Point eventPoint;
    eventQueue* left;
    eventQueue* right;
    vector<Line> U;
    vector<Line> C;
    vector<Line> L;
    int height;
};

class event{
    private:
    public:

    int max(int a, int b){
        return (a>b)?a:b;
    }

    int height(eventQueue* node){
        if(node == NULL)
            return 0;
        return node->height;
    }
    
    eventQueue *createeventQueueNode(Point eventPoint, int teller, Line l1) {
        eventQueue *newnode = new eventQueue();
        newnode->eventPoint = eventPoint;
        if(teller == 1)
            newnode->U.push_back(l1);
        else if(teller == 2)
            newnode->L.push_back(l1);
        else
            newnode->C.push_back(l1);
        newnode->height = 1;
        newnode->left = NULL;
        newnode->right = NULL;
        return newnode;
    }

   

    

    eventQueue *rightRotate(eventQueue *y){
        eventQueue *x = y->left;
        eventQueue *z = x->right;
        x->right = y;
        y->left = z;
        if(height(y->left)>(height(y->right)+1))
            y->height=height(y->left);
        else
            y->height=height(y->right)+1;
        if(height(x->left)>(height(x->right)+1))
            x->height=height(x->left);
        else
            x->height=height(x->right)+1;
        return x;
    }

    eventQueue *leftRotate(eventQueue *y){
        eventQueue *x = y->right;
        eventQueue *z = x->left;
        x->left = y;
        y->right = z;
        if(height(y->left)>(height(y->right)+1))
            y->height=height(y->left);
        else
            y->height=height(y->right)+1;
        if(height(x->left)>(height(x->right)+1))
            x->height=height(x->left);
        else
            x->height=height(x->right)+1;
        return x;
    }

    int heightDiff(eventQueue* node){
        if(node == NULL)
            return 0;
        return height(node->left) - height(node->right);
    }

    eventQueue* inserti(eventQueue* root, Point eventPoint, Line l1, int teller)
    {
        if (root == NULL){
            //cout<<"Creating Node"<<endl;
            return createeventQueueNode(eventPoint, teller, l1);
        }

        //how to insert here?
        if(eventPoint.y<root->eventPoint.y){
            //cout<<"Moving Left"<<endl;
            root->left=inserti(root->left,eventPoint, l1, teller);
        }
        else if(eventPoint.y>root->eventPoint.y){
            //cout<<"Moving Right"<<endl;
            root->right=inserti(root->right, eventPoint, l1, teller);
        }
        else if(eventPoint.x>root->eventPoint.x){
            //cout<<"Moving Left"<<endl;
            root->left=inserti(root->left, eventPoint, l1, teller);
        }
        else if(eventPoint.x<root->eventPoint.x){
            //cout<<"Moving Right"<<endl;
            root->right=inserti(root->right, eventPoint, l1, teller);
        }
        else {
            int checkex = 1;
            if(teller == 1){
                //int checkex = 1;
                for(auto it=root->U.begin(); it!=root->U.end(); it++){
                    if((*it).upper.x == l1.upper.x && (*it).upper.y == l1.upper.y && (*it).lower.x == l1.lower.x && (*it).lower.y == l1.lower.y)
                        checkex = 0;
                }
                if(checkex){
                    root->U.push_back(l1);
                }
            }
            else if(teller == 2){
                //int checkex = 1;
                for(auto it=root->L.begin(); it!=root->L.end(); it++){
                    if((*it).upper.x == l1.upper.x && (*it).upper.y == l1.upper.y && (*it).lower.x == l1.lower.x && (*it).lower.y == l1.lower.y)
                        checkex = 0;
                }
                if(checkex){
                    root->L.push_back(l1);
                }
            }
            else{
                //int checkex = 1;
                for(auto it=root->C.begin(); it!=root->C.end(); it++){
                    if((*it).upper.x == l1.upper.x && (*it).upper.y == l1.upper.y && (*it).lower.x == l1.lower.x && (*it).lower.y == l1.lower.y)
                        checkex = 0;
                }
                if(checkex){
                    root->C.push_back(l1);
                }
            }
            if(checkex == 0)
                return root;
        }

        root->height =(height(root->left) > height(root->right))? height(root->left) + 1 : height(root->right) + 1 ;
        //cout<<"Started Balancing - "<<endl;
        int diff = heightDiff(root);
        //cout<<diff<<endl;
        if (diff > 1 && (eventPoint.y < root->left->eventPoint.y || (eventPoint.y == root->left->eventPoint.y && eventPoint.x > root->left->eventPoint.x)))
            return rightRotate(root);
        if (diff < -1 && (eventPoint.y > root->right->eventPoint.y || (eventPoint.y == root->right->eventPoint.y && eventPoint.x<root->right->eventPoint.x)))
            return leftRotate(root);
        if (diff > 1 && (eventPoint.y > root->left->eventPoint.y || (eventPoint.y == root->eventPoint.y && eventPoint.x<root->left->eventPoint.x))){
            root->left = leftRotate(root->left);
            return rightRotate(root);
        }
        if (diff < -1 && (eventPoint.y < root->right->eventPoint.y || (eventPoint.y == root->right->eventPoint.y && eventPoint.x > root->right->eventPoint.x))) {
            //cout<<"Case-4"<<endl;
            root->right = rightRotate(root->right);
            return leftRotate(root);
        }
        //cout<<"Balancing Completed"<<endl;
        return root;
    }

    /*void preOrder(eventQueue *root)
    {
        if(root != NULL)
        {
            preOrder(root->left);
            cout << root->eventPoint.x << " " <<root->eventPoint.y<<"  ";
            preOrder(root->right);
        }
    }*/

    eventQueue * minValueEvent(eventQueue* event)
    {
        eventQueue* current = event;
        while (current->left != NULL)
            current = current->left;
        return current;
    }

    int getBalance(eventQueue *N)
    {
        if (N == NULL)
            return 0;
        return height(N->left) - height(N->right);
    }

    eventQueue* deleteEvent(eventQueue* root){
        if (root == NULL)
            return root;
        if(root->right!=NULL)
            root->right = deleteEvent(root->right);
        else{
            if( (root->left == NULL)||(root->right == NULL)){
                eventQueue *temp = root->left ? root->left : root->right;
                if (temp == NULL){
                    temp = root;
                    root = NULL;
                }
                else
                *root = *temp;
                free(temp);
            }else{
                eventQueue* temp = minValueEvent(root->right);
                root->eventPoint = temp->eventPoint;
                root->U = temp->U;
                root->L = temp->L;
                root->C = temp->C;
                root->right = deleteEvent(root->right);
            }
        }
        if (root == NULL)
        return root;
        root->height = 1 + max(height(root->left),height(root->right));
        int balance = getBalance(root);
        if (balance > 1 && getBalance(root->left) >= 0)
            return rightRotate(root);
        if (balance > 1 && getBalance(root->left) < 0){
            root->left = leftRotate(root->left);
            return rightRotate(root);
        }
        if (balance < -1 && getBalance(root->right) <= 0)
            return leftRotate(root);
        if (balance < -1 && getBalance(root->right) > 0){
            root->right = rightRotate(root->right);
            return leftRotate(root);
        }

        return root;
    }

    eventQueue* deleteNode(eventQueue* root, double x, double y){
        if(root == NULL)
            return root;
        if(y < root->eventPoint.y)
            root->left = deleteNode(root->left, x , y);
        else if(y > root->eventPoint.y)
            root->right = deleteNode(root->right, x, y);
        else if(x > root->eventPoint.x)
            root->left = deleteNode(root->left, x, y);
        else if(x < root->eventPoint.x)
            root->right = deleteNode(root->right, x, y);
        else{
            if((root->left == NULL) || (root->right == NULL)){
                eventQueue* temp = root->left ? root->left:root->right;
                if(temp == NULL){
                    temp = root;
                    root = NULL;
                }else
                    *root = *temp;
                free(temp);
            }else{
                eventQueue* temp = minValueEvent(root->right);
                root->eventPoint.x = temp->eventPoint.x;
                root->eventPoint.y = temp->eventPoint.y;
                root->U = temp->U;
                root->L = temp->L;
                root->C = temp->C;
                root->right = deleteNode(root->right, temp->eventPoint.x, temp->eventPoint.y);
            }
        }
        if(root == NULL)
            return root;
        root->height = 1 + max(height(root->left), height(root->right));
        int balance = heightDiff(root);
        if(balance > 1 && heightDiff(root->left) >= 0)
            return rightRotate(root);
        if(balance > 1 && heightDiff(root->left) < 0){
            root->left = leftRotate(root->left);
            return rightRotate(root);
        }
        if(balance < -1 && heightDiff(root->right) <= 0)
            return leftRotate(root);
        if(balance < -1 && heightDiff(root->right) > 0){
            root->right = rightRotate(root->right);
            return leftRotate(root);
        }
        return root;
    }

    eventQueue getNextEvent(eventQueue *root){
        eventQueue *temp = root;
        while(temp->right!=NULL){
            temp = temp->right;
        }
        eventQueue e = *temp;
        return e;
    }


    eventQueue* maxValueEvent(eventQueue* node){
        eventQueue* current = node;
        if(current == NULL)
            return current;
        while(current->right != NULL)
            current = current->right;
        return current;
    }
    
    void preOrder(eventQueue* root){
        if(root!=NULL){
            cout<<root->eventPoint.x<<" "<<root->eventPoint.y<<" "<<root->height<<endl;
            for(auto it = root->U.begin(); it!=root->U.end(); it++)
                cout<<(*it).upper.x<<" "<<(*it).upper.y<<" "<<(*it).lower.x<<" "<<(*it).lower.y<<endl;
            for(auto it = root->L.begin(); it!=root->L.end(); it++)
                cout<<(*it).upper.x<<" "<<(*it).upper.y<<" "<<(*it).lower.x<<" "<<(*it).lower.y<<endl;
            preOrder(root->left);
            preOrder(root->right);
        }
    }
};

#endif