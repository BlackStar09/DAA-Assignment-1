#include <bits/stdc++.h>
using namespace std;

//!Function that recursively calculates the max number of base pairings.
/*! Uses the recursive relation taught in class to fill cells of the dp table.
 * In addition, a second table is populated to keep track of which cells led to the optimal value.
 * This is used to find out the actual pairings in the future.
 */
int computeDP(vector<vector<int>> &dp, int i, int j, string s, int n, vector<vector<vector<pair<int,int>>>> &dp2){
    //base cases
    if(i<0||j<0||i>=n||j>=n)
        return 0;
    if(i>=j-4){
        dp[i][j] = 0;
        return 0;
    }
    int n1 = dp[i][j-1],t1 = 0,t2 = 0, n2 = 0;
    //case where j is not included in any pair
    if(n1==-1){
        n1 = computeDP(dp, i, j-1,s, n, dp2);
    }
    //case where j is included in some pair, so we iterate through all possible molecules we can pair it with
    for(int t = i;t<j;t++){
        if(((s[t]=='A'&&s[j]=='U')||(s[t]=='G'&&s[j]=='C')||(s[t]=='U'&&s[j]=='A')||(s[t]=='C'&&s[j]=='G'))&&(t<j-4)){
            if(t-1<0)
                t1 = -1;
            else
                t1 = dp[i][t-1];
            //t is matched with j so we compute opt(i, t-1)
            if(t1==-1)
                t1 = computeDP(dp, i, t-1, s, n, dp2);
            t2 = dp[t+1][j-1];
            //computing opt(t+1,j-1)
            if(t2==-1)
                t2 = computeDP(dp, t+1, j-1, s, n, dp2);
            //keeping track of the cells by which we reached the optimal value
            if((1+t1+t2)>=n2){
                n2 = 1+t1+t2;
                dp2[i][j][2].first = t;
                dp2[i][j][2].second = j;
                dp2[i][j][0].first = i;
                dp2[i][j][0].second = t-1;
                dp2[i][j][1].first = t+1;
                dp2[i][j][1].second = j-1;
            }
        }
    }
    //keeping track of the cells by which we reached the optimal value
    if(n1>=n2){
        dp2[i][j][2].first = -2;
        dp2[i][j][2].second = -2;
    }
    dp[i][j] = max(n1,n2);
    return dp[i][j];

}

//!Function that recursively finds all the base pairs that gave us the optimal number of pairings.
/*! We make use of the second table to find which cells we have to visit.
 * Each cell of the second table is a vector with three pairs.
 * The first two pairs indicate cells which contributed to the optimal value.
 * The third pair indicates which pair added to the optimal value in case j is a part of a pair.
 */
void findPairs(vector<pair<int,int>> &ans, vector<vector<int>> &dp, int i, int j, int n, vector<vector<vector<pair<int,int>>>> &dp2){
    //base cases
    if(i<0||j<0||i>=n||j>=n)
        return;
    if(i>=j-4)
        return;
    //case where opt(i,j) = opt(i,j-1)
    if(dp2[i][j][2].first==-2){
        findPairs(ans,dp,i,j-1,n,dp2);
        return;
    }
    //case where opt(i,j) = 1 + opt(i,t-1) + opt(t+1, j-1)
    ans.push_back(dp2[i][j][2]);
    int i1 = dp2[i][j][0].first;
    int j1 = dp2[i][j][0].second;
    int i2 = dp2[i][j][1].first;
    int j2 = dp2[i][j][1].second;
    findPairs(ans,dp,i1,j1,n,dp2);
    findPairs(ans,dp,i2,j2,n,dp2);
    return;
}

int main(){
    //taking input
    string molecule;
    cin>>molecule;
    int n = molecule.size();
    vector<vector<int>> dp;
    vector<vector<vector<pair<int,int>>>> dp2;
    //initializing dp and dp2 tables
    for(int i=0;i<n;i++){
        vector<int> temp;
        vector<vector<pair<int,int>>> temp2;
        for(int j=0;j<n;j++){
            temp.push_back(-1);
            vector<pair<int,int>>temp3;
            for(int k=0;k<3;k++){
                pair<int,int>p = {-1,-1};
                temp3.push_back(p);
            }
            temp2.push_back(temp3);
        }
        dp.push_back(temp);
        dp2.push_back(temp2);
    }
    //computing the max base pairings
    int ans = computeDP(dp, 0, n-1,molecule, n, dp2);
    vector<pair<int,int>> ans2;
    //computing the base pairs in optimal case
    findPairs(ans2, dp, 0, n-1, n, dp2);
    cout<<ans<<endl;
    for(int i=0;i<ans2.size();i++){
        cout<<ans2[i].first<<" "<<ans2[i].second<<endl;
    }
}
