#include<stdio.h>
#include<iostream>
using namespace std;

struct Point{
    int x;
    int y;
};
struct Line{
    Point upper;
    Point lower;
};
double sloper(Line l1, double y){
    return ((y - l1.lower.y)*(l1.lower.x - l1.upper.x)/(l1.lower.y - l1.upper.y)) + l1.lower.x;
}

int main(){
    Line l1;
    l1.upper.x = 0;
    l1.upper.y = 0;
    l1.lower.x = 2;
    l1.lower.y = 4;
    //cout.precision(17);
    cout<<sloper(l1, 1)<<endl;
    return 0;
}