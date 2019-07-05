<template>
  <div id="container">
    <div id="location">
      <h1>공지사항</h1>
      <ul>
        <li>기본 관리</li>
        <li class="on">공지사항</li>
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
          <th>등록일</th>
          <td>
            <input type="text" name="startDate" id="startDate" class="txt" value="2019-04-01"
                   style="width:80px;" readonly> ~
            <input type="text" name="endDate" id="endDate" class="txt" value="2019-07-01"
                   style="width:80px;" readonly>
          </td>
        </tr>
        <tr>
          <th>제목</th>
          <td>
            <input type="text" class="txt" style="width:200px" name="title" value="">
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
      전체: 0
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
        <col width="*">
        <col width="60">
        <col width="100">
      </colgroup>
      <thead>
      <tr>
        <th>번호</th>
        <th>국가/언어</th>
        <th>제목</th>
        <th>공개여부</th>
        <th>등록일</th>
      </tr>
      </thead>
      <tbody>


      <tr>
        <td class="ac" colspan="5">+++ 조회된 결과가 없습니다. +++</td>
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
