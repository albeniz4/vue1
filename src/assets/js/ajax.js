


// 패널티 내역 Ajax List 취득
function getAjaxPenaltyList(page, userSeq, callBackFnc){
	
	var paramData = {
			"page" : page,
			"userSeq" : userSeq
	};
	
	$.post('getAjaxPenaltyList.do', paramData, function(html){
		$("#detailPenaltyCont").html(html);		
		
		//처리완료후 실행할 함수가 있다면..
		if ( typeof callBackFnc == "function"){
			callBackFnc();
		}
	})
}	
	
function getHashParamPenaltyList(userSeq){
    if(document.location.hash){
    	try { 
	        var searchHashParam = {
	        		"page"	: '1',
	        		"userSeq" : userSeq
	        }
	        
			$.post('getAjaxPenaltyList.do', searchHashParam, function(html){
				$("#detailPenaltyCont").html(html);
			});					
    	} catch (e){
    		getAjaxPenaltyList('1', userSeq); // 핫딜리스트 가져오기
    	}
    } else { 
    	getAjaxPenaltyList('1', userSeq); // 핫딜리스트 가져오기
    }
}

// 등업 내역 Ajax List 취득
function getAjaxGradeList(page, userSeq, callBackFnc){
	
	var paramData = {
			"page" : page,
			"userSeq" : userSeq
	};
	
	$.post('getAjaxGradeList.do', paramData, function(html){
		$("#detailGradeCont").html(html);		
		
		//처리완료후 실행할 함수가 있다면..
		if ( typeof callBackFnc == "function"){
			callBackFnc();
		}
	})
}	
	
function getHashParamGradeList(userSeq){
    if(document.location.hash){
    	try { 
	        var searchHashParam = {
	        		"page"	: '1',
	        		"userSeq" : userSeq
	        }
	        
			$.post('getAjaxPenaltyList.do', searchHashParam, function(html){
				$("#detailGradeCont").html(html);
			});					
    	} catch (e){
    		getAjaxGradeList('1', userSeq); // 핫딜리스트 가져오기
    	}
    } else { 
    	getAjaxGradeList('1', userSeq); // 핫딜리스트 가져오기
    }
}

// 쪽지 내역 Ajax List 취득
function getAjaxMessageList(page, userSeq, callBackFnc){
	
	var paramData = {
			"page" : page,
			"userSeq" : userSeq
	};
	
	$.post('getAjaxMessageList.do', paramData, function(html){
		$("#detailMessageCont").html(html);		
		
		//처리완료후 실행할 함수가 있다면..
		if ( typeof callBackFnc == "function"){
			callBackFnc();
		}
	})
}	
	
function getHashParamMessageList(userSeq){
    if(document.location.hash){
    	try { 
	        var searchHashParam = {
	        		"page"	: '1',
	        		"userSeq" : userSeq
	        }
	        
			$.post('getAjaxMessageList.do', searchHashParam, function(html){
				$("#detailMessageCont").html(html);
			});					
    	} catch (e){
    		getAjaxMessageList('1', userSeq); // 핫딜리스트 가져오기
    	}
    } else { 
    	getAjaxMessageList('1', userSeq); // 핫딜리스트 가져오기
    }
}

//닉네임 내역 Ajax List 취득
function getAjaxNickNameList(page, userSeq, callBackFnc){
	
	var paramData = {
			"page" : page,
			"userSeq" : userSeq
	};
	
	$.post('getAjaxNickNameList.do', paramData, function(html){
		$("#detailNickNameCont").html(html);		
		
		//처리완료후 실행할 함수가 있다면..
		if ( typeof callBackFnc == "function"){
			callBackFnc();
		}
	})
}	
	
function getHashParamNickNameList(userSeq){
    if(document.location.hash){
    	try { 
	        var searchHashParam = {
	        		"page"	: '1',
	        		"userSeq" : userSeq
	        }
	        
			$.post('getAjaxNickNameList.do', searchHashParam, function(html){
				$("#detailNickNameCont").html(html);
			});					
    	} catch (e){
    		getAjaxNickNameList('1', userSeq); // 핫딜리스트 가져오기
    	}
    } else { 
    	getAjaxNickNameList('1', userSeq); // 핫딜리스트 가져오기
    }
}