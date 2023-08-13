import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# 데이터 불러오기
df = sns.load_dataset('iris')

# 1) 품종이 setosa 인 데이터 중 sepal_length 와 sepal_width 의 값만 출력
setosa_df = df[df['species'] == 'setosa'][['sepal_length', 'sepal_width']]
print(setosa_df)

# 2) 각 품종별로 평균과 표준편차 구하기
iris_stats = df.groupby('species').agg({'sepal_length': ['mean', 'std'],
                                        'sepal_width': ['mean', 'std'],
                                        'petal_length': ['mean', 'std'],
                                        'petal_width': ['mean', 'std']})
print(iris_stats)

# 3) 산점도 그리기
sns.scatterplot(x='sepal_length', y='sepal_width', hue='species', data=df)
plt.show()

# 4) pair plot 그리기
sns.pairplot(df, hue='species')
plt.show()
