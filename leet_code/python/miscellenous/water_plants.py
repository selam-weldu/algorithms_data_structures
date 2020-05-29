def water_plants(plants,capacity1,capacity2):
    me = 0
    friend = 0
    middle = len(plants) // 2
    refill = 0

    left = 0
    while left < middle:
        if plants[left] > me:
            refill += 1
            me = capacity1
        me -= plants[left]
        left += 1
    
    right = len(plants) - 1
    while right > middle:
        if plants[right] > friend:
            refill += 1
            friend = capacity2
        friend -= plants[right]
        right -= 1

    if plants[middle] <= (me + friend):
        return refill 
    return refill + 1