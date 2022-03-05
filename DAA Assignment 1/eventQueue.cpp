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

struct eventQueue{
    Line eventLine;
    eventQueue* left;
    eventQueue* right;
    int height;
};


eventQueue *createeventQueueNode(Point eventPoint, vector<Line> lineSegments) {
    eventQueue *newnode = new eventQueue();
    newnode->eventPoint = eventPoint;
    newnode->lineSegments = lineSegments;
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

int compare(Line l1, Line l2){
    if(l1.upper.y>l2.upper.y || 
      (l1.upper.y == l2.upper.y && l1.upper.x<l2.upper.x) ||
      (l1.upper.y == l2.upper.y && l1.upper.x==l2.upper.x && l1.lower.y>l2.lower.y) ||
      (l1.upper.y == l2.upper.y && l1.upper.x==l2.upper.x && l1.lower.y == l2.lower.y) && l1.lower.x<l2.lower.x )
        return 1;
    return 0;
}

eventQueue* inserti(eventQueue* root, Line l1)
{
    if (root == NULL)
        return createeventQueueNode(eventPoint);

    //how to insert here?
    if(compare(l1,root->eventLine))
        root->right=inserti(root->right,eventPoint);
    else
        root->left=inserti(root->left,eventPoint);
    root->height =(height(root->left) > height(root->right))? height(root->left) + 1 : height(root->right) + 1 ;

    int diff = heightDiff(root);
    if (diff > 1 && compare(root->eventLine,l1))
        return rightRotate(root);
    if (diff < -1 && compare(l1,root->eventLine))
        return leftRotate(root);
    if (diff > 1 && compare(l1,root->eventLine)){
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }
    if (diff < -1 && compare(root->eventLine,l1)) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }
    return root;
}


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
            root->lineSegments = temp->lineSegments;
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

eventQueue getNextEvent(eventQueue *root){
    eventQueue *temp = root;
    while(temp->right!=NULL){
        temp = temp->right;
    }
    eventQueue e = *temp;
    return e;
}


int main()
{
    return 0;
}
