import Hangul from "hangul-js";

const offerList = [];

offerList.map((e) => (e.chosung = Hangul.disassemble(e.label).join("")));
offerList.map((e) => (e.commaPrice = Number(e.price).toLocaleString("ko-KR")));

export default offerList;
