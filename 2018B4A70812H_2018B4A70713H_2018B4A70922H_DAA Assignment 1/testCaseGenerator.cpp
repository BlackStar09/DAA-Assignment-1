#include <bits/stdc++.h>

using namespace std;

int main()
{
    int n;
    cin>>n;
    ofstream MyFile("testcase2.txt");
    //MyFile<<n<<"\n";
    for(int i=0;i<n;i++){
        int a = rand()%n;
        int b = rand()%n;
        int c = rand()%n;
        int d = rand()%n;
        MyFile<<a<<" "<<b<<" "<<c<<" "<<d<<" "<<"\n";
    }
    MyFile.close();

    /*fstream testfile;
    testfile.open("testcase2.txt");
    int i=0;
    if(testfile.is_open()){
        string tp;
        while(getline(testfile,tp)&&i<n){
            cout<<tp<<endl;
            istringstream is(tp);
            int p;
            while(is>>p)
                cout<<p<<endl;
            i++;
        }
    }
    testfile.close();*/
    return 0;
}
