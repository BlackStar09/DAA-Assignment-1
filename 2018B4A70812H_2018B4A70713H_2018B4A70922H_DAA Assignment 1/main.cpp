#include <bits/stdc++.h>
using namespace std;


struct Point{
    int x;
    int y;
    int type;
};

struct Line{
    int index;
    Point upper;//0
    Point lower;//1
};

struct eventQueue{
    Point eventPoint;
    eventQueue* left;
    eventQueue* right;
    vector<Line> lineSegments;
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

eventQueue* inserti(eventQueue* root, Point eventPoint, vector<Line> lineSegments)
{
    if (root == NULL)
        return createeventQueueNode(eventPoint,lineSegments);

    //how to insert here?
    if(eventPoint.y>root->eventPoint.y || (eventPoint.y == root->eventPoint.y && eventPoint.x<root->eventPoint.x))
        root->right=inserti(root->right,eventPoint,lineSegments);
    else if(eventPoint.y==root->eventPoint.y && eventPoint.x==root->eventPoint.x){
        root->lineSegments.insert(root->lineSegments.end(), lineSegments.begin(), lineSegments.end());
    }
    else
        root->left=inserti(root->left,eventPoint,lineSegments);
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

void preOrder(eventQueue *root)
{
    if(root != NULL)
    {
        preOrder(root->left);
        cout << root->eventPoint.x << " " <<root->eventPoint.y<<"  "<<(root->lineSegments).size()<<endl;
        preOrder(root->right);
    }
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

struct statusQueue{
    Line segment;
    statusQueue* left;
    statusQueue* right;
    int height;
};


statusQueue *createStatusQueueNode(Line segment) {
    statusQueue *newnode = new statusQueue();
    newnode->segment = segment;
    newnode->left = NULL;
    newnode->right = NULL;
    return newnode;
}

int height(statusQueue* node){
    if(node == NULL)
        return 0;
    return node->height;
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

int heightDiff(statusQueue* node){
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

statusQueue* inserti(statusQueue* root, Line l1)
{
    if (root == NULL)
        return createStatusQueueNode(l1);

    //how to insert here?
    if(compare(l1,root->segment))
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
    return root;
}


statusQueue * minValueSegment(statusQueue* segment)
{
    statusQueue* current = segment;
    while (current->left != NULL)
        current = current->left;
    return current;
}

int getBalance(statusQueue *N)
{
    if (N == NULL)
        return 0;
    return height(N->left) - height(N->right);
}

statusQueue* deleteSegment(statusQueue* root){
    if (root == NULL)
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

    return root;
}


vector<> FindIntersections(vector<Line> segments){
    eventQueue *root = NULL;
    for(auto it = segments.begin(), it!=segments.end(),it++){
        if(upper.y < lower.y || (upper.y==lower.y && upper.x>lower.x)){
            int tempx = upper.x;
            int tempy = upper.y;
            upper.x = lower.x;
            upper.y = lower.y;
            lower.x = tempx;
            lower.y = tempy;
            upper.type = 0;
            lower.type = 1;
        }
        vector<Line> v;
        v.push_back(*it);
        root = inserti(root, upper, v);
        root = inserti(root, lower, v);
    }
    statusQueue *root2 = NULL;
    while(root!=NULL){
        eventQueue e = getNextEvent(root);
        root = deleteEvent(root);
        handleEventPoint(e);
    }
}

handleEventPoint(eventQueue e){

}

int main()
{
    eventQueue *root = NULL;
    vector<Line> v(2);


    Point p6 = {3,6,2};
    Point p5 = {9,7,1};
    Point p4 = {5,7,2};
    Point p3 = {3,6,3};
    Point p2 = {3,6,2};
    Point p1 = {10,15,1};
    root = inserti(root, p5, v);
    root = inserti(root, p4, v);
    root = inserti(root, p6, v);
    root = inserti(root, p3, v);
    root = inserti(root, p2, v);
    root = inserti(root, p1, v);
    preOrder(root);
    eventQueue e = getNextEvent(root);
    //cout<<e.eventPoint.x<<endl;
    root = deleteEvent(root);
    e = getNextEvent(root);
    //cout<<e.eventPoint.x<<endl;

    preOrder(root);
    return 0;
}
