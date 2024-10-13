// BÀI TẬP KIỂM TRA SỐ DƯƠNG
document.querySelector("#kiemTraSoDuong").onclick = function(){
    let number = +document.querySelector("#number").value;
    let result = document.querySelector("#result");

    if(number > 0){
        result.innerHTML = "Đây là số dương";
    }
}

// BÀI TẬP KIỂM TRA TUỔI HỌC SINH
document.querySelector("#kiemTraTuoi").onclick = function(){
    let tenHS = document.querySelector("#tenHocSinh").value;
    let tuoiHS = +document.querySelector("#Tuoi").value;
    let result = document.querySelector("#result2");

    if(tuoiHS >= 6){
        result.innerHTML = `${tenHS} ${tuoiHS} tuổi: Đủ tuổi vào lớp 1` 
    }
}
// BÀI TẬP KIỂM TRA SỐ CHẴN
document.querySelector("#kiemTraSoChan").onclick = function(){
    let evenNumber = +document.querySelector("#evenNumber").value;
    let resultEven = document.querySelector("#resultEven");

    if(evenNumber % 2 == 0){
        resultEven.innerHTML = "Số chẵn";
    }
}
// KIỂM TRA ĐỘ TUỔI
document.querySelector("#kiemTraTuoiBan").onclick = function(){
    let ageYou = +document.querySelector("#ageYou").value;
    let nameYou = document.querySelector("#nameYou").value;

    let checkAge = document.querySelector("#checkAge");

    if(ageYou >= 16){
        checkAge.innerHTML = "Hello: " + nameYou + " ,bạn đủ tuổi lái xe";
    }
    else{
        checkAge.innerHTML = "Xin lỗi: " + nameYou + " ,bạn không đủ tuổi lái xe"
    }
}
// XÉT THƯỞNG NHÂN VIÊN ĐẠT ĐỦ DOANH SỐ
document.querySelector("#xetThuong").onclick = function(){
    let nameNV = document.querySelector("#nameNV").value;
    let doanhSo = +document.querySelector("#doanhSo").value;
    let soLuong = +document.querySelector("#soLuong").value;

    let checkReward = document.querySelector("#checkReward");

    if(soLuong >100){
        let thuong = 0.1 * doanhSo;
        checkReward.innerHTML = "Chúc mừng: " + nameNV + " đã được thưởng 10% tổng doanh số là: " + thuong; 
    }
    else{
        checkReward.innerHTML = "Rất tiếc: " + nameNV + " bạn đã không đạt mục tiêu bán sản phẩm"
    }
}

// TÍNH CHIẾT KHẤU
document.querySelector("#xetGiam").onclick = function(){
    let nameKH = document.querySelector("#nameKH").value;
    let soTien = +document.querySelector("#soTien").value;

    let checkDiscount = document.querySelector("#checkDiscount");

    if(soTien > 500){
        let giaTien = soTien - soTien*0.2;
        checkDiscount.innerHTML = "Khách hàng: " + nameKH + ", được giảm 20% tổng số tiền mua sản phẩm. Số tiền là: " + giaTien;
    }
    else{
        checkDiscount.innerHTML = "Khách hàng: " + nameKH + " phải thanh toán số tiền là: " + soTien; 
    }
}

// KIỂM TRA MẬT KHẨU MẠNH HAY YẾU
document.querySelector("#login").onclick = function(){
    let namND = document.querySelector("#nameND").value;
    let password = document.querySelector("#password").value;

    let checkPassword = document.querySelector("#checkPassword");

    if(password.length >= 8){
        let kyTuDacBiet = '!@#';
        let demKyTu = 0;
        
        for(let i = 0; i < password.length; i++){
            if(kyTuDacBiet.includes(password[i])){
                demKyTu++;
            }
        }
        if(demKyTu >= 3){
            checkPassword.innerHTML = "Chúc mừng: " + namND + "<br>" + "Bạn đã đăng nhập thành công.";
        }
        else{
            checkPassword.innerHTML = "Mật khẩu phải chứa ít nhất 3 ký tự đặc biệt (!, @, #).";
        }
    
    }
    else{
        checkPassword.innerHTML = "Mật khẩu không đủ dài" +"<br>" + "Mời " + namND + " nhập lại mật khẩu"
    }
}

// KIỂM TRA KHOẢNG ĐIỂM
document.querySelector("#xetDiem").onclick = function(){
    let nameHSSV = document.querySelector("#nameHSSV").value;
    let nhapDiem = document.querySelector("#nhapDiem").value*1;

    let xetDiem = document.querySelector("#xetDiem");

    if(nhapDiem >= 9.5){
        xetDiem.innerHTML = "Học sinh/ Sinh Viên: " + nameHSSV + "<br>" + "Đạt loại: Xuất sắc";
    }
    else if( 8<= nhapDiem <= 9.4){
        xetDiem.innerHTML = "Học sinh/ Sinh Viên: " + nameHSSV + "<br>" + "Đạt loại: Giỏi";
    }
    else if (6.5 <= nhapDiem <= 7.9){
        xetDiem.innerHTML = "Học sinh/ Sinh Viên: " + nameHSSV + "<br>" + "Đạt loại: Khá";
    }
    else if (5 <= nhapDiem <= 6.4){
        xetDiem.innerHTML = "Học sinh/ Sinh Viên: " + nameHSSV + "<br>" + "Đạt loại: Trung Bình";
    }
    else{
        xetDiem.innerHTML = "Học sinh/ Sinh Viên: " + nameHSSV + "<br>" + "Đạt loại: Yếu";
    }
}