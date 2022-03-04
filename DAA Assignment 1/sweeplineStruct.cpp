#include <bits/stdc++.h>

struct Point{
    int x;
    int y;
};

struct Line{
    int index;
    Point side1;
    Point side2;
};

struct statusTree{
    Line index;
    statusTree* left;
    statusTree* right;
    int height;
};

statusTree *createStatusNode(Line index) {
    statusTree *newnode = new statusTree();
    newnode->index = index;
    newnode->left = NULL;
    newnode->right = NULL;
    return newnode;
}

int height(statusTree* node){
    if(node == NULL)
        return 0;
    return node->height;
}

statusTree *rightRotate(statusTree *y){
    statusTree *x = y->left;
    statusTree *z = x->right;
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

statusTree *leftRotate(statusTree *y){
    statusTree *x = y->right;
    statusTree *z = x->left;
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

int heightDiff(statusTree* node){
    if(node == NULL)
        return 0;
    return height(node->left) - height(node->right);
}

statusTree* insert(statusTree* root, Line index)
{
    if (root == NULL)
        return createStatusNode(index.index);
 
    //how to insert here?
    if(root->left==NULL)
        root->left=insert(root->left,index);
    else   
        root->right=insert(root->right,index);
    root->height =(height(root->left) > height(root->right))? height(root->left) + 1 : height(root->right) + 1 ;
 
    int diff = heightDiff(root);
    if (diff > 1 && index.index < root->left->index)
        return rightRotate(root);
    if (diff < -1 && index.index > root->right->index)
        return leftRotate(root);
    if (diff > 1 && index.index > root->left->index){
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }
    if (diff < -1 && index.index < root->right->index) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }
    return root;
}
