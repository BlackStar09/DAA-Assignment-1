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


int main()
{
    return 0;
}
