window.onload = main();

function main() {

    var testObject = { 'one': 1, 'two': 2, 'three': 3 };

    // Put the object into storage
    localStorage.setItem('testObject', JSON.stringify(testObject));

    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('testObject');

    console.log('retrievedObject: ', JSON.parse(retrievedObject));
}
// Lấy data set tất cả sản phẩm
// Lấy dữ liệu từ local Storage
    // Tạo thẻ luu hình ảnh sản phẩm
    // Tạo thẻ lưu tên sản phẩm
    // Tạo thẻ lưu đường link sản phẩm
    // tạo thẻ lưu đơn giá sản phẩm
// Tính toán giá trị sản phẩm
    // Tính giá thành cho từng sản phẩm (đơn giá * Số lượng)
        // Khi bấm button (fas fa-angle-left fas fa-angle-right) giá trị valQty thay đổi
        // valTotal sẽ phụ thuộc vào số lượng * đơn giá
    // Tính giá thành cho toàn bộ sản phẩm trong giỏ hàng (tổng giá thành của các sản phẩm)
        //valTotalFooter = tổng tất cả giá trị trong phần tử valTotal