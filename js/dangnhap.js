$(document).ready(function(){

function KiemTraTenDnDN(){
    if($("#txtDN_Tendn").val() != $("#txtTendn").val()){
        $("#tbDN_Tendn").html("Tên đăng nhập không tồn tại");
        return false; 
    }
    $("#tbDN_Tendn").html("*");
    return true;
}
$("#txtDN_Tendn").blur(KiemTraTenDnDN);
function KiemTraPassDN(){
    if($("#txtDN_Pass").val() != $("#txtPass").val()){
        $("#tbDN_Pass").html("Password sai");
        return false; 
    }
    $("#tbDN_Pass").html("*");
    return true;
}
$("#txtDN_Pass").blur(KiemTraPassDN);


$("#btnDangnhap").click(function(){
    alert("Dang nhap thanh cong !")
    return false;
});
function KiemTraPass(){
    var re=/^[A-Za-z0-9(!@#$%^&*()_)]{6,20}$/;
    if($("#loginPass").val()==""){
        $("#tbPass").html("* Không được bỏ trống");
        return false;
    }
    if(!re.test($("#loginPass").val())){
        $("#tbPass").html("password từ 6-20 kí tự, con số hoặc các kí tự đặc biệt");
        return false; 
    }
     $("#tbPass").html("*");
     return true;
}
$("#loginPass").blur(KiemTraPass);
function KiemTraMail() {
    var re = /^[a-zA-Z0-9.\_\-]+@([a-zA-Z0-9])+.\w{3}$/;
    if ($("#loginEmail").val() == "") {
        $("#tbEmail").html("* Không được bỏ trống");
        return false
    }
    if (!re.test($("#loginEmail").val())){
        $("#tbEmail").html("Nhập đúng định dạng mail abc@gmail.com");
        return false;
    }
    $("#tbEmail").html("*");
    return true;
}
$("#loginEmail").blur(KiemTraMail);

});