<template>
  <div id="container">
    <div id="location">
      <h1>광고 영상</h1>
      <ul>
        <li>보자</li>
        <li class="on">광고 영상</li>
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
          <th>국가/언어</th>
          <td><select name="localeCode">
            <option value="">전체</option>
            <option value="ko-KR">국문</option>
            <option value="en-US">영문</option>
            <option value="ja-JP">일문</option>
          </select></td>
          <th>타입</th>
          <td><select name="typeCode">
            <option value="">전체</option>
          </select></td>
        </tr>
        <tr>
          <th>등록일</th>
          <td>
            <input type="text" name="startDate" id="startDate" class="txt" value="2019-04-01"
                   style="width:80px;" readonly> ~
            <input type="text" name="endDate" id="endDate" class="txt" value="2019-07-01"
                   style="width:80px;" readonly>
          </td>
          <th>상태</th>
          <td>
            <label><input name="status" type="radio" value="" checked>전체</label>
            <label><input name="status" type="radio" value="S">공개</label>
            <label><input name="status" type="radio" value="H">비공개</label>
          </td>
        </tr>
        <tr>
          <th>제목</th>
          <td colspan="3">
            <input type="text" class="txt" style="width:200px" name="title" value="">
          </td>
        </tr>
      </table>

      <div class="btnArea ac">
        <input type="submit" id="search" class="btnType1" value="검색">
        <input type="button" id="reset" class="btnType2" value="초기화">
      </div>

      <div class="listHead">
    <span class="fl">
      전체: 15
    </span>
        <span class="fr">
      page: 1 / 1
    </span>
      </div>
    </form>

    <table class="list">
      <colgroup>
        <col width="60">
        <col width="100">
        <col width="100">
        <col width="*">
        <col width="60">
        <col width="60">
        <col width="100">
      </colgroup>
      <thead>
      <tr>
        <th>번호</th>
        <th>국가/언어</th>
        <th>타입</th>
        <th>제목</th>
        <th>제작연도</th>
        <th>공개여부</th>
        <th>등록일</th>
      </tr>
      </thead>
      <tbody>

      <tr>
        <td>15</td>
        <td>국문</td>
        <td>TV 광고</td>
        <td class="al"><a href="form.do?cfSeq=15">상쾌하이 좋네 (15&#034;)</a></td>
        <td>2019</td>
        <td>공개</td>
        <td>2019-05-27</td>
      </tr>

      <tr>
        <td>14</td>
        <td>국문</td>
        <td>TV 광고</td>
        <td class="al"><a href="form.do?cfSeq=14">상쾌하이 좋네 (15&#034;)</a></td>
        <td>2019</td>
        <td>공개</td>
        <td>2019-05-13</td>
      </tr>

      <tr>
        <td>13</td>
        <td>국문</td>
        <td>TV 광고</td>
        <td class="al"><a href="form.do?cfSeq=13">효모라캅니다 (15&#034;)</a></td>
        <td>2019</td>
        <td>공개</td>
        <td>2019-05-13</td>
      </tr>

      <tr>
        <td>12</td>
        <td>국문</td>
        <td>TV 광고</td>
        <td class="al"><a href="form.do?cfSeq=12">상쾌환 X 시언&amp;혜리 (MAKING FILM)</a></td>
        <td>2019</td>
        <td>공개</td>
        <td>2019-05-13</td>
      </tr>

      <tr>
        <td>11</td>
        <td>국문</td>
        <td>TV 광고</td>
        <td class="al"><a href="form.do?cfSeq=11">모두의 술자리 (15&#034;)</a></td>
        <td>2018</td>
        <td>공개</td>
        <td>2019-05-13</td>
      </tr>

      <tr>
        <td>10</td>
        <td>국문</td>
        <td>TV 광고</td>
        <td class="al"><a href="form.do?cfSeq=10">술자리 대세 상쾌환 (15&#034;)</a></td>
        <td>2018</td>
        <td>공개</td>
        <td>2019-05-13</td>
      </tr>

      <tr>
        <td>9</td>
        <td>국문</td>
        <td>TV 광고</td>
        <td class="al"><a href="form.do?cfSeq=9">혜리스타그램 (15&#034;)</a></td>
        <td>2017</td>
        <td>공개</td>
        <td>2019-05-13</td>
      </tr>

      <tr>
        <td>8</td>
        <td>국문</td>
        <td>TV 광고</td>
        <td class="al"><a href="form.do?cfSeq=8">술자리엔 상쾌환 (15&#034;)</a></td>
        <td>2017</td>
        <td>공개</td>
        <td>2019-05-13</td>
      </tr>

      <tr>
        <td>7</td>
        <td>국문</td>
        <td>메이킹 필름</td>
        <td class="al"><a href="form.do?cfSeq=7">술자리엔 상쾌환 (MAKING FILM)</a></td>
        <td>2017</td>
        <td>공개</td>
        <td>2019-05-13</td>
      </tr>

      <tr>
        <td>6</td>
        <td>국문</td>
        <td>TV 광고</td>
        <td class="al"><a href="form.do?cfSeq=6">취중애교 (15&#034;)</a></td>
        <td>2016</td>
        <td>공개</td>
        <td>2019-05-13</td>
      </tr>

      <tr>
        <td>5</td>
        <td>국문</td>
        <td>메이킹 필름</td>
        <td class="al"><a href="form.do?cfSeq=5">취중애교 (MAKING FILM)</a></td>
        <td>2016</td>
        <td>공개</td>
        <td>2019-05-13</td>
      </tr>

      <tr>
        <td>4</td>
        <td>국문</td>
        <td>TV 광고</td>
        <td class="al"><a href="form.do?cfSeq=4">당신이 잠든사이 (15&#034;)</a></td>
        <td>2016</td>
        <td>공개</td>
        <td>2019-05-13</td>
      </tr>

      <tr>
        <td>3</td>
        <td>국문</td>
        <td>메이킹 필름</td>
        <td class="al"><a href="form.do?cfSeq=3">당신이 잠든사이 (MAKING FILM)</a></td>
        <td>2016</td>
        <td>공개</td>
        <td>2019-05-13</td>
      </tr>

      <tr>
        <td>2</td>
        <td>국문</td>
        <td>TV 광고</td>
        <td class="al"><a href="form.do?cfSeq=2">음주전에 찢으세요 (15&#034;)</a></td>
        <td>2015</td>
        <td>공개</td>
        <td>2019-05-13</td>
      </tr>

      <tr>
        <td>1</td>
        <td>국문</td>
        <td>메이킹 필름</td>
        <td class="al"><a href="form.do?cfSeq=1">음주전에 찢어라 (MAKING FILM)</a></td>
        <td>2015</td>
        <td>공개</td>
        <td>2019-05-13</td>
      </tr>


      </tbody>
    </table>

    <div class="btnArea">
      <input type="button" id="regist" class="btnType1" value="등록">
    </div>

    <div class="paging btnTop">
      <img src="@/assets/images/pgPrev2.gif">
      <img src="@/assets/images/pgPrev.gif">
      <strong>1</strong>
      <img src="@/assets/images/pgNext.gif">
      <img src="@/assets/images/pgNext2.gif">

    </div>
  </div>
</template>
<script>
  export default {
    name: 'List'
  }
</script>
