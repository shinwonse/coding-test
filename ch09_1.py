import pandas as pd
import matplotlib.pyplot as plt

plt.rc('font', family='Malgun Gothic')
# 1. 베스트 상품을 크롤링한 ranking.csv 파일을 불러온다
df = pd.read_csv('ranking_Ch08_Ch09.csv')

# 2. 판매점 별 상품의 개수를 groupby 함수와 count 함수를 이용하여 시리즈로 만든다
count_per_store = df.groupby('판매점')['판매점'].count()

# 3. plt의 barplot을 사용하여 판매점 별 제품의 개수를 시각화한다
plt.figure(figsize=(10, 6))
plt.bar(count_per_store.index, count_per_store.values)

# 3-a. x는 판매점, y는 제품의 개수로 barplot의 인자를 지정한다
plt.xlabel('판매점')
plt.ylabel('제품 개수')

# 3-b. x label은 '판매점', y label은 '제품 개수'로 지정한다
plt.xlabel('판매점')
plt.ylabel('제품 개수')

# 3-c. 그래프의 제목은 '판매점 별 제품의 개수'로 지정한다
plt.title('판매점 별 제품의 개수')

# 3-d. 그래프의 크기는 (10, 6)으로 설정한다
plt.figure(figsize=(10, 6))

plt.show()
