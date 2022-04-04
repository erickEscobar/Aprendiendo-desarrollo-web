#include<iostream>
using namespace std;

void comoTellamas(string nombre, int edad);

int main(){
    string name = "Erick";
    int e = 12;
    
    comoTellamas(name,e);

    system("pause");
    return 0;
}

void comoTellamas(string nombre, int edad){
    cout<<"Mi nombre es:"<<nombre<<" y tengo "<<edad<<" 18 años";
}