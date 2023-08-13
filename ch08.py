import pandas as pd

# 1. ranking.csv 파일 불러오기
df = pd.read_csv('ranking_Ch08_Ch09.csv')

# 2. 순위가 1위부터 50위인 자료들 조회
data = df.head(50)

# 3. 판매점 별 상품의 개수를 groupby 함수와 count 함수를 이용하여 시리즈로 만듦
count_per_store = df.groupby(['판매점'])['판매점'].count()
print('**판매점 별 상품의 개수 시리즈**')
print(count_per_store)

# 4. 상위 50개 상품의 평균가격을 구한 뒤 평균 가격보다 큰 상품을 조회. 단, 가격을 기준으로 내림차순
mean_price = data['가격'].mean()
expensive_than_mean_price_data = data[data['가격'] > mean_price].sort_values(['가격'], ascending=False)
print('\n**상위 50개 상품 중 평균 가격보다 비싼 상품을 내림차순으로 조회**')
print(expensive_than_mean_price_data)
