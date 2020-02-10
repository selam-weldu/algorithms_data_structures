#include <iostream>
using namespace std;


void insertionSort(int arr[], int start, int end){

	for (int i = start + 1; i <= end; i++){
		int key = arr[i];
		int j = i;
		
		while (j > start && arr[j - 1] > key){
			arr[j] = arr[j - 1];
			j--;
		}
		
		arr[j] = key;
	}
}
 
int Partition (int arr[], int left, int right){

	int pivot = arr[right];
	int pivot_index = left;	
	
	for (int i = left; i < right; i++){
		if (arr[i] <= pivot){
			swap(arr[i], arr[pivot_index]);
			pivot_index++;
		}
	}
	
	swap (arr[pivot_index], arr[right]);
	
	return pivot_index;
}



void HybridQuickSort(int arr[], int left, int right){
	while (left < right){

		if(right - left < 20){
			insertionSort(arr, left, right);
			break;
		} else {
			int pivot = Partition(arr, left, right);
			
			if (pivot - left < right - pivot){
				HybridQuickSort(arr, left, pivot - 1);
				left = pivot + 1;
			} else {
				HybridQuickSort(arr, pivot + 1, right);
				right = pivot - 1;
			}
		}
	}	
}

int main()
{
	int n = 200000;
	int arr[n];
 
	clock_t start;
	clock_t end;
	double time_taken = 0.0;
	

	for(int i = 0; i < 10; i++)
	{

		for (int i = 0; i < n; i++)
			arr[i] = rand() % 100000;

		start = clock();
		HybridQuickSort(arr, 0, n-1);
		end = clock();

		time_taken += (double)(end - start) / CLOCKS_PER_SEC;
	}

    if(n < 50){
        for(int i = n; i > 0; i--){
            cout << "| " << arr[abs(i - n)] << " ";
        }
		cout << "|" << endl;
    }  

	cout << "Average time taken: " << time_taken/10;

	return 0;
}


// | 681 | 1039 | 2215 | 2900 | 3177 | 4339 | 4794 | 6403 | 7556 | 7971 | 8538 | 8902 | 16127 | 16949 | 17647 | 17988 | 20504 | 22535 | 26304 | 32002 | 32460 | 36159 | 36429 | 43921 | 44500 | 53414 | 55629 | 58699 | 60028 | 60049 | 60289 | 66748 | 70460 | 71043 | 71692 | 76335 | 78050 | 82134 | 85238 | 85795 | 88027 | 90428 | 90964 | 92292 | 95151 | 95343 | 95367 | 97697 | 98285 |
// | 1961 | 5385 | 6042 | 6640 | 8581 | 14769 | 18004 | 21860 | 21993 | 23205 | 37732 | 39299 | 40713 | 41222 | 42590 | 45884 | 47255 | 47625 | 48142 | 52298 | 56190 | 60379 | 62504 | 62754 | 67621 | 68850 | 71155 | 73850 | 75579 | 79567 | 80524 | 81776 | 83898 | 85273 | 88209 | 88819 | 90613 | 95994 | 99336 |
// | 2954 | 7669 | 8542 | 10197 | 13810 | 17505 | 23311 | 27828 | 28804 | 35568 | 38082 | 39507 | 49299 | 54340 | 55422 | 55590 | 59355 | 68139 | 69786 | 73622 | 76348 | 78611 | 87343 | 88464 | 95746 |