#include <bits/stdc++.h>
#include <sweepPointPoint.cpp>

struct eventQueue{
    Point eventPoint;
    eventQueue* left;
    eventQueue* right;
    int height;
};

eventQueue *createeventQueueNode(Point eventPoint) {
    eventQueue *newnode = new eventQueue();
    newnode->eventPoint = eventPoint;
    newnode->left = NULL;
    newnode->right = NULL;
    return newnode;
}

int height(eventQueue* node){
    if(node == NULL)
        return 0;
    return node->height;
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

eventQueue* insert(eventQueue* root, Point eventPoint)
{
    if (root == NULL)
        return createeventQueueNode(eventPoint);
 
    //how to insert here?
    if(eventPoint.y>root->eventPoint.y || (eventPoint.y == root->eventPoint.y && eventPoint.x<root->eventPoint.x))
        root->right=insert(root->right,eventPoint);
    else   
        root->left=insert(root->left,eventPoint);
    root->height =(height(root->left) > height(root->right))? height(root->left) + 1 : height(root->right) + 1 ;
 
    int diff = heightDiff(root);
    if (diff > 1 && eventPoint.y < root->eventPoint.y || (eventPoint.y == root->eventPoint.y && eventPoint.x > root->eventPoint.x))
        return rightRotate(root);
    if (diff < -1 && eventPoint.y > root->eventPoint.y || (eventPoint.y == root->eventPoint.y && eventPoint.x<root->eventPoint.x))
        return leftRotate(root);
    if (diff > 1 && eventPoint.y > root->eventPoint.y || (eventPoint.y == root->eventPoint.y && eventPoint.x<root->eventPoint.x)){
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }
    if (diff < -1 && eventPoint.y < root->eventPoint.y || (eventPoint.y == root->eventPoint.y && eventPoint.x > root->eventPoint.x)) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }
    return root;
}