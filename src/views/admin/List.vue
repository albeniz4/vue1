<template>
  <div id="container">
    <div id="location">
      <h1>Admin 관리</h1>
      <ul><li>권한관리</li><li class="on">Admin 관리</li></ul>
    </div>

    <form name="searchForm" id="searchForm" method="get">
      <table class="board">
        <colgroup>
          <col width="100">
          <col width="">
          <col width="100">
          <col width="">
          <col width="100">
          <col width="">
        </colgroup>
        <tr>
          <th>아이디</th>
          <td>
            <input type="text" name="adminId" class="txt" style="width:90%" value="">
          </td>
          <th>이름</th>
          <td>
            <input type="text" name="name" class="txt" style="width:90%" value="">
          </td>
          <th>상태</th>
          <td>
            <label><input name="status" type="radio" value="S"></input>활성</label><label><input name="status" type="radio" value="H"></input>비활성</label>
          </td>
        </tr>
      </table>

      <div class="btnArea ac">
        <input type="submit" id="search" class="btnType1" value="검색">
        <input type="button" id="reset" class="btnType2" value="초기화">
      </div>

      <div class="listHead">
    <span class="fl">
      전체: 1
    </span>
        <span class="fr">
      page: 1 / 1
    </span>
      </div>
    </form>

    <table class="list">
      <colgroup>
        <col width="">
        <col width="">
        <col width="">
        <col width="">
      </colgroup>
      <thead>
      <tr>
        <th>아이디</th>
        <th>이름</th>
        <th>상태</th>
        <th>등록일</th>
      </tr>
      </thead>
      <tbody>

      <tr>
        <td><a href="form.do?adminId=super">super</a></td>
        <td><a href="form.do?adminId=super">관리자</a></td>
        <td>활성</td>
        <td>2018-04-04</td>
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
