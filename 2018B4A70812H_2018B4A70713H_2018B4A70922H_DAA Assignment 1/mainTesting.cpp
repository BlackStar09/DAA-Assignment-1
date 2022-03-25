#include "FindIntersections.h"

int main(){
    vector<Line> segments;
    cout<<"Enter the number of lines you want to add"<<endl;
    int n;
    cin>>n;
    fstream testfile;
    testfile.open("testcase2.txt");
    double x1, y1, x2, y2;
    clock_t start, end;
    if(testfile.is_open()){
        string tp;
        while(getline(testfile,tp)){
            vector<double>v;
            istringstream is(tp);
            int p;
            while(is>>p){
                //cout<<p;
                v.push_back(p);
            }
            Line l1;
            l1.upper.x = v[0];
            l1.upper.y = v[1];
            l1.lower.x = v[2];
            l1.lower.y = v[3];
            segments.push_back(l1);
        }
    }
    testfile.close();
    for(int i=0; i<n; i++)
        cout<<segments[i].upper.x<<" "<<segments[i].upper.y<<" "<<segments[i].lower.x<<" "<<segments[i].lower.y<<endl;
    cout<<endl<<"Points of Intersection are: "<<endl;
    start = clock();
    ios_base::sync_with_stdio(false);
    FindIntersections findIntersection = FindIntersections(segments);
    //findIntersection.newStatus.preOrder(findIntersection.st_root);
    findIntersection.runAlgorithm();
    end = clock();
    double time_taken = double(end - start) / double(CLOCKS_PER_SEC);
    cout<<"Time taken is: "<< fixed<<time_taken<<setprecision(10);
    return 0;
}
