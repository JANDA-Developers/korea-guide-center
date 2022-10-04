import { Flangs } from "../../types/api";
import { enumToArray } from "../../utils/enumToArray";

interface IRegionableaData {
    title: Omit<Flangs, "__typename">;
    description: Omit<Flangs, "__typename">;
    photos: string[];
}

export const regionableData: Record<mapRegion, IRegionableaData> = {
    Daejeon: {
        description: {
            chi: `大田位于韩国的中心，自然而然人多。随着韩国的近代化开始，跟火车的发展一起形成的大城市。是交通中心。许多研究所，大学，企业等等位于大田。所以风险企业们非常活化的地方。风险企业数是，首尔是第一，下一个是大田`,
            en: `Deajoen is located at center of Korea. Many people gather here. It is also center of traffic as train develops. Many institutions, university, coperates are in this city. The most venture coperates are in Seoul , next is Daejeon.`,
            ot: `Deajoen is located at center of Korea. Many people gather here. It is also center of traffic as train develops. Many institutions, university, coperates are in this city. The most venture coperates are in Seoul , next is Daejeon.`,
            ja: `地理的に韓国の中心に位置しているので、自然に人々がたくさん集まり、韓国の近代化時代が始まり、汽車の発達とともに形成された大都市で、交通の中心地です。 多くの研究所、大学、企業などが集まっているため、ベンチャー企業が活性化された場所で、人口1人当たりのベンチャー企業数は、ソウルに次いで1位です。`,
            ko: `한국의 중심에 위치하고 있으므로, 자연스럽게 사람들이 많이 모이고, 한국의 근대화 시대가 시작되면서 기차의 발달과 함께 형성된 대도시로써 교통의 중심지입니다. 많은 연구소, 대학, 기업 등이 모여 있어 벤처기업들이 활성화된 곳으로 인구 1인당 벤처기업 수는 서울다음으로 1위입니다.`,
        },
        photos: [],
        title: {
            en: `
            Daejeon
            `,
            ot: `
            Daejeon
            `,
            ko: `
            대전광역시
            `,
            chi: `
            大田广域市
            `,
            ja: `
            大田広域市
            `,
        },
    },
    Gangwon: {
        description: {
            chi: `代表韩国的太白山脉位于江原道。是土豆儿的产生地。2018年冬季奥运会开在平昌了。在平昌可以欣赏滑雪板。广阔的草原有羊群的平和的景色。北方跟非武装地带链接一起。非武装地带是世界唯一分断国家大韩民国和北朝鲜的国境。东方有美丽的东海的蓝色海。一边欣赏蓝色海一边在咖啡街喝咖啡。冲浪很有名。用海水制造的豆腐生产也有名。所以好吃的豆腐餐厅挺多。 `,
            en: `Taebak mountain is very famous in Gangwondo province. Potato is famous produce in there, You may enjoy Skiing in the Pongchang where winter olimpic was took place. There is peaceful landscape, a flock of ship. There is between North Korea and South Korea. So it’s very interesting area. You can enjoy blue ocean at the east part. It’s very famous place for dynamic surfing and bean curd. So, There are many bean curd diners. `,
            ot: `Taebak mountain is very famous in Gangwondo province. Potato is famous produce in there, You may enjoy Skiing in the Pongchang where winter olimpic was took place. There is peaceful landscape, a flock of ship. There is between North Korea and South Korea. So it’s very interesting area. You can enjoy blue ocean at the east part. It’s very famous place for dynamic surfing and bean curd. So, There are many bean curd diners.  `,
            ja: `韓国を代表する太白山脈がある江原道はジャガイモ生産地として有名であり、2018年冬季五輪が開かれた平昌でスキーを楽しむことができ、広い草原で羊の群れの平和な風景と共に北には世界で唯一の分断国である韓国と北朝鮮の国境があるDMZ(非武装地帯)と接しているため非常に興味深い地域です。東は美しい東海の青い海を鑑賞しながら、韓国を代表するカフェ通りでコーヒー一杯と一緒にダイナミックなサーフィンと海の海水を利用した'豆腐'生産地としても有名な所であるため、豆腐のグルメ店も多いので旅行客の味覚を虜にするでしょう. `,
            ko: `한국을 대표하는 태백산맥이 있는 강원도는 감자생산지로 유명하며 2018년 동계올림픽이 열렸던 평창에서 스키를 즐길수 있으며, 넓은 초원에서 양떼들의 평화로운 풍경과 함께 북쪽으로는 세계에서 유일한 분단국인 한국과 북한의 국경이 있는 D M Z(비무장지대)와 접경해 있으므로 매우 흥미로운 지역입니다. 동쪽으로는 아름다운 동해의 푸른바다를 감상하면서 한국 대표 카페거리에서 커피한잔과 함께 다이나믹한 써핑과 바다의 해수를 이용한 ‘두부’생산으로도 유명한 곳이어서 두부 맛집도 많은 곳이예요. `,
        },
        photos: [],
        title: {
            en: `
            Gangwon-do
            `,
            ot: `
            Gangwon-do
            `,
            ko: `
            강원도
            `,
            chi: `
            江原道
            `,
            ja: `
            江原道
            `,
        },
    },

    Gwangju: {
        description: {
            chi: `光州位于大韩民国的西南部，是全罗南道的中心城市。 这里是光州学生抗日运动和518光州民主化运动的发生地。电影“打的司机”的拍摄地。美丽的民谣，版所里特别有名。也是电影“西便制”的拍摄地。 在光州每个两年举办双年展。我推荐给想体验韩国的艺术文化的游客。`,
            en: `Gwangju is located at south west part of Korea. Gwangju is hub of Jeinlanamdo.  Gwangju students anti Japan movement and 5.18 Gwangju democrotic movement occurred in this area. Also, It’s film site of “Taxi driver”. It’s famous for beautiful folk song and Pansori. It’s filming site of “Seopyeonje.” Gwangju biennale is held every two years. I recommend to tourists who want to experience art and culture.`,
            ot: `Gwangju is located at south west part of Korea. Gwangju is hub of Jeinlanamdo.  Gwangju students anti Japan movement and 5.18 Gwangju democrotic movement occurred in this area. Also, It’s film site of “Taxi driver”. It’s famous for beautiful folk song and Pansori. It’s filming site of “Seopyeonje.” Gwangju biennale is held every two years. I recommend to tourists who want to experience art and culture.`,
            ja: `韓国南西部にある光州広域市は全羅南道の中心都市で、光州学生抗日運動と5·18光州民主化運動が発生した地域で、映画「タクシードライバー」の背景になったところである。美しい民謡. 唱.法(韓国伝統アリアパンソリ)が有名で、パンソリを素材にした映画'西便制'の背景であり、2年ごとに光州ビエンナーレが開かれる都市なので韓国の芸術と文化を経験したい旅行者に一番お勧めする都市です。`,
            ko: `대한민국의 남서부에 있는 광주광역시는 전라남도의 중심도시로써 광주 학생 항일 운동과 5·18 광주 민주화 운동이 발생한 지역으로 영화‘택시드라이버’의 배경이 된곳이다.  아름다운 민요. 창(한국식아리아.판소리)이 유명한 곳으로 판소리를 소재로한 영화‘서편제’의 배경장소이며 2년마다 광주 비엔날레가 열리는 도시이므로 한국의 예술과 문화를 경험 해 보고싶은 여행자들에게 가장 추천하는 도시입니다`,
        },
        photos: [],
        title: {
            en: `
            Gwangju
            `,
            ot: `
            Gwangju
            `,
            ko: `
            광주광역시
            `,
            chi: `
            光州广域市
            `,
            ja: `
            光州広域市
            `,
        },
    },
    Gyeonggi: {
        description: {
            chi: `京畿道北部与韩国北部省份的非军事区 (DMZ) 接壤，通常被描述为地球上最危险的地方之一。京畿道位于该国的小西北角，围绕着两个城市：首尔和仁川。尽管行政上是分开的，但 2400 万城市人口（约占全国人口的一半）使京畿道成为世界上人口最稠密的地区之一。`,
            en: `Gyeonggi province(aka Gyeonggi-do) The northern province of South Korea bordered to the north by the Demilitarized Zone and is often described as one of the most dangerous places on earth. Gyeonggi-do, located in the small northwest corner of the country, surrounds two cities: Seoul and Incheon. Although administratively separate, the combined urban population of 24 million (about half of the nation's population) makes Gyeonggi-do one of the most densely populated regions in the world.`,
            ot: `Gyeonggi province(aka Gyeonggi-do) The northern province of South Korea bordered to the north by the Demilitarized Zone and is often described as one of the most dangerous places on earth. Gyeonggi-do, located in the small northwest corner of the country, surrounds two cities: Seoul and Incheon. Although administratively separate, the combined urban population of 24 million (about half of the nation's population) makes Gyeonggi-do one of the most densely populated regions in the world.`,
            ja: `京畿道は、韓国の北部非武装地帯で、北との境界をなしており、多くの場合、地球上で最も危険な場所の一つとして描かれます。国の小さな北西角にある京畿道はソウルと仁川の二つの都市を囲んでいます。行政的には別個だが都市人口2,400万人（全国人口の約半分）を合わせると、京畿道は、世界で最も人口密度の高い地域の一つになります。`,
            ko: `경기도는 한국의 북부 지방 비무장 지대에 의해 북쪽과 경계를 이루고 있고 종종 지구상에서 가장 위험한 곳 중 하나로 묘사됩니다. 나라의 작은 북서쪽 모퉁이에 있는 경기도는  서울과 인천의 두 도시를 둘러싸고 있습니다. 행정적으로는 별개지만 도시 인구 2,400만 명(전국 인구의 약 절반)을 합치면 경기도는 세계에서 가장 인구 밀도가 높은 지역 중 하나가 됩니다`,
        },
        photos: [],
        title: {
            en: `
            Gyeonggi-do
            `,
            ot: `
            Gyeonggi-do
            `,
            ko: `
            경기도
            `,
            chi: `
            Gyeonggi-do
            `,
            ja: `
            Gyeonggi-do
            `,
        },
    },
    Incheon: {
        description: {
            chi: `仁川不但是跟首尔连接的海岸道路而且是很重要的港口也就是在韩国第三大人口城市。韩国的最大国际飞机场位于仁川。从首尔到仁川，坐地铁不到 1个小时就可以去各种各样的旅游景点。最有趣是很小但有美丽的国内唯一的中国节。甚至有炸酱面博物馆。西海的美丽的世界规模的滩涂，太阳落日和生态体验给游客很深刻的印象。`,
            en: `Incheon is important gate way to Seoul, also important port. The third biggest population city. There is also the biggest air port in Korea.  You may enjoy 1 day tour easily since it takes less than 1 hour from Seoul. The most interesting place is China town. And there is “Jajangmeon” museum. World scale of tide land in west sea and sunset eco experience will give tourists impressive memories.`,
            ot: `Incheon is important gate way to Seoul, also important port. The third biggest population city. There is also the biggest air port in Korea.  You may enjoy 1 day tour easily since it takes less than 1 hour from Seoul. The most interesting place is China town. And there is “Jajangmeon” museum. World scale of tide land in west sea and sunset eco experience will give tourists impressive memories.`,
            ja: `仁川はソウルの海岸関門としての役割を果たす重要な港であり、韓国で3番目に人口の多い都市です。 また、韓国の一番大きい国際空港があるところでもあります。 ソウルから地下鉄で1時間の距離にある仁川の様々なスポットを日帰りで簡単に訪問できます。最も興味深い場所は、北朝鮮の展望台と小さいながらも魅力的な地域で、国内唯一の公式チャイナタウンがあり、「ジャージャー麺」博物館まであります。 西海の魅力である世界的な規模の干潟と夕焼け。 生態体験は、自然を愛する旅行者に印象的な思い出を提供します。`,
            ko: `인천은 서울의 해안 관문 역활을 하는 중요한 항구이자 한국에서 세 번째로 인구가 많은 도시입니다. 또한 한국의 가장 큰 국제 공항이 있는 곳이기도 합니다. 서울에서 지하철로 1시간 거리인 인천의 다양한 명소를 당일치기로 쉽게 방문할 수 있습니다. 가장 흥미로운 부분은 작지만 매력적인 지역으로 국내 유일의 공식 차이나타운이있으며 ‘짜장면’ 박물관까지 있답니다. 서해바다의 매력인 세계적인 규모의 갯벌과 노을. 생태체험은 자연을 사랑하는 여행자들에게 인상적인 추억을 선사합니다`,
        },
        photos: [],
        title: {
            en: `
            Incheon
            `,
            ot: `
            Incheon
            `,
            ko: `
            인천광역시
            `,
            chi: `
            仁川广域市
            `,
            ja: `
            仁川広域市
            `,
        },
    },
    Jeju: {
        description: {
            chi: `济州是2011年被选定为新的7大自然景观之一。济州离韩国南端陆地90公里。济州的象征汉拿山海拔1950米。在汉拿山可以直接看大小的火山，也可以散散步。湖，高山植物，稀少虫子的栖息地。是生物圈保护地区。因为在济州有独特的建筑物和海女直接采集多样的海鲜等等，有济州的独特的文化，所以一年365天一直吸引游客们。 `,
            en: `Jeju is designated as new 7th nature landscapes according to 2011 global survey. Jeju is an island, located 90km far from land. Symble of Jeju ,Hanna mountain, is 1950m hight. You may walk along small and big crater. Lake, plant, insect etc are living in here. It’s Unesco Biosphere Reserve area. Jeju has special culture such as various seafood , caught from women’s diver, and unique buildings. So , every 365 days are attractive tour attraction to Korean. `,
            ot: `Jeju is designated as new 7th nature landscapes according to 2011 global survey. Jeju is an island, located 90km far from land. Symble of Jeju ,Hanna mountain, is 1950m hight. You may walk along small and big crater. Lake, plant, insect etc are living in here. It’s Unesco Biosphere Reserve area. Jeju has special culture such as various seafood , caught from women’s diver, and unique buildings. So , every 365 days are attractive tour attraction to Korean.  `,
            ja: `済州は2011年グローバル世論調査で新しい7大自然景観の一つとして選ばれました。済州は韓国の南側陸地から90km離れた所にある島です。 済州のシンボルである漢拏山は海抜1950Mで、大小の噴火口を直接眺めながら、散策することができ、湖や高山植物、希少虫などが生息するユネスコ生物圏保護区域です。済州島は独特な建築物と海女が直接採取する多様な海産物料理法など済州ならではの独創的な文化があるため、1年中韓国人にも美しく魅力的な人気観光地です `,
            ko: `제주는 2011년 글로벌 여론조사에서 새로운 7대 자연경관 중 하나로 선정 되었습니다 제주는 한국의 남쪽 육지에서 90km 떨어진 곳에 있는 섬입니다. 제주의 상징인 한라산은 해발1950M로써 크고 작은 분화구를 직접 보며 산책할수 있으며,  호수, 고산 식물, 희귀벌레 등이 서식하는 유네스코 생물권 보호 구역입니다. 제주도는 독특한 건축물과 해녀가 직접채취하는 다양한 해산물 요리법 등 제주만의 독창적인 문화가 있기 때문에 1년 년중 한국인들에게도  아름답고 매력적인 인기 있는 관광지입니다. `,
        },
        photos: [],
        title: {
            en: `
            Jeju
            `,
            ot: `
            Jeju
            `,
            ko: `
            제주시
            `,
            chi: `
            济州市
            `,
            ja: `
            済州市
            `,
        },
    },
    NorthChungcheong: {
        description: {
            chi: `忠清道位于大韩民国的中部。大韩民国有许多山地，有比较矮和平衡的平野和河流，所以听人们说忠清道是休息的好地方。因为广阔的田野，心情好的风，安静的景色欢迎我们。 忠清道的北方有代表性的旅游景点丹阳。丹阳是兜风的好地方， 在忠州湖水滑翔伞有人气，南汉江的岛谭三峰是太阳若日的时候挺美丽。提川是韩方和韩药材的产生地，有全国最佳的环林道璐。在山林里的散步路值得散散步。`,
            en: `Chungchengdo is located at middle of Korea. We have a lot of mountains, so Korea is relatively low. Due to even and wide field many people said that chungchengdo is good place to take a rest. Since wide field , cool wind and calm landscape welcome us. The representative tour attraction ohungchengdo is Danyang. Chungju lake in Danyang is good place for drive course. Para gliding in the place is very popular. Dodamsambomg in Namhangang river’s sunset is beautiful. There is the oldest lake in Jecheon. Jecheon is well known as oriental medicine’s production site. There is also the vest Dulle gil trail. Walking along the old path in a mountain make us pleasant.`,
            ot: `Chungchengdo is located at middle of Korea. We have a lot of mountains, so Korea is relatively low. Due to even and wide field many people said that chungchengdo is good place to take a rest. Since wide field , cool wind and calm landscape welcome us. The representative tour attraction ohungchengdo is Danyang. Chungju lake in Danyang is good place for drive course. Para gliding in the place is very popular. Dodamsambomg in Namhangang river’s sunset is beautiful. There is the oldest lake in Jecheon. Jecheon is well known as oriental medicine’s production site. There is also the vest Dulle gil trail. Walking along the old path in a mountain make us pleasant.`,
            ja: `忠清道は大韓民国の中部に位置しています。 山地が多い我が国は比較的低くて平坦な広い平野と河川のおかげで豊かな土地を持っている所で多くの人々は忠清道が休息を取るのに良い所だと言います. 広々とした野原、心地よい風、静かな風景が私たちを迎えてくれるからです。忠清道の北を代表する旅行地、丹陽はドライブコースで、良い忠州湖で空を飛ぶパラグライダーが人気で、南漢江の嶋潭三峰は夕暮れの風景が美しいです。 最も古い貯水池がある堤川は、韓国式韓方と韓方薬材の生産地として知られています。全国で最高のトゥルレキル(道)がある所で、山中の自然にできた昔の道を歩いてみるのも楽しいです。`,
            ko: `충청도는 대한민국 중부에 위치하고 있습니다. 산지가 많은 우리나라는 비교적 낮고 평평한 넓은 평야와 하천 덕분에 비옥한 토지를 가지고 있어 많은 사람들은 충청도가 휴식과 휴식을 취하기에 좋은 곳이라고 말합니다. 드넓은 들판, 기분 좋은 바람, 고요한 풍경이 우리를 반겨주기 때문입니다. 충청도의 북쪽 대표 여행지 단양은 드라이브 코스로 좋은 충주호수에서 하늘을 나는 패러글라이딩이 인기이며, 남한강의 도담삼봉은 해 질 녘 풍경이 아름답습니다. 가장 오래된 저수지가 있는 제천은 한국식 한방과 한약재 생산지로 알려졌으며, 전국 최고의 둘레길이 있는 곳으로 산속의 자연적으로 생긴 옛길을 걸어보는 것도 즐겁습니다.`,
        },
        photos: [],
        title: {
            en: `
            chungchengbuk-Do
            `,
            ot: `
            chungchengbuk-Do
            `,
            ko: `
            충청북도
            `,
            chi: `
            忠清北道
            `,
            ja: `
            忠清北道
            `,
        },
    },
    NorthGyeongsang: {
        description: {
            chi: `不容易相信，但是大多人为了脱离首尔，他们选着的地方是庆尚道。其中庆尚北道有韩国的传统思想的遗址，也是古代部族国家的伽倻和1000年左右统治的新罗王国的地域、所以有古代古坟，装饰，瓷器，寺庙等，在现代提供过去的惊异的同时，可以体验本地的民俗特点的地方。去庆尚北道的话，跟好吃的鸡肉，可以留深刻纪念。 `,
            en: `Surprisingly, the most tourist select Gyeongsangdo to escape from Seoul. There are many traditional idea remains in Gyeongsangbukdo. It was main area of ancient tribal state Gaya country (BC4~5C) and Sinla dynasty, so loyal tomb, ancient ornament, earthenware, temple provide evidence of the past. It’s also the place that can experience local ethnological distinct. So you can keep impressive memories in mind if you visit there. `,
            ot: `Surprisingly, the most tourist select Gyeongsangdo to escape from Seoul. There are many traditional idea remains in Gyeongsangbukdo. It was main area of ancient tribal state Gaya country (BC4~5C) and Sinla dynasty, so loyal tomb, ancient ornament, earthenware, temple provide evidence of the past. It’s also the place that can experience local ethnological distinct. So you can keep impressive memories in mind if you visit there.  `,
            ja: `驚くべきことにソウルからの脱出を選んだほとんどの旅行者は慶尚道に向かいます。 その中でも慶尚北道(キョンサンブクド)は韓国の伝統思想の遺跡地が多く、古代部族国家の紀元前~6世紀頃までの伽耶国と、ほぼ千年間統治した新羅王国の拠点だったので、古代の古墳、装身具、土器、寺院は驚異の証拠を現時代に提供すると同時にローカルの民俗的特徴と体験を楽しむことができる場所として慶尚北道を訪問すればおいしいチムダク(甘辛い鶏肉と野菜)と一緒に非常に印象的な思い出を作ることができるでしょう `,
            ko: `놀랍게도 서울을 탈출하기로 선택한 여행자 대부분은 경상도로 향합니다. 그중에서도 경상북도는 한국의 전통사상의 유적지가 많은 곳으로, 고대 부족 국가인 bc4~5c의 가야국과 거의 천년 동안 통치한 신라 왕국의 거점이었기 때문에 고대의 고분. 장신구, 토기, 사원은 과거 경이로움에 대한 증거를 현시대에 제공함과 동시에 로컬의 민속적 특징과 체험을 즐길수 있는 곳으로 경상북도를 방문하면 맛있는 찜닭과 함께 매우 인상적인 추억을 간직하게 될것입니다. `,
        },
        photos: [],
        title: {
            en: `
            Gyeongsangbuk-Do
            `,
            ot: `
            Gyeongsangbuk-Do
            `,
            ko: `
            경상북도
            `,
            chi: `
            庆尚北道
            `,
            ja: `
            慶尚北道
            `,
        },
    },
    NorthJeolla: {
        description: {
            chi: `韩国文化保存完好在全罗北道。作为韩国近代建筑旅游景点，可以推荐。住宿在保存完好的韩屋等等体验韩国文化的地方韩屋村，就是全州韩屋村。在全州韩屋村可以推荐又穿汉服又散步韩屋村。符合韩国人的口味的有人气的全罗道式好吃饮食有套餐和米酒。别忘欣赏回去。`,
            en: `Korean culture is well preserve in Joenlabukdo. It is modern architectural tour attraction. I recommend it to visit. There are well preserved hanok village. You can enjoy and experience Korean culture in Joenju hanok village. I recommend to wear hanbok and take a walk in th village. Don’t forget tp enjoy Makguli alcohol drink with popular delicious hanjeongsik.`,
            ot: `Korean culture is well preserve in Joenlabukdo. It is modern architectural tour attraction. I recommend it to visit. There are well preserved hanok village. You can enjoy and experience Korean culture in Joenju hanok village. I recommend to wear hanbok and take a walk in th village. Don’t forget tp enjoy Makguli alcohol drink with popular delicious hanjeongsik.`,
            ja: `韓国文化の原型が最もよく保存されている全羅北道。 韓国の近代建築の旅先としておすすめのスポットで、随所に原型がよく保存されている由緒ある韓屋で宿泊するなど、韓国の文化を体験して楽しむことができる'韓屋村'として知られる全州韓屋村で韓服を着て村を散歩することをお勧めします。 韓国人にもおいしい料理として人気の高い全羅道韓定食と「マッコリ」(韓国伝統清州)もぜひ一緒に楽しむことも忘れないでください。`,
            ko: `한국 문화의 원형이 가장 잘 보존되어 있는 전라북도. 한국의 근대건축여행지로써 추천하는 곳으로 곳곳에 원형이 잘 보존된 유서깊은 한옥에서 숙박하는등 한국의 문화를 체험하고 즐길수 있는  '한옥마을'로 알려진 전주한옥마을에서 한복을 입고 마을을 산책해보시길 추천합니다. 한국인들에게도  맛있는 음식으로 인기가 높은 전라도식 한정식과  '막걸리'(한국 전통 청주)와 함께 즐기는 것도 잊지마세요.`,
        },
        photos: [],
        title: {
            en: `
            Joenlabuk-Do
            `,
            ot: `
            Joenlabuk-Do
            `,
            ko: `
            전라북도
            `,
            chi: `
            全罗北道
            `,
            ja: `
            全羅北道
            `,
        },
    },
    Sejong: {
        description: {
            chi: `韩国的世宗城市防止像美国，德国的首都那样的过度密集化现象。世宗市是为了提高竞争力负责韩国的政治，行政技能的城市。2012年修建的新城市。所以为了开发世宗市的固有的彩色，限制了建设。而且把所有的通信线路堆在地下了。垃圾车也不经过。修建建筑物当时，连影子的方向也设计之后修建的都市。适合想去新都市的游客的都市。`,
            en: `Korea Sejong is charge of politics and administration to prevent from being concentrated of population such as America Washington DC or Berlin in German.They made the new town in 2012. So they district to construct in Sejong like Pairs to develop Sejong’s own color. They installed all communication line in underground. Even garbage trucks don’t pass by. They considered even shadow of building when they build buildings. I recommend this city to tourists who want to visit new town.`,
            ot: `Korea Sejong is charge of politics and administration to prevent from being concentrated of population such as America Washington DC or Berlin in German.They made the new town in 2012. So they district to construct in Sejong like Pairs to develop Sejong’s own color. They installed all communication line in underground. Even garbage trucks don’t pass by. They considered even shadow of building when they build buildings. I recommend this city to tourists who want to visit new town.`,
            ja: `韓国の世宗（セジョン）都市は、米国のワシントンDC。 ドイツのベルリンなどのように首都圏の過密化を防ぎ、都市競争力を高めるための韓国の政治。行政機能を担当する都市で、韓国の行政と政治が集中している2012年から建設されたニュータウンです。そのため、世宗市固有の色彩として開発するため、パリのシャンゼリゼのように建設に制限を設け、都市固有の色彩とデザインのため通信線をすべて地下設置して、ゴミ収集車が通らず、建物を建てた当時影の方向まで考慮して建設した都市です。新都市を見学したい旅行者におすすめの都市です。`,
            ko: `한국의 세종도시는  미국의 워싱턴DC. 독일의 베를린등과 같이 수도권의 과밀화를 예방하고 도시 경쟁력을 높이기 위해 한국의 정치.행정 기능을 담당하는 도시로 한국의 행정과 정치가 집중되어 있는 2012년부터 건설된 뉴타운입니다. 그러므로  세종시 고유의 색채로 개발하기 위해 파리의 샹제리제와 같이 건설에 제한을 두었으며, 도시고유의 색채와 디자인을 위해 통신선을 모두 지하에설치하였으며, 쓰레기 수거차량이 다니지 않으며, 건물을 지을 당시 그림자의 방향까지 감안해서 건설한 도시입니다. 신도시를 답사하고 싶은 여행객들에게 매우 안성맞춤의 도시가 될것입니다.`,
        },
        photos: [],
        title: {
            en: `
            Sejong
            `,
            ot: `
            Sejong
            `,
            ko: `
            세종시
            `,
            chi: `
            世宗市
            `,
            ja: `
            世宗市
            `,
        },
    },
    SouthChungcheong: {
        description: {
            chi: `从公元前到6世纪，繁荣了。韩国古代国家百济的痕迹留在忠清南道。百济的首都公州和扶余位于这儿，所以在这儿可以见面历史的寺庙和文化财。而且西海的广阔的海上面可以看到的太阳肉日和沙滩让游客惊讶。为了欣赏体验海泥，世界各地游客来保宁玩儿。可以体验独特的精炼。`,
            en: `From BC to 6th century, Backje ancient country was prospered. There are still remains of Backje country. The old capital of Gongju and Buyoe are located in there. You can meet historical temples and cultural remains. Moreover, sunset on the west ocean and tideland give tourist wonderful nature.`,
            ot: `From BC to 6th century, Backje ancient country was prospered. There are still remains of Backje country. The old capital of Gongju and Buyoe are located in there. You can meet historical temples and cultural remains. Moreover, sunset on the west ocean and tideland give tourist wonderful nature.`,
            ja: `紀元前~6世紀頃まで栄えた韓国古代国家、百済の足跡をそのままとどめている忠清南道。 百済の首都だった公州と扶余が位置しており、白村江の戦い等歴史的な場所,寺院等と文化財に触れることができます。また、西海の広い海の上に広がる夕焼けと干潟は旅行客に自然の驚異をプレゼントします。 自然の海産物料理とともに、保寧では、世界各地から海の干潟泥のフェスティバルを楽しみに来た旅行客と全身に泥を塗りながら思う存分遊ぶことができるユニークな経験ができます。`,
            ko: `기원전~6세기경까지 번성하였던 한국의 고대국가 백제의 발자취를 고스란히 안고 있는 충청남도. 백제의 수도였던 공주와 부여가 위치해 있어 역사적인 사찰과 문화재를 곳곳에서 만날 수 있습니다. 또한 서해의 넓은 바다 위에 펼쳐지는 노을과 갯벌은 여행객에게 자연의 경이로움을 선사합니다.  보령에서는 세계 각지에서 머드축제를 즐기러 온 여행객들과 온몸에 진흙을 묻히며 마음껏 놀 수 있는 즐기는 색다른 경험을 할 수 있습니다.`,
        },
        photos: [],
        title: {
            en: `
            chhungchengnam-Do
            `,
            ot: `
            chhungchengnam-Do
            `,
            ko: `
            충청남도
            `,
            chi: `
            忠清南道
            `,
            ja: `
            忠清南道
            `,
        },
    },
    SouthGyeongsang: {
        description: {
            chi: `不容易相信，但是大多人为了脱离首尔，他们选着的地方是庆尚道。其中山地观光和海上观光可以一起欣赏的庆尚南道是开东百节的地方。还有在庆尚南道开樱花节和梅花节。韩国美丽的沉降海岸从这儿开始。跟韩国的水产市场和好吃的海鲜料理，智异山的散步一起好吃的饮食会迎接游客们。在被指定为文化遗产的寺庙，可以体验寺庙住宿。追求韩方和各种各样的健康的游客的话，推荐庆尚南道。.`,
            en: `Surprisingly, the most tourist select Gyeongsangdo to escape from Seoul. You can experience mountain and marine tour in Gyeonsangnamdo. cherry blossom festival and ume flower festival and camellia festival are held in there. Clean and beautiful rias coast in Korea starts from here. Korean traditional fish market ,delicious sea food , Jilisan mountain tracking and delicious local food will welcome you. If you prefer heathy oriental medicine and a various of wellness experience such as temple stay in Unesco heritage site, I recommend Gyeonsangnamdo.`,
            ot: `Surprisingly, the most tourist select Gyeongsangdo to escape from Seoul. You can experience mountain and marine tour in Gyeonsangnamdo. cherry blossom festival and ume flower festival and camellia festival are held in there. Clean and beautiful rias coast in Korea starts from here. Korean traditional fish market ,delicious sea food , Jilisan mountain tracking and delicious local food will welcome you. If you prefer heathy oriental medicine and a various of wellness experience such as temple stay in Unesco heritage site, I recommend Gyeonsangnamdo.`,
            ja: `驚くべきことにソウルからの脱出を選んだほとんどの旅行者は慶尚道に向かいます。 その中でも旅行者は山岳と海上観光を同時に楽しめる慶尚南道は、春には白い雪の花が舞う桜祭りと梅祭り、冬には巨済島を赤く染める椿祭りが開かれる場所です。 韓国の清浄で美しいリアス式海岸が始まる場所で、韓国式在来水産市場とおいしい海産物料理、智異山のトレッキングとともに、良い環境で育った食材で、土俗的で美味しい料理が旅行客をお迎えします。 山奥のユネスコから指定された寺院でのテンプルステイなど、韓国式韓方と様々なウェルネス体験で健康を追求する旅行者なら慶尚南道がおすすめです。`,
            ko: `놀랍게도 서울을 탈출하기로 선택한 여행자 대부분은 경상도로 향합니다. 그중에서도 산악과 해상관광을 함께 누릴 수 있는 경상남도는 봄에는 하얀 눈꽃이 흩날리는 벚꽃축제와 매화축제, 겨울에는 거제도를 빨갛게 물들이는 동백축제가 열리는 곳입니다. 한국의 청정하고 아름다운 리아스식해안이 시작되는 곳으로 한국식 재래 수산시장과 맛있는 해산물요리, 지리산의 트래킹과 함께 좋은 환경에서 자란 식재료로 토속적이고 맛있는 음식들이 여행객들을 맞이할것입니다. 깊은 산속에서 유네스코에서 지정받은 사찰에서의 템플스테이등 한국식 한방과 다양한 웰니스체험으로 건강을 추구하는 여행자라면 경상남도를 추천합니다.`,
        },
        photos: [],
        title: {
            en: `
            Gyeonsangnamdo
            `,
            ot: `
            Gyeonsangnamdo
            `,
            ko: `
            경상남도
            `,
            chi: `
            庆尚南道
            `,
            ja: `
            慶尚南道
            `,
        },
    },
    SouthJeolla: {
        description: {
            chi: `全罗南道有韩国的美丽。去南方的话，蓝色的海和365个岛屿的令人惊讶的和谐。海的岛屿都是像有人扔 石头一样的样子。这景色吸引游客。有到顺天湾的地平线染上金黄色的芦田，沿着这芦田往前走的话，容易发现附近的小港口。而且可以欣赏渔村的景色和渔夫的人生。他们钓鱼的鱼料理等等有只在全罗道欣赏的套餐。一边喝茶一边足浴，可以平安的旅行`,
            en: `Jeonlanamdo is full of charm of Korea. If you go to south part, you can sea wonderful harmony between emerald colored ocean and 365 of island. Islands of the ocean catch tourists’ sight since the islands are like someone threw stones to it. Field of reeds are dyed with golden color to the end of horison. If you walk along the nature, you can easily find small port. Also, you can taste life of fisherman and fishes that they caught You can taste local hanjeongsik. You can feel fresh green tea at Boseong green tea farm. Tea and foot bath will make your trip feel more comfortable.`,
            ot: `Jeonlanamdo is full of charm of Korea. If you go to south part, you can sea wonderful harmony between emerald colored ocean and 365 of island. Islands of the ocean catch tourists’ sight since the islands are like someone threw stones to it. Field of reeds are dyed with golden color to the end of horison. If you walk along the nature, you can easily find small port. Also, you can taste life of fisherman and fishes that they caught You can taste local hanjeongsik. You can feel fresh green tea at Boseong green tea farm. Tea and foot bath will make your trip feel more comfortable.`,
            ja: `韓国の魅力がいっぱいの！ もう少し南の方に行くと、エメラルド色の海と365島の素晴らしい調和が見られます。 海のその島々は、まるで誰かが海に石を投げたかのような風景が旅行客を虜にします。順天湾の地平線の果てまで黄金色に染まった葦のような自然を歩いていると、周辺の小さな港が容易に見つかり、漁師の人生と漁村の風景。 彼らが釣った魚料理など、美味しい全羅道のみが韓国料理を味わうことができます。 韓国を代表する緑茶生産地、宝城緑茶畑では、爽やかな緑茶の香りを全身で感じることができます。 お茶を飲みながら暖かい足浴をすることで、旅をよりリラックスさせてくれます。`,
            ko: `한국의 매력이 가득한 전라남도! 남쪽으로 조금 더 가면 에메랄드빛 바다와 365개 섬의 놀라운 조화를 볼 수 있습니다. 바다의 섬들은 마치 누군가가 바다에 돌을 던진 것 같은 풍경이 여행객을 사로잡습니다.순천만의 지평선 끝까지 황금빛으로 물든 갈대밭과 같은 자연을 거닐다 보면 주변에 작은 항구를 쉽게 발견할 수 있고 어부들의 인생과 어촌풍경. 그들이 잡아올린 생선요리등 맛있는 전라도만이 한정식을 맛 볼 수 있습니다.  한국대표 녹차생산지 보성녹차 밭에서는 싱그러운 녹차잎 향을 온몸으로 느낄 수 있습니다. 차를 마시며 따뜻한 족욕을 통해 여행을 더욱 편안하게 만들어 줄 것입니다.`,
        },
        photos: [],
        title: {
            en: `
            Jeonlanamdo
            `,
            ot: `
            Jeonlanamdo
            `,
            ko: `
            전라남도
            `,
            chi: `
            全罗南道
            `,
            ja: `
            全羅南道
            `,
        },
    },
    Ulsan: {
        description: {
            chi: `蔚山广域市位于东海。东亚州中最早可以看到日出的地方。每到新年许多人看日出许愿，祈祷一年的幸运的地方。可以看东海散散步。每到5月举办太和江的春花节，鲸鱼节，泡菜等，制造保存发酵饮食的酱缸节等，各种各样的节吸引游客。 `,
            en: `Ulsan is located at east sea. It’s the first area to see sunrise. So, every new year many people watch sunrise wishing good luck of a year. It’s good palce to take a walk watching east sea. various festivals are held in here, such as spring flower festival, whale festival, Gimchi festival, hot pepper source festival etc making fermented food container festival make tourists happy. `,
            ot: `Ulsan is located at east sea. It’s the first area to see sunrise. So, every new year many people watch sunrise wishing good luck of a year. It’s good palce to take a walk watching east sea. various festivals are held in here, such as spring flower festival, whale festival, Gimchi festival, hot pepper source festival etc making fermented food container festival make tourists happy.  `,
            ja: `蔚山市は東海に位置する都市で、北東アジアで真っ先に日の出が見られるところで、新年にはたくさんの人たちが日の出を見ながら1年の幸運を祈りながら楽しむために集まるところです。青い東海を眺めながら散歩しやすく、5月の太和江春花フェスティバルを皮切りに、韓国唯一のクジラ祭り、キムチ、コチュジャン（唐辛子味噌）などの発酵料理を保存しやすい伝統甕器作りなど、様々な祭りが旅行客を楽しませてくれるところです。 `,
            ko: `울산시는 동해바다에 위치한 도시로써 동북아시아에서 가장 먼저 일출을 볼수 있는 곳으로 신년이면 많은사람들이 일출을 보며 1년의 행운을 기원하며 즐기기 위해 모이는 곳입니다, 동해바다를 바라보며 산책하기 좋으며 5월 태화강 봄꽃 페스티벌을 시작으로 한국 유일의 고래축제, 김치, 고추장등 발효음식을 저장하기 좋은 옹기를 만드는 축제 등 다양한 축제가 여행객을 즐겁게 해주는 곳입니다. `,
        },
        photos: [],
        title: {
            en: `
            Ulsan
            `,
            ot: `
            Ulsan
            `,
            ko: `
            울산광역시
            `,
            chi: `
            蔚山广域市
            `,
            ja: `
            蔚山広域市
            `,
        },
    },
    busan: {
        description: {
            chi: `釜山是韩国第二大城市。也是最大的海上物流城市。釜山有很多好玩的地方。以釜山港为中心， 海上贸易和物流产业发展下来了。许多游客比首都更喜欢这地方。`,
            en: `Busan is second big city in Korea, and it is the biggest marine distribution city. Busan port has been developed as marine trade or distribution industry. Many of the travelers prefers Busan rather than capital after all.   `,
            ot: `Busan is second big city in Korea, and it is the biggest marine distribution city. Busan port has been developed as marine trade or distribution industry. Many of the travelers prefers Busan rather than capital after all.  `,
            ja: `韓国第2の都市であると同時に最大の海上物流都市である釜山は楽しみどころが多く、釜山港を中心に海上貿易および物流産業が発達してきました。 多くの旅行者は, 結局は首都よりもこちらを好まれます`,
            ko: `한국의 가장 남단에 위치하여 한국전쟁때 임시수도였던 부산은 한국 최대의 물류와 교역의 역사깊은 항구도시입니다. 바닷가의 하안선을 따라 고층의 고급맨션과 호텔, 요트, 해변산책로, 맛있는 해산물 요리와 항구도시의 야경등은 여행자들을 매료시킵니다.`,
        },
        photos: [],
        title: {
            en: `
            Busan
            `,
            ot: `
            Busan
            `,
            ko: `
            부산광역시
            `,
            chi: `
            釜山广域市
            `,
            ja: `
            釜山広域市
            `,
        },
    },
    daegu: {
        description: {
            chi: `是庆尚北道的中心城市。人口230万人。是大城市。韩国战争的时候，大邱是韩国的南边的最后防御地区。是北朝鲜和韩国的占地。从近代时代开始棉纱厂发展了。是韩国最大的纤维产生地。是时装的城市。韩国的代表饮食炸鸡的产生地。每到7月举行啤酒和炸鸡节。吸引了游客。医疗观光业有名。大邱是韩方，皮肤，妇产科等的产业发展的城市。医疗观光游客也挺多`,
            en: `It’s a hub of Gyeongsangbukdo. Population is 2.3 million people. It’s big city. When Korean war occurred, Daegu was the most south part of war area. Spinning industry developed from modern times. They produce fiber in here. It’s famous for fashion city. Korean style chicken originated from Deagu. So every July, Beer and chicken festival is held in here. Also, as meca of medical tourism, oriental medicine/ skin care/ obstetrics etc, Wellness industy is well known in this city. There are many medical tourism tourists in this city. `,
            ot: `It’s a hub of Gyeongsangbukdo. Population is 2.3 million people. It’s big city. When Korean war occurred, Daegu was the most south part of war area. Spinning industry developed from modern times. They produce fiber in here. It’s famous for fashion city. Korean style chicken originated from Deagu. So every July, Beer and chicken festival is held in here. Also, as meca of medical tourism, oriental medicine/ skin care/ obstetrics etc, Wellness industy is well known in this city. There are many medical tourism tourists in this city.  `,
            ja: `慶尚北道の中心都市で、人口230万の大都市です。韓国戦争の時、韓国の南側の最後の防御地域で、北朝鮮と韓国の激戦地だったのですが。 近代時代から紡績工場が発達し、韓国最大の繊維生産地でありファッション都市として有名です。韓国の代表料理となった韓国風のタレチキンの発祥地なので、7月のビールやチキンフェスティバルは旅人たちに人気です。また、医療観光のメッカとして韓方/皮膚/産婦人科などウェルネス産業が発達した都市で、医療観光訪問客が多い所でもあります `,
            ko: `경상북도의 중심도시로써 인구230만의 대도시입니다. 625한국전쟁때 한국의 남쪽최후 방어지역으로 북한과 남한의 격전지였습니다만. 근대시대부터 방적공장이  발달했으며 한국 최대의 섬유 생산지이며 패션의 도시로써 유명합니다 한국의 대표음식이 된 한국스타일 양념치킨의 탄생지여서 7월의 맥주와 치킨 페스티벌은 여행객들에게 인기입니다 또한 의료관광의 메카로써 한방/ 피부/ 산부인과등 웰니스 산업이 발달한 도시로 의료관광 방문객이 많은 곳이기도 합니다.`,
        },
        photos: [],
        title: {
            en: `
            Daegu
            `,
            ot: `
            Daegu
            `,
            ko: `
            대구광역시
            `,
            chi: `
            大邱广域市
            `,
            ja: `
            大邱広域市
            `,
        },
    },
    seoul: {
        description: {
            chi: `首尔是一座特别活力的城市， 它向未来不怕往前走 ，同时它保留好了值得骄傲的过去。首尔不但是世界上因特网最快的城市之一，而且是在亚洲最古老的城市之一。有1000年的历史的佛教寺庙上有一座 100 层的高楼大厦。旧的和新的和谐一起，均衡和拌饭之间有都市的旅行。 ——Brad Japhe（福布斯记者）。韩国首都首尔被亚洲游客指定为他们最喜欢的城市。这有原因。首尔是韩国的政治、文化和经济生活的中心。首尔是便利设施和历史遗迹聚在一起的大韩民国的主要旅游景点。首尔是国际商务会议和大展览会经常举办的场所。该城市现在与多家公共组织和民间组织一起合作，为了开发商务和休闲娱乐观光部门。 `,
            en: `Seoul keeps the past history ,but Seoul go toward the future without scare. Seoul is active city. Internet is the fastest in the world, Seoul is the oldest city among them. There is 100 story of skyscraper on buddhist temple, which has 1000 years of history. There is balance between old and new. There is city trip between balance and Bibimbap. - Brad Japhe (sports jounalist). There is a reason why people select Seoul as the best city. Seoul is a center of politics, culture, economics of Korea. Historic remains are also in Seoul. It’s a major tour attraction. International business conference and Convention are often held in Seoul. Publics and privates associate to develop business or leasure tour industry in the Seoul city. `,
            ot: `Seoul keeps the past history ,but Seoul go toward the future without scare. Seoul is active city. Internet is the fastest in the world, Seoul is the oldest city among them. There is 100 story of skyscraper on buddhist temple, which has 1000 years of history. There is balance between old and new. There is city trip between balance and Bibimbap. - Brad Japhe (sports jounalist). There is a reason why people select Seoul as the best city. Seoul is a center of politics, culture, economics of Korea. Historic remains are also in Seoul. It’s a major tour attraction. International business conference and Convention are often held in Seoul. Publics and privates associate to develop business or leasure tour industry in the Seoul city. `,
            ja: `ソウルは誇り高き過去を忠実に守り、未来に向かう道を恐れなく進むダイナミックな都市です。 世界で一番早いインターネットの本場であると同時にアジアで一番古い都市地域の一つであり、千年前の仏教寺院の上に100階建ての高さの高層ビルがそびえています。 古いものと新しいものの調和のとれた調和 バランスとビビンバの間に究極の都市旅行があります。 —Brad Japhe(フォーブス記者)アジアの観光客が定期的に韓国の首都ソウルを最も好む世界都市に選んだのには理由があります。 韓国の政治·文化·経済生活の中心地であるソウルは、利便施設と遺跡が集まっている大韓民国の主要観光地です。 国際ビジネス会議およびコンベンションがよく開かれる場所であり、この都市はビジネスおよびレジャー観光部門の開発のために、様々な公共および民間組織と協力しています。 `,
            ko: `—Brad Japhe(포브스기자) 아시아 관광객들이 정기적으로 한국의 수도 서울을 가장 좋아하는 세계 도시로 꼽는 데에는 이유가 있습니다. 한국의 정치, 문화, 경제생활의 중심지인 서울은 자랑스러운 과거를 충실히 지키면서 미래를 향해 겁 없이 나아가는 역동적인 도시입니다. 세계에서 가장 빠른 인터넷의 본고장이자 아시아에서 가장 오래된 도시 지역 중 하나인 서울에서 한국여행을 시작해 보시죠`,
        },
        photos: [],
        title: {
            en: `
            Seoul
            `,
            ot: `
            Seoul
            `,
            ko: `
            서울특별시
            `,
            chi: `
            首尔特别市
            `,
            ja: `
            ソウル特別市
            `,
        },
    },
    "Custom Tour": {
        description: {
            chi: ``,
            en: ``,
            ot: ``,
            ja: ``,
            ko: ``,
        },
        photos: [],
        title: {
            en: `Custom Tour`,
            ot: `Custom Tour`,
            ko: `Custom Tour`,
            chi: `Custom Tour`,
            ja: `Custom Tour`,
        },
    },
    MICE: {
        description: {
            chi: `Meetings, Incentives Travel, Conventions, Exhibitions/Events`,
            en: `Meetings, Incentives Travel, Conventions, Exhibitions/Events`,
            ot: `Meetings, Incentives Travel, Conventions, Exhibitions/Events`,
            ja: `Meetings, Incentives Travel, Conventions, Exhibitions/Events`,
            ko: `Meetings, Incentives Travel, Conventions, Exhibitions/Events`,
        },
        photos: [],
        title: { en: `MICE`, ot: `MICE`, ko: `MICE`, chi: `MICE`, ja: `MICE` },
    },
    "Driving Tour": {
        description: { chi: ``, en: ``, ot: ``, ja: ``, ko: `` },
        photos: [],
        title: {
            en: `Driving Tour`,
            ot: `Driving Tour`,
            ko: `Driving Tour`,
            chi: `Driving Tour`,
            ja: `Driving Tour`,
        },
    },
    "Medical Tour": {
        description: { chi: ``, en: ``, ot: ``, ja: ``, ko: `` },
        photos: [],
        title: {
            en: `Medical Tour`,
            ot: `Medical Tour`,
            ko: `Medical Tour`,
            chi: `Medical Tour`,
            ja: `Medical Tour`,
        },
    },
    "Local Festival": {
        description: { chi: ``, en: ``, ot: ``, ja: ``, ko: `` },
        photos: [],
        title: {
            en: `Local Festival`,
            ot: `Local Festival`,
            ko: `Local Festival`,
            chi: `Local Festival`,
            ja: `Local Festival`,
        },
    },
};

export enum mapRegion {
    // "dmz" = "dmz",
    "seoul" = "seoul",
    "busan" = "busan",
    "daegu" = "daegu",
    "Incheon" = "Incheon",
    Gwangju = "Gwangju",
    Daejeon = "Daejeon",
    Ulsan = "Ulsan",
    Sejong = "Sejong",
    Jeju = "Jeju",
    SouthGyeongsang = "SouthGyeongsang",
    NorthGyeongsang = "NorthGyeongsang",
    SouthJeolla = "SouthJeolla",
    NorthJeolla = "NorthJeolla",
    SouthChungcheong = "SouthChungcheong",
    NorthChungcheong = "NorthChungcheong",
    Gangwon = "Gangwon",
    Gyeonggi = "Gyeonggi",
    Custom = "Custom Tour",
    Mice = "MICE",
    Driving = "Driving Tour",
    Medical = "Medical Tour",
    LocalFestival = "Local Festival",
}

export const mapRegionArr = enumToArray(mapRegion);
