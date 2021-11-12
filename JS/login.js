function Dangky(){
    var ten = document.forms.reg["ten"].value;
    var mk = document.forms.reg["pass"].value;
    var ns = document.forms.reg["ns"].value;
    var gt = document.forms.reg["gt"].value;
    document.forms.reg["thongtin"].value="Chào mừng " + ten + "\nBạn là " + gt + "\nMật khẩu của bạn có " + mk.length + " kí tự" + "\nBạn sinh ngày " + ns;
    return false;
}