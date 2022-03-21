#include "FindIntersections.h"

int main(){
    vector<Line> segments;
    cout<<"Enter the number of lines you want to add"<<endl;
    int n;
    cin>>n;
    double x1, y1, x2, y2;
    for(int i=0; i<n; i++){
        cout<<"Input Segment"<<endl;
        cin>>x1>>y1>>x2>>y2;
        Line l1;
        l1.upper.x = x1;
        l1.upper.y = y1;
        l1.lower.x = x2;
        l1.lower.y = y2;
        segments.push_back(l1);
    }
    for(int i=0; i<n; i++)
        cout<<segments[i].upper.x<<" "<<segments[i].upper.y<<" "<<segments[i].lower.x<<" "<<segments[i].lower.y<<endl;
    cout<<endl<<"Points of Intersection are: "<<endl;
    FindIntersections findIntersection = FindIntersections(segments);
    //findIntersection.newStatus.preOrder(findIntersection.st_root);
    findIntersection.runAlgorithm();
}