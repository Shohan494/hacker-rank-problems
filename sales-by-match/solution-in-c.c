#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void bubbleSort(int arr[], int n) {
    int swapped;
    for (int i = 0; i < n - 1; i++) {
        swapped = 0;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(&arr[j], &arr[j + 1]);
                swapped = 1;
            }
        }

        // If no two elements were swapped in the inner loop, the array is already sorted
        if (swapped == 0) {
            break;
        }
    }
}

int sockMerchant(int n, int ar[]) {
    bubbleSort(ar, n); // Sort the array in ascending order
    int pairs = 0;
    int i = 0;

    while (i < n - 1) {
        if (ar[i] == ar[i + 1]) {
            pairs++;
            i += 2; // Move to the next non-paired element
        } else {
            i++; // Move to the next element
        }
    }

    return pairs;
}

int main() {
    int n = 9;
    int ar[] = {10, 20, 20, 10, 10, 30, 50, 10, 20};
    int pairCount = sockMerchant(n, ar);
    printf("%d\n", pairCount);

    return 0;
}
