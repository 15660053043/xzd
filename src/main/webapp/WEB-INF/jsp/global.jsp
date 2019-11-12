<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${request.contextPath }"></c:set>
<c:set var="sr" value="${request.contextPath }/static"></c:set>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8;" />
<script language="JavaScript" src="${sr }/js/jquery.js"></script>
<script type="text/javascript" src="${sr }/plugs/layer/layer.js"></script>
<script type="text/javascript" src="${sr }/plugs/utils/common.js"></script>
<script type="text/javascript">
var basePath = '${ctx}';
var responseStatus = {SUCCESS:0,FAILD:1};
</script>
