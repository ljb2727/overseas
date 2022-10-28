import Hangul from "hangul-js";
const offer_list = [
  {
    id: "1",
    label: "도쿄 윈저파크 컨트리클럽",
    price: 1200,
    private: false,
    country: "일본",
    region: "이바라키",
  },
  {
    id: "2",
    label: "퍼시픽 블루 골프 리조트",
    price: 800,
    private: false,
    country: "일본",
    region: "오이타",
  },
  {
    id: "3",
    label: "후지야 호텔 회원권",
    price: 1300,
    private: false,
    country: "일본",
    region: "사이타마",
  },
  {
    id: "4",
    label: "HK치구사 컨트리클럽",
    price: 1100,
    private: true,
    country: "일본",
    region: "가고시마",
  },
  {
    id: "5",
    label: "조양 컨트리클럽",
    price: 1100,
    private: true,
    country: "일본",
    region: "후쿠오카",
  },
];

offer_list.map((e) => (e.chosung = Hangul.disassemble(e.label).join("")));

export default offer_list;
