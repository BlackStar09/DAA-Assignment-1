#ifndef STATUSQUEUE_H
#define STATUSQUEUE_H


#include <bits/stdc++.h>
using namespace std;


struct Point{
    int x;
    int y;
    int type;
};

struct Line{
    int index;
    Point upper;
    Point lower;
};

struct statusQueue{
    Line segment;
    statusQueue* left;
    statusQueue* right;
    int height;
};

class status{
    
    public:
    int two_insert;
    status(){
        two_insert = 1;
    }

    int height(statusQueue* node){
        if(node == NULL)
            return 0;
        return node->height;
    }

    statusQueue *createStatusQueueNode(Line segment) {
        statusQueue *newnode = new statusQueue();
        newnode->segment = segment;
        newnode->left = NULL;
        newnode->right = NULL;
        newnode->height = 1;
        return newnode;
    }


    statusQueue *rightRotate(statusQueue *y){
        statusQueue *x = y->left;
        statusQueue *z = x->right;
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

    statusQueue *leftRotate(statusQueue *y){
        statusQueue *x = y->right;
        statusQueue *z = x->left;
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

    int getBalance(statusQueue *N)
    {
        if (N == NULL)
            return 0;
        return height(N->left) - height(N->right);
    }

    int heightDiff(statusQueue* node){
        if(node == NULL)
            return 0;
        return height(node->left) - height(node->right);
    }

    int compare(Line l1, Line l2, double y){
        int x1 = (y-l1.lower.y)*((l1.lower.x-l1.upper.x)/(l1.lower.y - l1.upper.y))+l1.lower.x;
        int x2 = (y-l2.lower.y)*((l2.lower.x-l2.upper.x)/(l2.lower.y - l2.upper.y))+l2.lower.x;
        if(x1<x2)
            return 1;
        else if(x1>x2)
            return -1;
        else
            return 0;
    }

    double sloper(Line l1, double y){
        return ((y - l1.lower.y)*(l1.lower.x - l1.upper.x)/(l1.lower.y - l1.upper.y)) + l1.lower.x;
    }
    int max(int a, int b){
        int maxer = a>b?a:b;
        return maxer;
    }
    statusQueue* inserti(statusQueue* root, Line l1, double y_coor)
    {
        /*if (root == NULL)
            return createStatusQueueNode(l1);

        //how to insert here?
        if(compare(l1, root->segment, y_coor))
            root->right=inserti(root->right,l1);
        else
            root->left=inserti(root->left,l1);
        root->height =(height(root->left) > height(root->right))? height(root->left) + 1 : height(root->right) + 1 ;

        int diff = heightDiff(root);
        if (diff > 1 && compare(root->segment,l1))
            return rightRotate(root);
        if (diff < -1 && compare(l1,root->segment))
            return leftRotate(root);
        if (diff > 1 && compare(l1,root->segment)){
            root->left = leftRotate(root->left);
            return rightRotate(root);
        }
        if (diff < -1 && compare(root->segment,l1)) {
            root->right = rightRotate(root->right);
            return leftRotate(root);
        }
        return root;*/
        cout<<"Entered"<<endl;
        int *jdouble = &two_insert;
        if(root == NULL){
            *jdouble = 1;
            cout<<"Node Created"<<endl;
            return createStatusQueueNode(l1);
        }
        //double suml1 = ((y_coor - l1.lower.y)*((l1.lower.x - l1.upper.x)/(l1.lower.y - l1.upper.y))) + l1.lower.x;
        //double sumr_segment = ((y_coor - root->segment.lower.y)*((root->segment.lower.x - root->segment.upper.x)/(root->segment.lower.y - root->segment.upper.y))) + root->segment.lower.x;
        cout<<sloper(l1, y_coor)<<" "<<sloper(root->segment, y_coor)<<endl;
        if(sloper(l1, y_coor) < sloper(root->segment, y_coor)){
            cout<<"Moving Left"<<endl;
            root->left = inserti(root->left, l1, y_coor);
            if(*jdouble == 1){
                root->right = createStatusQueueNode(root->segment);
                root->segment = l1;
                *jdouble = 0;
            }
        }else if (sloper(l1, y_coor) > sloper(root->segment, y_coor)){
            cout<<"Moving Right"<<endl;
            root->right = inserti(root->right, l1, y_coor);
            if(*jdouble == 1){
                root->left = createStatusQueueNode(root->segment);
                *jdouble = 0;
            }
        }else{
            //cout<<"Returned"<<endl;
            return root;
        }
        root->height = 1 + max(height(root->left), height(root->right));
        int balance = getBalance(root);
        //cout<<"Started Balancing"<<endl;
        if(balance > 1 && sloper(l1, y_coor) < sloper(root->left->segment, y_coor))
            return rightRotate(root);
        else if(balance < -1 && sloper(l1, y_coor) > sloper(root->right->segment, y_coor))
            return leftRotate(root);
        else if(balance > 1 && sloper(l1, y_coor) > sloper(root->left->segment, y_coor)){
            root->left = leftRotate(root->left);
            return rightRotate(root);
        }else if(balance < -1 && sloper(l1, y_coor) < sloper(root->right->segment, y_coor)){
            root->right = rightRotate(root->right);
            return leftRotate(root);
        }
        //cout<<"Done Balancing"<<endl;
        return root;
    }


    statusQueue * minValueSegment(statusQueue* segment)
    {
        statusQueue* current = segment;
        while (current->left != NULL)
            current = current->left;
        return current;
    }

    

    statusQueue* deleteSegment(statusQueue* root, Line l1, double y_coor){
        /*if (root == NULL)
            return root;
        if(root->right!=NULL)
            root->right = deleteSegment(root->right);
        else{
            if( (root->left == NULL)||(root->right == NULL)){
                statusQueue *temp = root->left ? root->left : root->right;
                if (temp == NULL){
                    temp = root;
                    root = NULL;
                }
                else
                *root = *temp;
                free(temp);
            }else{
                statusQueue* temp = minValueSegment(root->right);
                root->segment = temp->segment;
                root->right = deleteSegment(root->right);
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

        return root;*/
        if(root==NULL)
            return root;
        if(sloper(l1, y_coor) < sloper(root->segment, y_coor)){
            //cout<<"Moving Left"<<endl;
            root->left = deleteSegment(root->left, l1, y_coor);
        }
        else if(sloper(l1, y_coor) > sloper(root->segment, y_coor)){
            //cout<<"Moving Right"<<endl;
            root->right = deleteSegment(root->right, l1, y_coor);
        }
        else{
            //cout<<"Found element to be deleted "<<root->segment.lower.x<<" "<<root->segment.lower.y<<" "<<sloper(l1, y_coor)<<" "<<sloper(root->segment, y_coor)<<endl;
            if((root->left == NULL) || (root->right == NULL)){
                statusQueue* temp = root->left ? root->left : root->right;
                if(temp == NULL){
                    temp = root;
                    root = NULL;
                }else
                    *root = *temp;
                free(temp);
            }else{
                statusQueue* temp = minValueSegment(root->right);
                root->segment = temp->segment;
                //cout<<"Deleted Right"<<endl;
                root->right = deleteSegment(root->right, temp->segment, y_coor);
            }
        }
        if(root == NULL)
            return root;

        root->height = 1 + max(height(root->left), height(root->right));
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

    void preOrder(statusQueue* root){
        if(root!=NULL){
            cout<<root->segment.upper.x<<" "<<root->segment.upper.y<<" "<<root->segment.lower.x<<" "<<root->segment.lower.y<<" "<<root->height<<endl;
            preOrder(root->left);
            preOrder(root->right);
        }
    }

    void getLeftNeighbor(statusQueue* node, Line l1, double y_coor, Line* lastRight){
        if(node->height == 1){
            if(lastRight->upper.x == -1){
                if(compare(node->segment, l1, y_coor-0.1))
                    *lastRight = node->segment;
            }
            return ;
        }
        

        if(compare(l1, node->segment, y_coor-0.1))
            getLeftNeighbor(node->left, l1, y_coor, lastRight);
        else if(compare(node->segment, l1, y_coor-0.1)){
            *lastRight = node->segment;
            getLeftNeighbor(node->right, l1, y_coor, lastRight);
        }
    }

    void getRightNeighbor(statusQueue* node, Line l1, double y_coor, Line* lastLeft){
        if(node->height == 1){
            if(lastLeft->upper.x == -1){
                if(compare(l1, node->segment, y_coor-0.1))
                    *lastLeft = node->segment;
            }
            return ;
        }
        if(compare(l1, node->segment, y_coor-0.1)){
            *lastLeft = node->segment;
            getRightNeighbor(node->left, l1, y_coor, lastLeft);
        }else if(compare(node->segment, l1, y_coor-0.1))
            getRightNeighbor(node->right, l1, y_coor, lastLeft);
    }
    
    void getNeighbors(statusQueue* node, double x_coor, double y_coor, Line* lastRight, Line* lastLeft){
        if(node->height == 1){
            if(lastRight->upper.x == -1){
                if(sloper(node->segment, y_coor-0.1) <= x_coor)
                    *lastRight = node->segment;
            }
            if(lastLeft->upper.x == -1){
                if(sloper(node->segment, y_coor-0.1) > x_coor)
                    *lastLeft = node->segment;
            }
            return ;
        }
        if(x_coor < sloper(node->segment, y_coor-0.1)){
            *lastLeft = node->segment;
            getNeighbors(node->left, x_coor, y_coor, lastRight, lastLeft);
        }else if(x_coor > sloper(node->segment, y_coor-0.1)){
            *lastRight = node->segment;
            if(node->right == NULL)
                return ;
            getNeighbors(node->right, x_coor, y_coor, lastRight, lastLeft);
        }
    }
};

#endif
