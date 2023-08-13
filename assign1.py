from urllib.request import urlopen
from bs4 import BeautifulSoup as bs

url = 'https://www.ssg.com/service/bestMain.ssg'

htmlData = urlopen(url).read().decode('utf8')
html = bs(htmlData, 'html.parser')

ul = html.select_one('.cunit_thmb_lst')
li = ul.find_all('li')

with open('ranking.csv', 'w') as fp:
    line = '상품 순, 판매점, 상품명, 가격\n'
    fp.write(line)
    for item in li:
        rank = int(item.select_one('.tx_best').text)
        store = item.select_one('.cunit_tp').text.split('\n')[2]
        name = item.select_one('a .tx_ko').text.replace(',', '')
        price = item.select_one('.ssg_price').text.replace(',', '') + '원'
        line = f'{rank}, {store}, {name}, {price}\n'
        fp.write(line)
