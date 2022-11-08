import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeOffer } from "store/index.js";

function Offer() {
  const dispatch = useDispatch();
  const [offers, setOffers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setOffers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios
          .get("https://phpup.xgolf.com/outtour/item_list.php")
          .then((response) => {
            setOffers(response.data);
            dispatch(changeOffer(response.data));
          });
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!offers) return null;
}

export default Offer;
