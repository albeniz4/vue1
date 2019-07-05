<template>
  <div id="container">
    <div id="location">
      <h1>이벤트 관리</h1>
      <ul>
        <li>이벤트/판매처</li>
        <li class="on">이벤트 관리</li>
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
          <th>채널</th>
          <td>
            <select name="channelCode">
              <option value="">전체</option>
              <option value="web">웹사이트</option>
              <option value="sns">SNS</option>
              <option value="cam">바른음주문화 캠페인</option>
              <option value="rou">룰렛 이벤트</option>
              <option value="cmt">댓글 이벤트</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>시작일</th>
          <td>
            <input type="text" name="startDate" id="startDate" class="txt" value="2019-04-01"
                   style="width:80px;" readonly> ~
            <input type="text" name="endDate" id="endDate" class="txt" value="2019-10-01"
                   style="width:80px;" readonly>
          </td>
          <th>진행상태</th>
          <td>
            <select name="progressStatus">
              <option value="">전체</option>
              <option value="ready">대기</option>
              <option value="active">진행중</option>
              <option value="close">종료</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>이벤트명</th>
          <td>
            <input type="text" class="txt" style="width:200px" name="name" value="">
          </td>
          <th>상태</th>
          <td><label><input name="status" type="radio" value="" checked></input>전체</label><label><input
            name="status" type="radio" value="S"></input>공개</label><label><input name="status"
                                                                                 type="radio"
                                                                                 value="H"></input>비공개</label>
          </td>
        </tr>
      </table>

      <div class="btnArea ac">
        <input type="submit" id="search" class="btnType1" value="검색">
        <input type="button" id="reset" class="btnType2" value="초기화">
      </div>

      <div class="listHead">
    <span class="fl">
      전체: 3
    </span>
        <span class="fr">
      page: 1 / 1
    </span>
      </div>
    </form>

    <table class="list">
      <colgroup>
        <col width="60">
        <col width="60">
        <col width="120">
        <col width="*">
        <col width="160">
        <col width="120">
        <col width="60">
        <col width="90">
      </colgroup>
      <thead>
      <tr>
        <th>번호</th>
        <th>국가/언어</th>
        <th>채널</th>
        <th>이벤트명</th>
        <th>진행기간</th>
        <th>진행상태</th>
        <th>공개여부</th>
        <th>등록일</th>
      </tr>
      </thead>
      <tbody>

      <tr>
        <td>4</td>
        <td>국문</td>
        <td>댓글 이벤트</td>
        <td class="al"><a href="form.do?eventSeq=4">상쾌환 5000만포 판매 돌파! 축하 댓글 이벤트</a></td>
        <td>2019.06.14~2019.06.30</td>
        <td>
          종료


          <input type="button" class="btnType2" value="당첨자 등록" onclick="prize(4, 'regist');">


        </td>
        <td>공개</td>
        <td>2019-06-13</td>
      </tr>

      <tr>
        <td>2</td>
        <td>국문</td>
        <td>바른음주문화 캠페인</td>
        <td class="al"><a href="form.do?eventSeq=2">상쾌환 바른음주문화 지키미 캠페인 </a></td>
        <td>2019.05.23~2019.06.04</td>
        <td>
          종료


          <input type="button" class="btnType2" value="당첨자 등록" onclick="prize(2, 'regist');">


        </td>
        <td>비공개</td>
        <td>2019-05-23</td>
      </tr>

      <tr>
        <td>1</td>
        <td>국문</td>
        <td>룰렛 이벤트</td>
        <td class="al"><a href="form.do?eventSeq=1">7월 상쾌환데이</a></td>
        <td>2019.05.23~2019.06.08</td>
        <td>
          종료


          <input type="button" class="btnType2" value="당첨자 등록" onclick="prize(1, 'regist');">


        </td>
        <td>비공개</td>
        <td>2019-05-23</td>
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
