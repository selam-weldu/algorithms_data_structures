# O(n) time | space
def array_of_array_products(arr):
  if len(arr) <= 1:
    return []
  
  products = arr[:]
  products[0] = 1
  
  for i in range(1,len(arr)):
    products[i] = arr[i-1] * products[i-1]
    
  right_idx= 1
  for i in reversed(range(len(arr) - 1)):
    right_idx *= arr[i+1]
    products[i] *= right_idx
   
  return products


def array_of_array_products2(arr):
    
  if len(arr) <= 1:
    return []
  
  left = arr[:]
  left[0] = 1
  right = arr[:]
  right[-1] = 1
  
  for i in range(1,len(arr)):
    left[i] = arr[i-1] * left[i-1]
    
  for i in reversed(range(len(arr)-1)):
    right[i] = arr[i+1] * right[i+1]
  
  products = []
  for i in range(len(arr)):
    products.append(left[i] * right[i])
   
  return products