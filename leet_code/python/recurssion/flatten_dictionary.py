# O(k) time| space : k is number of keys
def flatten_dictionary(dictionary):
      return flatten("",dictionary,{}, ".")

def flatten(initial_key,dictionary,flat_diction,sep):
  for k,v in dictionary.items():
    if not initial_key:
      new_key = k
    elif not k:
      new_key = initial_key
    else:
      new_key = initial_key + sep + k
      
    if isinstance(v, dict):
        flatten(new_key,v,flat_diction,sep)
    else:
        flat_diction[new_key] = v
    
  return flat_diction