function exeData(num, type) {
    loadData(num);
    loadpage();
}
function loadpage() {
    var myPageCount = parseInt($("#PageCount").val());
    var myPageSize = parseInt($("#PageSize").val());
    var countindex = myPageCount % myPageSize > 0 ? (myPageCount / myPageSize) +1 : (myPageCount  / myPageSize);
    $("#countindex").val(countindex);

    $.jqPaginator('#pagination', {
        totalPages: parseInt($("#countindex").val()),
        visiblePages: parseInt($("#visiblePages").val()),
        currentPage: 1,
       
        prev: '<li class="prev" onclick="getDynamic({{page}})"><a href="javascript:;" ><</a></li>',
        next: '<li class="next" onclick="getDynamic({{page}})"><a href="javascript:;" >></a></li>',
        
        page: '<li class="page"onclick="getDynamic({{page}})"><a href="javascript:;" >{{page}}</a></li>',
        onPageChange: function (num, type) {
            if (type == "change") {
                exeData(num, type);
            }
        }
    });
}
$(function () {
    loadData(1);
    loadpage();
});