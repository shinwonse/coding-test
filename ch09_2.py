import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# 1. 베스트 상품을 크롤링한 ranking.csv 파일을 불러온다
df = pd.read_csv('ranking_Ch08_Ch09.csv')

# 2. 조건식을 지정하여 평균 가격보다 낮은 제품을 조회한다
mean_price = df['가격'].mean()
lower_price_products = df[df['가격'] < mean_price]

# 3. 평균 가격보다 낮은 제품을 seaborn의 Boxplot으로 시각화한다
plt.figure(figsize=(10,6))
sns.boxplot(y='가격', data=lower_price_products)

# 3-a. y는 '가격', data는 DataFrame 이름으로 Boxplot의 인자를 지정
plt.ylabel('가격')

# 3-b. 그래프의 제목은 '가격 정보'로 지정한다
plt.title('가격 정보')

# 3-c. 그래프의 크기는 (10, 6)으로 설정한다
plt.figure(figsize=(10,6))

plt.show()
