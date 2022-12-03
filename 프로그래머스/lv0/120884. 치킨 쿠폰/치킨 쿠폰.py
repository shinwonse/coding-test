def solution(chicken):
    result = 0
    coupon = chicken
    
    while coupon >= 10:
        service = coupon // 10
        coupon %= 10
        coupon += service
        result += service
        
    return result