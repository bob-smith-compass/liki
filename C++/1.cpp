#include <iostream>
using namespace std;
/**
 * g++ C++/1.cpp to compile if you have XCode installed
 */
int main() {
    cout << "C++ " << 2 + 2 << std::endl ;
    // cout << "C++" << endl 
    int i;
    cout << i << endl; // un-initialized variables contain garbage
    i = 100;

    cout << i << endl;

    int j = 3;
    cout << i/j << endl; // 33

    float f = 9.4;
    cout << f << endl;
    cout << f/j << endl;

    f = 9/5;
    cout << f << endl; // 1!!


    // auto au = 9/5;
    // cout << au << endl; // 1!!


    return 0;
}