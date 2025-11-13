import React from "react";
import { useParams } from "react-router-dom";
import * as D from "../../styles/StyledDetail";
import { mock } from "../main/Component/mockData";

const Detail = () => {
  const { desertionNo } = useParams();

  const item = mock.find((v) => String(v.desertionNo) === String(desertionNo));

  //   API연결 코드, import, item 지우기
  //   const [item, setItem] = useState(null);   // 상세 데이터 저장
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //   const fetchDetail = async () => {
  //     const res = await axios.get(`/api/animals/${desertionNo}`);
  //     setItem(res.data);
  //   };
  //   fetchDetail();
  // }, [desertionNo]);
  //   if (loading) return <div>로딩중</div>;
  //   if (!item) return <div>데이터가 없음</div>;

  if (!item) {
    return <div>데이터가 없음</div>;
  }
  return (
    <D.Container>
      <D.Box>
        <D.MainImg src={item.images} alt={item.breedName} />
        <D.DetailBox>
          {/* 기본정보 표시 */}
          <D.BagicInfo>
            <D.DesertionNo>보호번호 {item.desertionNo}</D.DesertionNo>
            <D.DetailInfo>
              {item.age} {item.weight} {item.foundDate} {item.shelterName}
            </D.DetailInfo>
            <D.Mark>{item.specialMark}</D.Mark>
          </D.BagicInfo>
          <D.CheckList>
            <D.BoxInfo>{item.breedName}</D.BoxInfo>
            <D.BoxInfo>{item.neuterStatus}</D.BoxInfo>
            <D.BoxInfo>{item.status}</D.BoxInfo> {/* 보호중 상태 표시?*/}
          </D.CheckList>
          <D.BtnWrapper>
            {/* 건강 정보 상태 */}
            <D.BtnBox>
              💊 건강 정보 상태 <img src="../images/components/rightBtn.svg" />
            </D.BtnBox>
            {/* 성격 메모 */}
            <D.BtnBox>
              💕 성격 메모 <img src="../images/components/rightBtn.svg" />
            </D.BtnBox>
            {/* 보호소 페이지 바로가기 */}
            <D.BtnBox>
              🎀 보호소 페이지 바로가기{" "}
              <img src="../images/components/rightBtn.svg" />
            </D.BtnBox>
          </D.BtnWrapper>
        </D.DetailBox>
      </D.Box>
    </D.Container>
  );
};

export default Detail;
