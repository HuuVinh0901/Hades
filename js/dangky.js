$(document).ready(function(){

function KiemTraPass(){
    var re=/^[A-Za-z0-9(!@#$%^&*()_)]{6,20}$/;
    if($("#txtPass").val()==""){
        $("#tbPass").html("* Không được bỏ trống");
        return false;
    }
    if(!re.test($("#txtPass").val())){
        $("#tbPass").html("password từ 6-20 kí tự, con số hoặc các kí tự đặc biệt");
        return false; 
    }
     $("#tbPass").html("*");
     return true;
}
$("#txtPass").blur(KiemTraPass);
 

function KiemTraTenDN(){
    var re=/^[A-Za-z0-9\d]{6,24}$/;
    if($("#txtTenDN").val()==""){
        $("#tbTenDN").html("* Không được bỏ trống");
        return false;
    }
    if(!re.test($("#txtTenDN").val())){
        $("#tbTenDN").html("Tên đăng nhập phải gồm 6 đến 24 kí tự");
        return false; 
    }
     $("#tbTenDN").html("*");
     return true;

}
$("#txtTenDN").blur(KiemTraTenDN);
function KiemTraNgay(){
    if ($("#txtDate").val() == "") {
        $("#tbDate").html("Không được bỏ trống");
        return false;
    }
    var day = new Date($("txtDate").val());
    var today = new Date();
    today.setDate(today.getDate() + 1);
    if (day < today) {
        $("#tbDate").html("Phải sau ngày hiện tại");
        return false;
    }
    $("#tbDate").html("*");
    return true;
}
$("#txtDate").blur(KiemTraNgay);

function KiemTraMail() {
    var re = /^[a-zA-Z0-9.\_\-]+@([a-zA-Z0-9])+.\w{3}$/;
    if ($("#txtEmail").val() == "") {
        $("#tbEmail").html("* Không được bỏ trống");
        return false
    }
    if (!re.test($("#txtEmail").val())){
        $("#tbEmail").html("Nhập đúng định dạng mail abc@gmail.com");
        return false;
    }
    $("#tbEmail").html("*");
    return true;
}
$("#txtEmail").blur(KiemTraMail);





$("#btnDangKy").click(function(){
    if (  KiemTraTenDN() == true && KiemTraMail() == true && KiemTraNgay() == true && KiemTraPass()== true){
        row = "<tr>";
        row += "<td>" + $("#txtTenDN").val() +"</td>";
        row += "<td>" + $("#txtGioitinh").val() +"</td>";
        row += "<td>" + $("#txtDate").val() +"</td>";
        
        row += "<td>" + $("#txtEmail").val() +"</td>";
        
       
        row += "</tr>";  
        $("#table").append(row);
        $("#myModal").modal();
        
        return false;
      
    }
    return false;
});
$("#btnXacNhan").click(function() {
    $("#myModal").modal("hide");
});

// function store(){
//     var tenDN= document.getElementById('txtTenDN').value;
//     var GioiTinh= document.getElementById('txtGioiTinh').value;
//     var Email= document.getElementById('txtEmail').value;
//     var Ngay= document.getElementById('txtDate').value;
//     var Pass=document.getElementById('txtPass').value;
//     const account={
//         ten:tenDN,
//         gt:GioiTinh,
//         email:Email,
//         ns:Ngay,
//         password:Pass,
//     }
//     window.localStorage.setItem(key,JSON.stringify(account));
// }
// window.onload =function(){ //ensures the page is loaded before functions are executed.
//     document.getElementById("btnDangKy").onsubmit = store()
    
// }
});