import Hangul from "hangul-js";
const offer_list = [
  {
    id: "1",
    label: "도쿄 윈저파크 컨트리클럽",
    price: 1200,
    private: false,
    country: "일본",
    region: "이바라키",
    img: "https://image.xgolf.com/file/2022/1021/202210215309221leesy.jpg/dims/resize/311x161",
  },
  {
    id: "2",
    label: "퍼시픽 블루 골프 리조트",
    price: 800,
    private: false,
    country: "일본",
    region: "오이타",
    img: "https://image.xgolf.com/file/2022/1021/2022102153058641leesy.jpg/dims/resize/311x161",
  },
  {
    id: "3",
    label: "후지야 호텔 회원권",
    price: 1300,
    private: false,
    country: "일본",
    region: "사이타마",
    img: "https://image.xgolf.com/file/2022/0926/2022092632412461leesy.jpg/dims/resize/311x161",
  },
  {
    id: "4",
    label: "HK치구사 컨트리클럽",
    price: 1100,
    private: true,
    country: "일본",
    region: "가고시마",
    img: "https://image.xgolf.com/file/2014/0407/20140407183403668060.jpg/dims/resize/330x330",
  },
  {
    id: "5",
    label: "조양 컨트리클럽",
    price: 1100,
    private: true,
    country: "일본",
    region: "후쿠오카",
    img: "https://image.xgolf.com/file/2014/0326/20140326171854602098.jpg/dims/resize/330x330",
  },
  {
    id: "6",
    label: "테스트 ",
    price: 1100,
    private: true,
    country: "일본",
    region: "후쿠오카",
    img: "https://image.xgolf.com/file/2016/1111/20161111095054627090.jpg/dims/resize/330x330",
  },
];

offer_list.map((e) => (e.chosung = Hangul.disassemble(e.label).join("")));

export default offer_list;
