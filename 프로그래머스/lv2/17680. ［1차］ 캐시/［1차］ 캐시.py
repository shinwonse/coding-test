def solution(cacheSize, cities):
    cache = []
    time = 0
    
    for city in cities:
        city = city.lower()
        if cacheSize == 0:
            time += len(cities) * 5
            return time
            
        if len(cache) < cacheSize and city not in cache:
            time += 5
            cache.append(city)
            continue
            
        if city in cache:
            time += 1
            index = cache.index(city)
            cache.append(cache.pop(index))
        else:
            time += 5
            cache.pop(0)
            cache.append(city)
            
    return time
        