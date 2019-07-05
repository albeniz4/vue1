<template>
  <div id="container">
    <div id="location">
      <h1>따끈따끈 SNS</h1>
      <ul>
        <li>나누자</li>
        <li class="on">따끈따끈 SNS</li>
      </ul>
    </div>
    <form name="searchForm" id="searchForm" method="get">
      <table class="board">
        <colgroup>
          <col width="100">
          <col width="">
          <col width="100">
          <col width="">
        </colgroup>
        <tr>
          <th>채널</th>
          <td><select name="channel">
            <option value="">전체</option>
            <option value="facebook">페이스북</option>
            <option value="instagram">인스타그램</option>
            <option value="youtube">유튜브</option>
          </select></td>
          <th>공개여부</th>
          <td><label><input name="status" type="radio" value="" checked></input>전체</label><label><input
            name="status" type="radio" value="S"></input>공개</label><label><input name="status"
                                                                                 type="radio"
                                                                                 value="H"></input>비공개</label>
          </td>
        </tr>
        <tr>
          <th>포스팅일</th>
          <td colspan="3">
            <input type="text" name="startDate" id="startDate" class="txt" value="2019-01-01"
                   style="width:80px;" readonly> ~
            <input type="text" name="endDate" id="endDate" class="txt" value="2019-07-01"
                   style="width:80px;" readonly>
          </td>
        </tr>
      </table>

      <div class="btnArea ac">
        <input type="submit" id="search" class="btnType1" value="검색">
        <input type="button" id="reset" class="btnType2" value="초기화">
      </div>

      <div class="listHead">
    <span class="fl">
      전체: 118
      <select name="pageSize" onchange="$('#searchForm').submit()">
        <option value="20">20개씩 보기</option>
        <option value="50">50개씩 보기</option>
        <option value="100">100개씩 보기</option>
      </select>
      <span class="btnArea">
        <input type="button" id="updateSNS" class="btnType1" value="SNS 콘텐츠 업데이트">
        <span>마지막 업데이트 일자 : 2019-07-01</span>
      </span>
    </span>
        <span class="fr">
      page: 1 / 6
    </span>
      </div>
    </form>

    <table class="list">
      <colgroup>
        <col width="60">
        <col width="100">
        <col width="200">
        <col width="*">
        <col width="60">
        <col width="100">
      </colgroup>
      <thead>
      <tr>
        <th>번호</th>
        <th>채널</th>
        <th>이미지</th>
        <th>포스팅 문구</th>
        <th>공개여부</th>
        <th>포스팅일</th>
      </tr>
      </thead>
      <tbody>


      <tr>
        <td>118</td>
        <td>instagram</td>
        <td>


          <img src="https://scontent.cdninstagram.com/vp/a476bfb39d3dd84fc01664b8eb0a6b3e/5DBE3771/t51.2885-15/e35/s320x320/64558183_320812172142507_7915183165218067010_n.jpg?_nc_ht=scontent.cdninstagram.com"
               style="width:150px; height:150px;"/>


        </td>
        <td class="al"><a href="form.do?snsSeq=173">별이 빛나는 밤❇
          술자리의 별 상쾌환으로 건배! #눈부심주의 #반짝반짝
          .
          #음주전에톡톡 #상쾌환 #상쾌환스틱형 #별 #별밤 #인싸템 #인싸놀이 #술자리 #건배 #숙취 #숙취해소 #네추럴웨이 #코스맥스엔비티 #삼양사 </a></td>
        <td>공개</td>
        <td>2019-06-26</td>
      </tr>


      <tr>
        <td>117</td>
        <td>facebook</td>
        <td>


          <img src="https://scontent.xx.fbcdn.net/v/t1.0-9/p720x720/64997069_2350826124963983_4112352313140576256_o.jpg?_nc_cat=105&_nc_ht=scontent.xx&oh=8dd4d16710414199b3bc471f344aaa5c&oe=5D86385D"
               style="width:150px; height:150px;"/>


        </td>
        <td class="al"><a href="form.do?snsSeq=172">종강 후 내 모습.jpg
          난 존재만으로 소중하니까...😌

          #대학생 #종강 #여름방학 #할일
          #삼양사 #상쾌환 #숙취해소 #네추럴웨이 </a></td>
        <td>공개</td>
        <td>2019-06-26</td>
      </tr>


      <tr>
        <td>116</td>
        <td>instagram</td>
        <td>


          <img src="https://scontent.cdninstagram.com/vp/395cc59dd448fe283ebb9348719824e6/5DC44869/t51.2885-15/e35/s320x320/65460706_1457665571039950_955739348176946885_n.jpg?_nc_ht=scontent.cdninstagram.com"
               style="width:150px; height:150px;"/>


        </td>
        <td class="al"><a href="form.do?snsSeq=169">상쾌환으로 알 수 있는 한 가지
          성격 급하면 못 기다리고 먼저 뜯는다^^ #그게_바로_나
          .
          #음주전에톡톡 #상쾌환 #성격 #테스트 #술자리 #술그램 #직장인 #회식 #필수템 #인증샷 #숙취 #숙취해소 #삼양사 #네추럴웨이 </a></td>
        <td>공개</td>
        <td>2019-06-24</td>
      </tr>


      <tr>
        <td>115</td>
        <td>facebook</td>
        <td>


          <img src="https://scontent.xx.fbcdn.net/v/t1.0-9/p720x720/65106337_2347140085332587_7710180291683287040_o.jpg?_nc_cat=110&_nc_ht=scontent.xx&oh=5595b39ce424093c033073d707746374&oe=5D8AE6F2"
               style="width:150px; height:150px;"/>


        </td>
        <td class="al"><a href="form.do?snsSeq=166">1학기는 망한거 같고...
          2학기 성적을 알아보자😉
          @난 예상대로 과탑함^^

          #대학생 #1학기 #종강
          #삼양사 #상쾌환 #네추럴웨이 </a></td>
        <td>공개</td>
        <td>2019-06-24</td>
      </tr>


      <tr>
        <td>114</td>
        <td>instagram</td>
        <td>


          <img src="https://scontent.cdninstagram.com/vp/d32b01ea6a20b3663312f7b48d538cfa/5DA7EEE9/t51.2885-15/e35/s320x320/62089007_2655203484508763_6895947663301914553_n.jpg?_nc_ht=scontent.cdninstagram.com"
               style="width:150px; height:150px;"/>


        </td>
        <td class="al"><a href="form.do?snsSeq=170">상쾌함이라는 게 폭발한다☆
          짐승용량 상쾌환 #크로스백
          .
          #음주전에톡톡 #상쾌환 #상쾌환스틱형 #인싸템 #핵인싸 #데일리백 #가방그램 #퇴근룩 #칼퇴 #패피 #숙취해소 #삼양사 #네추럴웨이 #코스맥스엔비티</a></td>
        <td>비공개</td>
        <td>2019-06-21</td>
      </tr>


      <tr>
        <td>113</td>
        <td>facebook</td>
        <td>


          <img src="https://scontent.xx.fbcdn.net/v/t1.0-9/p720x720/64544761_2341936695852926_5562004587012947968_o.jpg?_nc_cat=102&_nc_ht=scontent.xx&oh=5e3b86da30e58ddf0eb926132bcdc697&oe=5D901AAC"
               style="width:150px; height:150px;"/>


        </td>
        <td class="al"><a href="form.do?snsSeq=167">#종강룩 종결자 등장😮
          @이 정도는 챙겨와라^^

          #대학생 #ootd #종강 #술자리 #숙취 #필수템
          #상쾌환 #상쾌환스틱형 #삼양사 #네추럴웨이 #코스맥스엔비티 </a></td>
        <td>공개</td>
        <td>2019-06-21</td>
      </tr>


      <tr>
        <td>112</td>
        <td>facebook</td>
        <td>


          <img src="https://scontent.xx.fbcdn.net/v/t1.0-9/p720x720/64438152_2338607822852480_2226145445745262592_o.jpg?_nc_cat=106&_nc_ht=scontent.xx&oh=1f62553eb4db915c1857e0f4db93d44f&oe=5D8DDDE2"
               style="width:150px; height:150px;"/>


        </td>
        <td class="al"><a href="form.do?snsSeq=168">이번 주 불금에 뭐 먹지?
          새우꼬치🦐 vs. 양꼬치🐑

          #빼먹는재미 #불금 #안주 #술자리 #필수템
          #상쾌환 #삼양사 #네추럴웨이 #숙취해소 </a></td>
        <td>공개</td>
        <td>2019-06-20</td>
      </tr>


      <tr>
        <td>111</td>
        <td>instagram</td>
        <td>


          <img src="https://scontent.cdninstagram.com/vp/87041fd7d41e3cb532bb21d086ff0613/5DC17874/t51.2885-15/e35/s320x320/64837610_125867185297174_9094604393416030038_n.jpg?_nc_ht=scontent.cdninstagram.com"
               style="width:150px; height:150px;"/>


        </td>
        <td class="al"><a href="form.do?snsSeq=171">한강에서 캔맥 먹고 상쾌환 받고!
          by. @osoondosoo (5월 한강 프로모션 우수 후기자👏)
          상쾌환은 9월에 다시 찾아갈 테니 많이 기대해주세요!
          .
          #음주전에톡톡 #상쾌환 #상쾌환스틱형 #한강 #한강공원 #캔맥 #맥주 #숙취 #숙취해소 #삼양사 #코스맥스엔비티 #네추럴웨이 </a></td>
        <td>공개</td>
        <td>2019-06-19</td>
      </tr>


      <tr>
        <td>110</td>
        <td>instagram</td>
        <td>


          <img src="https://scontent.cdninstagram.com/vp/cfc61c09d5db3e576232486a7a351ffc/5D85D6B4/t51.2885-15/e35/s320x320/61681467_2275826332499711_314155980983458789_n.jpg?_nc_ht=scontent.cdninstagram.com"
               style="width:150px; height:150px;"/>


        </td>
        <td class="al"><a href="form.do?snsSeq=163">[홈페이지 EVENT]
          상쾌환 5000만포 판매 돌파 기념 🎊
          축하 댓글 남기고, 푸짐한 선물 받아가자!
          .
          ✔기간: 2019.06.14(금)~06.30(일)
          ✔당첨자발표: 7월 중 홈페이지에서 발표
          ✔참여방법: 프로필 하단 링크 클릭 후,
          상쾌환 홈페이지에서 축하 댓글 남기기
          .
          www.easytomorrow.com
          .
          #음주전에톡톡 #상쾌환 #상쾌환스틱형 #5000만포 #축하 #이벤트 #경품 #여행 #에어팟 #삼양사 #코스맥스엔비티 #네추럴웨이</a></td>
        <td>비공개</td>
        <td>2019-06-14</td>
      </tr>


      <tr>
        <td>109</td>
        <td>facebook</td>
        <td>


          <img src="https://scontent.xx.fbcdn.net/v/t1.0-9/p720x720/64323394_2329414770438452_7624930538091970560_o.png?_nc_cat=110&_nc_ht=scontent.xx&oh=bab96e45d2ed61aef450d228ff3819f0&oe=5D7B8816"
               style="width:150px; height:150px;"/>


        </td>
        <td class="al"><a href="form.do?snsSeq=160">🎉상쾌환 5000만포 판매 돌파 EVENT🎉
          지금 당장 상쾌환 홈페이지에서 축하 댓글 달고
          여행상품권, 에어팟 등 다양한 경품 받아 가자💙

          ✔기간: 2019년 6월 14일(금) ~ 6월 30일(일)
          ✔발표: 2019년 7월 중 홈페이지 [당첨자 발표]에서 발표
          ✔참여 방법: 상쾌환 홈페이지 접속 - #즐기자 - 진행중인 이벤트 - 5000만포 판매 축하 댓글 달기 👉 https://bit.ly/2wU3dIo

          🎁경품🎁
          👉1등: 여행상품권 100만원 + 상쾌환 10개입 + 상쾌환 스틱형 10개입 (1명)
          👉2등: 에어팟 2세대 + 상쾌환 10개입 + 상쾌환 스틱형 10개입 (3명)
          👉3등: 상쾌환 스틱형 10개입 (10명)
          👉4등: 상쾌환 10개입 (20명)
          * 제세공과금은 당첨자 부담입니다.

          #상쾌환 #홈페이지 #5천만포돌파 #축하 #이벤트 #에어팟 #경품
          #삼양사 #네추럴웨이 #상쾌환스틱형 #코스맥스엔비티</a></td>
        <td>비공개</td>
        <td>2019-06-14</td>
      </tr>


      <tr>
        <td>108</td>
        <td>instagram</td>
        <td>


          <img src="https://scontent.cdninstagram.com/vp/1540ef4584c99c2be42c2cdb9e05545d/5D8E95F2/t51.2885-15/e35/s320x320/61862885_345533146160944_3710963003150767546_n.jpg?_nc_ht=scontent.cdninstagram.com"
               style="width:150px; height:150px;"/>


        </td>
        <td class="al"><a href="form.do?snsSeq=164">🎉상쾌환 공식 홈페이지 오픈🎉
          🔎포털사이트에 [상쾌환] 검색해서 놀러가자!
          .
          www.easytomorrow.com
          .
          #음주전에톡톡 #상쾌환 #상쾌환스틱형 #홈페이지 #오픈 #숙취 #숙취해소 #삼양사 #네추럴웨이 #코스맥스엔비티</a></td>
        <td>비공개</td>
        <td>2019-06-10</td>
      </tr>


      <tr>
        <td>107</td>
        <td>facebook</td>
        <td>


          <img src="https://scontent.xx.fbcdn.net/v/t1.0-9/p720x720/62207903_2322907607755835_8621774984156545024_o.png?_nc_cat=101&_nc_ht=scontent.xx&oh=a2d57f37ad1a46e3a7dc11c1a7e484b9&oe=5D871930"
               style="width:150px; height:150px;"/>


        </td>
        <td class="al"><a href="form.do?snsSeq=161">저 새집 장만했어요🏠
          다들 집들이 오세요~*^^*
          www.easytomorrow.com

          #상쾌환 #홈페이지 #오픈 #상쾌환의모든것
          #삼양사 #숙취해소 #네추럴웨이 #코스맥스엔비티</a></td>
        <td>비공개</td>
        <td>2019-06-10</td>
      </tr>


      <tr>
        <td>106</td>
        <td>instagram</td>
        <td>


          <img src="https://scontent.cdninstagram.com/vp/e11727b4ec97a1f99277985a8eabcd32/5D0A0D17/t51.2885-15/e35/s320x320/61554327_2364026070481255_1064705149122849948_n.jpg?_nc_ht=scontent.cdninstagram.com"
               style="width:150px; height:150px;"/>


        </td>
        <td class="al"><a href="form.do?snsSeq=165">상쾌하이 좋네!
          상쾌환이 좋네! #혜리좋아 #이시언좋아
          .
          상쾌환 NEW TVCF 📺
          #혜리 #이시언 #꿀케미 상쾌하이 좋네 편!
          .
          #음주전에톡톡 #상쾌환 #상쾌환스틱형 #TVCF #광고 #케미 #여신 #배우 #술자리 #숙취 #숙취해소 #삼양사 #네추럴웨이 #코스맥스엔비티</a></td>
        <td>비공개</td>
        <td>2019-06-03</td>
      </tr>


      <tr>
        <td>105</td>
        <td>facebook</td>
        <td>


          <img src="https://scontent.xx.fbcdn.net/v/t15.5256-10/60359141_2378123099129396_1528904517951684608_n.jpg?_nc_cat=105&_nc_ht=scontent.xx&oh=0a45f7a88fdce89dfea8fcc49c98b6bb&oe=5D85F043"
               style="width:150px; height:150px;"/>


        </td>
        <td class="al"><a href="form.do?snsSeq=162">선배님☺️ 요즘 다들 왜
          상쾌환~ 상쾌환~ 하는지 아십니까?
          &#034;아! 그... 그 뭐라 카던데!!&#034;

          #상쾌환 #NEW #TVCF #혜리 #이시언 #케미
          #삼양사 #네추럴웨이 #코스맥스엔비티 #숙취해소 </a></td>
        <td>공개</td>
        <td>2019-06-01</td>
      </tr>


      <tr>
        <td>104</td>
        <td>instagram</td>
        <td>


          <img src="https://scontent.cdninstagram.com/vp/9f6bee35b9c32c2f70d4c0f1e2790f9e/5D7A40F1/t51.2885-15/e35/s320x320/60217363_164228127934796_4015546433164298033_n.jpg?_nc_ht=scontent.cdninstagram.com"
               style="width:150px; height:150px;"/>


        </td>
        <td class="al"><a href="form.do?snsSeq=156">친구들과 생일 파티🎉
          일단 상쾌환 먹고 시작! #텐션업 #달리자
          by. @r_vd_happy
          .
          #음주전에톡톡 #상쾌환 #생일파티 #생일 #생파 #HBD #베프 #친구 #술자리 #모임 #숙취 #숙취해소 #삼양사 #네추럴웨이 </a></td>
        <td>공개</td>
        <td>2019-05-31</td>
      </tr>


      <tr>
        <td>103</td>
        <td>instagram</td>
        <td>


          <img src="https://scontent.cdninstagram.com/vp/403208eff39457e0537732475082a494/5D89E4E1/t51.2885-15/e35/s320x320/60586987_145746633227352_5791779143179547717_n.jpg?_nc_ht=scontent.cdninstagram.com"
               style="width:150px; height:150px;"/>


        </td>
        <td class="al"><a href="form.do?snsSeq=157">소주를 부르는 조개구이
          상쾌환을 부르는 소주 #꿀조합 #다좋아
          by. @jjooheeee
          .
          #음주전에톡톡 #상쾌환 #조개구이 #맛스타그램 #소주 #소주한잔 #술안주 #먹스타그램 #베프 #술자리 #숙취 #숙취해소 #삼양사 #네추럴웨이 </a></td>
        <td>공개</td>
        <td>2019-05-29</td>
      </tr>


      <tr>
        <td>102</td>
        <td>instagram</td>
        <td>


          <img src="https://scontent.cdninstagram.com/vp/b360cd7154e7169d7107b0d249149752/5D7BFA0A/t51.2885-15/e35/s320x320/60702861_471756270243113_3637981291210989399_n.jpg?_nc_ht=scontent.cdninstagram.com"
               style="width:150px; height:150px;"/>


        </td>
        <td class="al"><a href="form.do?snsSeq=158">또 먹고 싶다...😭
          연어 말고 상쾌환 #맛있어서_2개_먹은_건_안비밀
          by. @oisigram
          .
          #음주전에톡톡 #상쾌환 #상쾌환스틱형 #망고맛 #JMT #맛스타그램 #술자리 #술그램 #연어 #연어사시미 #사케 #숙취 #숙취해소 #삼양사 #코스맥스엔비티 </a></td>
        <td>공개</td>
        <td>2019-05-24</td>
      </tr>


      <tr>
        <td>101</td>
        <td>facebook</td>
        <td>


          <img src="https://scontent.xx.fbcdn.net/v/t1.0-9/p720x720/60799312_2290290537684209_8205380889811615744_o.jpg?_nc_cat=106&_nc_ht=scontent.xx&oh=c3a3664880d504386cec0097c92c35c0&oe=5D9CDB89"
               style="width:150px; height:150px;"/>


        </td>
        <td class="al"><a href="form.do?snsSeq=154">[EVENT] 야구 중계 인증샷 이벤트
          야구 중계 속 상쾌환을 찾아라!
          @야 이거 인증샷 올리고 치킨 받자ㄱㄱ

          ✔기간: 2019년 5월 23일(목) ~ 5월 26일(일)
          ✔발표: 2019년 5월 27일(월)
          ✔참여 방법
          👉STEP.1: 프로야구 중계를 보다가 상쾌환 가상광고가 나오면 해당 화면을 📷캡쳐 하거나 📷사진을 찍는다
          (해당 채널: KBS N SPORTS, MBC SPORTS+)
          👉STEP.2: 찍은 인증샷을 댓글로 단다
          ★상쾌환 페이스북 페이지 좋아요는 필수★
          ✔경품: 치킨 기프티콘 (2명)

          #상쾌환 #혜리 #야구 #치킨 #인증샷 #이벤트
          #삼양사 #네추럴웨이 #숙취해소 </a></td>
        <td>공개</td>
        <td>2019-05-23</td>
      </tr>


      <tr>
        <td>100</td>
        <td>instagram</td>
        <td>


          <img src="https://scontent.cdninstagram.com/vp/02b5d42c637dfefe26692550c32d57a1/5D7D6C3C/t51.2885-15/e35/s320x320/59649402_2078997559059504_7257726648448612690_n.jpg?_nc_ht=scontent.cdninstagram.com"
               style="width:150px; height:150px;"/>


        </td>
        <td class="al"><a href="form.do?snsSeq=159">📣한강에 상쾌환이 뜬다📣
          @ ____ 야, 불금 불토에 뭐해?
          한강가서 상쾌환과 경품 받자!
          .
          ✔일정 및 장소
          - 5/24(금) 18시~23시 여의도 한강공원
          - 5/25(토) 17시~23시 뚝섬 한강공원
          - 5/31(금) 18시~23시 여의도 한강공원
          - 6/1(토) 17시~23시 뚝섬 한강공원
          ✔현장 이벤트 경품
          - 상쾌환, 휴대용방석, 모기퇴치팔찌 등
          ✔우수 인증샷 이벤트 경품
          - 상쾌환 10개입 (1명)
          .
          #음주전에톡톡 #상쾌환 #한강 #야식 #맥주 #한강공원 #불금 #불토 #이벤트 #경품 #숙취 #숙취해소 #삼양사 #네추럴웨이 </a></td>
        <td>공개</td>
        <td>2019-05-22</td>
      </tr>


      <tr>
        <td>99</td>
        <td>facebook</td>
        <td>


          <img src="https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/60556905_2289990934380836_3862182863424192512_o.jpg?_nc_cat=106&_nc_ht=scontent.xx&oh=b42bf4f9f557eceeac96dc43c8dcec92&oe=5D8A715D"
               style="width:150px; height:150px;"/>


        </td>
        <td class="al"><a href="form.do?snsSeq=155">📢 한강에 상쾌환이 뜬다! 📢
          @불금 불토 한강가서 상쾌환 등 경품 받자😍

          ✔일정 및 장소
          - 5/24(금) 18~23시 여의도 한강공원
          - 5/25(토) 17~23시 뚝섬 한강공원
          - 5/31(금) 18~23시 여의도 한강공원
          - 6/1(토) 17~23시 뚝섬 한강공원
          ✔현장 경품: 상쾌환, 휴대용방석, 모기퇴치팔찌 등

          인스타에 #상쾌환 태그와 함께 후기를 올리면
          추첨을 통해 상쾌환10개입을 드려요!👍

          #한강 #불금 #불토 #술자리필수템
          #삼양사 #네추럴웨이 #숙취해소 </a></td>
        <td>비공개</td>
        <td>2019-05-22</td>
      </tr>


      </tbody>
    </table>

    <div class="paging btnTop">
      <img src="@/assets/images/pgPrev2.gif">
      <img src="@/assets/images/pgPrev.gif">
      <strong>1</strong>
      <a href="/task/sns/list.do?page=2">2</a>
      <a href="/task/sns/list.do?page=3">3</a>
      <a href="/task/sns/list.do?page=4">4</a>
      <a href="/task/sns/list.do?page=5">5</a>
      <a href="/task/sns/list.do?page=2">
        <img src="@/assets/images/pgNext.gif" alt="다음 페이지">
      </a>
      <a href="/task/sns/list.do?page=6">
        <img src="@/assets/images/pgNext2.gif" alt="다음 10페이지">
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Index'
  }
</script>
